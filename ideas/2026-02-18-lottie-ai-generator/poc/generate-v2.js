#!/usr/bin/env node
/**
 * LottieForge POC v2 - SVG Parser + Claude Analysis
 * 
 * Better approach:
 * 1. Parse SVG properly to extract elements, positions, colors
 * 2. Use Claude for intelligent animation suggestions
 * 3. Generate Lottie programmatically from parsed data
 */

const fs = require('fs');
const path = require('path');

// Anthropic API for better analysis
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

/**
 * Parse SVG and extract element data
 */
function parseSVG(svgContent) {
  const elements = [];
  
  // Extract all groups with IDs
  const groupRegex = /<g\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/g>/g;
  let match;
  
  while ((match = groupRegex.exec(svgContent)) !== null) {
    const id = match[1];
    const content = match[2];
    
    // Extract transform-origin if present
    const originMatch = match[0].match(/transform-origin="([^"]+)"/);
    const origin = originMatch ? originMatch[1].split(' ').map(Number) : null;
    
    // Extract colors from fills
    const fillMatch = content.match(/fill="(#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}|[a-z]+)"/g);
    const colors = fillMatch ? [...new Set(fillMatch.map(f => f.match(/fill="([^"]+)"/)[1]))] : [];
    
    // Detect element type based on content
    let type = 'unknown';
    if (content.includes('<ellipse') || content.includes('<circle')) type = 'shape';
    if (content.includes('<rect')) type = 'rect';
    if (content.includes('<path')) type = 'path';
    
    elements.push({
      id,
      type,
      colors: colors.filter(c => c !== 'none'),
      hasTransformOrigin: !!origin,
      origin
    });
  }
  
  // Also get standalone elements with IDs
  const standaloneRegex = /<(ellipse|circle|rect|path)\s+id="([^"]+)"[^>]*\/?>(?:<\/\1>)?/g;
  while ((match = standaloneRegex.exec(svgContent)) !== null) {
    const type = match[1];
    const id = match[2];
    
    // Extract position/size
    const el = match[0];
    const cx = el.match(/cx="([^"]+)"/)?.[1];
    const cy = el.match(/cy="([^"]+)"/)?.[1];
    const x = el.match(/\sx="([^"]+)"/)?.[1];
    const y = el.match(/\sy="([^"]+)"/)?.[1];
    const fill = el.match(/fill="([^"]+)"/)?.[1];
    
    elements.push({
      id,
      type,
      position: { x: parseFloat(cx || x || 0), y: parseFloat(cy || y || 0) },
      color: fill,
      isStandalone: true
    });
  }
  
  return elements;
}

/**
 * Call Claude API for animation analysis
 */
async function analyzeWithClaude(svgContent, elements) {
  if (!ANTHROPIC_API_KEY) {
    console.log('⚠️  No ANTHROPIC_API_KEY - using default animation mapping');
    return getDefaultAnimations(elements);
  }
  
  console.log('🧠 Analyzing with Claude...');
  
  const prompt = `Analyze this SVG illustration and suggest animations for each element.

SVG Content:
\`\`\`svg
${svgContent.substring(0, 8000)}
\`\`\`

Detected elements: ${JSON.stringify(elements.map(e => e.id), null, 2)}

For each element ID, suggest ONE animation type from:
- sway: gentle rotation oscillation (good for plants, hanging objects)
- wave: arm/hand waving motion
- bob: subtle up/down movement (good for people, floating objects)  
- pulse: scale breathing effect (good for buttons, highlights)
- rotate: continuous rotation (good for spinners, charts)
- none: static, no animation

Return ONLY a JSON object mapping element IDs to animation types:
{"plant-left": "sway", "arm-magnifier": "wave", ...}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    
    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.log('⚠️  Claude API error:', e.message);
  }
  
  return getDefaultAnimations(elements);
}

/**
 * Default animation mapping based on element names
 */
function getDefaultAnimations(elements) {
  const animations = {};
  
  for (const el of elements) {
    const id = el.id.toLowerCase();
    
    if (id.includes('plant')) animations[el.id] = 'sway';
    else if (id.includes('arm') || id.includes('hand')) animations[el.id] = 'wave';
    else if (id.includes('person') || id.includes('head')) animations[el.id] = 'bob';
    else if (id.includes('bubble') || id.includes('button')) animations[el.id] = 'pulse';
    else if (id.includes('chart') || id.includes('spinner') || id.includes('pie')) animations[el.id] = 'rotate';
    else if (id.includes('magnifier') || id.includes('glass')) animations[el.id] = 'wave';
    else animations[el.id] = 'none';
  }
  
  return animations;
}

/**
 * Animation keyframe generators
 */
const ANIMATIONS = {
  sway: (anchor) => ({
    r: {
      a: 1,
      k: [
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-4] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [4] },
        { t: 90, s: [-4] }
      ]
    },
    a: { a: 0, k: anchor ? [...anchor, 0] : [0, 0, 0] }
  }),
  
  wave: (anchor) => ({
    r: {
      a: 1,
      k: [
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-15] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 22, s: [10] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [-15] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 67, s: [10] },
        { t: 90, s: [-15] }
      ]
    },
    a: { a: 0, k: anchor ? [...anchor, 0] : [0, 0, 0] }
  }),
  
  bob: () => ({
    p_offset: {
      a: 1,
      k: [
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [0, 0, 0] },
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 45, s: [0, -5, 0] },
        { t: 90, s: [0, 0, 0] }
      ]
    }
  }),
  
  pulse: () => ({
    s: {
      a: 1,
      k: [
        { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: 0, s: [100, 100, 100] },
        { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: 45, s: [106, 106, 100] },
        { t: 90, s: [100, 100, 100] }
      ]
    }
  }),
  
  rotate: () => ({
    r: {
      a: 1,
      k: [{ t: 0, s: [0] }, { t: 90, s: [360] }]
    }
  }),
  
  none: () => ({})
};

/**
 * Convert hex color to Lottie RGBA
 */
function hexToLottie(hex) {
  if (!hex || hex === 'none') return [0.5, 0.5, 0.5, 1];
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
    1
  ] : [0.5, 0.5, 0.5, 1];
}

/**
 * Main function
 */
async function main() {
  const svgPath = process.argv[2] || './sample-illustration.svg';
  
  console.log('🎨 LottieForge v2 - SVG to Animated Lottie\n');
  
  // Read SVG
  console.log(`📄 Reading: ${svgPath}`);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Parse SVG elements
  console.log('🔍 Parsing SVG elements...');
  const elements = parseSVG(svgContent);
  console.log(`   Found ${elements.length} elements:`, elements.map(e => e.id).join(', '));
  
  // Get animation suggestions
  const animations = await analyzeWithClaude(svgContent, elements);
  console.log('🎬 Animation mapping:', animations);
  
  // Generate summary
  console.log('\n✅ Analysis complete!\n');
  console.log('To generate the final Lottie, this POC would:');
  console.log('1. Parse each SVG path/shape into Lottie bezier data');
  console.log('2. Apply the suggested animations as keyframes');
  console.log('3. Output production-ready Lottie JSON\n');
  
  console.log('Animation assignments:');
  for (const [id, anim] of Object.entries(animations)) {
    if (anim !== 'none') {
      console.log(`  • ${id}: ${anim}`);
    }
  }
  
  // Save analysis
  const analysis = { elements, animations, svgPath };
  fs.writeFileSync('./analysis-v2.json', JSON.stringify(analysis, null, 2));
  console.log('\n📁 Saved analysis-v2.json');
}

main().catch(console.error);

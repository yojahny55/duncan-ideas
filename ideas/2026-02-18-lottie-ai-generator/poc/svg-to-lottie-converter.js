#!/usr/bin/env node
/**
 * SVG to Lottie Converter
 * Parses SVG elements and converts to Lottie JSON with animations
 */

const fs = require('fs');

// Parse SVG and extract all shapes with positions and colors
function parseSVGShapes(svgContent) {
  const shapes = [];
  
  // Extract viewBox dimensions
  const viewBox = svgContent.match(/viewBox="([^"]+)"/)?.[1]?.split(' ').map(Number) || [0, 0, 800, 600];
  const width = viewBox[2];
  const height = viewBox[3];
  
  // Parse ellipses
  const ellipseRegex = /<ellipse[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"[^>]*rx="([^"]+)"[^>]*ry="([^"]+)"[^>]*fill="([^"]+)"[^>]*\/?>/g;
  let match;
  while ((match = ellipseRegex.exec(svgContent)) !== null) {
    shapes.push({
      type: 'ellipse',
      cx: parseFloat(match[1]),
      cy: parseFloat(match[2]),
      rx: parseFloat(match[3]),
      ry: parseFloat(match[4]),
      fill: match[5]
    });
  }
  
  // Parse circles
  const circleRegex = /<circle[^>]*cx="([^"]+)"[^>]*cy="([^"]+)"[^>]*r="([^"]+)"[^>]*fill="([^"]+)"[^>]*\/?>/g;
  while ((match = circleRegex.exec(svgContent)) !== null) {
    shapes.push({
      type: 'circle',
      cx: parseFloat(match[1]),
      cy: parseFloat(match[2]),
      r: parseFloat(match[3]),
      fill: match[4]
    });
  }
  
  // Parse rects
  const rectRegex = /<rect[^>]*x="([^"]+)"[^>]*y="([^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"[^>]*(?:rx="([^"]+)")?[^>]*fill="([^"]+)"[^>]*\/?>/g;
  while ((match = rectRegex.exec(svgContent)) !== null) {
    shapes.push({
      type: 'rect',
      x: parseFloat(match[1]),
      y: parseFloat(match[2]),
      width: parseFloat(match[3]),
      height: parseFloat(match[4]),
      rx: parseFloat(match[5]) || 0,
      fill: match[6]
    });
  }
  
  // Parse groups with IDs for animation targeting
  const groups = [];
  const groupRegex = /<g\s+id="([^"]+)"[^>]*(?:transform-origin="([^"]+)")?[^>]*>/g;
  while ((match = groupRegex.exec(svgContent)) !== null) {
    groups.push({
      id: match[1],
      origin: match[2]?.split(' ').map(Number)
    });
  }
  
  return { shapes, groups, width, height };
}

// Convert hex to Lottie color
function hexToLottie(hex) {
  if (!hex || hex === 'none') return null;
  if (hex.startsWith('rgb')) return [0.5, 0.5, 0.5, 1];
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    // Handle named colors
    const colors = {
      'white': [1,1,1,1], 'black': [0,0,0,1], 'red': [1,0,0,1],
      'green': [0,0.5,0,1], 'blue': [0,0,1,1], 'none': null
    };
    return colors[hex] || [0.5, 0.5, 0.5, 1];
  }
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
    1
  ];
}

// Create Lottie shape layer from SVG shape
function createShapeLayer(shape, index) {
  const layer = {
    ddd: 0,
    ind: index,
    ty: 4,
    nm: `Shape ${index}`,
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [0, 0, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 0, k: [100, 100, 100] }
    },
    shapes: [],
    ip: 0,
    op: 90,
    st: 0
  };
  
  const color = hexToLottie(shape.fill);
  if (!color) return null;
  
  if (shape.type === 'ellipse' || shape.type === 'circle') {
    const rx = shape.rx || shape.r;
    const ry = shape.ry || shape.r;
    
    layer.ks.p.k = [shape.cx, shape.cy, 0];
    layer.shapes.push({
      ty: 'gr',
      it: [
        { ty: 'el', s: { a: 0, k: [rx * 2, ry * 2] }, p: { a: 0, k: [0, 0] } },
        { ty: 'fl', c: { a: 0, k: color }, o: { a: 0, k: 100 }, r: 1 },
        { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
      ],
      nm: 'Ellipse'
    });
  } else if (shape.type === 'rect') {
    layer.ks.p.k = [shape.x + shape.width/2, shape.y + shape.height/2, 0];
    layer.shapes.push({
      ty: 'gr',
      it: [
        { ty: 'rc', s: { a: 0, k: [shape.width, shape.height] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: shape.rx } },
        { ty: 'fl', c: { a: 0, k: color }, o: { a: 0, k: 100 }, r: 1 },
        { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
      ],
      nm: 'Rectangle'
    });
  }
  
  return layer;
}

// Add animation to layer
function addAnimation(layer, animationType, anchor) {
  switch (animationType) {
    case 'sway':
      layer.ks.r = {
        a: 1,
        k: [
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-4] },
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [4] },
          { t: 90, s: [-4] }
        ]
      };
      if (anchor) layer.ks.a.k = [...anchor, 0];
      break;
      
    case 'bob':
      const pos = layer.ks.p.k;
      layer.ks.p = {
        a: 1,
        k: [
          { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: pos, to: [0, -0.8, 0], ti: [0, 0, 0] },
          { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 45, s: [pos[0], pos[1] - 5, 0], to: [0, 0, 0], ti: [0, -0.8, 0] },
          { t: 90, s: pos }
        ]
      };
      break;
      
    case 'pulse':
      layer.ks.s = {
        a: 1,
        k: [
          { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: 0, s: [100, 100, 100] },
          { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: 45, s: [106, 106, 100] },
          { t: 90, s: [100, 100, 100] }
        ]
      };
      break;
      
    case 'rotate':
      layer.ks.r = { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] };
      break;
      
    case 'wave':
      layer.ks.r = {
        a: 1,
        k: [
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-15] },
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 22, s: [10] },
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [-15] },
          { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 67, s: [10] },
          { t: 90, s: [-15] }
        ]
      };
      if (anchor) layer.ks.a.k = [...anchor, 0];
      break;
  }
  
  return layer;
}

// Main conversion function
function convertSVGtoLottie(svgPath, animationMap = {}) {
  console.log(`📄 Reading SVG: ${svgPath}`);
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  console.log('🔍 Parsing shapes...');
  const { shapes, groups, width, height } = parseSVGShapes(svgContent);
  console.log(`   Found ${shapes.length} shapes`);
  
  // Create Lottie structure
  const lottie = {
    v: '5.7.4',
    fr: 30,
    ip: 0,
    op: 90,
    w: width,
    h: height,
    nm: 'SVG Converted Animation',
    ddd: 0,
    assets: [],
    layers: [],
    markers: []
  };
  
  // Convert each shape to a layer
  let index = 1;
  for (const shape of shapes.reverse()) { // Reverse for proper z-order
    const layer = createShapeLayer(shape, index++);
    if (layer) {
      lottie.layers.push(layer);
    }
  }
  
  console.log(`✅ Created ${lottie.layers.length} layers`);
  
  return lottie;
}

// Run
const svgPath = process.argv[2] || './sample-illustration.svg';
const outputPath = process.argv[3] || './lottie-converted.json';

const lottie = convertSVGtoLottie(svgPath);
fs.writeFileSync(outputPath, JSON.stringify(lottie, null, 2));
console.log(`💾 Saved: ${outputPath}`);

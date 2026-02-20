#!/usr/bin/env node
/**
 * SVG to Animated Lottie Generator
 * Demonstrates how AI could animate individual SVG layers
 */

const fs = require('fs');

// Animation presets for different element types
const ANIMATIONS = {
  sway: (duration = 90) => ({
    r: {
      a: 1,
      k: [
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-3] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: duration/2, s: [3] },
        { t: duration, s: [-3] }
      ]
    }
  }),
  wave: (duration = 90) => ({
    r: {
      a: 1,
      k: [
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [-15] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: duration/4, s: [10] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: duration/2, s: [-15] },
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: duration*3/4, s: [10] },
        { t: duration, s: [-15] }
      ]
    }
  }),
  pulse: (duration = 90) => ({
    s: {
      a: 1,
      k: [
        { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: 0, s: [100, 100, 100] },
        { i: { x: [0.667,0.667,0.667], y: [1,1,1] }, o: { x: [0.333,0.333,0.333], y: [0,0,0] }, t: duration/2, s: [106, 106, 100] },
        { t: duration, s: [100, 100, 100] }
      ]
    }
  }),
  rotate: (duration = 90) => ({
    r: {
      a: 1,
      k: [
        { t: 0, s: [0] },
        { t: duration, s: [360] }
      ]
    }
  }),
  float: (duration = 90, amount = 8) => ({
    p: {
      a: 1,
      k: [
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [0, 0, 0], to: [0, -amount/6, 0], ti: [0, 0, 0] },
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: duration/2, s: [0, -amount, 0], to: [0, 0, 0], ti: [0, -amount/6, 0] },
        { t: duration, s: [0, 0, 0] }
      ]
    }
  }),
  bob: (duration = 90) => ({
    p: {
      a: 1,
      k: [
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [0, 0, 0], to: [0, -0.5, 0], ti: [0, 0, 0] },
        { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: duration/2, s: [0, -3, 0], to: [0, 0, 0], ti: [0, -0.5, 0] },
        { t: duration, s: [0, 0, 0] }
      ]
    }
  })
};

// AI-detected elements and their animations
const ELEMENT_ANIMATIONS = {
  'plant-left': { animation: 'sway', anchor: [120, 520] },
  'plant-right': { animation: 'sway', anchor: [680, 520] },
  'arm-magnifier': { animation: 'wave', anchor: [310, 280] },
  'magnifier': { animation: 'float', anchor: [390, 250] },
  'speech-bubble': { animation: 'pulse', anchor: [580, 185] },
  'pie-chart': { animation: 'rotate', anchor: [590, 185] },
  'person-sitting': { animation: 'bob', anchor: [460, 350] },
  'head-standing': { animation: 'bob', anchor: [285, 210] },
};

// Generate Lottie JSON
function generateLottie() {
  const layers = [];
  let index = 1;
  
  // Read SVG and extract element info (simplified - in production would parse SVG properly)
  const svgContent = fs.readFileSync('./sample-illustration.svg', 'utf8');
  
  // Create layers for each animated element
  for (const [elementId, config] of Object.entries(ELEMENT_ANIMATIONS)) {
    const animData = ANIMATIONS[config.animation]();
    
    layers.push({
      ddd: 0,
      ind: index++,
      ty: 4,
      nm: elementId,
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: animData.r || { a: 0, k: 0 },
        p: animData.p ? {
          a: 1,
          k: animData.p.k.map(kf => ({
            ...kf,
            s: kf.s ? [config.anchor[0] + kf.s[0], config.anchor[1] + kf.s[1], 0] : undefined
          }))
        } : { a: 0, k: [...config.anchor, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: animData.s || { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", s: { a: 0, k: [50, 50] }, p: { a: 0, k: [0, 0] }, r: { a: 0, k: 8 } },
            { ty: "fl", c: { a: 0, k: [0.4, 0.4, 0.9, 0.3] }, o: { a: 0, k: 50 }, r: 1 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
          ],
          nm: "Marker"
        }
      ],
      ip: 0,
      op: 90,
      st: 0
    });
  }
  
  return {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 90,
    w: 800,
    h: 600,
    nm: "SVG Animation Demo",
    ddd: 0,
    assets: [],
    layers: layers,
    markers: []
  };
}

// For now, output the animation config
console.log("🎬 AI-Detected Elements & Animations:");
console.log("━".repeat(50));
for (const [element, config] of Object.entries(ELEMENT_ANIMATIONS)) {
  console.log(`  ${element}: ${config.animation}`);
}
console.log("━".repeat(50));
console.log("\nThis demonstrates how AI would analyze an SVG");
console.log("and assign appropriate animations to each layer.");

const lottie = generateLottie();
fs.writeFileSync('./svg-animation-demo.json', JSON.stringify(lottie, null, 2));
console.log("\n✅ Generated svg-animation-demo.json");

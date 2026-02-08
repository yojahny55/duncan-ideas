// QuoteCraft - AI-Powered Industrial Quoting
// Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const specsInput = document.getElementById('specs-input');
  const customerInput = document.getElementById('customer-input');
  const analyzeBtn = document.getElementById('analyze-btn');
  const statusBadge = document.getElementById('status-badge');
  const statusText = document.getElementById('status-text');
  const emptyState = document.getElementById('empty-state');
  const loadingState = document.getElementById('loading-state');
  const quoteResult = document.getElementById('quote-result');
  const previewActions = document.getElementById('preview-actions');
  const marginSlider = document.getElementById('margin-slider');
  const marginValue = document.getElementById('margin-value');
  const finalPrice = document.getElementById('final-price');
  const uploadZone = document.getElementById('upload-zone');
  const exportBtn = document.getElementById('export-btn');
  const saveBtn = document.getElementById('save-btn');

  // State
  let currentQuote = null;
  let baseTotal = 0;

  // Shop rates (simulated config)
  const shopRates = {
    labor: 85,
    cnc: 125,
    materialMarkup: 0.25,
    overhead: 0.15
  };

  // Simulated AI extraction
  function extractSpecs(text) {
    const specs = {
      partName: 'Custom Part',
      material: 'Unknown Material',
      quantity: 1,
      operations: [],
      dimensions: '',
      tolerances: ''
    };

    // Extract part name
    const partMatch = text.match(/part[:\s]*([^\n,]+)/i);
    if (partMatch) specs.partName = partMatch[1].trim();

    // Extract material
    const materialMatch = text.match(/material[:\s]*([^\n,]+)/i);
    if (materialMatch) specs.material = materialMatch[1].trim();

    // Extract quantity
    const qtyMatch = text.match(/quantity[:\s]*(\d+)/i) || text.match(/(\d+)\s*pieces?/i) || text.match(/(\d+)\s*pcs?/i);
    if (qtyMatch) specs.quantity = parseInt(qtyMatch[1]);

    // Extract dimensions
    const dimMatch = text.match(/dimensions?[:\s]*([^\n]+)/i) || text.match(/(\d+[\s]*["']?\s*x\s*\d+[\s]*["']?(?:\s*x\s*\d+[\s]*["']?)?)/i);
    if (dimMatch) specs.dimensions = dimMatch[1].trim();

    // Extract operations
    const opsMatch = text.match(/operations?[:\s]*([^\n]+)/i);
    if (opsMatch) {
      specs.operations = opsMatch[1].split(/[,;]+/).map(op => op.trim()).filter(op => op);
    } else {
      // Detect operations from keywords
      const keywords = ['milling', 'drilling', 'turning', 'boring', 'threading', 'deburring', 'anodizing', 'welding', 'grinding', 'polishing', 'heat treat', 'plating'];
      keywords.forEach(kw => {
        if (text.toLowerCase().includes(kw)) {
          specs.operations.push(kw.charAt(0).toUpperCase() + kw.slice(1));
        }
      });
    }

    // Extract tolerances
    const tolMatch = text.match(/tolerances?[:\s]*([^\n]+)/i);
    if (tolMatch) specs.tolerances = tolMatch[1].trim();

    return specs;
  }

  // Calculate costs based on extracted specs
  function calculateCosts(specs) {
    const costs = [];
    
    // Material cost estimation
    let materialBase = 0;
    if (specs.material.toLowerCase().includes('aluminum') || specs.material.toLowerCase().includes('6061')) {
      materialBase = 8.50; // per lb estimate
    } else if (specs.material.toLowerCase().includes('steel') || specs.material.toLowerCase().includes('1018')) {
      materialBase = 3.25;
    } else if (specs.material.toLowerCase().includes('stainless')) {
      materialBase = 12.00;
    } else if (specs.material.toLowerCase().includes('titanium')) {
      materialBase = 45.00;
    } else {
      materialBase = 6.00; // default
    }

    // Estimate material weight from dimensions (simplified)
    let estimatedWeight = 2; // default 2 lbs
    if (specs.dimensions) {
      const dims = specs.dimensions.match(/(\d+\.?\d*)/g);
      if (dims && dims.length >= 2) {
        estimatedWeight = (parseFloat(dims[0]) * parseFloat(dims[1]) * (parseFloat(dims[2]) || 0.5)) / 10;
        estimatedWeight = Math.max(0.5, Math.min(estimatedWeight, 50)); // clamp
      }
    }

    const materialCost = materialBase * estimatedWeight * specs.quantity * (1 + shopRates.materialMarkup);
    costs.push({ item: `Material (${specs.material})`, amount: materialCost });

    // Operation costs
    let laborHours = 0;
    let cncHours = 0;

    specs.operations.forEach(op => {
      const opLower = op.toLowerCase();
      if (opLower.includes('milling') || opLower.includes('turning')) {
        cncHours += 0.5 * specs.quantity;
      } else if (opLower.includes('drilling') || opLower.includes('boring')) {
        cncHours += 0.25 * specs.quantity;
      } else if (opLower.includes('deburring') || opLower.includes('polishing')) {
        laborHours += 0.15 * specs.quantity;
      } else if (opLower.includes('anodizing') || opLower.includes('plating')) {
        costs.push({ item: `Outside Service: ${op}`, amount: 8 * specs.quantity });
      } else if (opLower.includes('welding')) {
        laborHours += 0.75 * specs.quantity;
      } else if (opLower.includes('grinding')) {
        cncHours += 0.3 * specs.quantity;
      } else {
        laborHours += 0.2 * specs.quantity;
      }
    });

    // Setup time (one-time per job)
    const setupTime = 2; // hours
    costs.push({ item: 'Setup & Programming', amount: setupTime * shopRates.cnc });

    if (cncHours > 0) {
      costs.push({ item: `CNC Machine Time (${cncHours.toFixed(1)} hrs)`, amount: cncHours * shopRates.cnc });
    }

    if (laborHours > 0) {
      costs.push({ item: `Labor (${laborHours.toFixed(1)} hrs)`, amount: laborHours * shopRates.labor });
    }

    // Overhead
    const subtotal = costs.reduce((sum, c) => sum + c.amount, 0);
    costs.push({ item: 'Overhead & Handling', amount: subtotal * shopRates.overhead });

    return costs;
  }

  // Format currency
  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  // Update quote display
  function displayQuote(specs, costs) {
    // Update extracted data
    document.getElementById('part-name').textContent = specs.partName;
    document.getElementById('material').textContent = specs.material;
    document.getElementById('quantity').textContent = specs.quantity + ' pieces';
    document.getElementById('operations').textContent = specs.operations.length > 0 
      ? specs.operations.join(', ') 
      : 'Standard machining';

    // Update cost breakdown table
    const costBody = document.getElementById('cost-breakdown');
    costBody.innerHTML = '';
    
    costs.forEach(cost => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${cost.item}</td>
        <td>${formatCurrency(cost.amount)}</td>
      `;
      costBody.appendChild(row);
    });

    // Calculate total
    baseTotal = costs.reduce((sum, c) => sum + c.amount, 0);
    document.getElementById('total-amount').textContent = formatCurrency(baseTotal);

    // Update margin slider
    updateMarginPrice();

    // Show result
    emptyState.style.display = 'none';
    loadingState.style.display = 'none';
    quoteResult.style.display = 'block';
    quoteResult.classList.add('fade-in');
    previewActions.style.display = 'flex';

    // Update status badge
    statusBadge.style.display = 'inline-flex';
    statusBadge.classList.remove('analyzing');
    statusBadge.classList.add('ready');
    statusText.textContent = 'Ready';
  }

  // Update final price based on margin
  function updateMarginPrice() {
    const margin = parseInt(marginSlider.value) / 100;
    marginValue.textContent = marginSlider.value + '%';
    const withMargin = baseTotal * (1 + margin);
    finalPrice.textContent = formatCurrency(withMargin);
  }

  // Analyze button click handler
  analyzeBtn.addEventListener('click', async () => {
    const specs = specsInput.value.trim();
    
    if (!specs) {
      alert('Please enter job specifications or upload a drawing.');
      specsInput.focus();
      return;
    }

    // Show loading state
    emptyState.style.display = 'none';
    quoteResult.style.display = 'none';
    loadingState.style.display = 'flex';
    previewActions.style.display = 'none';
    
    statusBadge.style.display = 'inline-flex';
    statusBadge.classList.add('analyzing');
    statusBadge.classList.remove('ready');
    statusText.textContent = 'Analyzing...';

    analyzeBtn.disabled = true;

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Extract and calculate
    const extractedSpecs = extractSpecs(specs);
    const costs = calculateCosts(extractedSpecs);
    currentQuote = { specs: extractedSpecs, costs };

    // Display results
    displayQuote(extractedSpecs, costs);
    analyzeBtn.disabled = false;
  });

  // Margin slider handler
  marginSlider.addEventListener('input', updateMarginPrice);

  // Upload zone handlers
  uploadZone.addEventListener('click', () => {
    // Simulate file upload
    alert('File upload would open here. For this prototype, please paste specifications in the text area.');
  });

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = 'var(--color-primary-500)';
    uploadZone.style.background = 'var(--color-primary-50)';
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.style.borderColor = '';
    uploadZone.style.background = '';
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = '';
    uploadZone.style.background = '';
    alert('File upload simulation. In production, this would parse the uploaded drawing.');
  });

  // Export PDF handler
  exportBtn.addEventListener('click', () => {
    if (!currentQuote) return;
    
    // Create a simple text representation
    const quote = currentQuote;
    const margin = parseInt(marginSlider.value) / 100;
    const total = baseTotal * (1 + margin);
    
    let pdfContent = `
QUOTECRAFT - QUOTE DOCUMENT
============================

Customer: ${customerInput.value || 'N/A'}
Date: ${new Date().toLocaleDateString()}

PART DETAILS
------------
Part Name: ${quote.specs.partName}
Material: ${quote.specs.material}
Quantity: ${quote.specs.quantity} pieces
Operations: ${quote.specs.operations.join(', ')}

COST BREAKDOWN
--------------
${quote.costs.map(c => `${c.item}: ${formatCurrency(c.amount)}`).join('\n')}

SUBTOTAL: ${formatCurrency(baseTotal)}
MARGIN: ${marginSlider.value}%
FINAL QUOTE: ${formatCurrency(total)}

Terms: Net 30
Valid for: 30 days
    `;

    // In production, this would generate a real PDF
    console.log(pdfContent);
    alert('PDF Export simulation!\n\nIn production, this would generate a professional PDF quote document.\n\nQuote Total: ' + formatCurrency(total));
  });

  // Save handler
  saveBtn.addEventListener('click', () => {
    if (!currentQuote) return;
    
    // Simulate saving
    const quoteId = 'Q-' + Date.now().toString(36).toUpperCase();
    alert(`Quote saved as ${quoteId}\n\nIn production, this would save to your quote history.`);
  });

  // Pre-fill example for demo
  specsInput.value = `Part: Custom Aluminum Bracket
Material: 6061-T6 Aluminum, 0.5" plate
Quantity: 100 pieces
Dimensions: 4" x 6" x 0.5"
Operations: CNC milling, drilling (4x 0.25" holes), deburring, anodizing
Tolerances: ±0.005"
Delivery: 2 weeks`;
});

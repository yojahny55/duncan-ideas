/**
 * Local Permit AI - Interactive Prototype
 * Demonstrates the core UX flow with mock AI responses
 */

// =============================================================================
// Mock Data - Simulated AI Responses
// =============================================================================

const mockResponses = {
  "food truck": {
    summary: `<strong>Yes, you need multiple permits to operate a food truck in Tampa, FL.</strong> 
    The process involves obtaining a Mobile Food Dispensing Vehicle (MFDV) license from Hillsborough County, 
    plus a local business tax receipt from the City of Tampa. Most operators can complete the process in 
    <strong>2-4 weeks</strong> with costs ranging from <strong>$300-$600</strong> depending on your specific setup.`,
    requirements: [
      {
        name: "Mobile Food Dispensing Vehicle (MFDV) License",
        detail: "Required from Hillsborough County Health Department. Annual inspection required. Fee: ~$200/year"
      },
      {
        name: "Local Business Tax Receipt",
        detail: "City of Tampa business registration. Apply online or in-person. Fee: $50-150 based on revenue"
      },
      {
        name: "Vehicle Inspection Certificate",
        detail: "Your food truck must pass health and safety inspection. Schedule through Environmental Health Services"
      },
      {
        name: "Fire Extinguisher Certification",
        detail: "Required for all food trucks with cooking equipment. Must be inspected annually"
      },
      {
        name: "Sales Tax Certificate (DR-1)",
        detail: "Register with Florida Department of Revenue for sales tax collection. Free to obtain"
      }
    ],
    sources: [
      { title: "Hillsborough County - Mobile Food Vendor Permits", url: "https://www.hillsboroughcounty.org/en/businesses/permits-and-licensing/food-vendor-permits" },
      { title: "City of Tampa - Business Tax Receipt", url: "https://www.tampa.gov/revenue-and-finance/business-tax" },
      { title: "Florida DBPR - Food Service Licensing", url: "https://www.myfloridalicense.com/intentions2.asp?chession=FoodService" }
    ]
  },
  
  "home business": {
    summary: `<strong>Yes, you can run a home-based business in most residential zones in Tampa, FL</strong>, 
    but with restrictions. Hillsborough County allows "home occupations" as long as the business doesn't 
    change the residential character of the property. You'll need a Home Occupation Permit and a business tax receipt. 
    <strong>Key restrictions:</strong> no exterior signs, no customer visits in most zones, no employees other than household members.`,
    requirements: [
      {
        name: "Home Occupation Permit",
        detail: "Apply through Hillsborough County Development Services. Processing time: 2-3 weeks. Fee: ~$100"
      },
      {
        name: "Local Business Tax Receipt",
        detail: "Required for all businesses operating in Tampa. Annual fee based on business type"
      },
      {
        name: "Zoning Verification",
        detail: "Confirm your address allows home occupations. Some HOAs have additional restrictions"
      },
      {
        name: "Professional License (if applicable)",
        detail: "Certain professions (cosmetology, contractors, etc.) require state licensing"
      }
    ],
    sources: [
      { title: "Hillsborough County - Home Occupation Permits", url: "https://www.hillsboroughcounty.org/en/businesses/permits-and-licensing/home-occupation" },
      { title: "Tampa Zoning Code - Section 27-523", url: "https://library.municode.com/fl/tampa/codes/code_of_ordinances" },
      { title: "Florida DBPR - Professional Licensing", url: "https://www.myfloridalicense.com/intentions2.asp" }
    ]
  },
  
  "sales tax": {
    summary: `<strong>To collect sales tax in Florida, you need a Sales Tax Certificate (Form DR-1) from the 
    Florida Department of Revenue.</strong> This is free to obtain and can be completed entirely online. 
    Once registered, you'll receive your certificate within <strong>5-7 business days</strong>. 
    Florida's state sales tax rate is <strong>6%</strong>, plus Hillsborough County adds <strong>1.5%</strong> 
    for a total of <strong>7.5%</strong>.`,
    requirements: [
      {
        name: "Florida Sales Tax Certificate (DR-1)",
        detail: "Register online at Florida Department of Revenue. No fee. Processing: 5-7 business days"
      },
      {
        name: "EIN or Social Security Number",
        detail: "Required for registration. Get an EIN from IRS.gov if you prefer not to use SSN"
      },
      {
        name: "Business Information",
        detail: "Legal name, address, business type, estimated monthly sales, and bank account info"
      },
      {
        name: "Monthly/Quarterly Filing Setup",
        detail: "Based on estimated sales, you'll be assigned monthly or quarterly filing requirements"
      }
    ],
    sources: [
      { title: "Florida DOR - Sales Tax Registration", url: "https://floridarevenue.com/taxes/taxesfees/Pages/sales_tax.aspx" },
      { title: "Form DR-1 Online Application", url: "https://taxapps.floridarevenue.com/IRegistration/" },
      { title: "Hillsborough County Sales Tax Rate", url: "https://floridarevenue.com/taxes/Documents/dr15dss_county.pdf" }
    ]
  },
  
  "contractor": {
    summary: `<strong>It depends on the type of work.</strong> In Florida, certain contractor work requires 
    state licensing through the DBPR (Department of Business and Professional Regulation). 
    <strong>Licensed trades include:</strong> general contractors, roofing, electrical, plumbing, HVAC, and pool contractors. 
    However, "handyman" work under <strong>$2,500 per project</strong> typically doesn't require a license. 
    Always check specific requirements for your trade.`,
    requirements: [
      {
        name: "State Contractor License (if required)",
        detail: "Apply through Florida DBPR. Requires exam, experience verification, and insurance. Fee: $200-500"
      },
      {
        name: "Local Business Tax Receipt",
        detail: "Required regardless of state licensing. Annual fee varies by business type"
      },
      {
        name: "Liability Insurance",
        detail: "Minimum $300,000 general liability required for licensed contractors"
      },
      {
        name: "Workers' Compensation (if employees)",
        detail: "Required in construction industry for businesses with 1+ employees"
      },
      {
        name: "Hillsborough County Contractor Registration",
        detail: "Register your state license locally. Required before pulling permits"
      }
    ],
    sources: [
      { title: "Florida DBPR - Contractor Licensing", url: "https://www.myfloridalicense.com/intentions2.asp?chession=Contractor" },
      { title: "Florida Statute 489 - Contracting", url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/0489ContentsIndex.html" },
      { title: "Hillsborough County - Contractor Registration", url: "https://www.hillsboroughcounty.org/en/businesses/permits-and-licensing/contractor-licensing" }
    ]
  },
  
  "default": {
    summary: `<strong>I found relevant information about permits and regulations in Tampa/Hillsborough County.</strong> 
    Based on your question, here's what you need to know. For the most accurate guidance, I recommend 
    contacting the specific department listed below or visiting their office in person.`,
    requirements: [
      {
        name: "Local Business Tax Receipt",
        detail: "Required for most business activities in Tampa. Apply through City Revenue Department"
      },
      {
        name: "Zoning Verification",
        detail: "Confirm your planned location is zoned for your business type"
      },
      {
        name: "State Registration",
        detail: "Register your business with Florida Division of Corporations (Sunbiz.org)"
      },
      {
        name: "Federal EIN",
        detail: "Obtain an Employer Identification Number from the IRS if needed"
      }
    ],
    sources: [
      { title: "City of Tampa - Business Resources", url: "https://www.tampa.gov/economic-opportunity" },
      { title: "Hillsborough County - Business Permits", url: "https://www.hillsboroughcounty.org/en/businesses" },
      { title: "Florida Division of Corporations", url: "https://dos.myflorida.com/sunbiz/" }
    ]
  }
};

// =============================================================================
// DOM Elements
// =============================================================================

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsSection = document.getElementById('results-section');
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const answerCard = document.getElementById('answer-card');
const resultsMeta = document.getElementById('results-meta');
const answerQuestion = document.getElementById('answer-question');
const answerSummary = document.getElementById('answer-summary');
const requirementsList = document.getElementById('requirements-list');
const sourcesList = document.getElementById('sources-list');
const retryButton = document.getElementById('retry-button');
const quickQuestions = document.querySelectorAll('.quick-questions__item');
const changeLocationBtn = document.getElementById('change-location');

// =============================================================================
// State
// =============================================================================

let currentQuestion = '';
let isLoading = false;

// =============================================================================
// Functions
// =============================================================================

/**
 * Determines which mock response to use based on the question
 */
function getResponseKey(question) {
  const q = question.toLowerCase();
  
  if (q.includes('food truck') || q.includes('mobile food')) {
    return 'food truck';
  }
  if (q.includes('home') && (q.includes('business') || q.includes('based'))) {
    return 'home business';
  }
  if (q.includes('sales tax') || q.includes('tax certificate')) {
    return 'sales tax';
  }
  if (q.includes('contractor') || q.includes('freelance')) {
    return 'contractor';
  }
  
  return 'default';
}

/**
 * Shows loading state
 */
function showLoading() {
  isLoading = true;
  resultsSection.classList.add('is-visible');
  loadingState.classList.add('is-visible');
  errorState.classList.remove('is-visible');
  answerCard.style.display = 'none';
  searchButton.disabled = true;
  searchButton.innerHTML = '<span>Searching...</span>';
}

/**
 * Hides loading state
 */
function hideLoading() {
  isLoading = false;
  loadingState.classList.remove('is-visible');
  searchButton.disabled = false;
  searchButton.innerHTML = '<span>Ask AI</span><span>→</span>';
}

/**
 * Shows error state
 */
function showError() {
  hideLoading();
  errorState.classList.add('is-visible');
  answerCard.style.display = 'none';
}

/**
 * Renders the answer card
 */
function renderAnswer(question, response) {
  hideLoading();
  errorState.classList.remove('is-visible');
  
  // Update meta
  const now = new Date();
  resultsMeta.textContent = `Answered ${now.toLocaleTimeString()} • Tampa, FL`;
  
  // Update question
  answerQuestion.textContent = question;
  
  // Update summary
  answerSummary.innerHTML = response.summary;
  
  // Update requirements
  requirementsList.innerHTML = response.requirements.map(req => `
    <li class="requirements__item">
      <span class="requirements__item-icon">✓</span>
      <div class="requirements__item-text">
        <div class="requirements__item-name">${req.name}</div>
        <div class="requirements__item-detail">${req.detail}</div>
      </div>
    </li>
  `).join('');
  
  // Update sources
  sourcesList.innerHTML = response.sources.map(src => `
    <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="sources__link">
      <span>📄</span>
      <span>${src.title}</span>
    </a>
  `).join('');
  
  // Show card with animation
  answerCard.style.display = 'block';
  answerCard.style.opacity = '0';
  answerCard.style.transform = 'translateY(20px)';
  
  requestAnimationFrame(() => {
    answerCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    answerCard.style.opacity = '1';
    answerCard.style.transform = 'translateY(0)';
  });
  
  // Scroll to results
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Handles form submission
 */
async function handleSearch(question) {
  if (!question.trim() || isLoading) return;
  
  currentQuestion = question;
  showLoading();
  
  // Simulate API delay (1.5-3 seconds)
  const delay = 1500 + Math.random() * 1500;
  
  try {
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Simulate occasional errors (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Simulated API error');
    }
    
    const responseKey = getResponseKey(question);
    const response = mockResponses[responseKey];
    
    renderAnswer(question, response);
    
  } catch (error) {
    console.error('Search error:', error);
    showError();
  }
}

/**
 * Handles location change (demo only)
 */
function handleLocationChange() {
  const locations = [
    'Tampa, FL (Hillsborough County)',
    'Orlando, FL (Orange County)',
    'Miami, FL (Miami-Dade County)',
    'Jacksonville, FL (Duval County)'
  ];
  
  const currentIndex = locations.indexOf(document.getElementById('location-display').textContent);
  const nextIndex = (currentIndex + 1) % locations.length;
  
  document.getElementById('location-display').textContent = locations[nextIndex];
  
  // Show a brief animation
  const locationEl = document.querySelector('.search-box__location');
  locationEl.style.background = 'var(--color-primary-100)';
  setTimeout(() => {
    locationEl.style.background = 'var(--color-gray-100)';
  }, 300);
}

// =============================================================================
// Event Listeners
// =============================================================================

// Form submission
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSearch(searchInput.value);
});

// Quick question buttons
quickQuestions.forEach(btn => {
  btn.addEventListener('click', () => {
    const question = btn.dataset.question;
    searchInput.value = question;
    handleSearch(question);
  });
});

// Retry button
retryButton.addEventListener('click', () => {
  if (currentQuestion) {
    handleSearch(currentQuestion);
  }
});

// Location change
changeLocationBtn.addEventListener('click', handleLocationChange);

// Keyboard navigation for quick questions
quickQuestions.forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

// =============================================================================
// Initialize
// =============================================================================

// Focus search input on load
searchInput.focus();

// Add smooth transitions for location element
document.querySelector('.search-box__location').style.transition = 'background 0.3s ease';

console.log('🏛️ Local Permit AI - Prototype Loaded');
console.log('Try asking: "What permits do I need for a food truck?"');

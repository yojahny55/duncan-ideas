// ListingGuard - Rental Scam Detector
// Demo prototype with simulated analysis

document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyzeBtn');
    const listingUrl = document.getElementById('listingUrl');
    const heroSection = document.getElementById('heroSection');
    const resultsSection = document.getElementById('resultsSection');
    const howItWorks = document.getElementById('howItWorks');
    const backBtn = document.getElementById('backBtn');
    
    // Demo listings database
    const demoListings = {
        scam: {
            title: '2BR Downtown Loft - Amazing Deal!',
            source: 'facebook.com/marketplace',
            listedPrice: 850,
            marketPrice: 1650,
            accountAge: '5 days',
            otherListings: 0,
            responseRate: 'N/A',
            score: 18,
            imageFlags: {
                reverse: { pass: false, text: 'Found on 3 other sites' },
                stock: { pass: true, text: 'No stock photos' },
                metadata: { pass: false, text: 'Metadata stripped' }
            },
            languageFlags: [
                { text: '"Send deposit via Zelle/Venmo"', danger: true },
                { text: '"Currently traveling abroad"', danger: true },
                { text: '"Can\'t show in person"', danger: true }
            ],
            redFlags: [
                { title: 'Price 48% below market', desc: 'This price is unrealistically low for this area. Scammers use low prices to attract victims.' },
                { title: 'Account created 5 days ago', desc: 'Brand new accounts are a major red flag. Scammers create fresh accounts to avoid detection.' },
                { title: 'Photos found on other listings', desc: 'These photos appear on Zillow and Trulia at different addresses. Scammers steal photos from real listings.' },
                { title: 'Requests untraceable payment', desc: 'Requesting Zelle/Venmo before showing the property is a classic scam tactic.' }
            ],
            recommendations: [
                { icon: '🚫', title: 'Do not send any money', desc: 'Never send deposits via Zelle, Venmo, or wire transfer before seeing the property in person.' },
                { icon: '📞', title: 'Verify ownership', desc: 'Search property records at the county assessor\'s office to confirm the owner.' },
                { icon: '🚨', title: 'Report this listing', desc: 'Report to Facebook and the FTC to help protect other renters.' }
            ]
        },
        suspicious: {
            title: '1BR Apartment - Pet Friendly',
            source: 'craigslist.org',
            listedPrice: 1200,
            marketPrice: 1400,
            accountAge: '3 months',
            otherListings: 2,
            responseRate: '~24 hours',
            score: 58,
            imageFlags: {
                reverse: { pass: true, text: 'No duplicates found' },
                stock: { pass: true, text: 'No stock photos' },
                metadata: { pass: false, text: 'Location mismatch' }
            },
            languageFlags: [
                { text: '"First and last month upfront"', danger: false },
                { text: 'No mention of lease terms', danger: true }
            ],
            redFlags: [
                { title: 'Image metadata location mismatch', desc: 'Photo metadata suggests these were taken in a different city. Verify the actual property.' },
                { title: 'Missing lease details', desc: 'No mention of lease length, terms, or landlord contact. Ask for specifics before proceeding.' }
            ],
            recommendations: [
                { icon: '🔍', title: 'Request video tour', desc: 'Ask for a live video walkthrough to verify the property exists.' },
                { icon: '📋', title: 'Get lease details in writing', desc: 'Request lease terms, landlord contact info, and property management company.' },
                { icon: '🏠', title: 'Visit in person', desc: 'Schedule an in-person tour before signing anything.' }
            ]
        },
        legit: {
            title: 'Studio Near University',
            source: 'apartments.com',
            listedPrice: 1100,
            marketPrice: 1150,
            accountAge: '2 years',
            otherListings: 15,
            responseRate: '< 2 hours',
            score: 92,
            imageFlags: {
                reverse: { pass: true, text: 'Unique to this listing' },
                stock: { pass: true, text: 'No stock photos' },
                metadata: { pass: true, text: 'Location verified' }
            },
            languageFlags: [
                { text: 'Standard lease terms', danger: false },
                { text: 'Property management company listed', danger: false }
            ],
            redFlags: [],
            recommendations: [
                { icon: '✅', title: 'Looks legitimate', desc: 'This listing passes our checks. Standard verification steps still recommended.' },
                { icon: '📝', title: 'Read the lease carefully', desc: 'Review all terms before signing, especially regarding deposits and fees.' },
                { icon: '📸', title: 'Document move-in condition', desc: 'Take photos/video of everything when you move in.' }
            ]
        }
    };
    
    // Analyze button click
    analyzeBtn.addEventListener('click', () => {
        const url = listingUrl.value.trim();
        if (!url) {
            listingUrl.focus();
            return;
        }
        startAnalysis(url);
    });
    
    // Enter key in input
    listingUrl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            analyzeBtn.click();
        }
    });
    
    // Back button
    backBtn.addEventListener('click', () => {
        resultsSection.style.display = 'none';
        heroSection.style.display = 'block';
        howItWorks.style.display = 'block';
        document.querySelector('.recent-scams').style.display = 'block';
        listingUrl.value = '';
    });
    
    function startAnalysis(url) {
        // Show loading state
        const btnText = analyzeBtn.querySelector('.btn-text');
        const btnLoading = analyzeBtn.querySelector('.btn-loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        analyzeBtn.disabled = true;
        
        // Determine which demo to show based on URL
        let listingType = 'suspicious';
        if (url.toLowerCase().includes('scam') || url.toLowerCase().includes('facebook') || url.toLowerCase().includes('deal')) {
            listingType = 'scam';
        } else if (url.toLowerCase().includes('apartments.com') || url.toLowerCase().includes('zillow') || url.toLowerCase().includes('legit')) {
            listingType = 'legit';
        }
        
        // Simulate analysis delay
        setTimeout(() => {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            analyzeBtn.disabled = false;
            
            showResults(demoListings[listingType]);
        }, 2500);
    }
    
    function showResults(listing) {
        // Hide hero, show results
        heroSection.style.display = 'none';
        howItWorks.style.display = 'none';
        document.querySelector('.recent-scams').style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update listing info
        document.getElementById('listingTitle').textContent = listing.title;
        document.getElementById('listingSource').textContent = listing.source;
        
        // Animate score
        animateScore(listing.score);
        
        // Update price analysis
        setTimeout(() => updatePriceCard(listing), 500);
        
        // Update image verification
        setTimeout(() => updateImageCard(listing), 800);
        
        // Update account analysis
        setTimeout(() => updateAccountCard(listing), 1100);
        
        // Update language patterns
        setTimeout(() => updateLanguageCard(listing), 1400);
        
        // Update red flags
        setTimeout(() => updateRedFlags(listing), 1700);
        
        // Update recommendations
        setTimeout(() => updateRecommendations(listing), 1900);
    }
    
    function animateScore(score) {
        const scoreValue = document.getElementById('scoreValue');
        const scoreLabel = document.getElementById('scoreLabel');
        const scoreProgress = document.getElementById('scoreProgress');
        const scoreSummary = document.getElementById('scoreSummary');
        
        // Determine score category
        let category, className, summary;
        if (score >= 80) {
            category = 'Low Risk';
            className = 'high';
            summary = 'This listing appears legitimate based on our analysis. Standard verification steps are still recommended before sending any money.';
        } else if (score >= 50) {
            category = 'Caution';
            className = 'medium';
            summary = 'We found some concerns with this listing. Proceed carefully and verify the details before making any commitments.';
        } else {
            category = 'High Risk';
            className = 'low';
            summary = 'Multiple red flags detected. This listing has characteristics commonly associated with rental scams. Do not send any money or personal information.';
        }
        
        // Animate number
        let current = 0;
        const duration = 1500;
        const start = performance.now();
        
        function updateNumber(timestamp) {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            current = Math.round(progress * score);
            scoreValue.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }
        requestAnimationFrame(updateNumber);
        
        // Animate circle
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (score / 100) * circumference;
        
        scoreProgress.classList.remove('high', 'medium', 'low');
        scoreProgress.classList.add(className);
        
        setTimeout(() => {
            scoreProgress.style.strokeDashoffset = offset;
        }, 100);
        
        // Update label
        scoreLabel.textContent = category;
        scoreLabel.classList.remove('high', 'medium', 'low');
        scoreLabel.classList.add(className);
        
        // Update summary
        scoreSummary.textContent = summary;
    }
    
    function updatePriceCard(listing) {
        const priceStatus = document.getElementById('priceStatus');
        const listedPrice = document.getElementById('listedPrice');
        const marketPrice = document.getElementById('marketPrice');
        const priceDiff = document.getElementById('priceDiff');
        
        const diff = ((listing.listedPrice - listing.marketPrice) / listing.marketPrice * 100).toFixed(0);
        
        listedPrice.textContent = `$${listing.listedPrice}/mo`;
        marketPrice.textContent = `$${listing.marketPrice}/mo`;
        priceDiff.textContent = `${diff}%`;
        
        if (diff < -30) {
            priceStatus.textContent = 'RED FLAG';
            priceStatus.className = 'status-badge fail';
            priceDiff.classList.add('danger');
        } else if (diff < -15) {
            priceStatus.textContent = 'CAUTION';
            priceStatus.className = 'status-badge warning';
        } else {
            priceStatus.textContent = 'NORMAL';
            priceStatus.className = 'status-badge pass';
        }
    }
    
    function updateImageCard(listing) {
        const imageStatus = document.getElementById('imageStatus');
        const checks = listing.imageFlags;
        
        let failCount = 0;
        
        ['reverse', 'stock', 'metadata'].forEach((check, i) => {
            const indicator = document.getElementById(`imageCheck${i + 1}`);
            const icon = indicator.querySelector('.check-icon');
            
            if (checks[check].pass) {
                indicator.className = 'check-indicator pass';
                icon.textContent = '✓';
            } else {
                indicator.className = 'check-indicator fail';
                icon.textContent = '✗';
                failCount++;
            }
        });
        
        if (failCount > 1) {
            imageStatus.textContent = 'RED FLAG';
            imageStatus.className = 'status-badge fail';
        } else if (failCount === 1) {
            imageStatus.textContent = 'WARNING';
            imageStatus.className = 'status-badge warning';
        } else {
            imageStatus.textContent = 'VERIFIED';
            imageStatus.className = 'status-badge pass';
        }
    }
    
    function updateAccountCard(listing) {
        const accountStatus = document.getElementById('accountStatus');
        const accountAge = document.getElementById('accountAge');
        const otherListings = document.getElementById('otherListings');
        const responseRate = document.getElementById('responseRate');
        
        accountAge.textContent = listing.accountAge;
        otherListings.textContent = listing.otherListings;
        responseRate.textContent = listing.responseRate;
        
        // Check if account age suggests scam
        const ageInDays = parseInt(listing.accountAge);
        if (listing.accountAge.includes('day') && ageInDays < 30) {
            accountStatus.textContent = 'RED FLAG';
            accountStatus.className = 'status-badge fail';
            accountAge.classList.add('danger');
        } else if (listing.accountAge.includes('month') && parseInt(listing.accountAge) < 3) {
            accountStatus.textContent = 'CAUTION';
            accountStatus.className = 'status-badge warning';
        } else {
            accountStatus.textContent = 'ESTABLISHED';
            accountStatus.className = 'status-badge pass';
        }
    }
    
    function updateLanguageCard(listing) {
        const languageStatus = document.getElementById('languageStatus');
        const flagsList = document.getElementById('flagsList');
        
        flagsList.innerHTML = '';
        let dangerCount = 0;
        
        listing.languageFlags.forEach(flag => {
            const item = document.createElement('div');
            item.className = `flag-item${flag.danger ? ' danger' : ''}`;
            item.innerHTML = `
                <span>${flag.danger ? '⚠️' : '✓'}</span>
                <span>${flag.text}</span>
            `;
            flagsList.appendChild(item);
            if (flag.danger) dangerCount++;
        });
        
        if (dangerCount > 1) {
            languageStatus.textContent = 'RED FLAG';
            languageStatus.className = 'status-badge fail';
        } else if (dangerCount === 1) {
            languageStatus.textContent = 'WARNING';
            languageStatus.className = 'status-badge warning';
        } else {
            languageStatus.textContent = 'NORMAL';
            languageStatus.className = 'status-badge pass';
        }
    }
    
    function updateRedFlags(listing) {
        const redFlagsSection = document.getElementById('redFlagsSection');
        const redFlagsContainer = document.getElementById('redFlagsContainer');
        
        if (listing.redFlags.length === 0) {
            redFlagsSection.style.display = 'none';
            return;
        }
        
        redFlagsSection.style.display = 'block';
        redFlagsContainer.innerHTML = '';
        
        listing.redFlags.forEach(flag => {
            const item = document.createElement('div');
            item.className = 'red-flag-item';
            item.innerHTML = `
                <h4>${flag.title}</h4>
                <p>${flag.desc}</p>
            `;
            redFlagsContainer.appendChild(item);
        });
    }
    
    function updateRecommendations(listing) {
        const recList = document.getElementById('recList');
        recList.innerHTML = '';
        
        listing.recommendations.forEach(rec => {
            const item = document.createElement('div');
            item.className = 'rec-item';
            item.innerHTML = `
                <span class="rec-icon">${rec.icon}</span>
                <div class="rec-content">
                    <h4>${rec.title}</h4>
                    <p>${rec.desc}</p>
                </div>
            `;
            recList.appendChild(item);
        });
    }
    
    // Demo: Pre-fill with scam URL for demo
    listingUrl.placeholder = 'Try: facebook.com/marketplace/scam-listing or apartments.com/legit';
});

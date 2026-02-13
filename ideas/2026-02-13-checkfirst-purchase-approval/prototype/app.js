// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Category Selection
function selectCategory(btn) {
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.classList.remove('selected');
    });
    btn.classList.add('selected');
}

// Submit Request
function submitRequest() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value;
    
    if (!itemName || !itemPrice) {
        alert('Please fill in the item name and price');
        return;
    }
    
    // Show success modal
    document.getElementById('success-modal').classList.add('active');
}

// Close Modal
function closeModal() {
    document.getElementById('success-modal').classList.remove('active');
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-note').value = '';
    showScreen('home-screen');
}

// Handle Approval Actions
function handleApproval(action) {
    const modal = document.getElementById('approval-modal');
    const icon = document.getElementById('approval-icon');
    const title = document.getElementById('approval-title');
    const text = document.getElementById('approval-text');
    
    switch(action) {
        case 'approved':
            icon.textContent = '✓';
            icon.className = 'modal-icon success';
            title.textContent = 'Approved!';
            text.textContent = 'Alex has been notified they can proceed with the purchase.';
            break;
        case 'discuss':
            icon.textContent = '💬';
            icon.className = 'modal-icon discuss';
            title.textContent = 'Discussion Started';
            text.textContent = 'A chat has been opened with Alex to discuss this purchase.';
            break;
        case 'hold':
            icon.textContent = '⏸';
            icon.className = 'modal-icon hold';
            title.textContent = 'On Hold';
            text.textContent = 'Alex has been notified to hold off on this purchase for now.';
            break;
    }
    
    modal.classList.add('active');
}

// Close Approval Modal
function closeApprovalModal() {
    document.getElementById('approval-modal').classList.remove('active');
    showScreen('home-screen');
}

// Threshold Sliders
document.querySelectorAll('.threshold-slider').forEach(slider => {
    slider.addEventListener('input', function() {
        const valueSpan = this.closest('.threshold-item').querySelector('.threshold-value');
        valueSpan.textContent = '$' + this.value;
    });
});

// Quick Add Buttons
document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.quick-add-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Demo: Pre-fill request form for demo purposes
    setTimeout(() => {
        if (document.getElementById('item-name')) {
            document.getElementById('item-name').placeholder = 'e.g., New running shoes';
        }
    }, 100);
});

// Add some demo interactions
document.querySelectorAll('.activity-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const title = this.querySelector('.activity-title').textContent;
        alert(`Viewing details for: ${title}`);
    });
});

// Keyboard shortcuts for demo
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }
    if (e.key === 'n' && !e.ctrlKey && !e.metaKey) {
        const activeInput = document.activeElement;
        if (activeInput.tagName !== 'INPUT' && activeInput.tagName !== 'TEXTAREA') {
            showScreen('request-screen');
        }
    }
});

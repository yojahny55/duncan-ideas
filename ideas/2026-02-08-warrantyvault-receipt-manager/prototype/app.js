/**
 * WarrantyVault - App JavaScript
 * Interactive functionality for the prototype
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const addProductBtn = document.getElementById('addProductBtn');
  const scanBtn = document.getElementById('scanBtn');
  const addProductModal = document.getElementById('addProductModal');
  const scanModal = document.getElementById('scanModal');
  const closeModal = document.getElementById('closeModal');
  const closeScanModal = document.getElementById('closeScanModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const productForm = document.getElementById('productForm');
  const fileUpload = document.getElementById('fileUpload');
  const receiptInput = document.getElementById('receipt');
  const searchInput = document.getElementById('searchInput');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productsGrid = document.getElementById('productsGrid');
  const alertDismiss = document.querySelector('.alert-dismiss');
  const alertsSection = document.getElementById('alertsSection');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // Modal Functions
  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus first input
    const firstInput = modal.querySelector('input, select, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  function closeModalFn(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Listeners - Modals
  addProductBtn.addEventListener('click', () => openModal(addProductModal));
  scanBtn.addEventListener('click', () => openModal(scanModal));
  closeModal.addEventListener('click', () => closeModalFn(addProductModal));
  closeScanModal.addEventListener('click', () => closeModalFn(scanModal));
  cancelBtn.addEventListener('click', () => closeModalFn(addProductModal));

  // Close modal on overlay click
  [addProductModal, scanModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModalFn(modal);
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModalFn(addProductModal);
      closeModalFn(scanModal);
    }
  });

  // File Upload
  fileUpload.addEventListener('click', () => receiptInput.click());
  
  fileUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = 'var(--color-primary-500)';
    fileUpload.style.background = 'var(--color-primary-50)';
  });

  fileUpload.addEventListener('dragleave', () => {
    fileUpload.style.borderColor = '';
    fileUpload.style.background = '';
  });

  fileUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '';
    fileUpload.style.background = '';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  });

  receiptInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  });

  function handleFileUpload(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    
    if (!validTypes.includes(file.type)) {
      showToast('Please upload an image or PDF file', 'error');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      showToast('File size must be under 10MB', 'error');
      return;
    }

    // Update UI to show file selected
    fileUpload.querySelector('span').textContent = file.name;
    fileUpload.style.borderColor = 'var(--color-success-500)';
    fileUpload.style.background = 'var(--color-success-50)';
    
    showToast('Receipt uploaded successfully!');
  }

  // Form Submission
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('productName').value,
      brand: document.getElementById('brand').value,
      category: document.getElementById('category').value,
      purchaseDate: document.getElementById('purchaseDate').value,
      warrantyPeriod: document.getElementById('warrantyPeriod').value,
      price: document.getElementById('price').value,
      notes: document.getElementById('notes').value
    };

    // Simulate saving
    console.log('Saving product:', formData);
    
    // Reset form
    productForm.reset();
    fileUpload.querySelector('span').textContent = 'Click to upload or drag and drop';
    fileUpload.style.borderColor = '';
    fileUpload.style.background = '';
    
    // Close modal and show success
    closeModalFn(addProductModal);
    showToast('Product saved successfully!');
    
    // Add new card (demo)
    addDemoProduct(formData);
  });

  // Add demo product card
  function addDemoProduct(data) {
    const purchaseDate = new Date(data.purchaseDate);
    const expiryDate = new Date(purchaseDate);
    expiryDate.setMonth(expiryDate.getMonth() + parseInt(data.warrantyPeriod));
    
    const now = new Date();
    const totalDays = (expiryDate - purchaseDate) / (1000 * 60 * 60 * 24);
    const elapsedDays = (now - purchaseDate) / (1000 * 60 * 60 * 24);
    const percentElapsed = Math.min(100, Math.max(0, (elapsedDays / totalDays) * 100));
    
    const daysUntilExpiry = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
    
    let statusClass = 'status-active';
    let badgeClass = 'status-badge-active';
    let badgeText = 'Active';
    let progressClass = 'active';
    
    if (daysUntilExpiry <= 0) {
      statusClass = 'status-expired';
      badgeClass = 'status-badge-expired';
      badgeText = 'Expired';
      progressClass = 'expired';
    } else if (daysUntilExpiry <= 30) {
      statusClass = 'status-warning';
      badgeClass = 'status-badge-warning';
      badgeText = `Expires in ${daysUntilExpiry} days`;
      progressClass = 'warning';
    }

    const card = document.createElement('article');
    card.className = `product-card ${statusClass}`;
    card.innerHTML = `
      <div class="product-header">
        <div class="product-category">${data.category}</div>
        <div class="product-status">
          <span class="status-badge ${badgeClass}">${badgeText}</span>
        </div>
      </div>
      <h3 class="product-name">${data.name || 'New Product'}</h3>
      <div class="product-meta">
        <span class="product-brand">${data.brand || 'Unknown'}</span>
        <span class="product-separator">•</span>
        <span class="product-price">$${data.price || '0'}</span>
      </div>
      <div class="product-dates">
        <div class="date-item">
          <span class="date-label">Purchased</span>
          <span class="date-value">${formatDate(purchaseDate)}</span>
        </div>
        <div class="date-item">
          <span class="date-label">Expires</span>
          <span class="date-value ${progressClass === 'warning' ? 'warning' : ''}">${formatDate(expiryDate)}</span>
        </div>
      </div>
      <div class="product-progress">
        <div class="progress-bar">
          <div class="progress-fill ${progressClass}" style="width: ${percentElapsed.toFixed(0)}%"></div>
        </div>
        <span class="progress-text">${percentElapsed.toFixed(0)}% elapsed</span>
      </div>
      <div class="product-actions">
        <button class="btn btn-ghost btn-sm">View Details</button>
        <button class="btn btn-ghost btn-sm">Edit</button>
      </div>
    `;
    
    // Insert at beginning
    productsGrid.insertBefore(card, productsGrid.firstChild);
    
    // Animate in
    card.style.opacity = '0';
    card.style.transform = 'translateY(-20px)';
    requestAnimationFrame(() => {
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }

  function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const cards = productsGrid.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      const name = card.querySelector('.product-name').textContent.toLowerCase();
      const brand = card.querySelector('.product-brand').textContent.toLowerCase();
      const category = card.querySelector('.product-category').textContent.toLowerCase();
      
      const matches = name.includes(query) || brand.includes(query) || category.includes(query);
      card.style.display = matches ? '' : 'none';
    });
  });

  // Filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const filter = tab.dataset.filter;
      const cards = productsGrid.querySelectorAll('.product-card');
      
      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else if (filter === 'active') {
          card.style.display = card.classList.contains('status-active') ? '' : 'none';
        } else if (filter === 'expiring') {
          card.style.display = card.classList.contains('status-warning') ? '' : 'none';
        } else if (filter === 'expired') {
          card.style.display = card.classList.contains('status-expired') ? '' : 'none';
        }
      });
    });
  });

  // Dismiss alert
  if (alertDismiss) {
    alertDismiss.addEventListener('click', () => {
      alertsSection.style.transition = 'opacity 0.3s ease, height 0.3s ease, margin 0.3s ease';
      alertsSection.style.opacity = '0';
      alertsSection.style.height = '0';
      alertsSection.style.marginBottom = '0';
      alertsSection.style.overflow = 'hidden';
      
      setTimeout(() => {
        alertsSection.remove();
      }, 300);
    });
  }

  // Toast notification
  function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    
    const icon = toast.querySelector('svg');
    if (type === 'error') {
      icon.style.color = 'var(--color-error-400)';
    } else {
      icon.style.color = 'var(--color-success-400)';
    }
    
    toast.classList.add('active');
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }

  // Scan modal buttons
  const takePhotoBtn = document.getElementById('takePhotoBtn');
  const uploadReceiptBtn = document.getElementById('uploadReceiptBtn');

  takePhotoBtn.addEventListener('click', () => {
    // In a real app, this would open camera
    showToast('Camera feature coming soon!');
    closeModalFn(scanModal);
  });

  uploadReceiptBtn.addEventListener('click', () => {
    closeModalFn(scanModal);
    openModal(addProductModal);
    setTimeout(() => receiptInput.click(), 100);
  });

  // Product card actions
  productsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    
    const text = btn.textContent.trim();
    
    if (text === 'View Details') {
      showToast('Details view coming soon!');
    } else if (text === 'File Claim') {
      showToast('Claim assistant coming soon!');
    } else if (text === 'Edit') {
      showToast('Edit feature coming soon!');
    } else if (text === 'Archive') {
      const card = btn.closest('.product-card');
      card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => card.remove(), 300);
      showToast('Product archived');
    }
  });

  // Notification button
  const notificationBtn = document.getElementById('notificationBtn');
  notificationBtn.addEventListener('click', () => {
    showToast('Notifications panel coming soon!');
  });

  // Set default purchase date to today
  const purchaseDateInput = document.getElementById('purchaseDate');
  if (purchaseDateInput) {
    const today = new Date().toISOString().split('T')[0];
    purchaseDateInput.value = today;
    purchaseDateInput.max = today;
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    
    // Cmd/Ctrl + N for new product
    if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
      e.preventDefault();
      openModal(addProductModal);
    }
  });

  console.log('WarrantyVault initialized');
});

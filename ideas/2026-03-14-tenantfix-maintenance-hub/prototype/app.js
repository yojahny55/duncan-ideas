// TenantFix — Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
  // View Toggle
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const views = document.querySelectorAll('.view');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      views.forEach(v => v.classList.remove('active'));
      document.getElementById(`${target}-view`).classList.add('active');
    });
  });

  // Request Card Click → Modal
  const requestCards = document.querySelectorAll('.request-card');
  const modal = document.getElementById('request-detail');
  const modalClose = document.querySelector('.modal-close');

  requestCards.forEach(card => {
    card.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Forward to Vendor toggle
  const btnForward = document.getElementById('btn-forward');
  const vendorSection = document.getElementById('vendor-forward');

  if (btnForward) {
    btnForward.addEventListener('click', () => {
      vendorSection.classList.toggle('hidden');
    });
  }

  // Acknowledge button
  const btnAck = document.getElementById('btn-acknowledge');
  if (btnAck) {
    btnAck.addEventListener('click', () => {
      btnAck.textContent = '✓ Acknowledged!';
      btnAck.style.background = '#16a34a';
      btnAck.style.borderColor = '#16a34a';
      setTimeout(() => {
        btnAck.textContent = '✓ Acknowledge';
        btnAck.style.background = '';
        btnAck.style.borderColor = '';
      }, 2000);
    });
  }

  // Vendor option selection
  const vendorOptions = document.querySelectorAll('.vendor-option');
  vendorOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      vendorOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Category buttons
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Room buttons
  const roomBtns = document.querySelectorAll('.room-btn');
  roomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roomBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Urgency buttons
  const urgencyBtns = document.querySelectorAll('.urgency-btn');
  urgencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      urgencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Tenant: New Request
  const btnNewRequest = document.getElementById('btn-new-request');
  const newRequestForm = document.getElementById('new-request-form');
  const tenantRequests = document.getElementById('tenant-requests');
  const submitConfirm = document.getElementById('submit-confirm');

  if (btnNewRequest) {
    btnNewRequest.addEventListener('click', () => {
      newRequestForm.classList.remove('hidden');
      tenantRequests.style.display = 'none';
      submitConfirm.classList.add('hidden');
    });
  }

  // Tenant: Submit Request
  const btnSubmit = document.getElementById('btn-submit-request');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      newRequestForm.classList.add('hidden');
      submitConfirm.classList.remove('hidden');
    });
  }

  // Tenant: Back to Requests
  const btnBack = document.getElementById('btn-back-requests');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      submitConfirm.classList.add('hidden');
      tenantRequests.style.display = 'block';
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });
});

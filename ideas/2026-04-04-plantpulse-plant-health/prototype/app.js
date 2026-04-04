// PlantPulse — Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
  // Tab Navigation
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Plant Detail Modal
  const plantModal = document.getElementById('plantModal');
  const closeModal = document.getElementById('closeModal');
  
  document.querySelectorAll('.plant-card').forEach(card => {
    card.addEventListener('click', () => {
      plantModal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    plantModal.classList.add('hidden');
  });

  plantModal.addEventListener('click', (e) => {
    if (e.target === plantModal) plantModal.classList.add('hidden');
  });

  // Scan Modal
  const scanModal = document.getElementById('scanModal');
  const scanBtn = document.getElementById('scanBtn');
  const closeScan = document.getElementById('closeScan');
  const captureBtn = document.getElementById('captureBtn');
  const diagnosisResult = document.getElementById('diagnosisResult');
  const uploadBtn = document.getElementById('uploadBtn');

  scanBtn.addEventListener('click', () => {
    scanModal.classList.remove('hidden');
  });

  closeScan.addEventListener('click', () => {
    scanModal.classList.add('hidden');
  });

  scanModal.addEventListener('click', (e) => {
    if (e.target === scanModal) scanModal.classList.add('hidden');
  });

  // Simulate capture and diagnosis
  captureBtn.addEventListener('click', () => {
    captureBtn.textContent = '🔄 Analyzing...';
    captureBtn.disabled = true;

    setTimeout(() => {
      scanModal.classList.add('hidden');
      captureBtn.textContent = '📸 Capture';
      captureBtn.disabled = false;
      diagnosisResult.classList.remove('hidden');
      diagnosisResult.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  });

  // Upload button also triggers diagnosis
  uploadBtn.addEventListener('click', () => {
    uploadBtn.textContent = '🔄 Analyzing...';
    uploadBtn.disabled = true;

    setTimeout(() => {
      uploadBtn.innerHTML = '<span>📁</span> Upload Photo';
      uploadBtn.disabled = false;
      diagnosisResult.classList.remove('hidden');
      diagnosisResult.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  });

  // View Treatment from diagnosis
  const viewTreatmentBtn = document.getElementById('viewTreatmentBtn');
  viewTreatmentBtn.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="treatment"]').classList.add('active');
    document.getElementById('treatment').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Check-in button animation
  const checkInBtn = document.getElementById('checkInBtn');
  checkInBtn.addEventListener('click', () => {
    checkInBtn.textContent = '📸 Opening Camera...';
    setTimeout(() => {
      checkInBtn.textContent = '✅ Photo Captured! Comparing...';
      setTimeout(() => {
        checkInBtn.textContent = '📸 Take Check-in Photo';
        alert('Check-in complete! Health score improved slightly: 28 → 31. Keep following the treatment plan.');
      }, 1500);
    }, 1000);
  });

  // Add plant button
  const addPlantBtn = document.getElementById('addPlantBtn');
  addPlantBtn.addEventListener('click', () => {
    scanModal.classList.remove('hidden');
  });

  // Animate health bars on load
  setTimeout(() => {
    document.querySelectorAll('.health-fill').forEach(bar => {
      bar.style.transition = 'width 1.5s ease-out';
    });
  }, 100);

  // Animate chart bars on modal open
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.id === 'plantModal' && !mutation.target.classList.contains('hidden')) {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach((bar, i) => {
          const height = bar.style.height;
          bar.style.height = '0%';
          setTimeout(() => {
            bar.style.height = height;
          }, i * 100);
        });
      }
    });
  });

  observer.observe(plantModal, { attributes: true, attributeFilter: ['class'] });
});

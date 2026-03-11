// TradeCal — Scheduling Built for Trades
// Prototype JavaScript

(function() {
  'use strict';

  // Sample data - jobs for today
  let jobs = [
    {
      id: 1,
      type: 'service',
      customer: 'Martinez Residence',
      address: '4521 Bay Shore Blvd, Tampa',
      arrivalWindow: '8-10',
      duration: 90,
      status: 'complete',
      notes: 'Checked circuit breakers, replaced faulty outlet in kitchen'
    },
    {
      id: 2,
      type: 'install',
      customer: 'Thompson Home',
      address: '892 Henderson Ave, Tampa',
      arrivalWindow: '10-12',
      duration: 180,
      status: 'onsite',
      notes: 'New panel upgrade - 200 amp service'
    },
    {
      id: 3,
      type: 'estimate',
      customer: 'Clearwater Medical',
      address: '1200 Gulf Blvd, Clearwater',
      arrivalWindow: '2-4',
      duration: 60,
      status: 'scheduled',
      notes: 'Commercial lighting retrofit estimate'
    },
    {
      id: 4,
      type: 'repair',
      customer: 'Davis Property',
      address: '3344 Gandy Blvd, Tampa',
      arrivalWindow: '4-6',
      duration: 120,
      status: 'scheduled',
      notes: 'Outdoor lighting not working - possible underground wire damage'
    }
  ];

  // Drive times between jobs (in minutes and miles)
  const driveTimes = [
    { from: 'Start', to: jobs[0].customer, minutes: 15, miles: 8, route: 'via I-275 N' },
    { from: jobs[0].customer, to: jobs[1].customer, minutes: 22, miles: 12, route: 'via Dale Mabry' },
    { from: jobs[1].customer, to: jobs[2].customer, minutes: 35, miles: 21, route: 'via Courtney Campbell' },
    { from: jobs[2].customer, to: jobs[3].customer, minutes: 25, miles: 14, route: 'via I-275 S' }
  ];

  // Current date
  let currentDate = new Date(2026, 2, 11); // March 11, 2026

  // DOM Elements
  const scheduleEl = document.getElementById('schedule');
  const addJobBtn = document.getElementById('addJobBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModalBtn = document.getElementById('closeModal');
  const jobForm = document.getElementById('jobForm');
  const jobDetailOverlay = document.getElementById('jobDetailOverlay');
  const closeJobDetailBtn = document.getElementById('closeJobDetail');
  const jobDetailContent = document.getElementById('jobDetailContent');
  const jobDetailTitle = document.getElementById('jobDetailTitle');
  const notifyCustomerBtn = document.getElementById('notifyCustomerBtn');
  const startJobBtn = document.getElementById('startJobBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const prevDayBtn = document.getElementById('prevDay');
  const nextDayBtn = document.getElementById('nextDay');

  let selectedJob = null;

  // Initialize
  function init() {
    renderDate();
    renderSchedule();
    renderSummary();
    bindEvents();
  }

  // Render current date
  function renderDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    document.getElementById('dateDay').textContent = days[currentDate.getDay()];
    document.getElementById('dateFull').textContent = `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  }

  // Render schedule
  function renderSchedule() {
    scheduleEl.innerHTML = '';

    if (jobs.length === 0) {
      scheduleEl.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          <h3>No jobs scheduled</h3>
          <p>Tap the + button to add your first job</p>
        </div>
      `;
      return;
    }

    jobs.forEach((job, index) => {
      // Add drive time card before job (except first)
      if (index < driveTimes.length) {
        const drive = driveTimes[index];
        scheduleEl.appendChild(createDriveCard(drive));
      }

      // Add job card
      scheduleEl.appendChild(createJobCard(job));
    });
  }

  // Create drive time card
  function createDriveCard(drive) {
    const card = document.createElement('div');
    card.className = 'drive-card';
    card.innerHTML = `
      <div class="drive-icon">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2m12 0H7"/>
          <circle cx="7" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      </div>
      <div class="drive-info">
        <div class="drive-label">Drive Time</div>
        <div class="drive-details">${drive.minutes} min · ${drive.miles} mi</div>
        <div class="drive-route">${drive.route}</div>
      </div>
    `;
    return card;
  }

  // Create job card
  function createJobCard(job) {
    const card = document.createElement('div');
    card.className = `job-card ${job.status}`;
    card.dataset.id = job.id;

    const timeMap = {
      '8-10': '8:00 - 10:00 AM',
      '10-12': '10:00 AM - 12:00 PM',
      '12-2': '12:00 - 2:00 PM',
      '2-4': '2:00 - 4:00 PM',
      '4-6': '4:00 - 6:00 PM'
    };

    const statusLabels = {
      scheduled: 'Scheduled',
      enroute: 'En Route',
      onsite: 'On Site',
      complete: 'Complete'
    };

    const typeLabels = {
      service: 'Service Call',
      install: 'Installation',
      estimate: 'Estimate',
      inspection: 'Inspection',
      repair: 'Repair'
    };

    card.innerHTML = `
      <div class="job-card-header">
        <div class="job-time">
          <div class="job-time-window">${timeMap[job.arrivalWindow].split(' - ')[0].split(' ')[0]}</div>
          <div class="job-duration">${formatDuration(job.duration)}</div>
        </div>
        <div class="job-info">
          <span class="job-type-badge ${job.type}">${typeLabels[job.type]}</span>
          <div class="job-customer">${job.customer}</div>
          <div class="job-address">${job.address}</div>
        </div>
        <div class="job-status">
          <span class="status-badge ${job.status}">${statusLabels[job.status]}</span>
        </div>
      </div>
      ${job.notes ? `
        <div class="job-notes">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span>${job.notes}</span>
        </div>
      ` : ''}
    `;

    card.addEventListener('click', () => openJobDetail(job));
    return card;
  }

  // Format duration
  function formatDuration(minutes) {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }

  // Render summary stats
  function renderSummary() {
    const totalWork = jobs.reduce((sum, job) => sum + job.duration, 0);
    const totalDrive = driveTimes.reduce((sum, d) => sum + d.minutes, 0);
    const totalMiles = driveTimes.reduce((sum, d) => sum + d.miles, 0);

    document.getElementById('jobCount').textContent = jobs.length;
    document.getElementById('totalHours').textContent = `${(totalWork / 60).toFixed(1)}h`;
    document.getElementById('driveTime').textContent = `${(totalDrive / 60).toFixed(1)}h`;
    document.getElementById('totalMiles').textContent = `${totalMiles}mi`;
  }

  // Open job detail modal
  function openJobDetail(job) {
    selectedJob = job;

    const timeMap = {
      '8-10': '8:00 - 10:00 AM',
      '10-12': '10:00 AM - 12:00 PM',
      '12-2': '12:00 - 2:00 PM',
      '2-4': '2:00 - 4:00 PM',
      '4-6': '4:00 - 6:00 PM'
    };

    const typeLabels = {
      service: 'Service Call',
      install: 'Installation',
      estimate: 'Estimate',
      inspection: 'Inspection',
      repair: 'Repair'
    };

    const statusLabels = {
      scheduled: 'Scheduled',
      enroute: 'En Route',
      onsite: 'On Site',
      complete: 'Complete'
    };

    jobDetailTitle.textContent = job.customer;
    
    jobDetailContent.innerHTML = `
      <div class="detail-section">
        <span class="job-type-badge ${job.type}" style="margin-bottom: 8px; display: inline-flex;">${typeLabels[job.type]}</span>
        <span class="status-badge ${job.status}" style="margin-left: 8px;">${statusLabels[job.status]}</span>
      </div>
      
      <div class="detail-section">
        <div class="detail-label">Arrival Window</div>
        <div class="detail-value large">${timeMap[job.arrivalWindow]}</div>
      </div>
      
      <div class="detail-section">
        <div class="detail-label">Estimated Duration</div>
        <div class="detail-value">${formatDuration(job.duration)}</div>
      </div>
      
      <div class="detail-section">
        <div class="detail-label">Address</div>
        <div class="detail-value">${job.address}</div>
      </div>
      
      ${job.notes ? `
        <div class="detail-section">
          <div class="detail-label">Notes</div>
          <div class="detail-value">${job.notes}</div>
        </div>
      ` : ''}
    `;

    // Update button states
    if (job.status === 'complete') {
      startJobBtn.textContent = 'Completed';
      startJobBtn.disabled = true;
    } else if (job.status === 'onsite') {
      startJobBtn.innerHTML = `
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Complete Job
      `;
      startJobBtn.disabled = false;
    } else if (job.status === 'enroute') {
      startJobBtn.innerHTML = `
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        Arrived
      `;
      startJobBtn.disabled = false;
    } else {
      startJobBtn.innerHTML = `
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        Start Job
      `;
      startJobBtn.disabled = false;
    }

    jobDetailOverlay.classList.add('active');
  }

  // Bind events
  function bindEvents() {
    // Add job button
    addJobBtn.addEventListener('click', () => {
      modalOverlay.classList.add('active');
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      jobForm.reset();
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        jobForm.reset();
      }
    });

    // Close job detail
    closeJobDetailBtn.addEventListener('click', () => {
      jobDetailOverlay.classList.remove('active');
      selectedJob = null;
    });

    jobDetailOverlay.addEventListener('click', (e) => {
      if (e.target === jobDetailOverlay) {
        jobDetailOverlay.classList.remove('active');
        selectedJob = null;
      }
    });

    // Submit job form
    jobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newJob = {
        id: Date.now(),
        type: document.getElementById('jobType').value,
        customer: document.getElementById('customerName').value,
        address: document.getElementById('address').value,
        arrivalWindow: document.getElementById('arrivalWindow').value,
        duration: parseInt(document.getElementById('duration').value),
        status: 'scheduled',
        notes: document.getElementById('notes').value
      };

      jobs.push(newJob);
      
      // Add a mock drive time
      if (jobs.length > 1) {
        driveTimes.push({
          from: jobs[jobs.length - 2].customer,
          to: newJob.customer,
          minutes: Math.floor(Math.random() * 25) + 10,
          miles: Math.floor(Math.random() * 15) + 5,
          route: 'via I-275'
        });
      }

      renderSchedule();
      renderSummary();
      
      modalOverlay.classList.remove('active');
      jobForm.reset();
      
      showToast('Job added successfully');
    });

    // Notify customer
    notifyCustomerBtn.addEventListener('click', () => {
      if (selectedJob) {
        showToast(`SMS sent to ${selectedJob.customer}`);
      }
    });

    // Start/advance job
    startJobBtn.addEventListener('click', () => {
      if (!selectedJob) return;

      const job = jobs.find(j => j.id === selectedJob.id);
      if (!job) return;

      if (job.status === 'scheduled') {
        job.status = 'enroute';
        showToast('On your way! Customer notified');
      } else if (job.status === 'enroute') {
        job.status = 'onsite';
        showToast('Arrived on site');
      } else if (job.status === 'onsite') {
        job.status = 'complete';
        showToast('Job completed!');
      }

      renderSchedule();
      openJobDetail(job); // Refresh modal
    });

    // Date navigation
    prevDayBtn.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() - 1);
      renderDate();
      // In a real app, would load different jobs
      showToast('Previous day');
    });

    nextDayBtn.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() + 1);
      renderDate();
      showToast('Next day');
    });
  }

  // Show toast
  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2500);
  }

  // Initialize app
  init();
})();

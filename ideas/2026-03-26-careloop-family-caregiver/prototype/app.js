// CareLoop — Interactive Prototype

// Tab Navigation
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const tabId = 'tab-' + btn.dataset.tab;
    document.getElementById(tabId).classList.add('active');
  });
});

// Quick Check-in Mood Selection
function quickCheckin(btn, mood) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  window._selectedMood = mood;
}

// Submit Check-in
function submitCheckin() {
  const note = document.querySelector('.checkin-note').value;
  const mood = window._selectedMood;
  
  if (!mood && !note) {
    showToast('Select a mood or add a note to post an update');
    return;
  }

  const feedList = document.getElementById('feed-list');
  const item = document.createElement('div');
  item.className = 'feed-item';
  item.style.animation = 'fadeIn 0.3s ease';
  
  const moodHtml = mood ? `<div class="feed-mood">${getMoodEmoji(mood)} ${mood}</div>` : '';
  const noteHtml = note ? `<p>${escapeHtml(note)}</p>` : '';
  
  item.innerHTML = `
    <div class="feed-avatar" style="background:#4CAF50">S</div>
    <div class="feed-body">
      <div class="feed-meta">
        <strong>Sarah (you)</strong>
        <span class="feed-time">Just now</span>
      </div>
      ${moodHtml}
      ${noteHtml}
      <div class="feed-actions">
        <button class="feed-react" onclick="this.classList.toggle('reacted')">❤️ 0</button>
        <button class="feed-react">💬 Reply</button>
      </div>
    </div>
  `;
  
  feedList.insertBefore(item, feedList.firstChild);
  
  // Reset form
  document.querySelector('.checkin-note').value = '';
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  window._selectedMood = null;
  
  showToast('✅ Update posted! Family members will be notified.');
}

function getMoodEmoji(mood) {
  const map = {
    'Great day': '😊',
    'Good day': '🙂',
    'Okay day': '😐',
    'Rough day': '😟',
    'Needs attention': '🚨'
  };
  return map[mood] || '📝';
}

// Confirm Medication
function confirmMed(btn) {
  const card = btn.closest('.med-card');
  card.classList.remove('pending');
  card.classList.add('done');
  
  btn.outerHTML = `<div class="med-confirm"><span class="confirmed-by">Sarah confirmed • just now</span></div>`;
  
  // Check if all meds in this block are done
  const block = card.closest('.med-time-block');
  const pendingCards = block.querySelectorAll('.med-card.pending');
  if (pendingCards.length === 0) {
    const status = block.querySelector('.time-status');
    status.className = 'time-status done';
    status.textContent = '✅ All taken';
  }
  
  showToast('💊 Medication marked as taken. Family notified.');
}

// Claim Appointment
function claimAppointment(btn) {
  const claimDiv = btn.closest('.appt-claim');
  claimDiv.classList.remove('unclaimed');
  claimDiv.innerHTML = `
    <div class="claimed-by" style="background:#4CAF50">S</div>
    <span class="claim-text">Sarah (you) is taking her</span>
  `;
  showToast('🙋 You claimed this appointment! Family notified.');
}

// Take Task
function takeTask(btn) {
  const assignee = btn.closest('.task-assignee');
  assignee.classList.remove('unclaimed');
  assignee.innerHTML = `
    <div class="assignee-dot" style="background:#4CAF50"></div>
    <span>Sarah (you)</span>
  `;
  showToast('✅ Task assigned to you!');
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Escape HTML
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);

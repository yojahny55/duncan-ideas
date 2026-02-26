// KinCheck - Family Voice Verification Prototype

// Screen Navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  
  // Scroll to top
  document.querySelector('.app').scrollTop = 0;
}

// Reveal question in panic mode
function revealQuestion(element) {
  element.classList.add('revealed');
}

// Show callback modal
function showCallback() {
  document.getElementById('callback-modal').classList.add('active');
}

// Show alert sent modal
function showAlertSent() {
  document.getElementById('alert-modal').classList.add('active');
  
  // Simulate vibration if supported
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}

// Start quiz
function startQuiz() {
  document.getElementById('quiz-modal').classList.add('active');
  document.getElementById('quiz-answer').focus();
}

// Check quiz answer
function checkAnswer() {
  const answer = document.getElementById('quiz-answer').value.toLowerCase().trim();
  const correct = 'pineapple2024';
  
  if (answer === correct.toLowerCase()) {
    closeModal();
    showSuccess('Correct! 🎉', 'Great job! Your family is safe with you.');
  } else if (answer.length > 0) {
    const input = document.getElementById('quiz-answer');
    input.style.borderColor = '#ef4444';
    input.style.animation = 'shake 0.5s';
    setTimeout(() => {
      input.style.animation = '';
      input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }, 500);
  }
}

// Show success feedback
function showSuccess(title, message) {
  const modal = document.getElementById('alert-modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
    <span class="success-icon">✓</span>
    <h2>${title}</h2>
    <p>${message}</p>
    <button class="submit-btn" onclick="closeModal()">Done</button>
  `;
  modal.classList.add('active');
}

// Show simulation
function showSimulation() {
  const modal = document.getElementById('callback-modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
    <h2>📞 Incoming Call Simulation</h2>
    <p>A simulated scam call will start. Practice using your verification skills!</p>
    <div style="background: rgba(239, 68, 68, 0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
      <p style="color: #ef4444; font-size: 12px; margin-bottom: 8px;">INCOMING CALL</p>
      <p style="color: #fff; font-size: 18px; font-weight: 600;">Mom 👩</p>
      <p style="color: #6c7a89; font-size: 14px;">Mobile</p>
    </div>
    <div style="display: flex; gap: 12px;">
      <button class="cancel-btn" onclick="closeModal()">Decline</button>
      <button class="submit-btn" onclick="startSimulation()" style="background: #22c55e;">Answer</button>
    </div>
  `;
  modal.classList.add('active');
}

// Start simulation
function startSimulation() {
  const modal = document.getElementById('callback-modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
    <h2>🎭 Simulation Active</h2>
    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 16px; margin: 16px 0; text-align: left;">
      <p style="color: #fbbf24; font-size: 12px; margin-bottom: 8px;">SCAMMER VOICE (simulated)</p>
      <p style="color: #fff; font-style: italic; line-height: 1.6;">
        "Hey honey, it's Mom. I'm in trouble - I got in a car accident and I need you to send $2,000 right away for the hospital. Can you do that? Please hurry, I'm in so much pain..."
      </p>
    </div>
    <p style="color: #6c7a89; font-size: 14px; margin-bottom: 16px;">What should you do?</p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <button class="action-btn" onclick="wrongAnswer()" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; padding: 12px; border-radius: 12px;">
        💸 Send the money immediately
      </button>
      <button class="action-btn" onclick="correctAnswer()" style="background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.3); color: #4ade80; padding: 12px; border-radius: 12px;">
        🔐 Ask for the code word
      </button>
      <button class="action-btn" onclick="correctAnswer()" style="background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.3); color: #60a5fa; padding: 12px; border-radius: 12px;">
        📞 Hang up & call back on saved number
      </button>
    </div>
  `;
}

// Wrong answer in simulation
function wrongAnswer() {
  const modal = document.getElementById('callback-modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
    <span style="font-size: 48px;">❌</span>
    <h2 style="color: #ef4444;">That was a scam!</h2>
    <p style="color: #9ca3af; margin-bottom: 20px;">
      Never send money based on an emotional call - even if the voice sounds exactly like someone you know. AI can clone voices perfectly.
    </p>
    <p style="color: #fff; font-size: 14px; margin-bottom: 20px;">
      <strong>Always verify first:</strong> Ask for the code word, or hang up and call back on a number you have saved.
    </p>
    <button class="submit-btn" onclick="closeModal()">Try Again</button>
  `;
}

// Correct answer in simulation
function correctAnswer() {
  const modal = document.getElementById('callback-modal');
  const content = modal.querySelector('.modal-content');
  content.innerHTML = `
    <span class="success-icon">🛡️</span>
    <h2>You caught the scam!</h2>
    <p style="color: #9ca3af; margin-bottom: 20px;">
      Excellent! By verifying before acting, you would have protected yourself and your family from this AI voice cloning scam.
    </p>
    <p style="color: #4ade80; font-size: 14px; margin-bottom: 20px;">
      ✓ +10 points for your drill streak!
    </p>
    <button class="submit-btn" onclick="closeModal()">Done</button>
  `;
}

// Close modal
function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
  
  // Reset quiz input
  const quizInput = document.getElementById('quiz-answer');
  if (quizInput) {
    quizInput.value = '';
  }
  
  // Reset callback modal content
  const callbackModal = document.getElementById('callback-modal');
  const content = callbackModal.querySelector('.modal-content');
  content.innerHTML = `
    <h2>📞 Callback Protocol</h2>
    <p>Hang up and call this verified number:</p>
    <div class="callback-number">
      <strong>Mom's Cell</strong>
      <a href="tel:+15551234567">(555) 123-4567</a>
    </div>
    <p class="callback-warning">⚠️ Never call back a number the caller gave you!</p>
    <button class="submit-btn" onclick="closeModal()">Got it</button>
  `;
}

// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

// Handle Enter key in quiz
document.getElementById('quiz-answer')?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);

// Initialize
console.log('🛡️ KinCheck Prototype Loaded');
console.log('Protecting families from AI voice cloning scams');

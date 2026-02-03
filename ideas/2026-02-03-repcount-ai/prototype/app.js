// RepCount AI - Prototype JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // State
    let repCount = 8;
    let setNumber = 3;
    const targetReps = 12;
    const totalSets = 4;
    let restTime = 90;
    let timerInterval = null;

    // DOM Elements
    const repCountEl = document.getElementById('rep-count');
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const btnRest = document.getElementById('btn-rest');
    const btnNextSet = document.getElementById('btn-next-set');
    const restModal = document.getElementById('rest-modal');
    const timerValueEl = document.getElementById('timer-value');
    const btnSkipRest = document.getElementById('btn-skip-rest');
    const btnStartRest = document.getElementById('btn-start-rest');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const navItems = document.querySelectorAll('.nav-item');

    // Update rep display with animation
    function updateRepDisplay() {
        repCountEl.textContent = repCount;
        repCountEl.classList.add('bump');
        setTimeout(() => repCountEl.classList.remove('bump'), 150);
        updateProgress();
    }

    // Update progress ring
    function updateProgress() {
        const percentage = Math.min((repCount / targetReps) * 100, 100);
        const circumference = 2 * Math.PI * 54; // r=54 from SVG
        const offset = circumference - (percentage / 100) * circumference;
        progressBar.style.strokeDashoffset = offset;
        progressText.textContent = `${Math.round(percentage)}%`;
    }

    // Format time for display
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Update timer display
    function updateTimerDisplay() {
        timerValueEl.textContent = formatTime(restTime);
    }

    // Start rest timer
    function startRestTimer() {
        btnStartRest.textContent = 'Pause';
        btnStartRest.classList.remove('btn-primary');
        btnStartRest.classList.add('btn-secondary');
        
        timerInterval = setInterval(() => {
            restTime--;
            updateTimerDisplay();
            
            if (restTime <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                // Vibrate if supported
                if (navigator.vibrate) {
                    navigator.vibrate([200, 100, 200]);
                }
                closeRestModal();
                nextSet();
            }
        }, 1000);
    }

    // Pause rest timer
    function pauseRestTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        btnStartRest.textContent = 'Resume';
        btnStartRest.classList.add('btn-primary');
        btnStartRest.classList.remove('btn-secondary');
    }

    // Open rest modal
    function openRestModal() {
        restModal.classList.add('active');
        updateTimerDisplay();
    }

    // Close rest modal
    function closeRestModal() {
        restModal.classList.remove('active');
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        restTime = 90; // Reset to default
        btnStartRest.textContent = 'Start Rest';
        btnStartRest.classList.add('btn-primary');
        btnStartRest.classList.remove('btn-secondary');
    }

    // Next set
    function nextSet() {
        if (setNumber < totalSets) {
            setNumber++;
            document.querySelector('.set-number').textContent = setNumber;
            repCount = 0;
            updateRepDisplay();
        } else {
            // Workout complete!
            alert('🎉 Workout Complete! Great job!');
        }
    }

    // Simulate AI rep counting (for demo)
    function simulateAICount() {
        // Random interval between 1.5-3 seconds to simulate reps
        const interval = 1500 + Math.random() * 1500;
        
        setTimeout(() => {
            if (repCount < targetReps && !restModal.classList.contains('active')) {
                repCount++;
                updateRepDisplay();
                
                // Voice announcement every 5 reps
                if (repCount % 5 === 0 && 'speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(`${repCount}`);
                    utterance.rate = 1.2;
                    speechSynthesis.speak(utterance);
                }
                
                simulateAICount();
            }
        }, interval);
    }

    // Event Listeners
    btnMinus.addEventListener('click', () => {
        if (repCount > 0) {
            repCount--;
            updateRepDisplay();
        }
    });

    btnPlus.addEventListener('click', () => {
        repCount++;
        updateRepDisplay();
    });

    btnRest.addEventListener('click', openRestModal);

    btnNextSet.addEventListener('click', () => {
        openRestModal();
    });

    btnSkipRest.addEventListener('click', () => {
        closeRestModal();
        nextSet();
    });

    btnStartRest.addEventListener('click', () => {
        if (timerInterval) {
            pauseRestTimer();
        } else {
            startRestTimer();
        }
    });

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            restTime = parseInt(btn.dataset.time);
            updateTimerDisplay();
        });
    });

    // Close modal on backdrop click
    restModal.addEventListener('click', (e) => {
        if (e.target === restModal) {
            closeRestModal();
        }
    });

    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === '+') {
            repCount++;
            updateRepDisplay();
        } else if (e.key === 'ArrowDown' || e.key === '-') {
            if (repCount > 0) {
                repCount--;
                updateRepDisplay();
            }
        } else if (e.key === 'Escape' && restModal.classList.contains('active')) {
            closeRestModal();
        }
    });

    // Initialize
    updateProgress();
    
    // Start AI simulation after 2 seconds (for demo purposes)
    setTimeout(simulateAICount, 2000);

    console.log('💪 RepCount AI initialized');
});

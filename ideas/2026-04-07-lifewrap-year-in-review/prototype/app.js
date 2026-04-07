/* ========================================
   LifeWrap — App Logic
   ======================================== */

(function () {
  'use strict';

  const TOTAL_SLIDES = 8;
  let currentSlide = 0;
  let isAnimating = false;
  let touchStartY = 0;
  let touchStartX = 0;

  const slides = document.querySelectorAll('.slide');
  const segments = document.querySelectorAll('.progress-segment');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const wrapper = document.getElementById('slidesWrapper');

  // ===== Initialize =====
  function init() {
    slides[0].classList.add('active');
    updateProgress();
    updateNav();
    bindEvents();
    animateSlide(0);
  }

  // ===== Navigation =====
  function goToSlide(index) {
    if (isAnimating || index < 0 || index >= TOTAL_SLIDES || index === currentSlide) return;
    isAnimating = true;

    const direction = index > currentSlide ? 'next' : 'prev';
    const current = slides[currentSlide];
    const next = slides[index];

    // Remove active from current
    current.classList.remove('active');
    current.classList.add(direction === 'next' ? 'prev' : '');

    // Prepare next slide
    next.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
    next.style.opacity = '0';
    next.classList.remove('prev');

    // Force reflow
    void next.offsetWidth;

    // Animate in
    next.classList.add('active');
    next.style.transform = '';
    next.style.opacity = '';

    currentSlide = index;
    updateProgress();
    updateNav();

    // Animate content
    setTimeout(() => {
      animateSlide(index);
    }, 200);

    setTimeout(() => {
      isAnimating = false;
      current.style.transform = '';
    }, 550);
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // ===== Progress Bar =====
  function updateProgress() {
    segments.forEach((seg, i) => {
      seg.classList.remove('active', 'completed');
      if (i < currentSlide) seg.classList.add('completed');
      if (i === currentSlide) seg.classList.add('active');
    });
  }

  // ===== Nav Buttons =====
  function updateNav() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === TOTAL_SLIDES - 1;
  }

  // ===== Animate Slide Content =====
  function animateSlide(index) {
    // Animate counters
    const counters = slides[index].querySelectorAll('[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count);
      animateCounter(counter, target);
    });

    // Animate ring progress
    const rings = slides[index].querySelectorAll('.ring-progress');
    rings.forEach(ring => {
      const progress = parseInt(ring.dataset.progress) || 0;
      const circumference = 327; // 2 * PI * 52
      const offset = circumference - (progress / 100) * circumference;
      setTimeout(() => {
        ring.style.strokeDashoffset = offset;
      }, 300);
    });

    // Animate bar fills
    const bars = slides[index].querySelectorAll('.bar-fill');
    bars.forEach((bar, i) => {
      const width = bar.style.getPropertyValue('--width');
      setTimeout(() => {
        bar.style.width = width;
      }, 300 + i * 100);
    });
  }

  // ===== Counter Animation =====
  function animateCounter(el, target) {
    const duration = 1200;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (target - startVal) * eased);

      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // ===== Event Bindings =====
  function bindEvents() {
    // Arrow buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
    });

    // Touch / swipe
    wrapper.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      const dy = e.changedTouches[0].clientY - touchStartY;
      const dx = e.changedTouches[0].clientX - touchStartX;

      // Only swipe if horizontal movement > vertical
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) nextSlide();
        else prevSlide();
      }
    }, { passive: true });

    // Mouse wheel
    let wheelTimeout;
    wrapper.addEventListener('wheel', (e) => {
      e.preventDefault();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0 || e.deltaX > 0) nextSlide();
        else prevSlide();
      }, 50);
    }, { passive: false });

    // Tap on intro slide to advance
    slides[0].addEventListener('click', () => {
      if (currentSlide === 0) nextSlide();
    });

    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        shareBtn.innerHTML = '<span>✅</span> Copied to clipboard!';
        setTimeout(() => {
          shareBtn.innerHTML = '<span>📤</span> Share Your Wrap';
        }, 2000);
      });
    }

    // Download button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        downloadBtn.innerHTML = '<span>⏳</span> Generating...';
        setTimeout(() => {
          downloadBtn.innerHTML = '<span>✅</span> Saved!';
          setTimeout(() => {
            downloadBtn.innerHTML = '<span>💾</span> Save as Image';
          }, 2000);
        }, 1500);
      });
    }

    // CTA button
    const ctaBtn = document.getElementById('ctaBtn');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        ctaBtn.textContent = '🎉 You\'re on the list!';
        ctaBtn.style.borderColor = 'rgba(0, 245, 160, 0.4)';
        ctaBtn.style.color = '#00f5a0';
      });
    }
  }

  // ===== Start =====
  init();
})();

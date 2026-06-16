/* ==========================================================================
   TownHall — Prototype interactivity
   ========================================================================== */
(function () {
  'use strict';

  // -- Tab switching ----------------------------------------------------------
  const tabs = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      tabPanels.forEach((p) => {
        p.classList.toggle('is-hidden', p.getAttribute('data-tab-panel') !== target);
      });
    });
  });

  // -- Feed detail toggle -----------------------------------------------------
  const detailButtons = document.querySelectorAll('[data-view-detail]');
  const feedView = document.querySelector('[data-tab-panel="feed"]');
  const detailView = document.querySelector('[data-view="detail"]');
  const detailTitle = document.getElementById('detail-title');
  const detailBody = document.getElementById('detail-body');

  const detailContent = {
    shortterm: {
      title: 'Short-Term Rental Ordinance — Vote Tuesday',
      tag: 'Housing',
      body: `
        <div class="detail-tag-row"><span class="feed-tag tag-zoning">Housing</span></div>
        <h3 class="detail-title">Short-Term Rental Ordinance</h3>
        <div class="detail-meta">Council Meeting · Tuesday, June 17 · 10:00 AM · City Hall, 2nd Floor</div>
        <div class="detail-section">
          <h4>What it does</h4>
          <p>Limits short-term rentals (Airbnb, Vrbo) to primary residences only, requires a $250 annual city license, and caps occupancy at 2 guests per bedroom in R-1 zoning districts.</p>
        </div>
        <div class="detail-section">
          <h4>Why this matters to you</h4>
          <p>If you own within 500ft of a current short-term rental, this could change your neighbor's use of their property — and potentially your property value. If you operate an STR, you'll need to apply for a license within 60 days.</p>
        </div>
        <div class="detail-section">
          <h4>Your rep's position</h4>
          <p>Councilmember <strong>Maria Alvarez (District 3)</strong> has not publicly stated a position. In 2025, she voted <strong>FOR</strong> a similar ordinance that failed 3-4.</p>
        </div>
        <div class="detail-section">
          <h4>Make your voice heard</h4>
          <p>Email, call, or attend the meeting and speak during public comment (sign up by 9:30 AM).</p>
        </div>
      `,
    },
    budget: {
      title: 'FY2027 City Budget — Public Hearing',
      tag: 'Taxes',
      body: `
        <div class="detail-tag-row"><span class="feed-tag tag-taxes">Taxes</span></div>
        <h3 class="detail-title">FY2027 City Budget — Public Hearing</h3>
        <div class="detail-meta">Council Meeting · Thursday, June 19 · 6:00 PM · City Hall</div>
        <div class="detail-section">
          <h4>What it does</h4>
          <p>Proposes a $1.4B city budget including a 3.2% property tax millage increase, $48M for affordable housing, and a new $12M police training facility. Public comment is invited before the vote on June 26.</p>
        </div>
        <div class="detail-section">
          <h4>Impact on you</h4>
          <p>For a median-value home ($325K), the increase would add roughly <strong>$78/year</strong> to your property tax bill.</p>
        </div>
        <div class="detail-section">
          <h4>Controversy</h4>
          <p>The police training facility has drawn organized opposition from Tampa for Justice, citing cost overruns and lack of community input.</p>
        </div>
      `,
    },
  };

  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-view-detail');
      const detail = detailContent[key];
      if (!detail) return;
      detailBody.innerHTML = detail.body;
      feedView.classList.add('is-hidden');
      detailView.classList.remove('is-hidden');
      window.scrollTo({ top: document.querySelector('.demo-wrap').offsetTop - 80, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => {
      detailView.classList.add('is-hidden');
      feedView.classList.remove('is-hidden');
    });
  });

  // -- Address lookup (simulated) ---------------------------------------------
  const lookupForm = document.getElementById('lookup-form');
  if (lookupForm) {
    lookupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = lookupForm.querySelector('input');
      if (!input.value || input.value.trim().length < 4) return;
      showToast('📍 Looking up your reps...');
      setTimeout(() => {
        document.getElementById('your-reps').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    });
  }

  // -- Action buttons (email / call) ------------------------------------------
  document.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const action = btn.getAttribute('data-action');
      const messages = {
        email: '✉️ Draft opened in your mail app — your rep will hear from you.',
        call: '📞 Call script ready. (813) 274-8000 — press to dial.',
        share: '🔗 Public comment drafted — review and send.',
      };
      showToast(messages[action] || '✅ Done.');
    });
  });

  // -- Toast ------------------------------------------------------------------
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }

  // -- Topic alert toggle -----------------------------------------------------
  document.querySelectorAll('[data-topic-alert]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOn = btn.getAttribute('data-on') === '1';
      btn.setAttribute('data-on', isOn ? '0' : '1');
      btn.textContent = isOn ? '+ Subscribe' : '✓ Subscribed';
      btn.style.background = isOn ? '' : 'var(--townhall-blue-soft)';
      btn.style.color = isOn ? '' : 'var(--townhall-blue)';
      btn.style.borderColor = isOn ? '' : 'var(--townhall-blue)';
    });
  });

})();

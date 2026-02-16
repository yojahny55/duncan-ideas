// CupidBounty - Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
  // View Navigation
  const navTabs = document.querySelectorAll('.nav-tab');
  const views = document.querySelectorAll('.view');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const viewId = tab.dataset.view;
      
      // Update tabs
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update views
      views.forEach(v => v.classList.remove('active'));
      document.getElementById(`${viewId}-view`).classList.add('active');
    });
  });

  // Bounty Slider
  const bountySlider = document.getElementById('bounty-amount');
  const bountyValue = document.getElementById('bounty-value');
  const breakdownItems = document.querySelectorAll('.breakdown-item .payout');

  if (bountySlider) {
    bountySlider.addEventListener('input', () => {
      const value = parseInt(bountySlider.value);
      bountyValue.textContent = value.toLocaleString();
      
      // Update breakdown (20%, 30%, 50%)
      const payouts = [0.2, 0.3, 0.5];
      breakdownItems.forEach((item, i) => {
        item.textContent = `$${Math.round(value * payouts[i]).toLocaleString()}`;
      });
    });
  }

  // Preference Cards Selection
  const prefCards = document.querySelectorAll('.pref-card');
  prefCards.forEach(card => {
    card.addEventListener('click', () => {
      prefCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  // Dealbreaker Tags Toggle
  const tags = document.querySelectorAll('.dealbreaker-tags .tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      if (!tag.textContent.includes('Add custom')) {
        tag.classList.toggle('active');
      } else {
        // Add custom tag prompt
        const customTag = prompt('Enter your dealbreaker:');
        if (customTag) {
          const newTag = document.createElement('span');
          newTag.className = 'tag active';
          newTag.textContent = customTag;
          tag.parentNode.insertBefore(newTag, tag);
          
          newTag.addEventListener('click', () => {
            newTag.classList.toggle('active');
          });
        }
      }
    });
  });

  // Filter Chips
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Suggest Match Modal
  const suggestButtons = document.querySelectorAll('.bounty-card .btn-primary');
  const modal = document.getElementById('suggest-modal');
  const modalClose = document.querySelector('.modal-close');

  suggestButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Role Toggle in Dashboard
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Could switch between matchmaker/seeker dashboard views
      const role = btn.dataset.role;
      console.log(`Switched to ${role} dashboard`);
    });
  });

  // Post Bounty Button
  const postBountyBtn = document.querySelector('.bounty-creator .btn-primary');
  if (postBountyBtn) {
    postBountyBtn.addEventListener('click', () => {
      const amount = bountyValue.textContent;
      
      // Success animation
      postBountyBtn.innerHTML = '<span>✓ Bounty Posted!</span>';
      postBountyBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      
      setTimeout(() => {
        postBountyBtn.innerHTML = `<span>Post Bounty for $${amount}</span><span class="btn-arrow">→</span>`;
        postBountyBtn.style.background = '';
      }, 2000);
      
      // Show notification
      showNotification(`Your $${amount} bounty is now live! Matchmakers can see your profile.`);
    });
  }

  // Suggestion Select Buttons
  const selectButtons = document.querySelectorAll('.suggestion-item .btn-small');
  selectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.suggestion-item');
      const name = item.querySelector('strong').textContent;
      
      btn.textContent = 'Selected ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      btn.style.color = 'white';
      
      setTimeout(() => {
        modal.classList.remove('active');
        showNotification(`Suggesting ${name} as a match! They'll be notified.`);
        
        // Reset button
        btn.textContent = 'Select';
        btn.style.background = '';
        btn.style.color = '';
      }, 1000);
    });
  });

  // Withdraw Button
  const withdrawBtn = document.querySelector('.earnings-card.available .btn-small');
  if (withdrawBtn) {
    withdrawBtn.addEventListener('click', () => {
      const amount = document.querySelector('.earnings-card.available .earnings-value').textContent;
      showNotification(`Withdrawal of ${amount} initiated! Funds will arrive in 2-3 business days.`);
    });
  }

  // Notification System
  function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <span class="notif-icon">💘</span>
      <span class="notif-message">${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.9375rem;
      z-index: 2000;
      animation: slideIn 0.3s ease;
      max-width: 400px;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => notification.remove(), 300);
    }, 4000);
  }

  // Animate stats on load
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Animate hero stats
  const statValues = document.querySelectorAll('.hero .stat-value');
  statValues.forEach(stat => {
    const target = parseInt(stat.textContent.replace(/,/g, ''));
    stat.textContent = '0';
    animateValue(stat, 0, target, 1500);
  });

  // Import Contacts Button
  const importBtn = document.querySelector('.modal-body .btn-primary');
  if (importBtn) {
    importBtn.addEventListener('click', () => {
      importBtn.textContent = 'Importing...';
      setTimeout(() => {
        importBtn.textContent = '47 Contacts Found!';
        importBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      }, 1500);
    });
  }

  console.log('💘 CupidBounty prototype loaded');
});

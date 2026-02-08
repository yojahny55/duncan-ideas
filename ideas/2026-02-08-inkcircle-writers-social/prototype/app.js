/**
 * InkCircle - Interactive Prototype
 * Social Network for Creative Writers
 */

document.addEventListener('DOMContentLoaded', () => {
  initSprintTimer();
  initPostActions();
  initComposer();
  initNavigation();
});

// ==========================================
// Sprint Timer
// ==========================================
function initSprintTimer() {
  const timerEl = document.getElementById('sprint-timer');
  if (!timerEl) return;

  // Start at 18:42 and count down
  let totalSeconds = 18 * 60 + 42;

  function updateTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      // Sprint ended - could trigger celebration animation
      timerEl.textContent = "00:00";
      timerEl.style.animation = "pulse 1s infinite";
    }
  }

  // Update every second
  setInterval(updateTimer, 1000);
}

// ==========================================
// Post Actions (Like, Comment, Cheer, Share)
// ==========================================
function initPostActions() {
  const actionButtons = document.querySelectorAll('.post-action');
  
  actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const action = button.dataset.action;
      const countSpan = button.querySelector('span:last-child');
      
      switch(action) {
        case 'like':
          toggleLike(button, countSpan);
          break;
        case 'comment':
          openComments(button);
          break;
        case 'cheer':
          triggerCheer(button);
          break;
        case 'share':
          openShareMenu(button);
          break;
      }
    });
  });
}

function toggleLike(button, countSpan) {
  const isActive = button.classList.contains('active');
  const currentCount = parseInt(countSpan.textContent) || 0;
  
  if (isActive) {
    button.classList.remove('active');
    countSpan.textContent = currentCount - 1;
    // Change heart back to outline
    button.querySelector('svg').setAttribute('fill', 'none');
    button.querySelector('svg').setAttribute('stroke', 'currentColor');
  } else {
    button.classList.add('active');
    countSpan.textContent = currentCount + 1;
    // Fill the heart
    button.querySelector('svg').setAttribute('fill', 'currentColor');
    button.querySelector('svg').removeAttribute('stroke');
    
    // Add a little animation
    button.style.transform = 'scale(1.2)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }
}

function openComments(button) {
  // In real app, this would open a comment section
  button.classList.toggle('active');
  console.log('Opening comments...');
}

function triggerCheer(button) {
  // Change to "Cheered!" temporarily
  const originalText = button.querySelector('span:last-child').textContent;
  button.querySelector('span:last-child').textContent = 'Cheered! 🎉';
  button.classList.add('active');
  
  // Create floating emoji animation
  createFloatingEmoji(button);
  
  setTimeout(() => {
    button.querySelector('span:last-child').textContent = originalText;
  }, 2000);
}

function createFloatingEmoji(button) {
  const emojis = ['🎉', '✨', '🌟', '💫', '👏'];
  const rect = button.getBoundingClientRect();
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const emoji = document.createElement('span');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.cssText = `
        position: fixed;
        left: ${rect.left + Math.random() * 50}px;
        top: ${rect.top}px;
        font-size: 20px;
        pointer-events: none;
        z-index: 9999;
        animation: floatUp 1s ease-out forwards;
      `;
      document.body.appendChild(emoji);
      
      setTimeout(() => emoji.remove(), 1000);
    }, i * 100);
  }
}

// Add the animation to the page
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) scale(1.5);
    }
  }
`;
document.head.appendChild(style);

function openShareMenu(button) {
  // Simple share simulation
  const options = ['Copy link', 'Share to Twitter', 'Share to Tumblr'];
  console.log('Share options:', options);
  
  // Visual feedback
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 300);
}

// ==========================================
// Composer
// ==========================================
function initComposer() {
  const textarea = document.getElementById('composer-input');
  const postBtn = document.getElementById('post-btn');
  
  if (!textarea || !postBtn) return;
  
  // Auto-resize textarea
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    
    // Enable/disable post button
    postBtn.disabled = textarea.value.trim() === '';
    postBtn.style.opacity = textarea.value.trim() === '' ? '0.5' : '1';
  });
  
  // Handle post submission
  postBtn.addEventListener('click', () => {
    const content = textarea.value.trim();
    if (!content) return;
    
    // Simulate posting
    postBtn.textContent = 'Posting...';
    postBtn.disabled = true;
    
    setTimeout(() => {
      createNewPost(content);
      textarea.value = '';
      textarea.style.height = 'auto';
      postBtn.textContent = 'Share Update';
      postBtn.disabled = false;
    }, 500);
  });
  
  // Initialize composer tools
  initComposerTools();
}

function initComposerTools() {
  const tools = document.querySelectorAll('.composer-tool');
  
  tools.forEach((tool, index) => {
    tool.addEventListener('click', () => {
      const tooltips = ['Add milestone marker', 'Share a snippet', 'Update word count', 'Add an image'];
      console.log(tooltips[index]);
      
      // Visual feedback
      tool.style.background = 'var(--color-primary-100)';
      tool.style.color = 'var(--color-primary-600)';
      setTimeout(() => {
        tool.style.background = '';
        tool.style.color = '';
      }, 200);
    });
  });
}

function createNewPost(content) {
  const feed = document.querySelector('.feed');
  const composer = document.querySelector('.composer');
  
  const postHTML = `
    <article class="post" style="opacity: 0; transform: translateY(-20px); transition: all 0.3s ease;">
      <div class="post-header">
        <div class="user-avatar-placeholder" style="width: 48px; height: 48px;">EW</div>
        <div class="post-meta">
          <div class="post-author">
            <span class="post-author-name">Elena Wright</span>
            <span class="post-author-handle">@wordweaver</span>
          </div>
          <div class="post-timestamp">Just now</div>
        </div>
      </div>
      <div class="post-content">
        <p>${escapeHtml(content)}</p>
      </div>
      <div class="post-actions">
        <button class="post-action" data-action="like">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          <span>0</span>
        </button>
        <button class="post-action" data-action="comment">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
          <span>0</span>
        </button>
        <button class="post-action" data-action="cheer">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          <span>Cheer</span>
        </button>
        <button class="post-action" data-action="share">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          <span>Share</span>
        </button>
      </div>
    </article>
  `;
  
  // Insert after composer
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = postHTML;
  const newPost = tempDiv.firstElementChild;
  
  // Find the sprint card and insert after it, or after composer if no sprint
  const sprintCard = document.querySelector('.sprint-card');
  if (sprintCard) {
    sprintCard.after(newPost);
  } else {
    composer.after(newPost);
  }
  
  // Animate in
  requestAnimationFrame(() => {
    newPost.style.opacity = '1';
    newPost.style.transform = 'translateY(0)';
  });
  
  // Re-init post actions for new post
  initPostActions();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==========================================
// Navigation
// ==========================================
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active from all
      navItems.forEach(i => i.classList.remove('active'));
      
      // Add active to clicked
      item.classList.add('active');
    });
  });
}

// ==========================================
// Utility: Simulate loading states
// ==========================================
function showLoadingSkeleton(container) {
  container.innerHTML = `
    <div class="post" style="padding: var(--space-6);">
      <div class="post-header" style="margin-bottom: var(--space-4);">
        <div class="skeleton skeleton-avatar"></div>
        <div class="post-meta" style="flex: 1;">
          <div class="skeleton skeleton-text-short" style="margin-bottom: var(--space-2);"></div>
          <div class="skeleton skeleton-text" style="width: 40%; height: 12px;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-text" style="margin-bottom: var(--space-2);"></div>
      <div class="skeleton skeleton-text" style="margin-bottom: var(--space-2);"></div>
      <div class="skeleton skeleton-text-short"></div>
    </div>
  `;
}

// ==========================================
// Console welcome message
// ==========================================
console.log(`
%c✒️ InkCircle %c— Social Network for Writers

Welcome to the InkCircle prototype!
This is a demo of the core experience.

Features to explore:
• Compose a new post
• Like/cheer posts
• Watch the sprint timer
• Browse circles and beta requests

%cBuilt with ❤️ for writers everywhere.
`, 
'font-size: 20px; font-weight: bold; color: #d4823f;',
'font-size: 14px; color: #635a53;',
'font-size: 12px; color: #8f847a; font-style: italic;'
);

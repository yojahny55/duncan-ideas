// PRBouncer — Maintainer Dashboard interactivity
// Lightweight: expand/collapse PR cards, filter pills, tab switching

document.addEventListener('DOMContentLoaded', () => {

  // === PR card expand/collapse ===
  document.querySelectorAll('.pr-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't toggle when clicking buttons inside expanded view
      if (e.target.closest('.btn') || e.target.closest('.pr-actions')) return
      card.classList.toggle('expanded')
    })
  })

  // === Filter pills ===
  const pills = document.querySelectorAll('.filter-pill')
  const prCards = document.querySelectorAll('.pr-card')

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'))
      pill.classList.add('active')
      const filter = pill.dataset.filter

      prCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = ''
        } else {
          const stripe = card.querySelector('.pr-stripe')
          if (stripe && stripe.classList.contains(filter)) {
            card.style.display = ''
          } else {
            card.style.display = 'none'
          }
        }
      })
    })
  })

  // === Animated counters on load ===
  document.querySelectorAll('[data-animate]').forEach(el => {
    const target = parseFloat(el.dataset.animate)
    const suffix = el.dataset.suffix || ''
    const decimals = parseInt(el.dataset.decimals || '0')
    let current = 0
    const duration = 800
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      current = target * eased
      el.textContent = decimals > 0 ? current.toFixed(decimals) + suffix : Math.round(current) + suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  // === Action buttons (demo feedback) ===
  document.querySelectorAll('.pr-actions .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const action = btn.textContent.trim()
      const card = btn.closest('.pr-card')
      const title = card.querySelector('.pr-title').textContent

      // Visual feedback
      const original = btn.textContent
      btn.textContent = '✓ Done'
      btn.style.background = 'var(--green)'
      btn.style.color = 'white'
      btn.style.borderColor = 'var(--green)'

      setTimeout(() => {
        btn.textContent = original
        btn.style.background = ''
        btn.style.color = ''
        btn.style.borderColor = ''
      }, 1400)

      console.log(`[PRBouncer] Action "${action}" on "${title}"`)
    })
  })

  // === Nav items ===
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'))
      item.classList.add('active')
    })
  })

  // === Time-saved calculator (weekly report) ===
  // Dynamic update: each blocked PR saves ~12 min of maintainer review time on average
  const blockedCount = 47
  const minutesSaved = blockedCount * 12
  const hoursSaved = (minutesSaved / 60).toFixed(1)
  const timeEl = document.querySelector('.time-saved')
  if (timeEl) {
    timeEl.textContent = `${hoursSaved}h`
  }

  console.log('%cPRBouncer ready', 'color:#3B82F6;font-weight:bold;')
  console.log(`%cLoaded ${prCards.length} PRs in queue`, 'color:#6B7388;')
})

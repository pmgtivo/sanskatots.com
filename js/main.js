// SanskaTots™ Website — Main JavaScript
// No frameworks. Vanilla JS. Lightweight.

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileNav();
  initScrollReveal();
  initFAQ();
  initImageGallery();
  initAmazonModal();
});

// --- Sticky Nav on Scroll ---
function initNavScroll() {
  const nav = document.querySelector('.nav-sticky');
  if (!nav) return;

  const scrollThreshold = 80;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// --- Mobile Navigation ---
function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');
  const links = overlay ? overlay.querySelectorAll('a') : [];

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeNav = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  links.forEach(link => link.addEventListener('click', closeNav));
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('animate-in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay if specified
        const delay = entry.target.dataset.animateDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// --- FAQ Accordion ---
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// --- Product Image Gallery ---
function initImageGallery() {
  const galleries = document.querySelectorAll('[data-gallery]');
  if (!galleries.length) return;

  galleries.forEach(gallery => {
    const mainImg = gallery.querySelector('.gallery-main img');
    const thumbs = Array.from(gallery.querySelectorAll('.gallery-thumb'));
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    if (!mainImg || !thumbs.length) return;

    let currentIndex = 0;

    function goToIndex(idx) {
      currentIndex = (idx + thumbs.length) % thumbs.length;
      const thumb = thumbs[currentIndex];
      const src = thumb.dataset.src;
      const alt = thumb.dataset.alt || '';

      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = src;
        mainImg.alt = alt;
        mainImg.style.opacity = '1';
      }, 200);

      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    }

    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', () => goToIndex(idx));
    });

    if (prevBtn) prevBtn.addEventListener('click', () => goToIndex(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToIndex(currentIndex + 1));
  });
}

// --- Amazon "Coming Soon" Modal ---
function initAmazonModal() {
  const modal = document.createElement('div');
  modal.id = 'amazon-coming-soon-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'amazon-modal-title');
  modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;padding:1rem;background:rgba(42,42,42,0.6);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);';

  modal.innerHTML = `
    <div id="amazon-modal-card" style="background:#FFF8EC;border-radius:24px;max-width:420px;width:100%;padding:2.5rem 2rem;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.22);transform:scale(0.88);transition:transform 0.28s cubic-bezier(0.34,1.56,0.64,1),opacity 0.25s ease;opacity:0;font-family:'Inter',system-ui,sans-serif;">
      <div style="font-size:3.5rem;margin-bottom:1rem;line-height:1;">🚀</div>
      <h2 id="amazon-modal-title" style="font-family:'Playfair Display',Georgia,serif;color:#8C2A2A;font-size:1.65rem;font-weight:800;margin-bottom:0.6rem;line-height:1.25;">Launching on Amazon<br>Very Soon!</h2>
      <div style="width:48px;height:3px;background:#F4A340;border-radius:99px;margin:0 auto 1.1rem;"></div>
      <p style="color:#5a5a5a;font-size:0.975rem;line-height:1.65;margin-bottom:0.45rem;">We&rsquo;re putting the final touches on our Amazon store.</p>
      <p style="color:#8C2A2A;font-family:'Poppins',sans-serif;font-weight:600;font-size:0.975rem;margin-bottom:2rem;">Stay tuned — it&rsquo;s going to be worth the wait! ✨</p>
      <button id="amazon-modal-ok" style="background:#F4A340;color:#8C2A2A;font-family:'Poppins','Inter',sans-serif;font-weight:700;font-size:1rem;padding:14px 0;border-radius:12px;border:none;cursor:pointer;width:100%;letter-spacing:0.02em;">
        Got it!
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  const card = document.getElementById('amazon-modal-card');
  const okBtn = document.getElementById('amazon-modal-ok');

  function openModal() {
    modal.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      card.style.transform = 'scale(1)';
      card.style.opacity = '1';
    }));
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    card.style.transform = 'scale(0.88)';
    card.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 250);
  }

  okBtn.addEventListener('click', closeModal);
  okBtn.addEventListener('mouseover', () => { okBtn.style.background = '#D4892A'; });
  okBtn.addEventListener('mouseout',  () => { okBtn.style.background = '#F4A340'; });
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
  });

  // Intercept all Amazon CTA clicks — prevent navigation, show modal
  document.addEventListener('click', (e) => {
    const ctaBtn = e.target.closest('[data-amazon-cta]');
    if (!ctaBtn) return;
    e.preventDefault();
    // Fire GA4 event if gtag exists
    if (typeof gtag === 'function') {
      gtag('event', 'amazon_click', {
        product_name: ctaBtn.dataset.productName || 'unknown',
        placement: ctaBtn.dataset.placement || 'unknown',
        amazon_url: ctaBtn.href || ''
      });
    }
    openModal();
  }, true);
}

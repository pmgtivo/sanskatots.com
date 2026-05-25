// SanskaTots™ Website — Main JavaScript
// No frameworks. Vanilla JS. Lightweight.

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileNav();
  initScrollReveal();
  initFAQ();
  initImageGallery();
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
    const thumbs = gallery.querySelectorAll('.gallery-thumb');
    if (!mainImg || !thumbs.length) return;

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.dataset.src;
        const alt = thumb.dataset.alt || '';

        // Fade transition
        mainImg.style.opacity = '0';
        setTimeout(() => {
          mainImg.src = src;
          mainImg.alt = alt;
          mainImg.style.opacity = '1';
        }, 200);

        // Update active state
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
}

// --- Amazon CTA Click Tracking (GA4 compatible) ---
document.addEventListener('click', (e) => {
  const ctaBtn = e.target.closest('[data-amazon-cta]');
  if (!ctaBtn) return;

  // Fire GA4 event if gtag exists
  if (typeof gtag === 'function') {
    gtag('event', 'amazon_click', {
      product_name: ctaBtn.dataset.productName || 'unknown',
      placement: ctaBtn.dataset.placement || 'unknown',
      amazon_url: ctaBtn.href || ''
    });
  }
});

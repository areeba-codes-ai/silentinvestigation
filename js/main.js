/* ═══════════════════════════════════════════════════
   SILENT WATCH INVESTIGATION — main.js
═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR SCROLL EFFECT ── */
  const navbar  = document.getElementById('navbar');
  const backTop = document.getElementById('back-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    backTop.classList.toggle('show', y > 420);
  }, { passive: true });


  /* ── 2. MOBILE DRAWER ── */
  const drawer = document.getElementById('mobileDrawer');
  window.toggleDrawer = () => drawer.classList.toggle('open');
  window.closeDrawer  = () => drawer.classList.remove('open');

  // Close on outside click
  document.addEventListener('click', e => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !e.target.closest('.hamburger')) {
      drawer.classList.remove('open');
    }
  });


  /* ── 3. FADE-UP INTERSECTION OBSERVER ── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));


  /* ── 4. COUNTER ANIMATION ── */
  function runCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    let val = 0;
    const step = target / 75;
    const id = setInterval(() => {
      val += step;
      if (val >= target) { val = target; clearInterval(id); }
      el.textContent = Math.floor(val) + suffix;
    }, 18);
  }

  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runCounter(e.target);
        counterIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.55 });

  document.querySelectorAll('[data-target]').forEach(el => counterIO.observe(el));


  /* ── 5. TESTIMONIAL SLIDER ── */
  const track    = document.getElementById('testiTrack');
  const cards    = document.querySelectorAll('.t-card');
  const viewport = document.querySelector('.testi-viewport');
  let ti = 0;

  function updateSlider() {
    cards.forEach((c, i) => c.classList.toggle('active', i === ti));
    if (!viewport || !cards[0]) return;
    const vpW   = viewport.offsetWidth;
    const cardW = cards[0].offsetWidth + 24; // gap
    let offset  = ti * cardW - (vpW / 2 - cardW / 2);
    if (offset < 0) offset = 0;
    track.style.transform = `translateX(-${offset}px)`;
  }

  window.nextTesti = () => { ti = (ti + 1) % cards.length; updateSlider(); };
  window.prevTesti = () => { ti = (ti - 1 + cards.length) % cards.length; updateSlider(); };

  // Auto-rotate
  setInterval(window.nextTesti, 5800);


  /* ── 6. FAQ ACCORDION ── */
  window.toggleFaq = function(item) {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  };


  /* ── 7. ACTIVE NAV HIGHLIGHTING ── */
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navAs.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }, { passive: true });


  /* ── 8. POPUP AFTER 20 SECONDS ── */
  const overlay = document.getElementById('popupOverlay');
  let shown = false;

  setTimeout(() => {
    if (!shown) { overlay.classList.add('show'); shown = true; }
  }, 20000);

  window.closePopup = () => overlay.classList.remove('show');

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('show');
  });


  /* ── 9. FORM SUBMIT → WhatsApp ── */
  window.submitForm = function () {
    const fname   = document.getElementById('fname').value.trim();
    const lname   = document.getElementById('lname').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const service = document.getElementById('fservice').value;
    const msg     = document.getElementById('fmsg').value.trim();
    const confirm = document.getElementById('fconfirm').checked;

    if (!fname || !phone) {
      alert('Please enter your name and phone number so we can reach you.');
      return;
    }
    if (!confirm) {
      alert('Please confirm the confidentiality agreement to proceed.');
      return;
    }

    const text = encodeURIComponent(
      `Hello Silent Watch Investigation,\n\nI would like to submit a confidential inquiry.\n\nName: ${fname} ${lname}\nPhone: ${phone}\nService: ${service || 'Not specified'}\n\nMessage:\n${msg || 'No additional details provided.'}\n\nThank you.`
    );
    window.open('https://wa.me/923334648051?text=' + text, '_blank');
  };


  /* ── 10. SMOOTH SCROLL FOR ANCHOR LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeDrawer();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

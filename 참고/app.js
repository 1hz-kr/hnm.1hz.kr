/* ============================================================
   한사랑 제면기 — interactions
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- build extrusion strands ---- */
  (function strands() {
    var host = document.getElementById('strands');
    if (!host) return;
    var n = window.innerWidth < 640 ? 22 : 34;
    var html = '';
    for (var i = 0; i < n; i++) {
      var dur = (0.85 + Math.random() * 0.6).toFixed(2);
      var delay = (-Math.random() * 1.4).toFixed(2);
      var swayDelay = (-Math.random() * 4).toFixed(2);
      var h = (78 + Math.random() * 22).toFixed(0);
      html += '<span class="strand" style="height:' + h + '%;' +
        'animation-duration:' + dur + 's,' + (3.6 + Math.random() * 2).toFixed(2) + 's;' +
        'animation-delay:' + delay + 's,' + swayDelay + 's;"></span>';
    }
    host.innerHTML = html;
  })();

  /* ---- extrusion timer loop (0.0 → 10.0s) ---- */
  (function timer() {
    var el = document.getElementById('timer');
    if (!el || reduce) return;
    var t = 0, last = performance.now();
    function step(now) {
      var dt = (now - last) / 1000; last = now;
      t += dt * 1.2;
      if (t > 5) t = 0;
      el.textContent = t.toFixed(1) + 's';
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  })();

  /* ---- nav scrolled + scroll progress ---- */
  var nav = document.getElementById('nav');
  var prog = document.getElementById('progress');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', y > 24);
    if (prog) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- reveal on scroll ---- */
  var revs = [].slice.call(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revs.forEach(function (el) { io.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- count-up ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (reduce || target === 0) { el.textContent = target; return; }
    var dur = 1300, start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(ease(p) * target);
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target;
    }
    requestAnimationFrame(frame);
  }
  var counters = [].slice.call(document.querySelectorAll('[data-count]'));
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(countUp);
  }

  /* ---- process bars fill when steps enter ---- */
  var bars = [].slice.call(document.querySelectorAll('.step .bar'));
  if ('IntersectionObserver' in window && !reduce) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var i = bars.indexOf(e.target.parentNode ? e.target : e.target);
          setTimeout(function () { e.target.style.width = '100%'; }, 120);
          bio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(function (el) { bio.observe(el); });
  } else {
    bars.forEach(function (el) { el.style.width = '100%'; });
  }

  /* ---- smooth anchor scroll with nav offset ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      ev.preventDefault();
      var top = t.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
    });
  });
})();

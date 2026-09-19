  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  var burger = document.getElementById('burgerBtn');
  var panel = document.getElementById('mobilePanel');
  burger.addEventListener('click', function(){
    burger.classList.toggle('open');
    panel.classList.toggle('open');
  });
  panel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      burger.classList.remove('open');
      panel.classList.remove('open');
    });
  });

  // active nav link on scroll
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('nav.links a');
  var mobileAnchors = document.querySelectorAll('.mobile-panel a[href^="#"]');

  function setActive(id){
    navAnchors.forEach(function(a){
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ setActive(entry.target.id); }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(function(s){ observer.observe(s); });

  // reveal-on-scroll for cards
  var revealTargets = document.querySelectorAll('.edu-item, .skill-card, .exp-card, .project-card, .ach-row, .interest-card, .affiliation-card');
  revealTargets.forEach(function(el){ el.classList.add('reveal'); });
  var revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(function(el){ revealObserver.observe(el); });
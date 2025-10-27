(function () {
    const box = document.getElementById('caipu');
    const more = box.querySelector('.more');
  
    let pinned = false;
    let ignoreHover = false;
  
    function playExpand() {
      box.classList.remove('expand');
      void box.offsetWidth;
      box.classList.add('expand');
      if (more) more.style.display = 'block';
    }
  
    function collapse() {
        box.classList.remove('expand');
        void box.offsetWidth;
        box.classList.add('shrink');
        setTimeout(() => box.classList.remove('shrink'), 500);
        if (more) more.style.display = 'none';
    }
  
    box.addEventListener('mouseenter', () => {
      if (!pinned && !ignoreHover) {
        playExpand();
      }
    });
  
    box.addEventListener('mouseleave', () => {
      if (!pinned) {
        collapse();
      }
      ignoreHover = false;
    });
  
    box.addEventListener('click', (e) => {
      if (!box.classList.contains('expand') && !pinned) {
        playExpand();
        return;
      }
  
      if (box.classList.contains('expand') && !pinned) {
        pinned = true;
        box.classList.add('pinned');
        box.setAttribute('aria-pressed', 'true');
        if (more) more.style.display = 'block';
        return;
      }
  
      if (pinned) {
        pinned = false;
        box.classList.remove('pinned');
        box.setAttribute('aria-pressed', 'false');
        collapse();
        ignoreHover = true;
        return;
      }
    });
  
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        box.click();
      }
    });
  })();
  
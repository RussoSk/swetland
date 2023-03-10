(() => {
  const refs = {
    
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
      body: document.querySelector('body'),
      memuList:document.querySelector('.mb-menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.memuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-open');
    refs.body.classList.remove('no-scroll');
  }
})();

(function App() {
  const buttons = document.querySelectorAll('button');
  const navSidebar = document.querySelector('.navbar');
  const arrow = document.querySelectorAll('.dropdown');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const currentState = button.getAttribute('data-state');
      navSidebar.classList.toggle('show-up-nav');
      if (!currentState || currentState === 'closed') {
        button.setAttribute('data-state', 'opened');
        button.setAttribute('aria-expanded', 'true');
      } else {
        button.setAttribute('data-state', 'closed');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // write a function sidebar

  arrow.forEach((list) => {
    list.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = (e.currentTarget.parentElement);
      parent.classList.toggle('show-up-hidden');
    });
  });
}());

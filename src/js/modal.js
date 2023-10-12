(() => {
  const modalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');

  console.log(modalButtons);

  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      toggleModal();
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      toggleModal();
    });
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      toggleModal();
    }
  });

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-hidden');
  }
})();

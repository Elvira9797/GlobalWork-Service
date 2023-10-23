import { data } from './resources';

const { fullInfoVacancies } = data;

const modal = document.querySelector('[data-modal]');

export function openModal(id) {
  const vacancy = fullInfoVacancies.job_listing.filter(
    vacancy => vacancy.id === id
  );
  console.log(vacancy);
  toggleModal();
}

export function closeModal() {
  document.body.classList.remove('modal-open');
  modal.classList.add('is-hidden');
}

export function toggleModal() {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
}

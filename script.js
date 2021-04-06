const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




var slider_img = document.querySelector('.slider_img');
var img = ['project3.png','project4.png','project5.png'];
var i = 0;

function prev(){
  if(i <= 0 ) i = img.length;
  i--;
  return setImg();

}

function next(){
  if (i >= img.length-1 ) i = -1;
  i++;
  return setImg();

}


function setImg(){
  return slider_img.setAttribute('src', 'img/'+img[i]);
}
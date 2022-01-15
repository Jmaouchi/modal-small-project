const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openBtn.addEventListener('click', function(){
  modalOverlay.classList.toggle('active');
})

closeBtn.addEventListener('click', function(){
  modalOverlay.classList.remove('active');
})




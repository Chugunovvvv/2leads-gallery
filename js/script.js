
const img = document.querySelectorAll('.img__container img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');
const closeModal = document.getElementById('close');
const modalBg = document.querySelector('.modal__bg')
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const body = document.body
console.log(body)
img.forEach(el => {
    el.onclick = () => {
        modal.classList.add('active')
        modalImg.src = el.getAttribute('src');
        body.classList.add('lock');
    }
})
closeModal.onclick = () => {
    modal.classList.remove('active')
    body.classList.remove('lock');
}
i = 0;

next.addEventListener('click', () => {
    modalImg[i].style.display = 'none';
    i++;
    if(i>= modalImg.length) {
        i=0;
    }
    modalImg[i].style.display = 'block'
})

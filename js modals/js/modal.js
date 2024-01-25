const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal');
const body = document.body;
function openModal(elem) {
   elem.classList.add('active');
   stopScroll()
}

function stopScroll() {
   let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'; // фиксим баг, когда при открытии модалки происходит сдвиг
   body.style.paddingRight = paddingOffset;
   body.classList.add('locked');

}
function goScroll() {
   body.classList.remove('locked');
   body.style.paddingRight = '0px';
}

function closeModal(e) {
   if (e.target.classList.contains('modal__close') || e.target.closest('.modal__close') || e.target.classList.contains('modal__bg')) { // Реализация закрытия на крестик и тут аналогичная проверка для того чтобы можно было нажимать на картинку, проверяем рядом лежащего родителя. Также закрытие по области.
      e.target.closest('.modal').classList.remove('active');
      goScroll();
   }

}

modalBtns.forEach(btn => {
   btn.addEventListener('click', (e) => {  // связываем кнопки и модалньые окна с помощью дата атрибут
      let data = e.target.dataset.modalOpen;
      modals.forEach(modal => {      // проверяем условие: если значение дата-атрибута модального окна равняется значению дата атрибуту кнопки, то вызываем функцию открытия окна
         if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('.modal-open').dataset.modalOpen) { // дополнительная проверка для того чтобы открывалось модальное окно и по клику на картинку рядом с текстом. Для этого проверяем, если по нажатому элементу есть ближайший родитель с классом модал-опен, то добавляем ему дата-сет такой же как у кнопки
            openModal(modal);
         }
      })
   })
})

modals.forEach(modal => {  // закрытие модального окна
   modal.addEventListener('click', (e) => {
      closeModal(e);
   })
})

window.addEventListener('keydown', e => {  // реализация закрытия модального окна по клавише escape
   modals.forEach(modal => {
      if (e.key === "Escape" && modal.classList.contains('active')) {
         modal.classList.remove('active');
         body.classList.remove('locked');
      }
   })
})
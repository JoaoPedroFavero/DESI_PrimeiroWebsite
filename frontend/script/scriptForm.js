`use strict`;

// FORMULARIO
const feedbackContainer = document.getElementById(`feedback-container`);
const feedbackForm = document.getElementById(`feedback-form`);
const formulario = document.querySelector(`#formulario`);
formulario.addEventListener(`submit`, (e) =>{
    e.preventDefault();

    feedbackContainer.style.display = `flex`;
    feedbackContainer.classList.toggle(`feedback-container`);
    feedbackForm.classList.toggle(`feedback-form`);
});

feedbackForm.addEventListener(`click`, () =>{
    feedbackContainer.style.display = `none`;
    feedbackContainer.classList.toggle(`feedback-container`);
    feedbackForm.classList.toggle(`feedback-form`);
});
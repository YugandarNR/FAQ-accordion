"use strict";

const questions = document.querySelectorAll(".question");
const images = document.querySelectorAll(".expand-icon");
const answers = document.querySelectorAll(".answer");
const toggleContent = function (index) {
  const answer = answers[index];
  const image = images[index];
  if (answer.classList.contains("answer")) {
    answers[index].classList.remove("answer");
    images[index].src = "./assets/images/icon-minus.svg";
  } else {
    answer.classList.add("answer");
    image.src = "./assets/images/icon-plus.svg";
  }
};
questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    toggleContent(index);
  });
});

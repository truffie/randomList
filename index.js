const list = document.querySelector('.window')
const btn = document.querySelector('.btn')
const counter = document.querySelector('.counter')
btn.addEventListener(('click'), () => {
  if (list.innerHTML) {
    list.innerHTML = '';
  }
  let i = 1;
  const value = +counter.value
  const answer = toRandom(value);
  for (item of answer) {
    list.innerHTML += `<div class="list-item"><span>${i}</span>: ${[...item]}</div > `
    i++;
  }
  i = 0;

})
function toRandom(n) {
  const arrQuestions = [];
  const randomPairQuestions = [];

  for (let i = 0; i < 33; i++) {
    arrQuestions.push(i);
  }
  for (let i = 1; i <= n; i++) {
    let firstQuestion = Math.floor(Math.random() * 31 + 1);
    let secondQuestion = Math.floor(Math.random() * 31 + 1);
    while (secondQuestion == firstQuestion) {
      firstQuestion = Math.floor(Math.random() * 31 + 1)
      secondQuestion = Math.round(Math.random() * 31 + 1);
    }
    randomPairQuestions.push([firstQuestion, secondQuestion]);
  }
  return randomPairQuestions;
}



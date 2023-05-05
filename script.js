const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "HyperText Markup Language",
    d: "Hypertext Markup Language",
    ans: 'ans4'
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheets",
    d: "Cascading super Sheets",
    ans: 'ans1'
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "Hypertext Transfer Product",
    b: "Hypertext test protocol",
    c: "Hey Transfer Product",
    d: "Hypertext Transfer protocol",
    ans: 'ans4'
  },
  {
    question: "Q4: What is the full form of JS?",
    a: "javaScript",
    b: "javaSuper",
    c: "justScript",
    d: "jordenShoes",
    ans: 'ans1'
  }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const scoreArea = document.querySelector('#scoreArea');
let score = 0;
let arrayIndex = 0;
// Update data
const dataUpdate = () => {
  let quizQuesAns = quizDB[arrayIndex];
  question.innerText = quizQuesAns.question;
  option1.innerText = quizQuesAns.a;
  option2.innerText = quizQuesAns.b;
  option3.innerText = quizQuesAns.c;
  option4.innerText = quizQuesAns.d;
}
// Find the id
const getAnswer = () => {
  let answer;
  answers.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}
// delete the selected value
const deleteVAl = () => answers.forEach(el => el.checked = false);

dataUpdate();

submit.addEventListener('click', () => {
  // compare the answer and show the result
  const checkAnswer = getAnswer();
  if (checkAnswer === quizDB[arrayIndex].ans) {
    score++;
  }
  arrayIndex++;
  deleteVAl();
  if (arrayIndex < quizDB.length) {
    dataUpdate();
  } else {
    scoreArea.innerHTML = `
    <h3>Your scored ${score}/${quizDB.length} ✌️ </h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `
    scoreArea.style.display = 'block';
  }
});
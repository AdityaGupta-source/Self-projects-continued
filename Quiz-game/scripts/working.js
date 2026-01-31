import { Questions } from "../data/QuestionAnswers.js"
const CorrectAnswerAudio = new Audio('Audio/CorrectAnswerAudio.mp3');
let correct = 0;
let currentScore = 0;
let currentQuizQuestion = 0;
let startGame = document.querySelector('.js-button-start-game');
startGame.addEventListener('click',()=>{
    document.querySelector('.js-quiz-starting-area').innerHTML = ``;
    renderQuiz();
})
function renderQuiz(){
    let message = "";
    let htmlQuiz = "";
    if(currentQuizQuestion>= Questions.length){
        if(((correct/Questions.length)*100)<33){
            message = "Padhle Bhai!!";
        }
        else if(((correct/Questions.length)*100)<50){
            message = "Thoda Mehnat karo!!";
        }
        else if(((correct/Questions.length)*100)<90){
            message = "Hamara bhai OP";
        }
        else{
            message = "Topper log ab inse kaise baat karu";
        }
        document.querySelector('.js-quiz-QA').innerHTML = 
        `
            <div class="result-container">
            <div class="heading-result">Quiz Results</div>
            <div class="score-result">
                <div class="score-shown">You Scored ${correct} out of ${Questions.length}</div>
                <div class="message">${message}</div>
            </div>
            <div class="div-button-restart">
                <button class="button-restart js-button-restart">Restart Quiz</button>
            </div>
        </div>
        `;
        const restartButton = document.querySelector('.js-button-restart');
        restartButton.addEventListener('click',()=>{
            currentScore = 0;
            currentQuizQuestion = 0;
            correct = 0;
            renderQuiz();
        })
        return;
    }
    const quizQuestion = Questions[currentQuizQuestion];
    const progressPercentage = (currentQuizQuestion / Questions.length) * 100;
    htmlQuiz += `
    <div class="container-quiz">
        <div class="question">${quizQuestion.question}</div>
        <div class="question-no-score">
            <div class="question-no">Question ${quizQuestion.questionNo} of ${Questions.length}</div>
            <div class="score js-score">Score: ${currentScore}</div>
        </div>
    <div class="button-answers">
        <button class="answer js-answer-input">${quizQuestion.answers.option1}</button>
        <button class="answer js-answer-input">${quizQuestion.answers.option2}</button>
        <button class="answer js-answer-input">${quizQuestion.answers.option3}</button>
        <button class="answer js-answer-input">${quizQuestion.answers.option4}</button>
    </div>
        <div class="button-answers">
            <div class="progress-bar">
                <div class="progress-fill" style="width:${progressPercentage}%"></div>
            </div>
        </div>
    </div>`
    let selectedChoice = "";
    document.querySelector('.js-quiz-QA').innerHTML = htmlQuiz;
    document.querySelectorAll('.js-answer-input').forEach((button)=>{
        button.addEventListener('click',()=>{
            selectedChoice = button.innerText;
            if(selectedChoice === quizQuestion.correctAnswer){
                increaseScore();
                correct++;
                button.classList.add('correct');
                CorrectAnswerAudio.currentTime = 0;
                CorrectAnswerAudio.play();
            }
            else{
                button.classList.add('wrong');
                document.querySelectorAll('.js-answer-input').forEach((answerButton)=>{
                    if(answerButton.innerText === quizQuestion.correctAnswer){
                        answerButton.classList.add('correct');
                    }
                })
            }
            setTimeout(()=>{
                currentQuizQuestion++;
                renderQuiz();
            },800);
        })
    })
}
function increaseScore(){
    currentScore += 10;
}



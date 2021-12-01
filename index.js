// creating quiz and save it inside an object
const quizData = [
    {
        question: "What is the most popular programming language in 2021",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "b",
    },
    {
        question: "Which company developed JavaScript",
        a: "Netscape",
        b: "Tesla",
        c: "Solaris",
        d: "Windows",
        correct: "a",
    },
    {
        question: "How many tipe variables have in javascript?",
        a: "3",
        b: "4",
        c: "5",
        d: "2",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// getting data
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let answer_ctn = document.querySelectorAll('.answer');
let quizContent_a = document.getElementById('ctn_a');
let quizContent_b = document.getElementById('ctn_b');
let quizContent_c = document.getElementById('ctn_c');
let quizContent_d = document.getElementById('ctn_d');
let button = document.getElementById('btn');

// variables which we use later 
let quizNow = 0;
let score = 0;


// we gonna call our loading quiz function.
loadingQuiz();


// this function add our quiz to html
function loadingQuiz() {

    unselectAnswer();

    const quizNowData = quizData[quizNow];

    question.innerText = quizNowData.question;
    quizContent_a.innerText = quizNowData.a;
    quizContent_b.innerText = quizNowData.b;
    quizContent_c.innerText = quizNowData.c;
    quizContent_d.innerText = quizNowData.d;
}


// we gonna loop through question and get correct answers
function getSelected() {
    let correctranswer = undefined;

    answer_ctn.forEach((answer_ctn) => {
        if (answer_ctn.checked) {
            correctranswer = answer_ctn.id;
        }
    });

    return correctranswer;
}

// function which check is user has answer at least one question. 
function unselectAnswer() {
    answer_ctn.forEach((answer) => {
        answer.checked = false;
    });
}


// function which check correct answers. 
button.addEventListener('click', () => {
        const correctranswer = getSelected();

        if (correctranswer) {
            if (correctranswer === quizData[quizNow].correct) {
                score++;
            }
    
            quizNow++;
            if (quizNow < quizData.length) {
                loadingQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
})

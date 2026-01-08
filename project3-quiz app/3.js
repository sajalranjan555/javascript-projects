const questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false},
        ]
    },
    {
        question:"which is largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antarctica",correct:true},
        ]
    },
    {
        question:"which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    }
];

const heading=document.getElementById("bottomheading")
const answerbutton=document.getElementById("button1")
const nextbutton=document.getElementById("next")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
     showQuestion();
}
function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
    heading.innerHTML=questionNo +"."+ currentQuestion.question;

//answers add karo
currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button") 
    button.innerHTML=answer.text
    button.classList.add("btn")
    answerbutton.appendChild("button")
});
     
}
startQuiz();


let data = {
    javascript: [
        {
            question: "What is JavaScript?",
            answer: "JavaScript is a scripting language used to create interactive web pages."
        },
        {
            question: "What is DOM?",
            answer: "DOM stands for Document Object Model."
        }
    ],

    python: [
        {
            question: "What is Python?",
            answer: "Python is a high-level programming language."
        },
        {
            question: "What is a List?",
            answer: "A List is a collection of items stored in a single variable."
        }
    ],

    java: [
        {
            question: "What is Java?",
            answer: "Java is an object-oriented programming language."
        },
        {
            question: "What is JVM?",
            answer: "JVM stands for Java Virtual Machine."
        }
    ],
    html: [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is the purpose of HTML?",
        answer: "HTML is used to create the structure of web pages."
    }
],

    css: [
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets."
    },
    {
        question: "Why is CSS used?",
        answer: "CSS is used to style and design web pages."
    }
],

    django: [
    {
        question: "What is Django?",
        answer: "Django is a Python web framework used to build web applications."
    },
    {
        question: "What is a Django Model?",
        answer: "A Model is used to define and manage database data."
    }
]
};

let currentAnswer = "";

function nextQuestion()
{
    let category = document.getElementById("category").value;

    let questions = data[category];

    let random = Math.floor(Math.random() * questions.length);

    document.getElementById("question").textContent =
        questions[random].question;

    currentAnswer = questions[random].answer;

    document.getElementById("answer").textContent = "";
}

function showAnswer()
{
    document.getElementById("answer").textContent = currentAnswer;
}
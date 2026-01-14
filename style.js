let currentQuestion = 0;
const questions = [
    {
                question: "1. What does HTML stand for?",
                answer1: "A) Hyper Text Markup Language",
                answer2: "B) High Tech Modern Language",
                correctAnswer: "A) Hyper Text Markup Language"
            },
            {
                question: "2. Which tag is used to create a paragraph in HTML?",
                answer1: "A) <p>",
                answer2: "B) <h1>",
                correctAnswer: "A) <p>"
            },
            {
                question: "3. Which tag is used for the largest heading?",
                answer1: "A) <h1>",
                answer2: "B) <h6>",
                correctAnswer: "A) <h1>"
            },
            {
                question: "4. Which tag is used to insert an image?",
                answer1: "A) <img>",
                answer2: "B) <image>",
                correctAnswer: "A) <img>"
            },
            {
                question: "5. HTML files are saved with which extension?",
                answer1: "A) .html",
                answer2: "B) .txt",
                correctAnswer: "A) .html"
            },
            {
                question: "6. Which tag is used to create a link?",
                answer1: "A) <a>",
                answer2: "B) <link>",
                correctAnswer: "A) <a>"
            },
            {
                question: "7. Which attribute is used to give a link URL?",
                answer1: "A) href",
                answer2: "B) src",
                correctAnswer: "A) href"
            },
            {
                question: "8. Which tag is used to create a button?",
                answer1: "A) <button>",
                answer2: "B) <input>",
                correctAnswer: "A) <button>"
            },
            {
                question: "9. Which tag is used to display a list with bullets?",
                answer1: "A) <ul>",
                answer2: "B) <ol>",
                correctAnswer: "A) <ul>"
            },
            {
                question: "10. Which tag is used to create a table?",
                answer1: "A) <table>",
                answer2: "B) <tab>",
                correctAnswer: "A) <table>"
            },
            {
                question: "11. Which tag is used for a line break?",
                answer1: "A) <br>",
                answer2: "B) <break>",
                correctAnswer: "A) <br>"
            },
            {
                question: "12. Which tag is used to make text bold?",
                answer1: "A) <b>",
                answer2: "B) <strong>",
                correctAnswer: "A) <b>"
            },
            {
                question: "13. Which tag is used to create an ordered list?",
                answer1: "A) <ol>",
                answer2: "B) <ul>",
                correctAnswer: "A) <ol>"
            },
            {
                question: "14. Which attribute is used to show image location?",
                answer1: "A) src",
                answer2: "B) alt",
                correctAnswer: "A) src"
            },
            {
                question: "15. Which tag contains all visible content of a webpage?",
                answer1: "A) <body>",
                answer2: "B) <head>",
                correctAnswer: "A) <body>"
            },
            {
                question: "16. Which tag is used to add a title to the webpage?",
                answer1: "A) <title>",
                answer2: "B) <meta>",
                correctAnswer: "A) <title>"
            },
            {
                question: "17. HTML is a:",
                answer1: "A) Presentation Language",
                answer2: "B) Markup Language",
                correctAnswer: "B) Markup Language"
            },
            {
                question: "18. Which tag is used to create an input field?",
                answer1: "A) <input>",
                answer2: "B) <field>",
                correctAnswer: "A) <input>"
            },
            {
                question: "19. Which tag is used to create a checkbox?",
                answer1: "A) <img>",
                answer2: "B) <image>",
                correctAnswer: "A) <img>"
            },
            {
                question: "20. Which tag is used to include CSS inside HTML?",
                answer1: "A) <img>",
                answer2: "B) <image>",
                correctAnswer: "A) <img>"
            },
        ]

        let score = 0;
        const selections = new Array(questions.length).fill(null);
        const scored = new Array(questions.length).fill(false);

        function updateScoreDisplay(){
            const scoreEl = document.getElementById('score');
            if (scoreEl) scoreEl.innerText = score;
        }

        loadQuestion()
        loadButtons()
        updateScoreDisplay()

        function loadQuestion(){
            const queEle = document.getElementById("question");
            const an1Ele = document.getElementById("answer1");
            const an2Ele = document.getElementById("answer2");

            queEle.innerText = questions[currentQuestion].question;
            an1Ele.innerText = questions[currentQuestion].answer1;
            an2Ele.innerText = questions[currentQuestion].answer2;

            document.querySelectorAll('.answer-text').forEach(el => {
                el.classList.remove('bg-blue-500','text-white');
            });
            document.querySelectorAll('.mark-btn').forEach(btn => {
                btn.classList.remove('bg-blue-700','text-white');
            });

            const sel = selections[currentQuestion];
            if (sel != null) {
                const ansText = document.getElementById('answer' + sel);
                const markBtn = document.getElementById('mark' + sel);
                if (ansText) ansText.classList.add('bg-blue-500','text-white');
                if (markBtn) markBtn.classList.add('bg-blue-700','text-white');
            }

            updateScoreDisplay();
        }

        function markAnswer(n){
            document.querySelectorAll('.answer-text').forEach(el => el.classList.remove('bg-blue-500','text-white'));
            document.querySelectorAll('.mark-btn').forEach(btn => btn.classList.remove('bg-blue-700','text-white'));

            const ansText = document.getElementById('answer' + n);
            const markBtn = document.getElementById('mark' + n);
            if (ansText) ansText.classList.add('bg-blue-500','text-white');
            if (markBtn) markBtn.classList.add('bg-blue-700','text-white');

            selections[currentQuestion] = n;
        }

        function loadNextQuestion(){
            const sel = selections[currentQuestion];
            if (!scored[currentQuestion] && sel != null) {
                const selectedText = questions[currentQuestion]['answer' + sel];
                if (selectedText === questions[currentQuestion].correctAnswer) {
                    score++;
                    scored[currentQuestion] = true;
                    updateScoreDisplay();
                }
            }

            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
                loadButtons();
            }
        }
        function loadBackQuestion(){
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
                loadButtons();
            }
        }

        function loadButtons(){
            const nextButton = document.getElementById("nextbutton");
            const backButton = document.getElementById("backbutton");
            const finishButton = document.getElementById("finishbutton");

            if(currentQuestion >= (questions.length - 1)){
                if (nextButton) nextButton.style.display = "none";
                if (finishButton) finishButton.style.display = "block";
            } else {
                if (nextButton) nextButton.style.display = "block";
                if (finishButton) finishButton.style.display = "none";
            }

            if(currentQuestion == 0){
                backButton.style.display = "none";
            } else {
                backButton.style.display = "block";
            }

            if(currentQuestion == (questions.length - 1)){
                backButton.style.marginTop = 32 + "px";
            } else {
                backButton.style.marginTop = "";
            }
        }

        function finishQuiz(){
            const sel = selections[currentQuestion];
            if (!scored[currentQuestion] && sel != null) {
                const selectedText = questions[currentQuestion]['answer' + sel];
                if (selectedText === questions[currentQuestion].correctAnswer) {
                    score++;
                    scored[currentQuestion] = true;
                    updateScoreDisplay();
                }
            }


            const wrap = document.getElementById('quizWrap');
            if (wrap) wrap.style.display = 'none';
            const resultDiv = document.getElementById('result');
            const finalScore = document.getElementById('finalScore');
            if (finalScore) finalScore.innerText = score;
            if (resultDiv) resultDiv.style.display = 'flex';
        }

        function resetQuiz(){
            const resultDiv = document.getElementById('result');
            if (resultDiv) resultDiv.style.display = 'none';

            score = 0;
            for (let i = 0; i < questions.length; i++) {
                selections[i] = null;
                scored[i] = false;
            }
            updateScoreDisplay();
            currentQuestion = 0;
            const wrap = document.getElementById('quizWrap');
            if (wrap) wrap.style.display = 'block';
            loadQuestion();
            loadButtons();
        }

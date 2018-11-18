var intervalId;

var game = {

    questions: [
        question1 = {
            question: "What is the name of the character with eight tentacles in Spongebob?",
            answers: ["Plankton", "Squidward", "Patrick", "Old Man Jennkins"],
            correctAnswer: "Squidward",
            stage: 1
        },
        question2 = {
            question: "Where does Spongebob work at?",
            answers: ["Krusty Krab", "Krusty Dogs", "Chum Bucket", "Rusty Shack"],
            correctAnswer: "Krusty Krab",
            stage: 2

        },

        question3 = {
            question: "Who is Spongebobs best friend?",
            answers: ["Sandy", "Larry", "Patrick", "Squidward"],
            correctAnswer: "Patrick",
            stage: 3
        },

        question4 = {
            question: "What is the name of Spongebob's Cousin",
            answers: ["Stephen", "Stanley", "Steve", "Sean"],
            correctAnswer: "Stanley",
            stage: 4
        },

        question5 = {
            question: "What is the name of Patrick's pet rock?",
            answers: ["Rocky", "Pebble", "Patrock", "Stoney"],
            correctAnswer: "Rocky",
            stage: 5
        },

        question6 = {
            question: "What Animal Attacks Spongebob, Patrick, and Squidward in the camping episode?",
            answers: ["Dolphin", "King Jellyfish", "Sea Cow", "Sea Bear"],
            correctAnswer: "Sea Bear",
            stage: 6
        },

        question7 = {
            question: "What activity does Squidward enjoy doing?",
            answers: ["Driving His Car", "Riding His Skateboard", "Riding His Bicycle", "Riding His Scooter"],
            correctAnswer: "Riding His Bicycle",
            stage: 7
        },

        question8 = {
            question: "What Episode Did Spongebob and Sandy First Meet?",
            answers: ["Karate Island", "For Tea", "Science Lessons", "Karate Lessons"],
            correctAnswer: "For Tea",
            stage: 8
        },

        question9 = {
            question: "What Tiny Instrument Does Mr. Krabs Play?",
            answers: ["Violin", "Trumpet", "Cello", "Harp"],
            correctAnswer: "Violin",
            stage: 9
        },

        question10 = {
            question: "What Is Planktons Real Name?",
            answers: ["Plankton", "Sheldon T. Plankton", "Eugene Plankton", "Sheldon J. Plankton"],
            correctAnswer: "Sheldon J. Plankton",
            stage: 10
        }
    ],



    stage: 1,
    rightAnswers: 0,
    wrongAnswers: 0,
    chosen: "",
    time: 15,
    clockRunning: false,

    startGame: function () {
        game.stage = 1;
        game.wrongAnswers = 0;
        game.rightAnswers = 0;
        game.questionChooser();
        $(".try-again").text("")
        $(".answersRight").text("")
        $(".answersWrong").text("")
        $(".giphy-sticker").attr("src", "https://giphy.com/embed/YCAZI58mofD6E");
    },

    questionChooser: function () {
        for (i = 0; i < game.questions.length; i++) {
            if (game.stage === game.questions[i].stage) {
                $(".start").text("")
                $("#question").text(game.questions[i].question)
                $("#aAnswer").text(game.questions[i].answers[0])
                $("#bAnswer").text(game.questions[i].answers[1])
                $("#cAnswer").text(game.questions[i].answers[2])
                $("#dAnswer").text(game.questions[i].answers[3])
            }

        }
    },

    checkAnswer: function () {
        for (i = 0; i < game.questions.length; i++) {
            if (game.chosen === game.questions[i].correctAnswer && game.stage === game.questions[i].stage) {
                game.stage++;
                game.rightAnswers++;
                game.chosen = "";
                this.questionChooser();
                console.log("Right Answers So Far " + game.rightAnswers)
            }
        }
    },

    checkWrong: function () {
        for (i = 0; i < game.questions.length; i++) {
            if (game.chosen != game.questions[i].answer && game.chosen != "" || game.time === 0) {
                game.stage++;
                game.wrongAnswers++;
                game.chosen = "";
                this.questionChooser();
                console.log("Wrong So Far: " + game.wrongAnswers)
            }
        }
    },

    checkGameOver: function () {
        if (game.stage === game.questions.length + 1) {
            this.stopGame();
        }
    },

    timer: function () {
        if (!game.clockRunning) {
            intervalId = setInterval(game.count, 1000)
            game.clockRunning = true;
        }
    },
    count: function () {
        if (game.time > 0 && game.clockRunning === true) {
            game.time--;
            $("#time").text(`${game.time} Seconds Left`)
        }

        if (game.time === 0 && game.clockRunning === true) {
            game.checkWrong();
            game.checkGameOver();
            game.time = 15;
            $("#time").text(`${game.time} Seconds Left`);

        }
    },

    timerReset: function () {
        game.time = 15;
        $("#time").text(`${game.time} Seconds Left`);
    },

    stopGame: function () {
        $(".answer").text("");
        $("#question").text("");
        $(".try-again").text("Try Again?")
        $(".answersRight").text(`You Got ${game.rightAnswers} Right!`)
        $(".answersWrong").text(`You Got ${game.wrongAnswers} Wrong!`)
        clearInterval(intervalId);
        game.clockRunning = false;
        $("#time").text("")
        $(".giphy-sticker").attr("src", "https://giphy.com/embed/yqMtk0TfjRa5W")
    }
}

$(".start").on("click", function () {
    game.startGame();
    game.timer();
    game.count();
})

$(".try-again").on("click", function () {
    game.startGame();
    game.timer();
    game.count();
})



$(".answer").on("click", function () {
    game.chosen = $(this).text()

    game.timerReset();
    game.checkAnswer();
    game.checkWrong();
    game.checkGameOver();
})

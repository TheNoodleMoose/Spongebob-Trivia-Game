// Var for the timer
var intervalId;

//Game object that holds all the questions and functions for the game
var game = {
    //Questions array 
    questions: [
        //Each question objectnis structured the same
        // The first line is for the questions being asked
        // The second line is a answers array which all four possible answers are stored
        // The third line is the correct answers as a string, used to compare to what the users clicks on
        // The final line is the stage the question is on, used to check which question will be displayed
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


    // Used to check which question will be displayed
    stage: 1,
    // Used to store the amount of correct answers
    rightAnswers: 0,
    // Used to store the amount of wrong answers
    wrongAnswers: 0,
    // This holds the text of the answer the user clicks on and checks it against the correct answer of that question
    chosen: "",
    // Used for the timer
    time: 15,
    // Used to determine if the clock is running
    clockRunning: false,

    // Start game function that resets everything back and displays the gary gif
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
    // This is used to display the questions
    // For game.questions array if the game.stage is equal to the stage of game.questions[i], than display the questions.
    // Also display all the possible answers
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
    // This is used to check if the answer is correct
    // If what the user clicks on is equal to the string of the correct answer of that particular question,
    // Than add to teh game stage, add to rightanswers, and then reset what they choose back to an empty string
    // Then run question choose again to display the next set of questions and answers
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
    // Used to check if what the user clicks on is the wrong answer
    // If what they click on is not equal to the string of the correct answer AND its not equal to a empty string than 
    // Up the game stage, add to wrong answers, reset the chosen value to an empty string and run question chooser
    // The reason for the game.chosen != "" is because check answer and check wrong run at the same time so when it
    // Goes to the next stage its reset to an empty string and it automatically scored that as wrong. This fixed it.
    // Also if the time runs out than that counts as a wrong answer
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
    // This is used to check if the game is over by comparing the gam.e stage to length of game.questions plus 1.
    checkGameOver: function () {
        if (game.stage === game.questions.length + 1) {
            this.stopGame();
        }
    },
    // Used for the timer
    timer: function () {
        if (!game.clockRunning) {
            intervalId = setInterval(game.count, 1000)
            game.clockRunning = true;
        }
    },
    // This displays the clock counting down and if it runs out than set game.time back to fifteen 
    // and add to their wrong answers
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
    // Resets the timer
    timerReset: function () {
        game.time = 15;
        $("#time").text(`${game.time} Seconds Left`);
    },
    // This stops the game and displays how many the user got right/wrong. Clears the timer and stops the clock and
    // displays the spongebob dancing gif
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

// When the user clicks the start button than start the game and start the timer
$(".start").on("click", function () {
    game.startGame();
    game.timer();
    game.count();
})
// When the user clicks the try again button than reset the game and start again
$(".try-again").on("click", function () {
    game.startGame();
    game.timer();
    game.count();
})
// This is used to check the value of what the used clicks on. The text
// of what they choose of is stored as a variable called game.chosen and
// game.checkAnswer and checkWrong run to check if game.chosen is correct or incorrect
$(".answer").on("click", function () {
    game.chosen = $(this).text()

    game.timerReset();
    game.checkAnswer();
    game.checkWrong();
    game.checkGameOver();
})

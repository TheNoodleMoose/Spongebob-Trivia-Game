console.log("This works!")

var game = {

    questions: [
        question1 = {
            question: "What is the name of the character with eight tentacles in Spongebob?",
            wrong1: "Plankton",
            answer: "Squidward",
            wrong2: "Patrick",
            wrong3: "Old Man Jennkins",
            stage: 1
        },
        question2 = {
            question: "Where does Spongebob work at?",
            answer: "Krusty Krab",
            wrong1: "Krusty Dogs",
            wrong2: "Chum Bucket",
            wrong3: "Rusty Shack",
            stage: 2

        },

        question3 = {
            question: "Who is Spongebobs best friend?",
            answer: "Patrick",
            wrong1: "Squidward",
            wrong2: "Sandy",
            wrong3: "Larry",
            stage: 3
        },

        question4 = {
            question: "What is the name of Spongebob's Cousin",
            answer: "Stanley",
            wrong1: "Steve",
            wrong2: "Sean",
            wrong3: "Stephen",
            stage: 4
        },

        question5 = {
            question: "What is the name of Patrick's pet rock?",
            answer: "Rocky",
            wrong1: "Pebble",
            wrong2: "Stoney",
            wrong3: "Patrock",
            stage: 5
        },

        question6 = {
            question: "What Animal Attacks Spongebob, Patrick, and Squidward in the camping episode?",
            answer: "Sea Bear",
            wrong1: "Sea Cow",
            wrong2: "Dolphin",
            wrong3: "King Jellyfish",
            stage: 6
        }],



    stage: 1,
    rightAnswers: 0,
    wrongAnswers: 0,
    chosen: "",

    startGame: function () {
        game.stage = 1;
        game.questionChooser();
    },

    questionChooser: function () {
        for (i = 0; i < game.questions.length; i++) {
            if (game.stage === game.questions[i].stage) {
                $("#question").html(game.questions[i].question)
                $("#aAnswer").html(game.questions[i].wrong3)
                $("#bAnswer").html(game.questions[i].wrong1)
                $("#cAnswer").html(game.questions[i].wrong2)
                $("#dAnswer").html(game.questions[i].answer)
            }
        }
    },

    checkAnswer: function() {
        for(i = 0; i < game.questions.length; i++) {
            if(game.chosen === game.questions[i].answer && game.stage === game.questions[i].stage) {
                game.stage++;
                game.rightAnswers++;
                game.chosen = "";
                this.questionChooser();
                console.log("Right Answers So Far " + game.rightAnswers)
            }
        }
    },

    checkWrong: function() {
        for(i = 0; i < game.questions.length; i++) {
            if(game.chosen != game.questions[i].answer && game.chosen != "") {
                game.stage++;
                game.wrongAnswers++;
                game.chosen = "";
                this.questionChooser();
                console.log("Wrong So Far: " + game.wrongAnswers)
            }
        }
    }

}
game.startGame();

$(".answer").on("click", function () {
    game.chosen = $(this).text()

    game.checkAnswer();
    game.checkWrong();

})

console.log("This works!")

var game = {

    questions: [
        question1 = {
            question: "What is the name of the character with eight tentacles in Spongebob?",
            answers: ["Plankton","Squidward","Patrick","Old Man Jennkins"],
            correctAnswer: "Squidward",
            stage: 1
        },
        question2 = {
            question: "Where does Spongebob work at?",
            answers: ["Krusty Krab","Krusty Dogs","Chum Bucket","Rusty Shack"], 
            correctAnswer: "Krusty Krab",
            stage: 2

        },

        question3 = {
            question: "Who is Spongebobs best friend?",
            answers: ["Sandy","Larry","Patrick","Squidward"], 
            correctAnswer: "Patrick",
            stage: 3
        },

        question4 = {
            question: "What is the name of Spongebob's Cousin",
            answers: ["Stephen","Stanley","Steve","Sean"], 
            correctAnswer: "Stanley",
            stage: 4
        },

        question5 = {
            question: "What is the name of Patrick's pet rock?",
            answers: ["Rocky","Pebble","Patrock","Stoney"], 
            correctAnswer: "Rocky", 
            stage: 5
        },

        question6 = {
            question: "What Animal Attacks Spongebob, Patrick, and Squidward in the camping episode?",
            answers: ["Dolphin","King Jellyfish","Sea Cow","Sea Bear"], 
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

    startGame: function () {
        game.stage = 1;
        game.questionChooser();
    },

    questionChooser: function () {
        for (i = 0; i < game.questions.length; i++) {
            if (game.stage === game.questions[i].stage) {
                $("#question").html(game.questions[i].question)
                $("#aAnswer").html(game.questions[i].answers[0])
                $("#bAnswer").html(game.questions[i].answers[1])
                $("#cAnswer").html(game.questions[i].answers[2])
                $("#dAnswer").html(game.questions[i].answers[3])
            }
        }
    },

    checkAnswer: function() {
        for(i = 0; i < game.questions.length; i++) {
            if(game.chosen === game.questions[i].correctAnswer && game.stage === game.questions[i].stage) {
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
    },

    checkGameOver: function() {
        if(game.stage === game.questions.length + 1) {
            console.log("You Got " + game.rightAnswers + " answers right and You got " + game.wrongAnswers + " answers wrong!")
        }
    }

}
game.startGame();

$(".answer").on("click", function () {
    game.chosen = $(this).text()

    game.checkAnswer();
    game.checkWrong();
    game.checkGameOver();
})

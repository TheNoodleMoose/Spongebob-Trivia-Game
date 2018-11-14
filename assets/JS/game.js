console.log("This works!")

var game = {
    question1: {
        question: "What is the name of the character with eight tentacles in Spongebob?",
        answer: "Squidward",
        wrong1: "Plankton",
        wrong2: "Patrick",
        wrong3: "Old Man Jennkins"
    },
    question2: {
        question: "Where does Spongebob work at?",
        answer: "Krusty Krab",
        wrong1: "Krusty Dogs",
        wrong2: "Chum Bucket",
        wrong3: "Rusty Shack"
    },

    question3: {
        question: "Who is Spongebobs best friend?",
        answer: "Patrick",
        wrong1: "Squidward",
        wrong2: "Sandy",
        wrong3: "Larry"
    },

    question4: {
        question: "What is the name of Spongebob's Cousin",
        answer: "Stanley",
        wrong1: "Steve",
        wrong2: "Sean",
        wrong3: "Stephen"
    },

    question5: {
        question: "What is the name of Patrick's pet rock?",
        answer: "Rocky",
        wrong1: "Pebble",
        wrong2: "Stoney",
        wrong3: "Patrock"
    },

    question6: {
        question: "What Animal Attacks Spongebob, Patrick, and Squidward in the camping episode?",
        answer: "Sea Bear",
        wrong1: "Sea Cow",
        wrong2: "Dolphin",
        wrong3: "King Jellyfish"
    },

    question7: {
        question: "What ",
        answer: "Sea Bear",
        wrong1: "Sea Cow",
        wrong2: "Dolphin",
        wrong3: "King Jellyfish"
    },

    

    gamestage: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
    chosen: "",

    startGame: function () {
        game.gamestage = 0;
        $("#question").html(game.question1.question)
        $("#aAnswer").html(game.question1.answer)
        $("#bAnswer").html(game.question1.wrong1)
        $("#cAnswer").html(game.question1.wrong2)
        $("#dAnswer").html(game.question1.wrong3)
    },
}

game.startGame();

$(".answer").on("click", function () {
    game.chosen = $(this).text()
    //QUESTION 1
    if (game.gamestage === 0) {
        if (game.chosen === game.question1.answer) {
            game.rightAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question2.question)
            $("#aAnswer").html(game.question2.wrong3)
            $("#bAnswer").html(game.question2.wrong1)
            $("#cAnswer").html(game.question2.wrong2)
            $("#dAnswer").html(game.question2.answer)
            console.log("Right: " +game.rightAnswers)

        }
        else {
            game.wrongAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question2.question)
            $("#aAnswer").html(game.question2.wrong3)
            $("#bAnswer").html(game.question2.wrong1)
            $("#cAnswer").html(game.question2.wrong2)
            $("#dAnswer").html(game.question2.answer)
            console.log("Wrong:" +game.wrongAnswers)
        }

    }
    //QUESTION 2
    if (game.gamestage === 1 && game.chosen != "") {
        if (game.chosen === game.question2.answer) {
            game.rightAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question3.question)
            $("#aAnswer").html(game.question3.wrong3)
            $("#bAnswer").html(game.question3.answer)
            $("#cAnswer").html(game.question3.wrong1)
            $("#dAnswer").html(game.question3.wrong2)
            console.log("Right:" +game.rightAnswers)
        }
        else {
            game.wrongAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question3.question)
            $("#aAnswer").html(game.question3.wrong3)
            $("#bAnswer").html(game.question3.answer)
            $("#cAnswer").html(game.question3.wrong1)
            $("#dAnswer").html(game.question3.wrong2)
            console.log("Wrong:" +game.wrongAnswers)

        }
    }
    //QUESTION 3
    if (game.gamestage === 2 && game.chosen != "") {
        if (game.chosen === game.question3.answer) {
            game.rightAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question4.question)
            $("#aAnswer").html(game.question4.answer)
            $("#bAnswer").html(game.question4.wrong1)
            $("#cAnswer").html(game.question4.wrong2)
            $("#dAnswer").html(game.question4.wrong3)
            console.log("Right:" +game.rightAnswers)
        }
        else {
            game.wrongAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question4.question)
            $("#aAnswer").html(game.question4.answer)
            $("#bAnswer").html(game.question4.wrong1)
            $("#cAnswer").html(game.question4.wrong2)
            $("#dAnswer").html(game.question4.wrong3)
            console.log("Wrong:" +game.wrongAnswers)

        }
    }
    //QUESTION 4
    if (game.gamestage === 3 && game.chosen != "") {
        if (game.chosen === game.question4.answer) {
            game.rightAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question5.question)
            $("#aAnswer").html(game.question5.wrong2)
            $("#bAnswer").html(game.question5.wrong3)
            $("#cAnswer").html(game.question5.wrong1)
            $("#dAnswer").html(game.question5.answer)
            console.log("Right:" +game.rightAnswers)
        }
        else {
            game.wrongAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question5.question)
            $("#aAnswer").html(game.question5.wrong2)
            $("#bAnswer").html(game.question5.wrong3)
            $("#cAnswer").html(game.question5.wrong1)
            $("#dAnswer").html(game.question5.answer)
            console.log("Wrong:" +game.wrongAnswers)

        }
    }
    //QUESTION 5
    if (game.gamestage === 4 && game.chosen != "") {
        if (game.chosen === game.question5.answer) {
            game.rightAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question6.question)
            $("#aAnswer").html(game.question6.wrong3)
            $("#bAnswer").html(game.question6.answer)
            $("#cAnswer").html(game.question6.wrong1)
            $("#dAnswer").html(game.question6.wrong2)
            console.log("Right:" +game.rightAnswers)
        }
        else {
            game.wrongAnswers++;
            game.gamestage++;
            game.chosen = "";
            $("#question").html(game.question6.question)
            $("#aAnswer").html(game.question6.wrong3)
            $("#bAnswer").html(game.question6.answer)
            $("#cAnswer").html(game.question6.wrong1)
            $("#dAnswer").html(game.question6.wrong2)
            console.log("Wrong:" +game.wrongAnswers)

        }
    }

})

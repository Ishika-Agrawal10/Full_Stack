 let score = 0;
        let answered = false;

        function checkAnswer(answer) {

            if (answered) {
                return;
            }

            answered = true;

            if (answer === "var") {
                score++;
                document.getElementById("result").innerText =
                    "Correct Answer! 🎉";
            } else {
                document.getElementById("result").innerText =
                    "Wrong Answer! Correct answer is var.";
            }

            document.getElementById("score").innerText =
                "Score: " + score;

            document.getElementById("bar").style.width = "100%";
        }
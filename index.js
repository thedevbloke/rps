let youScore = 0;
let cpuScore = 0;
const youScore_span = document.getElementById("you-score");
const cpuScore_span = document.getElementById("cpu-score");
const scores_div = document.querySelector(".scores");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCpuChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissors";
}

function win(youChoice, cpuChoice) {
  youScore++;
  youScore_span.innerHTML = youScore;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = `${convert(youChoice)} beats ${convert(cpuChoice)}. You Win!`;

}

function lose(youChoice, cpuChoice) {
  cpuScore++;
  youScore_span.innerHTML = youScore;
  cpuScore_span.innerHTML = cpuScore;
  result_p.innerHTML = `${convert(youChoice)} gets beaten by ${convert(cpuChoice)}. You Lose!`;
}

function draw(youChoice, cpuChoice) {
  result_p.innerHTML = `${convert(youChoice)} ties with ${convert(cpuChoice)}. It's A Draw!`;
}

function game(youChoice) {
  const cpuChoice = getCpuChoice();
  switch (youChoice + cpuChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(youChoice, cpuChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(youChoice, cpuChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(youChoice, cpuChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  })

  paper_div.addEventListener("click", function() {
    game("p");
  })

  scissors_div.addEventListener("click", function() {
    game("s");
  })
}

main();

let userscore = 0;
let compscore = 0;

// FIX 1: variable name should be plural
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];

  const ranidx = Math.floor(Math.random() * 3);

  return options[ranidx];
};

const drawgame = () =>{
  msg.innerText = "Game Was Drawn";
  msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;  
    msg.innerText = `You Win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;  
    msg.innerText = `Computer Win! ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};




// Function to play game
const playgame = (userchoice) => {
  const compchoice = gencompchoice();
  if(userchoice === compchoice){
    drawgame();
    }
    else{
      let userwin = true;

      if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
      } else if(userchoice === "paper"){
        userwin = compchoice === "scissore" ? false : true;
      } else {
        userwin =  compchoice === "scissore" ? false : true;
      }

      showwinner(userwin, userchoice ,compchoice);
    }
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

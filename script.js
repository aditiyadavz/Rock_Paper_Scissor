let user_Score=0;
let comp_Score=0;
let draw_Score=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScores= document.querySelector("#userScore");
const compScores= document.querySelector("#compScore");
const drawScores= document.querySelector("#drawScore");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock,paper,scissor
    //random function can't pick strings therefore..
    //..options is an array because of indexing
    const ranIdx= Math.floor(Math.random()*3);
    return options [ranIdx];
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin===true){
        user_Score++;
        userScores.innerText=user_Score;
        // console.log("YOU WIN :)");
        msg.innerText=`YOU WIN :) \n ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="rgb(135, 239, 135)";
    }
    else{
        comp_Score++;
        compScores.innerText=comp_Score;
        // console.log("YOU LOSS :(");
        msg.innerText=`YOU LOSS :( \n ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="rgb(237, 81, 81)";
    }
};

const playGame = (userChoice) =>{
    // console.log("User Choice:- ", userChoice);
    //generate comp choice
    const compChoice= genCompChoice();
    // console.log("Computer Choice:- ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            //scissors,rock 
            userWin= compChoice==="scissors"? false : true;
        }
        else{
            //rock,paper
            userWin= compChoice==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame= ()=>{
    draw_Score++;
    drawScores.innerText=draw_Score;
    // console.log("Game was draw !");
    msg.innerText="Game was draw !";
    msg.style.backgroundColor ="#1b3d63";
};
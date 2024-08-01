let userscore =0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gameCoChoice = () => { 
    const options = ["rock", "peperr","seccior" ];
    const randinx = Math.floor(Math.random()*3);
    return options[randinx];
}

const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "black";
    
}

const showwin = (userwin, compchoise, choiceId) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${choiceId} beats ${compchoise}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lost");
        msg.innerText = `You Lost Computer choice ${compchoise} beat Your choice ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (choiceId) => {
    console.log("user choise = ", choiceId);

    const compchoise = gameCoChoice();
    console.log("comp choise = ", compchoise);


    if (choiceId === compchoise) {
        //Draw game
        drawgame();
    }else{
        let userwin = true;
        if (choiceId === "rock") {
            userwin = compchoise === "peperr" ? false : true;
            
        }else if (choiceId === "peperr") {
            userwin = compchoise === "seccior" ? false : true;
            
        }else{
            userwin = compchoise === "rock" ? false : true;
        }
        showwin(userwin, compchoise, choiceId);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
        // console.log("choice was clicked", choiceId);
        playgame(choiceId);

    });
});
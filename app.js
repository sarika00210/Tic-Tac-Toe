let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// we have to use 2 d array for this tictactoe game 
let turnO = true; 
// following are the winning patterns on which when either cross or 
// zero are align in vertical , horizontal , 
// diagonal paatern then that particular pattern will win 
const winPatterns = 

[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO === true) { 
            // playe 0 ki turn h to inner text m 0 dalengey fir 
            // 0 ko false kr dengey 
            // this can also be written as if(turnO){}
            box.innerText = "O" ;
            turnO = false;
            } else{
                // similarly player x ki turn h 
                box.innerText = "X" ;
                turnO = true;
            }
            box.disabled = true ;
            checkWinner();
    }) ;
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false; 
    }

};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true ; 
        box.innerText = "";
    }

};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    // now to find the winner we need to traverse each and every winning pattern 
    // wether it is lying on this or not

    for( let  pattern of winPatterns){
        // console.log(pattern[0] , pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText , 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
         let pos1Val =  boxes[pattern[0]].innerText ;
         let pos2Val =  boxes[pattern[1]].innerText ;
         let pos3Val =  boxes[pattern[2]].innerText ;

         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner" , pos1Val);
                showWinner(pos1Val);
            }
         }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click" , resetGame);


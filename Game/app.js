let boxes=document.querySelectorAll(".box");
let winningMsg=document.querySelector(".winningMsg");
let again=document.querySelector(".again");

let turn0=true;
let flag;
const winning=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],
    [6,7,8],[3,4,5]
];
boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        
       if(turn0){
        box.style.color="red";
        box.innerText="O";
        turn0=false;
       }
       else
       {
        box.innerText="X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();
    });
});
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
    
}
const showWinner=(winner)=>{
    winningMsg.innerText=`Congratulation !! Winner is ${winner}`;
    disableBoxes();
    };
const checkWinner=()=>{
    for(let pattern of winning){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1 !=="" && pos2!=="" && pos3!==""){
        if(pos1===pos2 && pos2===pos3){
                flag=true;
            }
            if(flag===true){
                console.log("Winner");
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
}    
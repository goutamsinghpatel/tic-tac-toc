
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector('#reset');
let newbtn=document.querySelector('#button1');
let msgcontenar=document.querySelector('.msg-contenar');

 

let turnO='true'//player1=x, player2=o//




const winpattern=[

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    
    
    ]


boxes.forEach((box)=>{



box.addEventListener('click',()=>{

   // console.log('click');
    if(turnO){
        box.innerText="O"
        box.style.fontSize="50px";
        turnO=false;
    }
    else{
        box.innerText="X"
        box.style.fontSize="50px";
        turnO=true;
    }
      box.disabled=true;
      checkwinner();

})

})



const disablebox=()=>
    {
    for(let box of boxes)
    box.disabled=true; 
    
    }

const showwinner=(winner)=>{
                          
let msg=document.createElement("h1");
msg.innerText=`CONGRATULATION,${winner}`; 

msg.style.color='red'
msgcontenar.append(msg);
msgcontenar.classList.remove("hide")
disablebox();




}




const checkwinner =()=>{
innerText="";
for(let pattern of winpattern){

  let pos1val=boxes[pattern[0]].innerText;
  let pos2val=boxes[pattern[1]].innerText;
  let pos3val=boxes[pattern[2]].innerText;


  if(pos1val!=''&& pos2val!=''&& pos3val!=''){




    if(pos1val==pos2val && pos2val==pos3val){

        console.log('winner',pos1val);

        showwinner(pos1val);
    }
  }


}

}
const resetgame=()=>{

    
turnO=true;

msgcontenar.classList.add("hide");


enable();


}
 const enable=()=>{




  for(let  box of boxes){


    box.disabled=false;
    box.innerText="";
  }
 }








newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);




























































































































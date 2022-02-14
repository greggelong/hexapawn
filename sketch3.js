let herBrain = []; // Hexapawn Educatable Robot Brain are an array of objects, matchbox movies

let boardStates = ["CCC---HHH"] // list of strings tht Identify board states

let myinput;
let reflect =false;



 
herBrain[0] =  {
  board: "CCCH---HH",
  gameMove:"2 left",
  expl: "computer starts with list of three possible moves",
  compMove:[ 
         "C-CHC--HH",
         "CC-H-C-HH",
         "C-CC---HH"
         ]
};

 

herBrain[1] =  {
    board: "CCC-H-H-H",
    gameMove:"2 center",
    expl: "computer starts with list of 4 possible moves although in the matchbox version they only list 2 to be reflected",
    compMove:[ 
           "-CCCH-H-H",
           "CC--HCH-H", 
           "-CC-C-H-H", // c captures h from the Left
           "CC--C-H-H"  // c captures h from the right
           ]
  };
  
  herBrain[2] =  {
    board: "C-CCH---H",
    gameMove:"4th turn from 2 left move3 and HB1toHB2",
    expl: "computer has 4 moves first move is a win box in Gardener is G3",
    compMove:[ 
           "C-C-H-C-H",  // computer win
           "--CCC---H", 
           "C--CC---H", 
           "C--CHC--H"  
           ]
  };


 

  herBrain[3] =  {
    board: "-CCHC---H",
    gameMove:"4th turn from 2 center move3 and HA1toHA2",
    expl: "computer has 3 moves one is a win in Gardner G4",
    compMove:[ 
           "--CCC---H",  
           "-CCH---CH", //win computer 
           "-C-HCC--H" 
           ]
  };

 
  
let turn = 0;
let mybutton;

function setup() {
  createCanvas(400, 400);
  fill(0,255,0)
  textAlign(LEFT,TOP);
  //rectMode(CENTER)
  
  myinput = createInput(boardStates[0])
  mybutton = createButton("return")
  mybutton.mouseClicked(update)
  createP(turn+" "+boardStates[0])
  makeReflection("C-CCH---H")
  showBoard(boardStates[0]);
  
}

 
function update(){
// make human move
reflect = false;
turn++
boardStates[turn] = myinput.value();
//createP(turn+" "+boardStates[turn])
//createP(boardStates[turn].slice(0,3))
//createP(boardStates[turn].slice(3,6))
//createP(boardStates[turn].slice(6,9))
showBoard(boardStates[turn])
// make computer move
// get index board state in brain
let bindex =0;
for(let i =0; i<herBrain.length;i++){
    print(i,herBrain[i].board)
    if (boardStates[turn] == herBrain[i].board || boardStates[turn] == makeReflection(herBrain[i].board)){
        if (reflect){
        createP(turn+"yes it is there as reflection"+herBrain[i].gameMove)
        }else{
            createP(turn+"yes it is there"+herBrain[i].gameMove)
        }
    break;
  }
}

// get move
turn++
if (reflect){
  boardStates[turn] = makeReflection(random(herBrain[bindex].compMove))
}else{
  boardStates[turn] = random(herBrain[bindex].compMove);
}
showBoard(boardStates[turn])



}

function showBoard(board){

 createP(turn+" "+board)
 createP(board.slice(0,3))
 createP(board.slice(3,6))
 createP(board.slice(6,9))
 myinput.value(board);

  background(0);
  textSize(40);
  let sz = 40;
  fill(255);
  stroke(255,0,0)
  for(let j=0; j<3;j++){
    for(let i =0;i<3;i++){
      rect(sz+i*sz,sz+j*sz,sz,sz)
    }
      
  }
  fill(0,255,0)
  text(board[0],40,40);
  text(board[1],80,40);
  text(board[2],130,40);
  text(board[3],40, 80);
  text(board[4],80,80);
  text(board[5],130,80);
  text(board[6],40,130);
  text(board[7],80,130);
  text(board[8],130,130);
  text(turn,300,300)
}



function makeReflection(mystring){
 // reflection function could be used to check boxes like Gardner
 let result = ""
 reflect = true;

 return result = mystring[2] +mystring[1]+mystring[0]+mystring[5]+mystring[4]+mystring[3]+mystring[8]+mystring[7]+mystring[6];
 
}
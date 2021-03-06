let herBrain = []; // Hexapawn Educatable Robot Brain are an array of objects, matchbox movies

let boardStates = ["CCC---HHH"] // list of strings tht Identify board states

let myinput;



 
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
    board: "CCC--HHH-",
    gameMove:"2 right",
    expl: "computer starts with list of three possible moves",
    compMove:[ 
           "C-C-CHHH-",
           "-CCC-HHH-",
           "C-C--CHH-"
           ]
  };

herBrain[2] =  {
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
  
  herBrain[3] =  {
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



  herBrain[4] =  {
    board: "C-C-HCH--",
    gameMove:"4th turn from 2 right move3 and HB1toHB2",
    expl: "computer has 4 moves first move is a win box is not in Gardener but a reflection",
    compMove:[ 
           "C-C-H-H-C",  // computer win
           "C---CCH--", 
           "--C-CCH--", 
           "--CCHCH--"  
           ]
  };
  

  herBrain[5] =  {
    board: "-CCHC---H",
    gameMove:"4th turn from 2 center move3 and HA1toHA2",
    expl: "computer has 3 moves one is a win in Gardner G4",
    compMove:[ 
           "--CCC---H",  
           "-CCH---CH", //win computer 
           "-C-HCC--H" 
           ]
  };


  herBrain[6] =  {
    board: "CC--CHH--",
    gameMove:"4th turn from 2 center move4 and Hc1toHc2",
    expl: "computer has 3 moves one is a win in not in Gardner is a reflection of G4",
    compMove:[ 
           "C---CCH--",  
           "CC---HHC-", //win computer 
           "-C-CCHH--" 
           ]
  };
  
let turn =0;
let mybutton;
function setup() {
  createCanvas(400, 400);
  fill(0,255,0)
  textAlign(LEFT,TOP);
  //rectMode(CENTER)
  showBoard(boardStates[0]);
  myinput = createInput(boardStates[0])
  mybutton = createButton("return")
  mybutton.mouseClicked(update)
  createP(turn+" "+boardStates[0])
  makeReflection("C-CCH---H")
  
}

 
function update(){
// make human move
turn++
boardStates[turn] = myinput.value();
createP(turn+" "+boardStates[turn])
createP(boardStates[turn].slice(0,3))
createP(boardStates[turn].slice(3,6))
createP(boardStates[turn].slice(6,9))
showBoard(boardStates[turn])
// make computer move
// check board state in brain
for(let i =0; i<herBrain.length;i++){
    print(i,herBrain[i].board)
    if (boardStates[turn] == herBrain[i].board){
        createP(turn+"yes it is there"+herBrain[i].gameMove)
        break;
  }
}





}

function showBoard(board,t){
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
 result = mystring[2] +mystring[1]+mystring[0]+mystring[5]+mystring[4]+mystring[3]+mystring[8]+mystring[7]+mystring[6];
 print(mystring,result)
}
let herBrain = []; // Hexapawn Educatable Robot Brain are an array of objects, matchbox movies

let boardStates = ["CCC---HHH"] // list of strings tht Identify board states



 
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
  
 

function setup() {
  createCanvas(400, 400);
  fill(0,255,0)
  textAlign(LEFT,TOP);
  //rectMode(CENTER)
  showBoard(boardStates[0]);
  
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
}
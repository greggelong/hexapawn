let herBrain = []; // Hexapawn Educatable Robot Brain are an array of objects, matchbox movies

let boardStates = [] // list of strings tht Identify board states


states[0] = {
  board: ["C","C","C"," "," "," ","H","H","H"],
  
  expl: "human moves first"
  
};
states[1] =  {
  board: ["C","C","C",
          "H"," "," ",
          " ","H","H"],
  expl: "computer has three moves",
  compMove:[["C"," ","C",
          "H","C"," ",
          " ","H","H"],
         
         ["C","C"," ",
          "H"," ","C",
          " ","H","H"],
          
         ["C"," ","C",
          "C"," "," ",
          " ","H","H"],
         ]
  
  
};

states[2] =  {
  board: ["C","C","C",
          " "," ","H",
          "H","H"," "],
  expl: "computer has three moves",
  compMove:
        [["C"," ","C",
          " ","C","H",
          "H","H"," "],
         
         [" ","C","C",
          "C"," ","H",
          "H","H"," "],
          
         ["C"," ","C",
          " "," "," ",
          "H","H","H"],
         ]
  
  
};

function setup() {
  createCanvas(400, 400);
  fill(0,255,0)
  textAlign(LEFT,TOP);
  //rectMode(CENTER)
  showBoard(states[2]);
  
}

 


function showBoard(move,t){
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
  text(move.board[0],40,40);
  text(move.board[1],80,40);
  text(move.board[2],130,40);
  text(move.board[3],40, 80);
  text(move.board[4],80,80);
  text(move.board[5],130,80);
  text(move.board[6],40,130);
  text(move.board[7],80,130);
  text(move.board[8],130,130);
  text(move.expl,40,200);
}
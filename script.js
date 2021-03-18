console.log("Smith Andrew");
// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 330; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var level = 0; //var added to print levels

for(var i = 0; i < 8; i++) {
  //change the pattern to be randomized
  pattern.push(Math.floor(Math.random()*4+1));
  //console log for testing purposes
  console.log("generated: " + pattern[i])
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  //resets the pattern
  pattern = [];
  for(var i = 0; i < 8; i++) {
    //change the pattern to be randomized
    pattern.push(Math.floor(Math.random()*4+1));
    //console log for testing purposes
    console.log("generated: " + pattern[i]);
  }
}

// Sound Synthesis Functions
const freqMap = {
  //sounds changed
  1: 280.6,
  2: 349.6,
  3: 412,
  4: 543.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    //level added to the page
    level = progress + 1;
    document.getElementById("level").innerHTML = "level " + level;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You Win!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  //is the guess correct?
  if(pattern[guessCounter] == btn){
    //guess was correct
    if(guessCounter == progress){
      //is this the last turn?
      if(progress == pattern.length - 1){
        //win
        winGame();
      }else{
        //next level
        progress++;
        playClueSequence();
      }
    }else{
      //is the turn over?
      guessCounter++;
    }
  }else{
    //guess was wrong
    loseGame();
  }
}
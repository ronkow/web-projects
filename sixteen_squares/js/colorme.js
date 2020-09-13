let s11 = document.getElementById("square11");
let s12 = document.getElementById("square12");
let s13 = document.getElementById("square13");
let s14 = document.getElementById("square14");
let s21 = document.getElementById("square21");
let s22 = document.getElementById("square22");
let s23 = document.getElementById("square23");
let s24 = document.getElementById("square24");
let s31 = document.getElementById("square31");
let s32 = document.getElementById("square32");
let s33 = document.getElementById("square33");
let s34 = document.getElementById("square34");
let s41 = document.getElementById("square41");
let s42 = document.getElementById("square42");
let s43 = document.getElementById("square43");
let s44 = document.getElementById("square44");

let p11 = document.getElementById("s1");
let p12 = document.getElementById("s2");
let p13 = document.getElementById("s3");
let p14 = document.getElementById("s4");
let p21 = document.getElementById("s5");
let p22 = document.getElementById("s6");
let p23 = document.getElementById("s7");
let p24 = document.getElementById("s8");
let p31 = document.getElementById("s9");
let p33 = document.getElementById("s11");
let p32 = document.getElementById("s10");
let p34 = document.getElementById("s12");
let p41 = document.getElementById("s13");
let p42 = document.getElementById("s14");
let p43 = document.getElementById("s15");
let p44 = document.getElementById("s16");

let posLeft = 0;
let posTop = 50;

// INITIALIZE TIMELEFT VALUE
let timeleft = 30;
document.getElementById("maxtime").innerHTML = "30";

let countdownTimer;

let elem = document.getElementById("movingSquare");
elem.style.backgroundColor = "red";



function disableColors() {
  document.getElementById("re").disabled = true;
  document.getElementById("bl").disabled = true;
  document.getElementById("gr").disabled = true;
  document.getElementById("ye").disabled = true;
}

function enableColors() {
  document.getElementById("re").disabled = false;
  document.getElementById("bl").disabled = false;
  document.getElementById("gr").disabled = false;
  document.getElementById("ye").disabled = false;
}

function disableDirections() {
  document.getElementById("l").disabled = true;
  document.getElementById("r").disabled = true;
  document.getElementById("u").disabled = true;
  document.getElementById("d").disabled = true;
}

function enableDirections() {
  document.getElementById("l").disabled = false;
  document.getElementById("r").disabled = false;
  document.getElementById("u").disabled = false;
  document.getElementById("d").disabled = false;
}

// Color buttons enabled by default on load
// enableColors();
disableDirections();

// disable Stop, Reset buttons
// Start, Generate buttons enabled by default on load
document.getElementById("sta").disabled = false;
document.getElementById("sto").disabled = true;
document.getElementById("res").disabled = true;
document.getElementById("gen").disabled = false;

function random() {
  let x = Math.floor((Math.random() * 4)+1);

  if (x == 1)
     c = "red";
  else if (x == 2)
     c = "blue";
  else if (x == 3)
     c = "green";
  else
     c = "yellow";

  return c;
}

function pattern() {
  for (let i = 1; i <= 16; i++) {
     let squareID = document.getElementById("s" + i);
     squareID.style.backgroundColor = random();
  }
}

// SET TIMELEFT VALUE in timer()

function timer() {
  if(timeleft <= 0){
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Time's up :(";
    timeleft = 30;
    
    // enable Restart
    document.getElementById("sta").disabled = true;
    document.getElementById("sto").disabled = true;
    document.getElementById("res").disabled = false;
    document.getElementById("gen").disabled = true;
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " s";
    timeleft -= 1;
  }
}


function start() {
  // call timer() every 1000ms = 1s
  countdownTimer = setInterval(timer, 1000);

  enableColors();
  enableDirections();

  // enable Stop
  document.getElementById("sta").disabled = true;
  document.getElementById("sto").disabled = false;
  document.getElementById("res").disabled = true;
  document.getElementById("gen").disabled = true;
}


function comparePattern() {
  
  if (s11.style.backgroundColor == p11.style.backgroundColor &&
  s12.style.backgroundColor == p12.style.backgroundColor &&
  s13.style.backgroundColor == p13.style.backgroundColor &&
  s14.style.backgroundColor == p14.style.backgroundColor &&
  s21.style.backgroundColor == p21.style.backgroundColor &&
  s22.style.backgroundColor == p22.style.backgroundColor &&
  s23.style.backgroundColor == p23.style.backgroundColor &&
  s24.style.backgroundColor == p24.style.backgroundColor &&
  s31.style.backgroundColor == p31.style.backgroundColor &&
  s32.style.backgroundColor == p32.style.backgroundColor &&
  s33.style.backgroundColor == p33.style.backgroundColor &&
  s34.style.backgroundColor == p34.style.backgroundColor &&
  s41.style.backgroundColor == p41.style.backgroundColor &&
  s42.style.backgroundColor == p42.style.backgroundColor &&
  s43.style.backgroundColor == p43.style.backgroundColor &&
  s44.style.backgroundColor == p44.style.backgroundColor)
     return true;
  else
     return false;
}


// SET TIMELEFT VALUE IN stop()

function stop() {
  if (timeleft < 30 && comparePattern()) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Well done!";
  } else {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Wrong pattern!";
  }
  timeleft = 30;

  disableColors();
  disableDirections();

  // enable Restart
  document.getElementById("sta").disabled = true;
  document.getElementById("sto").disabled = true;
  document.getElementById("res").disabled = false;
  document.getElementById("gen").disabled = true;

  elem.style.border = "none";
}


function initializeSquares() {
  s11.style.backgroundColor = "red";
  s12.style.backgroundColor = "lightgrey";
  s13.style.backgroundColor = "lightgrey";
  s14.style.backgroundColor = "lightgrey";
  s21.style.backgroundColor = "lightgrey";
  s22.style.backgroundColor = "lightgrey";
  s23.style.backgroundColor = "lightgrey";
  s24.style.backgroundColor = "lightgrey";
  s31.style.backgroundColor = "lightgrey";
  s32.style.backgroundColor = "lightgrey";
  s33.style.backgroundColor = "lightgrey";
  s34.style.backgroundColor = "lightgrey";
  s41.style.backgroundColor = "lightgrey";
  s42.style.backgroundColor = "lightgrey";
  s43.style.backgroundColor = "lightgrey";
  s44.style.backgroundColor = "lightgrey";
}

function restart() {

  //clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "";

  enableColors();
  disableDirections();

  // enable Start, Generate
  document.getElementById("sta").disabled = false;
  document.getElementById("sto").disabled = true;
  document.getElementById("res").disabled = true;
  document.getElementById("gen").disabled = false

  initializeSquares();

  elem.style.border = "solid";
  elem.style.backgroundColor = "red";
  elem.style.top = "50px";
  elem.style.left = "0px";

  posLeft = 0;
  posTop = 50;
}


function colorSquare() {
  let currentColor = elem.style.backgroundColor;

  if (posLeft == 0 && posTop == 50)
    s11.style.backgroundColor = currentColor;
  else if (posLeft==50 && posTop==50)
    s12.style.backgroundColor = currentColor;
  else if (posLeft==100 && posTop==50)
    s13.style.backgroundColor = currentColor;
  else if (posLeft==150 && posTop==50)
    s14.style.backgroundColor = currentColor;

  else if (posLeft==0 && posTop==100)
    s21.style.backgroundColor = currentColor;
  else if (posLeft == 50 && posTop == 100)
    s22.style.backgroundColor = currentColor;
  else if (posLeft==100 && posTop==100)
    s23.style.backgroundColor = currentColor;
  else if (posLeft==150 && posTop==100)
    s24.style.backgroundColor = currentColor;

  else if (posLeft == 0 && posTop == 150)
    s31.style.backgroundColor = currentColor;
  else if (posLeft==50 && posTop==150)
    s32.style.backgroundColor = currentColor;
  else if (posLeft==100 && posTop==150)
    s33.style.backgroundColor = currentColor;
  else if (posLeft==150 && posTop==150)
    s34.style.backgroundColor = currentColor;

  else if (posLeft == 0 && posTop == 200)
    s41.style.backgroundColor = currentColor;
  else if (posLeft==50 && posTop==200)
    s42.style.backgroundColor = currentColor;
  else if (posLeft==100 && posTop==200)
    s43.style.backgroundColor = currentColor;
  else if (posLeft==150 && posTop==200)
    s44.style.backgroundColor = currentColor;
}


function red() {
  elem.style.backgroundColor = "red";
  colorSquare();
}

function blue() {
  elem.style.backgroundColor = "blue";
  colorSquare();
}

function green() {
  elem.style.backgroundColor = "green";
  colorSquare();
}

function yellow() {
  elem.style.backgroundColor = "yellow";
  colorSquare();
}



function left() {
  let id = setInterval(frame, 1);
  let count = 0;

  function frame() {
    if (posLeft == 0 || count == 50) {
      clearInterval(id);
      colorSquare();
    } else {
      posLeft--;
      count++;
      elem.style.left = posLeft + 'px';
    }
  }
}

function right() {
  let id = setInterval(frame, 1);
  let count = 0;

  function frame() {
    if (posLeft == 150 || count == 50) {
      clearInterval(id);
      colorSquare();
    } else {
      posLeft++;
      count++;
      elem.style.left = posLeft + 'px';
    }
  }
}

function up() {
  let id = setInterval(frame, 1);
  let count = 0;

  function frame() {
    if (posTop == 50 || count == 50) {
      clearInterval(id);
      colorSquare();
    } else {
      posTop--;
      count++;
      elem.style.top = posTop + 'px';
    }
  }
}

function down() {
  let id = setInterval(frame, 1);
  let count = 0;

  function frame() {
    if (posTop == 200 || count == 50) {
      clearInterval(id);
      colorSquare();
    } else {
      posTop++;
      count++;
      elem.style.top = posTop + 'px';
    }
  }
}

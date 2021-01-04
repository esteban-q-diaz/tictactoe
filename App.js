console.log('works')
console.dir(document)
//GLOBAL VARIABLE TO KEEP TRACK OF CLICK COUNTS
var count = 0;

//MODEL
//create a three by three array with all 0s on is
// add the array to a variable

//function that is activated whenever there is change to the controller

// when onClick invokes this function this function will take the information that was passed in and update the array grid
//this will also create a function that invokes a function in the view and passed in the new informaiton
// will also check to see if the game is over (if all the grids in the array are full)
// will pass that info ro the view (win, or draw) - so check logic of who has three connected
var currentState = []

const rows = 3;
const columns = 3;

for (var i = 0; i < rows ; i++) {
    currentState[i] = [0]
  for (var j = 0; j < columns; j++) {
    currentState[i][j] = 0
  }
}


function stateChange (string, num1, num2) {
  // console.log(`State change for ${string} activated`);
  // x = 1, O = 0
  var winner = "no winner yet";
  var player1;

  if (count % 2 === 0) {
    this.currentState[num1][num2] = 1;
  } else {
    this.currentState[num1][num2] = 2;
  }


  //create logic for win or draw
  //if there are three 1's horizontal player 1 wins
  //if there are three 2's horizontal player 2 wins
  //if there are three 1's vertically player 1 wins
  //if there are three 2's vertically player 2 wins

  /* -------Check for horizontal winner -------*/
  for (let i = 0 ; i < this.currentState.length; i++) {
    var current = this.currentState[i]
    // console.log("hiii", current)
      if (current[0] === 1 && current[1] === 1 && current[2] === 1) {
        winner = "Player 1 has Won"
      }
      if (current[0] === 2 && current[1] === 2 && current[2] === 2) {
        winner = "Player 2 has Won"
      }
  }

  /* -------Check for vertical winner -------*/
  var arrayVertical = [
    [],
    [],
    []
  ];

  this.currentState.map( (element, index) => {
    arrayVertical[0].push(element[0])
    arrayVertical[1].push(element[1])
    arrayVertical[2].push(element[2])
  })

  for (let i = 0 ; i < arrayVertical.length; i++) {
    var current = arrayVertical[i]
    // console.log("hiii", current)
      if (current[0] === 1 && current[1] === 1 && current[2] === 1) {
        winner = "Player 1 has Won"
      }
      if (current[0] === 2 && current[1] === 2 && current[2] === 2) {
        winner = "Player 2 has Won"
      }
  }

  console.log("obj:", arrayVertical)

  // console.log(this.currentState)
  this.updateDOM(string, winner)
}


//VIEW
//function that is activated when there is a change to state in the model

// this section will be connected to the DOM
// it will change the appearence of the DOM grid
// if info says game is over then that will be sent to the DOM
function updateDOM (string, winner) {

  var currentState = document.getElementsByClassName(string)
  var changeState = currentState[0].childNodes[0];
  if (this.count % 2 === 0) {
    changeState.data = 'X'
  } else {
    changeState.data = 'O'
  }
  console.log("this is the count", this.count, winner)
}



//CONTROLLER

//onCLick event function that changes state anytime something in the DOM tic tac toe grid is clicks

//OnClick -> invoke a function that invookes the model function passing in information as to what was clicked


// CLICK FOR BOX ONE

const one = document.querySelector('.one')

one.addEventListener('click', event=> {
  console.log('click worked')
  this.stateChange('one', 0, 0)
  this.count++
})

// CLICK FOR BOX TWO
const two = document.querySelector('.two')

two.addEventListener('click', event=> {
  console.log('click two worked')
  this.stateChange('two', 0, 1)
  this.count++
})

// CLICK FOR BOX THREE
const three = document.querySelector('.three')

three.addEventListener('click', event=> {
  console.log('click three worked');
  this.stateChange('three', 0, 2);
  this.count++
})

// CLICK FOR BOX FOUR
const four = document.querySelector('.four')

four.addEventListener('click', event=> {
  console.log('click four worked')
  this.stateChange('four', 1, 0)
  this.count++
})

// CLICK FOR BOX five
const five = document.querySelector('.five')

five.addEventListener('click', event=> {
  console.log('click three worked')
  this.stateChange('five', 1, 1)
  this.count++
})

// CLICK FOR BOX SIX
const six = document.querySelector('.six')

six.addEventListener('click', event=> {
  console.log('click three worked')
  this.stateChange('six' , 1, 2)
  this.count++
})

// CLICK FOR BOX SEVEN
const seven = document.querySelector('.seven')

seven.addEventListener('click', event=> {
  console.log('click three worked')
  this.stateChange('seven' , 2, 0)
  this.count++
})

// CLICK FOR BOX EIGHT
const eight = document.querySelector('.eight')

eight.addEventListener('click', event=> {
  console.log('click three worked')
  this.stateChange('eight', 2, 1)
  this.count++
})

// CLICK FOR BOX NINE
const nine = document.querySelector('.nine')

nine.addEventListener('click', event=> {
  console.log('click three worked')
  this.stateChange('nine', 2, 2)
  this.count++
})
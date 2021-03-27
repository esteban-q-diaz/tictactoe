console.log('works')
console.dir(document)
//GLOBAL VARIABLE TO KEEP TRACK OF CLICK COUNTS
var count = 1;

//MODEL
//MODEL
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
  // x = 1, O = 0
  var winner = "no winner yet";

  //Update the STATE matrix
    if (count % 2 === 0 ) {
      this.currentState[num1][num2] = 1;
    } else {
      this.currentState[num1][num2] = 2;
    }



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
      if (current[0] === 1 && current[1] === 1 && current[2] === 1) {
        winner = "Player 1 has Won"
      }
      if (current[0] === 2 && current[1] === 2 && current[2] === 2) {
        winner = "Player 2 has Won"
      }
  }


  /* -------Check for diagonal winner -------*/
  if (this.currentState[0][0] === 1 && this.currentState[1][1] === 1&& this.currentState[2][2] === 1) {
    winner = "Player 1 has Won"
  }

  if (this.currentState[0][2] === 1 && this.currentState[1][1] === 1&& this.currentState[2][0] === 1) {
    winner = "Player 1 has Won"
  }

  if (this.currentState[0][0] === 2 && this.currentState[1][1] === 2&& this.currentState[2][2] === 2) {
    winner = "Player 2 has Won"
  }

  if (this.currentState[0][2] === 1 && this.currentState[1][1] === 1&& this.currentState[2][0] === 1) {
    winner = "Player 2 has Won"
  }

  /* -------Check for draws -------*/
  if(winner === "no winner yet" && count === 9) {
    winner = 'draw'
  }


  console.log(this.currentState)
  this.updateDOM(string, winner)
}


//VIEW
//VIEW
//VIEW



//Update the DOM
function updateDOM (string, winner) {

  // Get access to the incoming class String (access to the DOM)
  var currentState = document.getElementsByClassName(string)
  // Locate where the content of the incoming class is found
  var changeState = currentState[0].childNodes[0];
  if (this.count % 2 === 1) {
    changeState.data = 'X'
  } else {
    changeState.data = 'O'
  }

  if (winner === "Player 1 has Won") {
    //stop the game
    setTimeout(function (){
      alert('Player 1 has won the game')
      this.resetGame()
    }, 50)
  }

  if (winner === "Player 2 has Won") {
    //stop the game
    setTimeout(function (){
      alert('Player 2 has won the game')
      this.resetGame()
    }, 50)
  }

  if (winner === "draw") {
    //stop the game
    setTimeout(function (){
      alert('Game has ended in a tie')
      this.resetGame()
    }, 50)
  }

  console.log("this is the count", this.count, winner)
}


/* --------- Reset the game --------------*/
function resetGame() {
  console.log('reset the game')
  // reset the Matrix back to 0's
  const rows = 3;
  const columns = 3;

  for (var i = 0; i < rows ; i++) {
      this.currentState[i] = [0]
    for (var j = 0; j < columns; j++) {
      this.currentState[i][j] = 0
    }
  }

  //reset DOM elements back to blanks
  const parent = document.getElementsByClassName('table')
  let child_nodes = parent[0].childNodes

  var innerFunc = function(array) {
    console.log("tr",array)
    for (var i = 0; i < array.length; i++) {
        console.log("array at nodes", array[i])
        if(array[i].data === "X" || array[i].data === "O" ) {
          array[i].data = ''
        }

        if(array[i].data === undefined) {
          innerFunc(array[i].childNodes)
      }

    }
  }
 innerFunc(child_nodes)

 count = 1;
}


//CONTROLLER
//CONTROLLER
//CONTROLLER

//CLICK FOR BOX ONE
const one = document.querySelector('.one')

one.addEventListener('click', event=> {
  console.log('click worked')
  if (this.currentState[0][0] === 0) {
    this.stateChange('one', 0, 0)
    this.count++
  }
})

// CLICK FOR BOX TWO
const two = document.querySelector('.two')

two.addEventListener('click', event=> {
  console.log('click two worked')
  if (this.currentState[0][1] === 0) {
    this.stateChange('two', 0, 1)
    this.count++
  }

})

// CLICK FOR BOX THREE
const three = document.querySelector('.three')

three.addEventListener('click', event=> {
  console.log('click three worked');
  if (this.currentState[0][2] === 0) {
    this.stateChange('three', 0, 2);
    this.count++
  }
})

// CLICK FOR BOX FOUR
const four = document.querySelector('.four')

four.addEventListener('click', event=> {
  console.log('click four worked')
  if (this.currentState[1][0] === 0) {
    this.stateChange('four', 1, 0)
    this.count++
  }
})

// CLICK FOR BOX five
const five = document.querySelector('.five')

five.addEventListener('click', event=> {
  console.log('click three worked')
  if (this.currentState[1][1] === 0) {
    this.stateChange('five', 1, 1)
    this.count++
  }
})

// CLICK FOR BOX SIX
const six = document.querySelector('.six')

six.addEventListener('click', event=> {
  console.log('click three worked')
  if (this.currentState[1][2] === 0) {
    this.stateChange('six' , 1, 2)
    this.count++
  }
})

// CLICK FOR BOX SEVEN
const seven = document.querySelector('.seven')

seven.addEventListener('click', event=> {
  console.log('click three worked')
  if (this.currentState[2][0] === 0) {
    this.stateChange('seven' , 2, 0)
    this.count++
  }
})

// CLICK FOR BOX EIGHT
const eight = document.querySelector('.eight')

eight.addEventListener('click', event=> {
  console.log('click three worked')
  if (this.currentState[2][1] === 0) {
    this.stateChange('eight', 2, 1)
    this.count++
  }
})

// CLICK FOR BOX NINE
const nine = document.querySelector('.nine')

nine.addEventListener('click', event=> {
  console.log('click three worked')
  if (this.currentState[2][2] === 0) {
    this.stateChange('nine', 2, 2)
    this.count++
  }
})


const resetButton = document.querySelector('.resetBtn')

resetButton.addEventListener('click', event => {
  resetGame()
})
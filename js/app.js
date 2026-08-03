/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]
/*---------------------------- Variables (state) ----------------------------*/

let turn = null
let winner = null
let message = null
let board = null
let tie = null


/*------------------------ Cached Element References ------------------------*/

const sqrEl = document.querySelectorAll('.sqr')
console.log(sqrEl)
const borderEl = document.querySelectorAll('.board')
console.log(borderEl)
const msgEl = document.querySelector('#message')
console.log(msgEl)
/*-------------------------------- Functions --------------------------------*/
function init(){
    console.log('init function')
    board = ['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false

    render()
}

function render(){
    updateBoard()
    updateMessage()
}

function updateBoard(){
    board.forEach((cell , index) => {
        sqrEl[index].textContent = cell
    });
}

function updateMessage(){
    if ( winner === false && tie === false){
        message = `It is ${turn} turn`
    }
    else if( winner === false && tie === true){
        message = 'It is a tie'
    }
    else{
        message = `${winner} has won `
    }

    msgEl.textContent = message
}

/*----------------------------- Event Listeners -----------------------------*/
init()

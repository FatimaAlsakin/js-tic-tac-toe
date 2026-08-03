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
const resetBtnEl = document.querySelector('#reset')
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
        message = `${turn} has won `
    }

    msgEl.textContent = message
}

function handleClick (event){
    const sqrIndex = event.target.id

    if(board[sqrIndex]!==''||winner)
        return

    placePiece(sqrIndex)
    console.log(board)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(index){
    console.log(index)
    board[index] = turn
}

function checkForWinner(){
    for(let one of winningCombos){
        if(
            board[one[0]] !== '' &&
            board[one[0]] === board[one[1]] &&
            board[one[0]] === board[one[2]]
        )
            winner= true 

    }
}

function checkForTie(){
    if(winner)
        return
    else if( !board.includes(''))
        tie = true
}
function switchPlayerTurn (){
    if(winner)
        return
    
    if(turn === 'X')
        turn = 'O'
    else if(turn === 'O')
        turn = 'X'    
}

/*----------------------------- Event Listeners -----------------------------*/
init()

for (let one of sqrEl ){
    one.addEventListener('click',handleClick)
}

resetBtnEl.addEventListener('click',init)
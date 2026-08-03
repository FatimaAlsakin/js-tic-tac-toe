/*-------------------------------- Constants --------------------------------*/


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

function render(){}



/*----------------------------- Event Listeners -----------------------------*/
for (let eachSqr of sqrEl){
    eachSqr.addEventListener('click', play)
}

init()

/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let turn = null
let winner = null


/*------------------------ Cached Element References ------------------------*/

const sqrEl = document.querySelectorAll('.sqr')
const borderEl = document.querySelectorAll('.board')
const msgEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/

function play(event){

}


/*----------------------------- Event Listeners -----------------------------*/
for (let eachSqr of sqrEl){
    eachSqr.addEventListener('click', play)
}


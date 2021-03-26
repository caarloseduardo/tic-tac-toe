const cells = document.querySelectorAll('.cell')
const title = document.querySelector('.title')
const button = document.querySelector('#gameButton')
let board = ['', '', '', '', '', '', '', '', '']
let counter = 0
let gameWin = false

const Game =  {
    init () {
        for (let i of cells) {
            const cell = i.getAttribute('data-cell')

            i.addEventListener('click', () => {  
                if (gameWin == false) {
                    if (board[cell] != '') {
                        alert('Cell already selected')
                    } else if (counter%2 == 0) {
                        board[cell] = i.innerHTML = 'X'
                        counter++ 
                    } else {
                        board[cell] = i.innerHTML = 'O'
                        counter++ 
                    }
                }
                checkWinner()
            })
        }
        restartGame()
    }
}

const checkWinner = () => {
    for (let i=0; i<=7; i++) {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const winCondition = winningConditions[i]
        let a = board[winCondition[0]]
        let b = board[winCondition[1]]
        let c = board[winCondition[2]]

        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            gameWin = true
            button.innerHTML = 'Play Again'
            const playerWinner = a == 'X' ? 1 : 2
            title.innerHTML = `Player ${playerWinner} wins! 🎉`
        }
    }
}

const restartGame = () => {
    button.addEventListener('click', () => {
        gameWin = false
        counter = 0
        board = ['', '', '', '', '', '', '', '', '']
        button.innerHTML = 'Restart Game'
        title.innerHTML = 'Tic Tac Toe'
        for (i=0; i<=9; i++) {
            if (cells[i] != undefined) {
                cells[i].innerHTML = ''
            }
        }
    })
}

Game.init()
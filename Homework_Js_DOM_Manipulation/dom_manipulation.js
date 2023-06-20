function createChessboard() {
    let chessboard = document.getElementById('chessboard');
    let squares = '';

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let squareColor = (i + j) % 2 === 0 ? 'white' : 'black';
            squares += '<div class="square ' + squareColor + '"></div>';
        }
    }

    chessboard.innerHTML = squares;
}


document.addEventListener('DOMContentLoaded', createChessboard);

window.onload= () => {
    board();
};

function board(){
    board =document.getElementById(memoryboard);
    board.setAttribute(atributeclass,flexcontainer+space+transitionBoard);
    drawboard();

}
function drawboard(){

    let br = document.createElement(constbr)
    let sqrSelected = sqsquareLightup();

    let i,j,counter=zero;

    for (i = zero; i < boardSpecs[zero]; i++) {
      for(j=zero; j<boardSpecs[one]; j++){
          Square(sqrSelected, counter,board);
          counter++;
      }
      board.append(br.cloneNode());
  }
    sqaureandBoardAction(sqrSelected,counter);
}
function removeboard(){
    board =document.getElementById(memoryboard);
    while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
}

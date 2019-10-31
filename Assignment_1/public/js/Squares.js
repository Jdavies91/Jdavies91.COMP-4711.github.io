
const boardSpecs= [five,five,one];
window.onload= () => {
    board();
};

function sqsquares(counter,board,sqClass,sqrSelected){
    let btnSquare= document.createElement(button);
    btnSquare.classList= sqClass;
    btnSquare.setAttribute(id,counter);
    locksquares();
    btnSquare.setAttribute(onclick, sqOnclcik+sqrSelected+closingbracket);
    btnSquare.setAttribute(strdisabled,strdisabled);
    board.append(btnSquare.cloneNode());
   
}

function Square(sqrSelected,counter,board){
    let classtypeSq = squares
    sqsquares(counter,board,classtypeSq,sqrSelected);
}



function sqrArr(totalnumOfSquares) {
    let arrSqr =[];
    for(let i =zero; i< totalnumOfSquares; i++){
        arrSqr.push(i);
    }
    return arrSqr;
}
function sqaureandBoardAction(sqrSelected){
    let  totalnumOfSquares=boardSpecs[zero]*boardSpecs[one];
    for( let counter =zero; counter <totalnumOfSquares; counter++){
        console.log(sqrSelected);
        setTimeout(LightUpSquare, onethousand,sqrSelected,counter);
        setTimeout(HideAnswerSquare, threethousand,sqrSelected,counter);
    }
 
    setTimeout(clearTrans, fourthousand);    
    setTimeout(unlocksquares,ninethousand); 
    

}





function clearTrans(){
 
   if(board.classList.value===flexcontainer+space+transitionBoard90){
    board.classList.add(transBoard);
    board.classList.remove(transitionBoard90);
   
    } 
   
    if(board.classList.value===flexcontainer+space+transBoard){
        board.classList.add(transitionBoard90);
        board.classList.remove(transBoard);

    } 
    if(board.classList.value===flexcontainer+space+transitionBoard){
        board.classList.add(transitionBoard90);
        board.classList.remove(transitionBoard);
    
    } 

     setTimeout(unlocksquares,fourthousand);  
}


function clearSquare(){

    classtypeSq = squares;
    totalsquares=boardSpecs[zero]*boardSpecs[one];
    for(let i = zero; i< totalsquares; i++ ){
        document.getElementById(i).classList.remove(squares);
        document.getElementById(i).classList= squares;

    }
    locksquares();
}
function LightUpSquare(sqrSelected,counter){
  
    let sq=document.getElementById(counter);
    let found = sqrSelected.find(function(element) {
        return element === counter;
    });
    if(found===counter){

        sq.classList= lightupsquares;

    } 
}




function HideAnswerSquare(sqrSelected,counter){
    let classtypeSq = squares
    let found = sqrSelected.find(function(element) {
        return element === counter;
    });
    if(found===counter){
      let sq=document.getElementById(counter);
    
      
      sq.classList=classtypeSq;
    } 

}

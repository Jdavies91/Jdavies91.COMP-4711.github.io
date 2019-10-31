const Usertofind = [];
const numberwrong = [];

function sqonClick(event){
    let userneedtofind = returnUserfind();
    let right =zero;
    let classval =event.classList;
    right =Checkifright(event,userneedtofind);
   
    if(right==zero){
        if( classval.value!=  squaresfront&&classval.value != squaresflip){
            classval.toggle(isflipped);
            score(neg);
            numberwrong.push(one);
            scoreequalszero();
        }
    }else {
        if(classval.value !=  squaresfront&&classval.value != squaresflip){
            classval.toggle(front);
            foundSquare(event.id);
            score(plus);
            CheckStageCompletions();
        }
    }
}
function scoreequalszero(){
    let scoreid =document.getElementById(idscore).textContent.split(space);
    if(scoreid[one]==zero){
        localStorage.setItem(idscore, scoreid[one]);
        setTimeout(window.location.href = summary,fivethousand);
    }
    
}
function SummaryonClick(){

    let scoreid =document.getElementById(idscore).textContent.split(space);

    let score =scoreid[one];
    localStorage.setItem(idscore, score);
    window.location.href = summary;
}
function score(operator){
    strScore =document.getElementById(idscore).textContent.split(space);
    let scorevalue =parseInt(strScore[one]);
    if(operator ===plus){
        scorevalue = scorevalue + one;
     
    }else if(operator ===neg){
        if(scorevalue>zero){
        scorevalue = scorevalue - one;
        }
    }
    document.getElementById(idscore).textContent= stringscore + scorevalue.toString(ten);
}
function foundSquare(id){
    Usertofind.splice(Usertofind.indexOf(parseInt(id)), one);
}
function Progression(){
    let randnum= Math.floor((Math.random() * three) + one);
    if(randnum===one){
        if(boardSpecs[zero]>=five&&boardSpecs[zero]<seven){
            boardSpecs[zero]=boardSpecs[zero]+one;
        
        }else if(boardSpecs[two]>=one&& boardSpecs[two]<seven){
            boardSpecs[two]= boardSpecs[two]+one;
        } else if(boardSpecs[one]>=five&&boardSpecs[one]<seven){
            boardSpecs[one]= boardSpecs[one]+one;
        } 
    } else if(randnum===two){
        if(boardSpecs[two]>=one&& boardSpecs[two]<seven){
            boardSpecs[two]= boardSpecs[two]+one;
        } else if(boardSpecs[zero]>=five&&boardSpecs[zero]<seven){
            boardSpecs[zero]=boardSpecs[zero]+one;
        
        } else if(boardSpecs[one]>=five&&boardSpecs[one]<seven){
            boardSpecs[one]= boardSpecs[one]+one;
            
        }
 
    }else if(randnum===three){
        if(boardSpecs[one]>=five&&boardSpecs[one]<seven){
      
            boardSpecs[one]= boardSpecs[one]+one;
        }else if(boardSpecs[two]>=one&& boardSpecs[two]<seven){
     
            boardSpecs[two]= boardSpecs[two]+one;
        } else if(boardSpecs[zero]>=five&&boardSpecs[zero]<seven){
            boardSpecs[zero]=boardSpecs[zero]+one;
     
        }
    }
   
    clearWrong();
  
}
function Regression(){
    let randnum= Math.floor((Math.random() * three) + one);
    if(randnum===one){
        if(boardSpecs[zero]>five&&boardSpecs[zero]<eight){
            boardSpecs[zero]=boardSpecs[zero]-one;
        }else if(boardSpecs[two]>=one&& boardSpecs[two]<eight){
            boardSpecs[two]= boardSpecs[two]-one;
        } else if(boardSpecs[one]>=five&&boardSpecs[one]<eight){
            boardSpecs[one]= boardSpecs[one]-one;
        } 
    } else if(randnum===two){
        if(boardSpecs[two]>one&& boardSpecs[two]<eight){
            boardSpecs[two]= boardSpecs[two]-one;
        } else if(boardSpecs[zero]>five&&boardSpecs[zero]<eight){
            boardSpecs[zero]=boardSpecs[zero]-one;
        } else if(boardSpecs[one]>five&&boardSpecs[one]<eight){
            boardSpecs[one]= boardSpecs[one]-one;
        }
 
    }else if(randnum===three){
        if(boardSpecs[one]>five&&boardSpecs[one]<eight){
            boardSpecs[one]= boardSpecs[one]-one;
        }else if(boardSpecs[two]>one&& boardSpecs[two]<eight){
            boardSpecs[two]= boardSpecs[two]-one;
        } else if(boardSpecs[zero]>five&&boardSpecs[zero]<eight){
            boardSpecs[zero]=boardSpecs[zero]-one;
        }
    }
    clearWrong();
}
function choicesOfRegorPres(){
    numberwrong.push(zero);
    if(numberwrong.length >=three ){
        Regression();
    } else{
        Progression();
    }
}

function clearWrong(){
    for(let i = zero; i<= numberwrong.length; i++){
        numberwrong.pop();
    }
}
function CheckStageCompletions(){
    if(zero === Usertofind.length){
        strstage =document.getElementById(stage).textContent.split(space);
        let stagevalue =parseInt(strstage[one]);
        stagevalue = stagevalue +one;
        
            document.getElementById(stage).textContent= stringstage + stagevalue.toString(ten);
            choicesOfRegorPres();
            locksquares();
            setTimeout(removeboard, 1000);
            setTimeout(refactortransmiton, 1000)
            setTimeout(drawboard,2000);
            setTimeout(Hideansboard, 7000);
            setTimeout(clearTrans,8000); 
        
    }
}
function refactortransmiton(){
    board =document.getElementById(memoryboard);
    board.setAttribute(atributeclass,flexcontainer+space+transBoard);
}
function unlocksquares(){
    let inputs = document.getElementsByClassName(squares);
    for(let i = zero; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
}
function locksquares(){
    let inputs = document.getElementsByClassName(squares);
    for(let i = zero; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
   

}
function ShowAnsSquares(){
    let toFind = sqsquareLightup();


    let classtypeLightUpSq = lightupsquares
    
    for(let i =zero; i< toFind.length; i++){
        let square=document.getElementById(toFind[i]);
        square.classList=classtypeLightUpSq;
    }
    

}
function Hideansboard(){
    let toFind = returnUserfind();
    let classtypeSq = squares
    

    for(let i =zero; i< toFind.length; i++){
        let square=document.getElementById(toFind[i]);
        square.classList=classtypeSq;
    }


}





function gpshuffle(SquareArr){
    let i, j, temp;
    for(i = SquareArr.length-one; i>zero; i--){
        j = Math.floor(Math.random()*(i+one));
        temp = SquareArr[i];
        SquareArr[i] = SquareArr[j];
        SquareArr[j] = temp;
    }
    return SquareArr;
}

function sqsquareLightup(){
    totalnumOfSquares=boardSpecs[zero]*boardSpecs[one];
    let arrSqr = sqrArr(totalnumOfSquares);
    let SqrNumberToLightup = gpRandomLightUpSquares(arrSqr);
 
    return SqrNumberToLightup;
}
function gpRandomLightUpSquares(gpSqrArr){
    
    let shuffledArr= [];
    let gpNumOfLightup =boardSpecs[two];
    shuffledArr=gpshuffle(gpSqrArr);
    for(let i =zero; i < gpNumOfLightup; i++){
        Usertofind.push(shuffledArr.pop());
    }

    return Usertofind;
}
function Checkifright(event,userneedtofind){
    let right =zero;
    for(let i = zero; i<userneedtofind.length; i++){
        if(userneedtofind[i]==event.id){
            right++;
        }
    }
    return right;

}
function returnUserfind() {
    return Usertofind
}

function sqsquareLightup(){
    totalnumOfSquares=boardSpecs[zero]*boardSpecs[one];
    let arrSqr = sqrArr(totalnumOfSquares);
    let SqrNumberToLightup = gpRandomLightUpSquares(arrSqr);
 
    return SqrNumberToLightup;
}

function sqrArr(totalnumOfSquares) {
    let arrSqr =[];
    for(let i =zero; i< totalnumOfSquares; i++){
        arrSqr.push(i);
    }
    return arrSqr;
}

window.onload= () => {
    score = localStorage.getItem('score');
    if(score){
        document.getElementById('scoresummary').value=score;
    }

};
window.onsubmit=() =>{
    let userplayer = document.getElementById('user').value;
    localStorage.setItem("player", userplayer);
}

function reset(){
    window.location.href = "/";
}
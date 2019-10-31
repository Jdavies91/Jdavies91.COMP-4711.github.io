window.onload= () => {
  let scorelocal = localStorage.getItem('score');
  let player = localStorage.getItem('player');
  document.getElementById('tableuser').textContent=player;
  document.getElementById('tablescore').textContent=scorelocal;
  localStorage.clear();

};

function restart(){
  window.location.href = "/";
}
function showAddArtist() {
  var addArtist = document.getElementById("AddArtist");
  var viewPeople = document.getElementById("ViewPeople");

  if (!addArtist.style.display ||addArtist.style.display === "none") {
      document.getElementById('Aname').value = "";
      document.getElementById('AboutArtist').value = "";
      document.getElementById('Artistimg').value = "";
      addArtist.style.display = "block";
      viewPeople.style.display = "none";
  } else {
    addArtist.style.display = "none";
    viewPeople.style.display = "block";
  }
}



function onloadArtist(){
  var values = [], keys = Object.keys(localStorage), i = keys.length;
  while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
    loadingArtist(JSON.parse(localStorage.getItem(keys[i])).Artistname,JSON.parse(localStorage.getItem(keys[i])).Artistdescription, JSON.parse(localStorage.getItem(keys[i])).Artistimage);
  }




 
}
function loadingArtist(n, a, i) {

  var name = n
  var about = a
  var val = i;

  src = val,
  img = document.createElement('img');

  img.src = src;

  let peopleparent = document.createElement('div')
  
  let node = document.createElement("div");
  let textnode = document.createTextNode(name);
  let subnode = document.createElement("div");
  let subtextnode = document.createTextNode(about)
  var delButton = document.createElement('button');

  node.appendChild(textnode);
  subnode.appendChild(subtextnode);
  peopleparent.appendChild(img);
  peopleparent.appendChild(node);
  peopleparent.appendChild(subnode);
  
 
  let Deletetextnode = document.createTextNode('Delete')
  delButton.appendChild(Deletetextnode);

  peopleparent.appendChild(delButton);

  delButton.onclick = function() {
    localStorage.removeItem(name);    
    peopleparent.remove();

  }


  document.getElementById("ViewPeople").append(peopleparent);
  javascriptcss(peopleparent, node, subnode, img, delButton)



}

function addArtist() {

  var name = document.getElementById('Aname').value;
  var about = document.getElementById('AboutArtist').value;
  var val = document.getElementById('Artistimg').value;
  saveArtist(name, about, val);
  loadingArtist(name, about, val);
  showAddArtist();
}
function saveArtist(name, Description, Image){

 const Artist= {
  Artistname: name,
  Artistdescription: Description,
  Artistimage: Image,
 }
window.localStorage.setItem(name,JSON.stringify(Artist));
}
function searching(searchname){
  People= document.getElementById("ViewPeople");
  if(searchname ===""){
    for (let i = 1; i <= People.children.length; i++) {
    
        People.childNodes[i].style.display = "block";
      
    }  
  } else{
  for (let i = 1; i <= People.children.length; i++) {
      People.childNodes[i].style.display = "block";
      if(People.childNodes[i].childNodes[1].textContent.toLowerCase().includes(searchname.toLowerCase())===false){
        People.childNodes[i].style.display = "none";
      }
       // console.log(People.childNodes[i].childNodes[1].textContent)
      
     // Text, DIV, Text, UL, ..., SCRIPT
  }
  }
  //console.log(People.children.length);
}
function searchArtist(){
  var name = document.getElementById('searchArtist').value;
  artistinfo=localStorage.getItem(name);
  searching(name);
}




function javascriptcss(peopleparent, node, subnode, img, deletebutton) {

  peopleparent.style.cssText = 'border-style: solid;border-color: #E8E8E8;border-width: thin;width: 350px;height: 70px;padding-top: 0px;padding-right: 5px;padding-left:5px;padding-bottom: 5px;margin-right: auto;margin-left: auto;text-align: center;'
  node.style.cssText = '	font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bolder;text-align: left;font-size: 10pt; padding-top: 10px;  '
  subnode.style.cssText = 'font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 8pt;text-align: left;'
  img.style.cssText = 'float: left;padding-right: 4%;width:50px;padding-bottom: 4%;padding-top: 3%;   border-radius: 10px;'
  deletebutton.style.cssText = 'float: right;border: none;height:20px; color:white; background-color:#dc143c; border-radius: 5px;font-size: 10pt; margin:auto; '

}
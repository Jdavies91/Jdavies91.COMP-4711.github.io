function showAddArtist() {
  var x = document.getElementById("AddArtist");
  var y = document.getElementById("ViewPeople");
  if (x.style.display === "none") {
      document.getElementById('Aname').value = "";
      document.getElementById('AboutArtist').value = "";
      document.getElementById('Artistimg').value = "";
      x.style.display = "block";
      y.style.display = "none";
  } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}
var test = [];

function addArtist() {

  var name = document.getElementById('Aname').value;
  var about = document.getElementById('AboutArtist').value;
  var val = document.getElementById('Artistimg').value;
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
      peopleparent.remove();

  }


  document.getElementById("ViewPeople").append(peopleparent);
  javascriptcss(peopleparent, node, subnode, img, delButton)
  showAddArtist();


}


function javascriptcss(peopleparent, node, subnode, img, deletebutton) {

  peopleparent.style.cssText = 'border-style: solid;border-color: #E8E8E8;border-width: thin;width: 300px;height: 70px;padding-top: 0px;padding-right: 5px;padding-left:5px;padding-bottom: 5px;margin-right: auto;margin-left: auto;text-align: center;'
  node.style.cssText = '	font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bolder;text-align: left;font-size: 10pt; padding-top: 10px;  '
  subnode.style.cssText = 'font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 8pt;text-align: left;'
  img.style.cssText = 'float: left;padding-right: 4%;width:50px;padding-bottom: 4%;padding-top: 3%;   border-radius: 10px;'
  deletebutton.style.cssText = 'float: right;border: none;height:20px; color:white; background-color:#dc143c; border-radius: 5px;font-size: 10pt; margin:auto; '

}
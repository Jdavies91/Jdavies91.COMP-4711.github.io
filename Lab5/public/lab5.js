function showAddArtist() {
  let addArtist = document.getElementById("AddArtist");
  let viewPeople = document.getElementById("ViewPeople");

  if (!addArtist.style.display || addArtist.style.display === "none") {
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

 function onloadArtist() {
   
    let dbArtist = [];
    dbArtist =getData();

    dbArtist.then(function(Artist) {
  
      for (let i= 0; i < Artist.length; i++){
        loadingArtist(Artist[i].Artistname, Artist[i].ArtistDescription, Artist[i].ArtistImage);
      }
    })
  }

async function getData() {
  const response = await fetch ('/api')
  const data = await response.json();


  return data;
}
function loadingArtist(name, about, val) {

  src = val,
      img = document.createElement('img');

  img.src = src;

  let peopleparent = document.createElement('div')

  let node = document.createElement("div");
  let textnode = document.createTextNode(name);
  let subnode = document.createElement("div");
  let subtextnode = document.createTextNode(about);
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
    removeItemedFromlocal(name);
    

  }
  document.getElementById("ViewPeople").append(peopleparent);
  javascriptcss(peopleparent, node, subnode, img, delButton)
}

function removeItemedFromlocal(name){
  //let values = JSON.parse(localStorage.getItem("Artist"));
  let dbArtist = [];
  dbArtist =getData();

  dbArtist.then(function(Artist) {
    for (let i= 0; i < Artist.length; i++){
      if(Artist[i].Artistname==name){
        Artist.splice(i, 1); 
          const artist = JSON.stringify(Artist);
   
          const Artistdatabese = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: artist
            };
          fetch( '/replaceDatabase', Artistdatabese).then(response => {
        
        } );

          
  
      }
    }
  })
  
  
}

function addArtist() {
  let name = document.getElementById('Aname').value;
  let about = document.getElementById('AboutArtist').value;
  let val = document.getElementById('Artistimg').value;
  saveArtist(name, about, val);
  loadingArtist(name, about, val);
  showAddArtist();
}

function saveArtist(name, description, image) {
  const Artist = {
      Artistname: name,
      ArtistDescription: description,
      ArtistImage:image
  };
  let JsonArtist = JSON.stringify(Artist);
  const Artistdatabese = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JsonArtist
      };
    fetch( '/ArtistDatabase', Artistdatabese).then(response => {
  } );
  
}

function searching(searchname) {
  ArtistDiv = document.getElementById("ViewPeople");
  if (searchname === "") {
      for (let i = 1; i <= ArtistDiv.children.length; i++) {

        ArtistDiv.childNodes[i].style.display = "block";

      }
  } else {
      for (let i = 1; i <= ArtistDiv.children.length; i++) {
        ArtistDiv.childNodes[i].style.display = "block";
          if (ArtistDiv.childNodes[i].childNodes[1].textContent.toLowerCase().includes(searchname.toLowerCase()) === false) {
            ArtistDiv.childNodes[i].style.display = "none";
          }
      }
  }

}

function searchArtist() {
  let Artistname = document.getElementById('searchArtist').value;
  artistinfo = localStorage.getItem(Artistname);
  searching(Artistname);
}

function javascriptcss(peopleparent, node, subnode, img, deletebutton) {
  peopleparent.style.cssText = 'border-style: solid;border-color: #E8E8E8;border-width: thin;width: 350px;height: 70px;padding-top: 0px;padding-right: 5px;padding-left:5px;padding-bottom: 5px;margin-right: auto;margin-left: auto;text-align: center;'
  node.style.cssText = '	font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bolder;text-align: left;font-size: 10pt; padding-top: 10px;  '
  subnode.style.cssText = 'font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 8pt;text-align: left;'
  img.style.cssText = 'float: left;padding-right: 4%;width:50px;padding-bottom: 4%;padding-top: 3%;   border-radius: 10px;'
  deletebutton.style.cssText = 'float: right;border: none;height:20px; color:white; background-color:#dc143c; border-radius: 5px;font-size: 10pt; margin:auto; '

}
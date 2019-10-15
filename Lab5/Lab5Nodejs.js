const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
let fs = require('fs');
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

const path = './ArtistDataBase.json'
app.listen(3000, () =>console.log('listening at 3000'))

app.use(express.static('public'));
app.use(express.json({limit: '2mb'}));

var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.post('/ArtistDatabase', (request, response)=> {
    console.log("I got a  POST request");
    
    if (fs.existsSync(path)) {
        let newData;
        newData=request.body;
        let appenddatabase = true;
        pushtoDatabase(newData,appenddatabase);
     
    } else{
        let newData = [];
        newData.push(request.body);
        let appenddatabase = false;
        createDatabase(newData,appenddatabase);
     
    }
    const artistdata = request.body;
    
     response.json({
        status: 'Success',
        Name: artistdata.name,
        Description:artistdata.description,
        Image: artistdata.image
     });
});
app.post('/replaceDatabase', (request, response)=> {
    console.log("I got a post request");
        let newData;
        newData=request.body;
        let appenddatabase = false;
        createDatabase(newData,appenddatabase);
       
        const artistdata = request.body;
    
     response.json({
        status: 'Success',
        Name: artistdata.name,
        Description:artistdata.description,
        Image: artistdata.image
     });
});

app.get('/api', (request, response)=> {
    if (fs.existsSync(path)) {
 
    dbArtist=getDatabase();
      response.json(dbArtist);
    }

 
    


    
});
function createDatabase(body){
    
    fs.writeFile('ArtistDataBase.json', JSON.stringify(body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

function pushtoDatabase(body, appenddatabase){
    let data =[];
    if(appenddatabase == true){
        data = getDatabase();


    } 
  
    data.push(body);
    createDatabase(data);
}

function getDatabase(){
    let datas=[];
    datas=  JSON.parse(fs.readFileSync('ArtistDataBase.json', 'utf8'));

    return datas;
}
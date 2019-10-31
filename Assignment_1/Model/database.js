const db = require('mongoose');


const scr= db.Schema({
    username:{
        type:String
    },
    userscore:{
        type:Number
    }



})

const model = db.model('UserScore', scr);

const gettop5Scores = (response) => {
    model.find(
      {},
      ['username', 'userscore'], // Columns to Return
      {
        skip: 0, // Starting Row
        //limit: 5, // Ending Row
        sort: {
          userscore: -1 //Sort by Score DESC
        }
      },
      (err, userscores) => {
        if (err) {
          console.log(err);
        } else {
          console.log(userscores);
          response.render('leaderboard',{
          //  userscores:[userscores[0],userscores[1],userscores[2],userscores[3],userscores[4]],
          userscores:userscores,
          });
        }
      }
    );
  };
 
const addScore = req => {
    let mod = new model();
  
    mod.username = req.body.username;

    mod.userscore = req.body.userscore;

    mod.save(err => {
        if(err) {
            console.log(err);
            return;
        }
    });


}
module.exports ={
    model: model,
    addScore: addScore,
    getTop5: gettop5Scores

}
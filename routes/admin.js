var mysql = require('mysql');
/*
var con = mysql.createConnection({  
    host: 'clouddb.cjjbekaoqujr.us-east-2.rds.amazonaws.com', 
     user: "cloud_db",  
     password: "pnaman03"  ,
     database: 'sys'
   });  
   con.connect(function(err) {  
     if (err) throw err;  
     console.log("Connected!");  
   });

*/


exports.getview = function(req, res){
    res.render('admin.ejs');
   
};

exports.putview = function(req, res){
    //get data as red.resolved etc

    var s = "select * from feedback";
    var user = req.body.name;
    var pass = req.body.pass;
    console.log(user,pass);
    con.query(s,(err, rslt) => {
        if(err)
         {
             console.log(err)
            
         }
        else
        { 
            res.render('admin.ejs',{userData : rslt});
         
        }
       });

       
   
    
}

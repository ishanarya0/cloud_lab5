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
exports.home = function(req, res){
    res.render('home.ejs',{error : "Welcome To Portal"});
};

exports.getform = function(req, res){
    res.render('user_page.ejs')
};

exports.putform = function(req, res){
    //get data as red.text etc
    
    var user = req.body.name;
    var pass = req.body.pass;
    console.log(user,pass);


    res.render('user_page.ejs',{error : ""});
    
    
        
}

exports.feedpost = function(req, res){
    //get data as red.text etc
    var theory = req.body.theory;
    var lab = req.body.lab;
    var com = req.body.comments;
    var user = req.body.name;
    var email = req.body.email;
    console.log(theory,lab,com,user);

    var flag;
    if(lab === "on")
      flag = 2;
    else
      flag = 1;

    console.log(flag)
    
    str = "insert into feedback(course,cmnt,email,username) values("+flag+",'"+com+"','"+email+"','"+user+"')";
    console.log(str);
    con.query(str,(err, rslt) => {
        if(err)
         {
             console.log(err)
             res.render('user_page.ejs',{error : " Try again !"});
         }
        else
        { 
            res.render('home.ejs',{error : " Feedback successfully submitted !"});
            
        }
      
           
              
        
       });
   
}
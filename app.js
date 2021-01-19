var express=require('express');
var app=express();
var path=require('path');

app.set('port',3000);

var server = app.listen(app.get('port'),()=>{                 
    var port=server.address().port;
    console.log("LISTENING ON PORT " + port);
});

app.use('/',express.static('./'),function(req,res,next){
    console.log("SERVING MAIN PAGE");
    next();
});

app.use('/css_custom',express.static('./css'),function(req,res,next){
    console.log("SENT CSS");
    next();
});


var express = require("express");
var bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

var app = express();

var port = process.env.PORT || 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res,next){

    res.sendFile(__dirname+"/public/index1.html");

})
app.post("/",function(req,res,next){

    let transporter = nodemailer.createTransport({
        host: 'gains.arrowsupercloud.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ayub@imohammad.in',
            pass: 'e^{)f^Q6a_q)' 
        }
    });

    
    let mailOptions = {
        from: '"Mohammad" <ayub@imohammad.in>',
        to: req.body.toaddress,
        subject: 'Business Model Canvas Data - Hacking School',
        text: 'Hello '+ req.body,
        html: '<b>This is my Business Model</b>' + "<br>" + "Key Partners are :" + req.body.keypartners + "<br>" + "Key Activities are :" + req.body.keyactivities +"<br>" + "Key Resources are:" + req.body.keyresources + "<br>" + "Value Propositions are :" + req.body.valuepropositions +"<br>" + "Customer Relationships are:" + req.body.customerrelationships + "<br>" + "Channels are:" + req.body.channels + "<br>" + "Customer Segments are:" + req.body.customersegments + "<br>" + "Cost Structure are:" + req.body.coststructure +"<br>" + "revenue Streams are:" + req.body.revenuestreams 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
       
    });
    res.sendFile(__dirname+"/public/success.html");

})
app.listen(port,function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Server running on port "+port);
    }
})
#!/usr/bin/env node
const fs = require("fs");
var os = require('os')
require('dotenv').config(); // this loads the defined variables from .env
// const httpServer = require("https").createServer({
//    // uncomment and put the pem files to have a https secure connection
//    // key: fs.readFileSync("/tmp/key.pem"),
//    // cert: fs.readFileSync("/tmp/cert.pem")
//  });
var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);
//for cors issue in socket io, i have inspired from https://github.com/rodgc/ngx-socket-io/issues/82
const options = {
   cors: {
     origin: '*',
   },
 };
var io = require('socket.io')(httpServer, options);
const port = process.env.PORT;
const masterchannel = process.env.CHANNEL;
var http = require("http");
var grip = require("grip"); //pushpin grip handler

//Whenever someone connects this gets executed
io.on("connection", socket => {
  // either with send()

  var data = {
   "server_hostname": os.hostname(),
   "operating system": os.type(),
   "platform":os.platform(),
   "userInfo": os.userInfo(),
   "cpus": os.cpus()
   }
   console.log('user data ',data)

   socket.on('audioStreams', function(audioData){
//   console.log('audioBuffer received',audioData)
   var pub = new grip.GripPubControl({
      control_uri: "http://localhost:5561"});
  pub.publishHttpStream(masterchannel, audioData);
 });
  socket.send("hey i am from server"); // from server to client

  //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
   console.log('A user disconnected');
   });

});

httpServer.listen(port, function(){
   console.log('listening on port', port)
});

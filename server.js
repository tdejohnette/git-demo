var express = require('express');
var app = express();
// var app = require('http').createServer()
let server = require('http').Server(app)
let io = require('socket.io')(server);
// let socket = require('socket.io');


app.use(express.static('public'))

//2 lists of matching img/augmentation they should be in order with one another.
let images = ['1.gif', '2.png', '3.jpg', '4.jpg', '5.gif', '6.jpg', '7.gif', '8.gif', '9.gif','10.gif','11.gif','12.gif','13.gif','14.gif','15.gif','16.gif','17.gif']
let augmentations = ['Now cry.', 'Powerful Farts.', 'Stressed out banana peels', 'I lied, Im the devil.', 'Bursting my pimples.', 'Do you see my vision?', 'Screaming butholes', 'Hot ass Breath', 'Pinky toes', 'Eye Fungus','Sea Monkey!', 'Raining eggplant', 'Crying boy Bands', '..but yeah humans suck', 'Its Brittney Bitch', 'Turtle necks and casserole.', 'Jump into oncoming traffic']
let currentAugmentation;
console.log("these numbers must match: ",images.length, augmentations.length)


io.on('connection',function(socket){
  // connections.push(socket);
  console.log('made socket connection', socket.id)

    //console.log('Connected: %s sockets connected', connections.length);
    //disconnect

    //send message
  socket.on('send message', function(incomingMessage){
   // io.emit('new message', {msg: data});


   // take the incomng message add the current augmentation with a space inbtween and package them up and send them to the clinet.
   let augmentedData = incomingMessage + ' ' + currentAugmentation;


   io.emit('new message', {msg: augmentedData});

  });

});

  //the time limit.
  let currentCountDown = 15
  //interval executes the code inside the {} on the ms interval
  let countdown = setInterval(function(){
    currentCountDown = currentCountDown - 1; //go down by one every second.

    if(currentCountDown <= 0){
      currentCountDown = 15
      // change the images
      // change the text augmentation
      let randomNumer = Math.floor(Math.random()* images.length)

      //get the matching augmentation to the image and set it as our current augmentation so that it can be used to add on to the outgoing messages above.
      currentAugmentation = augmentations[randomNumer]

      //get the image filename from the images array based on our generated random number.
      io.emit('updateImageOnClient', images[randomNumer])




    }

    io.emit('clockStatus',currentCountDown )


  },1000) //count down every second





//socket.on("like", function(data){
//  totalLikes = totalike + 1
//  io.emit("totalLikesUpdate", totalLikes);
//  if(totalLikes > 10){
//    (program.restart) //restart countdown grab new image from library
//  }
//})







//start the server up and listening on the port we defined.
 server.listen(7000, function(){
   console.log("listening to request on port 7000");
 });



//remember if you edit this file you have to restart your terminal file

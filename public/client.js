let socket = io.connect();
let totalLikes = 0;

  socket.on('connect',function(){
    console.log('we connected to the server as:');
    console.log(socket.id);

    $('body').append("Your I.D:"+socket.id);
  });


  // var $messageForm = $('#messageForm');
  // var $message = $('#message');
  // var $chat = $('#chat')


  $('#messageForm').submit(function(e){
    e.preventDefault();

    //if the mssage.val() is not nothing, then send the message.
    if($('#message').val() != ''){
      socket.emit('send message', $('#message').val());
      $('#message').val('')
      console.log( $('#message').val() )
    }

  });

  socket.on('new message', function(data){


    //prepend <-- check this out in the jquery API documentaion.

    $('#chat').prepend('<div class="well"> ' + htmlFilter(data.msg) +' </div>');

  });


  socket.on('clockStatus', function(currentCountDown){
    if(currentCountDown<10){
      $('#time').text("00:0" + currentCountDown  )
    }else{
      $('#time').text("00:" + currentCountDown)
    }
    console.log(currentCountDown);

  });


  $('#messageForm').hide();


  socket.on('updateImageOnClient', function(imageFilePath){
    $('#myImage').attr('src', imageFilePath)
    $('#chat').html('') //clear out the chat by resetting it to nothing.

    //if the page loads, dont show the chat, then fade in when ready and dont try to fde it in again afte the first time.
    if( ! $('#messageForm').hasClass('awake')){
      $('#messageForm').fadeIn();
      $('#messageForm').addClass('awake')
    }



  });



  function htmlFilter(value){
    return $('<div/>').html(value).text();
  }















    /*
    socket.on("totalLikesUpdate",function(likeNumber){
      $('.likesDiv').text(likeNumber);
    })
    */

//     var images = new Array ('1.jpeg', '2.png', '3.jpg');
//     var index = 1;
//     function rotateImage()
// {
//
//   $('#myImage').fadeOut('fast', function()
//   {
//     $(this).attr('src', images[index]);
//
//     $(this).fadeIn('fast', function()
//     {
//       if (index == images.length-1)
//       {
//         index = 0;
//       }
//       else
//       {
//         index++;
//       }
//     });
//   });
// }
//
// $(document).ready(function()
// {
//   setInterval (rotateImage, 60000);
// });


/*

$(function() {
      var newDay = new Date();
      newDay = new Date(newDay.getFullYear(), 4 - 1, 9, 10);
      $('#defaultCountdown').countdown({until: newDay, format:'HMS', onExpiry: reStartX});

      function reStartX() {
            var newDay = new Date();
            newDay = new Date(newDay.getFullYear(), 4 - 1, 10, 10);
            $('#defaultCountdown').countdown('option', {until: newDay, onExpiry: reStartY});
      }

      function reStartY() {
            var newDay = new Date();
            newDay = new Date(newDay.getFullYear(), 4 - 1, 11, 10);
            $('#defaultCountdown').countdown('option', {until: newDay});
      }
});
    /*
    setTimeout(function(){ alert("After 5 seconds!"); }, 5000);













    /*
    var clock = 10;
    var countdownId = 0;
    var loop = setInterval

    $("#Countdown").TimeCircles().addListener(function(unit, value, total) {
    if(total <= 0) location.reload(true);
});

    function start(){
        loop = setInterval("countdown()", 1000);
    }

    function countdown(){
      if (clock > 0){
        clock = clock -1;
        document.getElementById('cd-countdown').innerHTML = clock;


      }
      else{
        setInterval(countdownId);
      }

    }



/*
/*
var images=['images/1.jpeg','images/2.jpeg','images/3.jpeg','images/4.jpeg'];

 setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url('+url+')';
 },5000);

      //setInterval(function(){ alert("New Subject"); }, 10000);
    /*
    var NewSubjectMatter = setInterval(function(){
      console.log(counter);
      counter--
      if (counter === 0) {
        console.log("Lets change the subject");
        clearInterval(NewSubjectMatter);
      }
    }, 1000);

    /*
    //ben's ideas / concerns.
    limiting the number of messages
    what media is shown is super important, how long is it shown for?
    does the change in media 'reset' the chat?
    is there a history?

    //look into the set interval loop for timing / countdown and media replacement.
    setInterval(function(){

    },1000)


    do you want to interfere in the messages?






    */

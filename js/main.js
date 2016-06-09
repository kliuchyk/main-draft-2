// typed.js onload
 $(function(){
      $(".element").typed({
        showCursor: false,
        startDelay: 1200,
        strings: ["<span class='banner-heading'>Hello, <br> I'm Evgeny!</span> <br>a web developer."],
        typeSpeed: 50,
      });
  });


// typed.js onclick 'typed-box'
  $("#logo").click(function(){
    $(".typed-text").show();

    $(".element-box").typed({
        startDelay: 1000,
        strings: ["WELCOME !^500<br>My dear guest, this is my first webpage!^500<br>I hope you enjoy it!"],
        typeSpeed: 0,
        backDelay: 1200,
      });
    $("#logo").click(function(){
      $(".typed-text").hide();
    });
  });


// start animation through the scrolling
$(window).scroll(function() {
    $('.left-move').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInLeft');
      }
    });
  }); 
  
  $(window).scroll(function() {
    $('.right-move').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+800) {
        $(this).addClass('fadeInRight');
      }
    });
  }); 

// smooth scrolling through the nav link-clicking
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });
});

// smooth scrolling to the top
$(document).ready(function() {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

// form's request
$('#btn-send').click(function(e) {
  $.ajax({
      url: "https://formspree.io/kliuchyk@gmail.com",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             email: email.value,
             name: name.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  } );
  e.preventDefault();
});
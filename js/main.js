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
        strings: ["WELCOM !^500<br>My dear guest, this is my first webpage!^500<br>I hope you enjoy it!"],
        typeSpeed: 50,
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

// smooth scrolling through the link-clicking
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
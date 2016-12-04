// parallax scripts
var scene_parallax = document.getElementById('scene_parallax');
var parallax = new Parallax(scene_parallax, {
});


// photolib script
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center: false,
    smartSpeed: 500,
    autoplayTimeout:3000,
    autoplay: true,
    nav:true,
    navText: [
    "<span>prev</span>",
    "<span>next</span>"
      ],
    responsive:{
        0:{
            items:1,
            dots:false
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});


// to play/pause audio
var myVideo = document.getElementById("main-audio"); 
function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 

// for change image play to pause 
$(document).ready(function(){ 
  $('.play-pause').on('click', function(){
    $(this).toggleClass('play');
  });
});

// ScrollMagic script
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // tweens
  var simple1_tween = TweenMax.to('#blue', 1, {
    backgroundColor: '#682775',
    ease: Linear.easeNone
    });
  
  var simple2_tween = TweenMax.to('#turqoise', 1, {
    backgroundColor: '#FFA500',
    ease: Linear.easeNone
    });

  var simple2_1_tween = TweenMax.to('#turqoise_1', 1, {
    opacity: 0
    });

  var simple3_tween = TweenMax.to('#green', 1, {
    backgroundColor: '#8f2638',
    ease: Linear.easeNone
    });

  var simple3_1_tween = TweenMax.to('#green_1', 1, {
    scale: 2,
    opacity: 1,
    ease: Linear.easeNone
    });

  var simple4_tween = TweenMax.to('#bordeaux', 1, {
    backgroundColor: '#794c82',
    ease: Linear.easeNone
    });

  var simple4_1_tween = TweenMax.to('#bordeaux_1', 1, {
    x: -1000,
    ease: Linear.easeNone
    });  

  var simple5_tween = TweenMax.to('#yellow', 1, {
    backgroundColor: '#6fdaee',
    ease: Linear.easeNone
    }); 

   var simple5_1_tween = TweenMax.to('#yellow_1', 1, {
    x: 2000,
    ease: Linear.easeNone
    }); 

  var simple6_tween = TweenMax.to('#orange', 1, {
    backgroundColor: '#6f0031',
    ease: Linear.easeNone
    });

  var simple6_1_tween = TweenMax.to('#orange_1', 1, {
    x: -820,
    ease: Linear.easeNone
    });

  var simple7_tween = TweenMax.to('#chrome', 1, {
    backgroundColor: '#234331',
    ease: Linear.easeNone
    });

  var simple7_1_tween = TweenMax.to('#chrome_1', 1, {
    rotation: 360,
    ease: Linear.easeNone
    });

  var simple7_mouse_tween = TweenMax.to('#mouse', 1, {
    x: 1500,
    ease: Linear.easeNone
    });

  var simple8_tween = TweenMax.to('#silver', 1, {
    backgroundColor: '#080503',
    ease: Linear.easeNone
    });

  var simple8_1_tween = TweenMax.to('#silver_1', 1, {
    scale: 1.5,
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
    });

    // wipes

  var wipes_simple1 = new ScrollMagic.Scene({
        triggerElement: '#blue',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#blue')
      .setTween(simple1_tween)
      .addTo(controller);

  var wipes_simple2 = new ScrollMagic.Scene({
        triggerElement: '#turqoise',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#turqoise')
      .setTween(simple2_tween)
      .addTo(controller);

    var wipes_simple2_1 = new ScrollMagic.Scene({
        triggerElement: '#turqoise',
        triggerHook: 0,
        duration: 600
      })
      .setTween(simple2_1_tween)
      .addTo(controller);

  var wipes_simple3 = new ScrollMagic.Scene({
        triggerElement: '#green',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#green')
      .setTween(simple3_tween) 
      .addTo(controller);

   var wipes_simple3_1 = new ScrollMagic.Scene({
        triggerElement: '#green',
        triggerHook: 0,
        duration: 500
      })
      .setTween(simple3_1_tween)
      .addTo(controller);   

  var wipes_simple4 = new ScrollMagic.Scene({
        triggerElement: '#bordeaux',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#bordeaux')
      .setTween(simple4_tween) 
      .addTo(controller);

  var wipes_simple4_1 = new ScrollMagic.Scene({
        triggerElement: '#bordeaux',
        triggerHook: 0,
        duration: 1000
      })
      .setTween(simple4_1_tween) 
      .addTo(controller);

  var wipes_simple5 = new ScrollMagic.Scene({
        triggerElement: '#yellow',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#yellow')
      .setTween(simple5_tween) 
      .addTo(controller);

  var wipes_simple5_1 = new ScrollMagic.Scene({
        triggerElement: '#yellow',
        triggerHook: 0,
        duration: 1000
      })
      .setTween(simple5_1_tween) 
      .addTo(controller);
          
  var wipes_simple6 = new ScrollMagic.Scene({
        triggerElement: '#orange',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#orange')
      .setTween(simple6_tween)
      .addTo(controller);

  var wipes_simple6_1 = new ScrollMagic.Scene({
        triggerElement: '#orange',
        triggerHook: 0,
        duration: 500
      })
      .setTween(simple6_1_tween)
      .addTo(controller);


  var wipes_simple7 = new ScrollMagic.Scene({
        triggerElement: '#chrome',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#chrome')
      .setTween(simple7_tween) 
      .addTo(controller);

  var wipes_simple7_1 = new ScrollMagic.Scene({
        triggerElement: '#chrome',
        triggerHook: 0,
        duration: 500
      })
      .setTween(simple7_1_tween) 
      .addTo(controller);

  var wipes_simple7_mouse = new ScrollMagic.Scene({
        triggerElement: '#chrome',
        triggerHook: 0,
        duration: 500
      })
      .setTween(simple7_mouse_tween) 
      .addTo(controller);


  var wipes_simple8 = new ScrollMagic.Scene({
        triggerElement: '#silver',
        triggerHook: 0,
        duration: 500
      })
      .setPin('#silver')
      .setTween(simple8_tween) 
      .addTo(controller);

  var wipes_simple8_1 = new ScrollMagic.Scene({
        triggerElement: '#silver',
        triggerHook: 0,
        duration: 500
      })
      .setTween(simple8_1_tween) 
      .addTo(controller);
});

// to get rundom video
function randomlinks(){
    var myrandom=Math.round(Math.random()*9);
    var links=new Array();
    links[0]="https://www.youtube.com/watch?v=7OlDS8dJWKU";
    links[1]="https://www.youtube.com/watch?v=A3PDXmYoF5U";
    links[2]="https://www.youtube.com/watch?list=PL7AC9B978FCA49BEE&v=WxfZkMm3wcg";
    links[3]="https://www.youtube.com/watch?time_continue=97&v=T4YgouDkiqA";
    links[4]="https://www.youtube.com/watch?time_continue=85&v=zlfKdbWwruY";
    links[5]="https://www.youtube.com/watch?v=5ky6vgQfU24";
    links[6]="https://vimeo.com/27243869";
    links[7]="https://vimeo.com/27244727";
    links[8]="https://vimeo.com/27246366";
    links[9]="https://www.youtube.com/watch?v=wJF5NXygL4k";
    window.location=links[myrandom];
}

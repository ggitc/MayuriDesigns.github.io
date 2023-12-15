/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: bootstrap package
Version: 1.0.0
-------------------------------------------------------------------*/

  
  
$(document).ready(function(){
  $(".openMenu").click(function(){
    $(".myNav").addClass("active");
  });
  $(".hideMe").click(function(){
      $(".myNav").removeClass("active");
    });

  
});

  
$(document).ready(function () {
  $('.mainslider').owlCarousel({
  items: 1,
  nav: false,
  
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      600: {
          items: 1,
  
      },
      1000: {
          items: 1,
  
  
      }
  }
  
  })
  })
  $(document).ready(function () {
    $('.testimonails').owlCarousel({
    nav: true,
    margin:15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
    
        },
        1000: {
            items:3,
        }
    }               
    })
    })
        // AOS Animation
        AOS.init({
            duration: 1200,
        })

    
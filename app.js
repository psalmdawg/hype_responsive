
  $(document).ready(function(){

    $(".burger-icon").click(function(){
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });
    $(".menu-close").click(function(){
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });


    $(window).resize(function(){

       if ($(window).width() > 625 ){
          console.log("not mobile");
          $(".responsive-nav").show();
          $(".menu-close").css({"display":"none"});
          $(".burger-icon").css({"display":"none"});
       } else {
         $(".burger-icon").css({"display":"block"});
         $(".menu-close").css({"display":"none"});
         $(".responsive-nav").css({"display":"none"});
       }//end of it statenent
    });


      $('.sports-windows').slick({
        // dots: true,
        infinite: true,
        // fade: true,
        speed: 1100,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 570,
            settings:
            {

              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      setTimeout(function() {
        // $('.sports-windows').cs
        $('.sports-windows').hide().css('visibility','visible').fadeIn('slow');
      }, 100);

  });

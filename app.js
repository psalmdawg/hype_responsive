
  $(document).ready(function(){

    $(".burger-icon").click(function(){
      $('.dropdown-content').hide();
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });
    $(".menu-close").click(function(){
      $('.dropdown-content').hide();
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });


    if($(window).width() < 700 ){
      // console.log("yyes")
      $(".responsive-nav").addClass('mobile-menu-tabs');
    }

    $(window).resize(function(){
       if ($(window).width() > 700 ){
          console.log("not mobile");
          $(".responsive-nav").show();
          $(".menu-close").css({"display":"none"});
          $(".burger-icon").css({"display":"none"});
          $(".responsive-nav").removeClass("mobile-menu-tabs");
       } else {
         console.log('mobile')
         $(".burger-icon").css({"display":"block"});
         $(".menu-close").css({"display":"none"});
         $(".responsive-nav").css({"display":"none"});
         $(".responsive-nav").addClass('mobile-menu-tabs');
         $('.dropdown-content').hide();
       }//end of it statenent
    });

    $('.mobile-menu-tabs').click(function(){
      // console.log($(this).closest('.dropdown').find('.dropdown-content').css())
      $('.dropdown-content').hide();
      $(this).closest('.dropdown').find('.dropdown-content').toggle();


    })


      $('.sports-windows').slick({
        // dots: true,
        infinite: true,
        // fade: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        // nextArrow: '<div class="nextArrow"></div>',
        // prevArrow: '<div class="prevArrow">></div>',
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
              slidesToScroll: 1,
              speed: 100
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


  $(document).ready(function(){

    $(".burger-icon").click(function(){
      $(".responsive-li").toggle();
    });

      $('.sports-windows').slick({
        // dots: true,
        infinite: false,
        // fade: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 2,
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

  })

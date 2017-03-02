
  function myFunction(){
    console.log("resized")
  }


  $(document).ready(function(){
    // $('.dropdown-content').hide();

    // $('.dropdown-content').hide();

    $(".burger-icon").click(function(){
      // $('.dropdown-content').hide();
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });
    $(".menu-close").click(function(){
      // $('.dropdown-content').hide();
      $(".responsive-nav").toggle();
      $(".burger-icon").toggle();
      $(".menu-close").toggle();
    });

// setInterval(function(){
$( window ).resize(function() {
    if($(window).width() > 700 ){
      $(".drop-btn").show();
      $(".responsive-nav").show();
    //   console.log("window big")
    //   // $(".responsive-nav").addClass('mobile-menu-tabs');
    //   $('.dropbtn ').hover(function(){
    //     // console.log("hovering over drop button")
    //     //  $(this).closest('.dropdown').find('.dropdown-content').toggle();
    //        $(this).children('.dropdown-content').stop(true, false, true).slideToggle(300);
      };
    });
 $('.dropdown-content').mouseenter(function(){
     $(this).prev('.dropbtn').css({"background":"#faa04b"});
     console.log( $(this).closest('.dropbtn'))
     console.log('hovering')
   });
   $('.dropdown-content').mouseleave(function(){
       $(this).prev('.dropbtn').css({"background":"#1a1a1a"});
       console.log( $(this).closest('.dropbtn'))
       console.log('hovering')
     });


$('.sports-expander-btn').on('click', function(){
  console.log('clickde')
  $(this).closest('.sports-expander-btn').find('.seb-minus').toggle();
  $(this).closest('.sports-expander-btn').find('.seb-plus').toggle()
  // $(this).next('.seb-plus').toggle();
  // $(this).next('.sports-expander-btn').toggle();
  $(this).next('.sports-expander').toggle();
 })




    // }
    // if($(window).width() < 700 ){
    //     console.log("window small")
    //   $(".responsive-nav").click(function(){
    //     console.log('clickable')
    //     $('.dropdown-content').hide();
    //      $(this).closest('.dropdown').find('.dropdown-content').toggle();
    //   });
    // };
// }, 1000)

    // }

    // $(window).resize(function(){
    //    if ($(window).width() > 700 ){
    //       console.log("not mobile");
    //       $('.dropdown-content').hide();
    //       // $(".responsive-nav").show();
    //   //     $(".menu-close").css({"display":"none"});
    //   //     $(".burger-icon").css({"display":"none"});
    //       $(".responsive-nav").removeClass("mobile-menu-tabs");
    //       // $(".responsive-nav").removeClass("dropdown");
    //    } else {
    //   //    console.log('mobile')
    //   //    $(".burger-icon").css({"display":"block"});
    //   //    $(".menu-close").css({"display":"none"});
    //   //    $(".responsive-nav").css({"display":"none"});
    //     //  $(".responsive-nav").addClass('mobile-menu-tabs');
    //      $('.dropdown-content').hide();
    //    }//end of it statenent
    // });

    // $('.mobile-menu-tabs').click(function(){
    //   console.log("click mo res")
    //   // console.log($(this).closest('.dropdown').find('.dropdown-content').css())
    //   $('.dropdown-content').hide();
    //   $(this).closest('.dropdown').find('.dropdown-content').toggle();
    //
    //
    // })


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
              speed: 300
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



  $(document).ready(function(){


    //***** SEMANTIC UI ********



      $('.ui.dropdown')
        .dropdown();




//***********SEMANTIC

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
    if($(window).width() > 750 ){
      $(".drop-btn").show();
      $(".responsive-nav").show();
      // $('.sports-expander').show();
    //   console.log("window big")
    //   // $(".responsive-nav").addClass('mobile-menu-tabs');
    //   $('.dropbtn ').hover(function(){
    //     // console.log("hovering over drop button")
    //     //  $(this).closest('.dropdown').find('.dropdown-content').toggle();
    //        $(this).children('.dropdown-content').stop(true, false, true).slideToggle(300);
      };
        if($(window).width() < 700 ){
          $(".drop-btn").hide();
          $(".responsive-nav").hide();
        }

      // if($(window).width() <  700 ) && ($window.width() -){

      // function () {
        $difference = $(window).width() - 200;

        console.log($difference);
      // }

    });
 // $('.dropdown-content').mouseenter(function(){
 //     $(this).prev('.dropbtn').css({"background":"#faa04b"});
 //     console.log( $(this).closest('.dropbtn'))
 //     console.log('hovering')
 //   });
  //  $('.dropdown-content').mouseleave(function(){
  //      $(this).prev('.dropbtn').css({"background":"#1a1a1a"});
  //      console.log( $(this).closest('.dropbtn'))
  //      console.log('hovering')
  //    });


// $('.sports-expander-btn').on('click', function(){
//   console.log('clickde')
//   $(this).closest('.sports-expander-btn').find('.seb-minus').toggle();
//   $(this).closest('.sports-expander-btn').find('.seb-plus').toggle()
//
//   $(this).next('.sports-expander').toggle();
//  })



      $('.sports-windows').slick({
        arrows: false,
        infinite: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 9000,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 570,
            settings:
            {

              slidesToShow: 3,
              slidesToScroll: 1,
              speed: 300
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]

      });

      $('.main-left-selector').on('click', function(){
        $('.sports-windows').slick("slickPrev")
      });
      $('.main-right-selector').on('click', function(){
      $('.sports-windows').slick("slickNext")
      });





      $('.main-article').slick({
        arrows: false,
        //  nextArrow: ".nn",
      });
      $('.article-left-btn').on('click', function(){
        $('.main-article').slick("slickPrev")
      });
      $('.article-right-btn').on('click', function(){
        $('.main-article').slick("slickNext")
      });

      setTimeout(function() {
        // $('.sports-windows').cs
        $('.sports-windows').hide().css('visibility','visible').fadeIn('slow');
      }, 100);

  });


  $('.sports-windows').slick({
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 9000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 570,
        settings:
        {

          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });











  $(document).ready(function() {
      var title = {
        showInLegend: false,
        text: '',
          style: {
            display: 'none'
          }
      };
      var xAxis = {

        labels:{
          enabled: false
        },
        lineColor: 'transparent',
          minorTickLength: 0,
       tickLength: 0
      };
      var yAxis = {
        labels:{
          enabled: false
        },
        title: {
          text: 'Temperature (\xB0C)',
            style: {
              display: 'none'
            }
          },
        plotLines: [{
          value: 0,
          width: 0,
          color: '#1c1c1c'
        }],
        gridLineColor: '#1c1c1c',
        lineColor: 'transparent',
      };
      var plotOptions = {
        line: {
          marker: {
            enabled: false
          }
        }
      }

      var tooltip = {
        valueSuffix: '\xB0C'
      }

      var legend = {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      };

      var chart = {
        backgroundColor: '#1c1c1c',
        credits: {
          enabled: false
        },
      };
      var credits =  {
          enabled: false
      }

      var series =  [{
        //  showInLegend: false,

          data: [1.3, 1.5, 2.9, 3.5, 3.4, 3.9, 4.1,
          4.9, 5.2, 5.9, 6,6],
          color: "purple"
        },
        {

          data: [1, 1, 1.5, 2, 2, 2.5, 3,
          4, 4, 5, 6,9],
          color: 'green'
        },
        {

          data: [.9, 1.1, 1.2, 1.8, 1.9, 2.1, 2,
          1.9, 1.3, 1, 1.4 , 1],
          color: 'yellow'
        }
      ];

     var json = {};
     json.credits = credits;
     json.chart = chart;
     json.title = title;
     json.plotOptions = plotOptions;
     json.xAxis = xAxis;
     json.yAxis = yAxis;
     json.tooltip = tooltip;
     json.legend = legend;
     json.series = series;

     $('#linegraph').highcharts(json);
     $('#linegraph2').highcharts(json);
     $('#linegraph3').highcharts(json);
     $('#linegraph4').highcharts(json);
     $('#linegraph5').highcharts(json);
     $('#linegraph6').highcharts(json);
     $('#linegraph7').highcharts(json);
     $('#linegraph8').highcharts(json);


  });

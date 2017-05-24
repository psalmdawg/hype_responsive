
$(function() {
  Highcharts.setOptions({
    colors: ['#111441', '#6f0036']
  });

  var chart_completion = new Highcharts.Chart({
      chart: {
        renderTo: 'container1',
        backgroundColor:'lightgrey',
        type: 'pie',
        margin: [0,0,0,0],
        height: 115,
        width: 115,
        borderRadius: 60
      },
      tooltip: {
          enabled: false,
      },
      plotOptions: {
          pie: {
          slicedOffset: 0,
            size: '85%',
            dataLabels: {
                enabled: false
            }
        }
    },
      title: {
        text: '57% <br> <span class="donut-game-over">over</span>',

       floating: true,
       align: 'right',
       x: -25,
       y: 47,
          style: {
              fontSize: '20px',
              fontFamily: 'cooper-hewitt-bold'
          }
    },
      credits: {
        enabled: false
  },
      series: [{
          name: 'Browsers',
          data: [[1],[,2]],
          innerSize: '90%',
          showInLegend:false,
          dataLabels: {
              enabled: false
          },
          states:{
              hover: {
                  enabled: false
              }
          }
      }]
  });

  var chart_completion = new Highcharts.Chart({
      chart: {
        renderTo: 'container2',
        backgroundColor:'lightgrey',
        type: 'pie',
        margin: [0,0,0,0],
        height: 115,
        width: 115,
        borderRadius: 60
      },
      // responsive: [
      //   {
      //     chart:{
      //       breakpoint: 900,
      //       settings: {
      //         width: 100,
      //         height: 100
      //       }
      //     }
      //
      //
      //   }
      //
      //
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
      // ],
      tooltip: {
        enabled: false,
      },
      plotOptions: {
          pie: {
          slicedOffset: 0,
            size: '85%',
            dataLabels: {
                enabled: false
            }
        }
    },
      title: {
       text: '57%<br><span class="donut-game-over">over</span>',
       floating: true,
       align: 'right',
       x: -25,
       y: 47,
          style: {
              fontSize: '20px',
              fontFamily: 'cooper-hewitt-bold'
          }
    },
      credits: {
        enabled: false
  },
      series: [{
          name: 'Browsers',
          data: [[1],[,2]],
          innerSize: '90%',
          showInLegend:false,
          dataLabels: {
              enabled: false
          },
          states:{
              hover: {
                  enabled: false
              }
          }
      }]
  });


  Highcharts.setOptions({
    colors: ['#f07173', '#e8ebeb']
  });

});

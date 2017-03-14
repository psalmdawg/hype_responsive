
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
        height: 100,
        width: 100,
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
       x: -23,
       y: 39,
          style: {
              fontSize: '15px',
              fontFamily: 'verdana'
          }
    },
      credits: {
        enabled: false
  },
      series: [{
          name: 'Browsers',
          data: [[1],[,2]],
          innerSize: '85%',
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
        height: 100,
        width: 100,
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
       x: -23,
       y: 39,
          style: {
              fontSize: '15px',
              fontFamily: 'verdana'
          }
    },
      credits: {
        enabled: false
  },
      series: [{
          name: 'Browsers',
          data: [[1],[,2]],
          innerSize: '85%',
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

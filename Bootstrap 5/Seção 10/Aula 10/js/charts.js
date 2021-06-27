var options = {
    series: [48, 52],
    chart: {
    width: 380,
    type: 'pie',
  },
  dataLabels: {
      enabled: false
  },
  fill: {
      colors: ["#ffe605", "#00d153"]
  },
  labels: ['Online','Presencial'],
  legend: {
      show: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#piecharts"), options);
  chart.render();
  
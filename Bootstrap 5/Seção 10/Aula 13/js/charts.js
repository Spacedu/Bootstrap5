var optionsPie = {
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

  var chart = new ApexCharts(document.querySelector("#piecharts"), optionsPie);
  chart.render();
  

  var optionsBar = {
    series: [{
      name: 'Comissão',
      data: [55, 80, 105, 100, 110, 120, 118, 114, 119, 118]
    }],
    chart: {
      type: 'bar',
      fontFamily: 'Montserrat, Arial, sans-serif',
      foreColor: "#848484",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan','Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }

    },
    yaxis: {
      title: {
        text: 'mil'
      }
    },
    fill: {
      opacity: 1,
      colors: ["#00d153"]
    },
    grid: {
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "R$ " + val + " mil"
        }
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#barcharts"), optionsBar);
  chart.render();
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28,25.48],
        borderWidth: 0,
        backgroundColor:['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'],
        hoverBackgroundColor:['hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(186, 34%, 70%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)', 'hsl(10, 79%, 75%)'],

      }]
    },
    options: {
      plugins: {
        legend:{
          display:false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          display:false,
        },
      },
    }
  });

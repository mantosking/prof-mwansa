fetch('/.netlify/functions/getStats')
  .then(r => r.json())
  .then(drawChart)
  .catch(() => drawChart(fakeData()));

function drawChart(data) {
  const ctx = document.getElementById('progressChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.title),
      datasets: [{
        label: 'Nombre de lectures',
        data: data.map(d => d.completed),
        backgroundColor: '#6b21a8'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function fakeData() {
  return [
    { title: 'Nuit à Kin', completed: 120 },
    { title: 'Afro Sunset', completed: 89 },
    { title: 'Rumba Nova', completed: 176 }
  ];
}

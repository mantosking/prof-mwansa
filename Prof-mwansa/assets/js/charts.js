/* Graphique fictif – remplacé par données réelles via /getStats */
fetch('/.netlify/functions/getStats')
  .then(r => r.json())
  .then(drawChart)
  .catch(() => drawChart(fakeData()));

function drawChart(data) {
  const ctx = document.getElementById('progressChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.title),
      datasets: [{
        label: 'Étudiants ayant terminé (%)',
        data: data.map(d => d.completed),
        backgroundColor: '#005bbb'
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

function fakeData() {
  return [
    { title: 'Introduction à l’algo', completed: 78 },
    { title: 'Structures de données', completed: 65 },
    { title: 'POO en Python', completed: 92 }
  ];
}
function myLoadFunction()
{
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [10, 20, 30]
                  }],
            labels: [
                    'Red',
                    'Yellow',
                    'Blue'
                    ],
            backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'                        
                    ],
            borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'                        
                    ],
            borderWidth: 1
        }
         
    });
}
document.addEventListener('DOMContentLoaded',myLoadFunction);
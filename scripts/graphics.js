const { income, expense, total } = DOM.formatGraphic();

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Entrada', 'Saida', 'Total'],
        datasets: [{
            label: 'Cálculo de dinheiro',
            data: [Math.round(income), Math.round(expense), Math.round(total)],
            backgroundColor: [
                '#49AA26',
                '#E83F5B',
                '#15AABF'
            ],
            borderWidth: 6,
        }],
    }
});
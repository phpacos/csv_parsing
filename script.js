criaGrafico();

const eixo_x = [];
const eixo_y = [];

//precisa de uma função assíncrona para esperar os dados carregarem antes de carregar o gráfico
async function criaGrafico(){
    await getDados();    
    const ctx = document.getElementById('grafico').getContext('2d');
    const myChart = new Chart(ctx, {
        //tipo de gráfico. pode ser: line, bar, radar, pie, doughnut, polarArea, bubble e scatter, 
        type: 'bar',
        data: {
            //dados no eixo x
            labels: eixo_x,
            datasets: [{
                label: 'Vendas por país',
                //dados no eixo y
                data: eixo_y,
                //cor de fundo
                backgroundColor: 'blue',
                //cor de borda
                borderColor: 'black',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


//parsing manual dos dados
async function getDados() {

    //fonte dos dados em CSV
    const fonte_dados = 'dados/100 Sales Records.csv';

    const response = await fetch(fonte_dados);
    const dados = await response.text();
    
    //divide as linhas e tira o header
    const linhas = dados.split('\n').slice(1);

    //pega cada dado dividindo o CSV pela vírgula
    linhas.forEach(linha =>{
        const dado = linha.split(',');

        //atribui os dados a uma variável
        const pais = dado[1];
        const vendas = dado[8];

        //Coloca os paises no eixo x da tabela e as vendas no eixo y
        eixo_x.push(pais); 
        eixo_y.push(vendas);

        //checando no console
        console.log(pais, vendas);
    });

}
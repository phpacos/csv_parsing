//fonte dos dados em CSV
const fonte_dados = 'dados/ZonAnn.Ts+dSST.csv';

getDados();

//parsing manual com função assíncrona
async function getDados() {
    const response = await fetch(fonte_dados);
    const dados = await response.text();
    
    //divide as linhas e tira o header
    const linhas = dados.split('\n').slice(1);

    //pega cada dado dividindo o CSV pela vírgula
    linhas.forEach(linha =>{
        const dado = linha.split(',');

        //atribui os dados a uma variável
        const ano = dado[0];
        const temp = dado[1];

        //checando no console
        console.log(ano, temp);
    });

}
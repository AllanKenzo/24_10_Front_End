//montar string de conexão
const protocolo = 'http://';
const host = 'localhost:3000';
const filmesEndPoint = '/filmes';

async function obterFilmes(){
    const URLcompleta = `${protocolo}${host}${filmesEndPoint}` //montando a url
    const filmes = (await axios.get(URLcompleta)).data


    console.log(filmes)
}
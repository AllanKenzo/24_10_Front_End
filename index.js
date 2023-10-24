//também estamos usando a extensão Thunder Client
const express = require('express');
const cors = require('cors');

const app = express(); //chamando um construtor express, assim instanciando uma variavel do tipo express
app.use(express.json());
app.use(cors());

let filmes = [
    {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
    },
    {
    titulo: "Um Sonho de Liberdade",
    sinopse: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
    }
]
    

//ponto de acesso teste get
app.get('/oi', (req, res) => res.send('oi')); //função get possui os parâmetros (/'nome do ponto de acesso', ação), dentro de ação (requisição, resposta, encadeamento(opcional))

//ponto de acesso para consultar a lista de filmes
app.get('/filmes', (req, res) => res.send(filmes))

//ponto de acesso para enviar um novo filme
app.post('/filmes', (req, res) => {
    const titulo = req.body.titulo; //criando uma variável local e armazenando as informações da requisição nela
    const sinopse = req.body.sinopse;

    const filme = {titulo: titulo, sinopse: sinopse}; //construindo um objeto JSON com as variáveis locais que possuem a informação do filme
    filmes.push(filme); //comando push insere a variável filme no nosso vetor JSON 'filmes'

    //testando
    res.send(filmes);
})

app.listen(3000,() => console.log('app up & running')); //função listen possui os parâmetros (port, ação)


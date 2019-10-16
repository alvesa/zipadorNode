const express = require('express');
const app = express();

const zip = require('./zipFiles');

app.get('/', (req, res, next) =>{
    
    const mensagem = zip.ziparArquivos('PCF4CustomPM025210', '../Projetos/BARTIRA/PCF4CustomPM025210/');

    res.send({ mensagem });
});

app.listen(3001, data =>{
    console.log('Logado na porta 3001')
})
const express = require('express');
const app = express();

const zip = require('./zipFiles');

app.get('/', (req, res, next) =>{
    
    const mensagem = zip.ziparArquivos('SeuProjeto', 'PastaSeuProjeto/');

    res.send({ mensagem });
});

app.listen(3001, data =>{
    console.log('Logado na porta 3001')
})
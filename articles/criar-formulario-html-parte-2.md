---
title: "Como Criar Formulário HTML: Parte 02"
date: "2020-02-19"
tags: 
  - "como-criar-formulario"
  - "como-criar-formulario-online"
  - "como-criar-formularios"
  - "como-criar-um-formulario"
  - "como-criar-um-formulario-online"
  - "criar-formulario"
  - "criar-formulario-para-site"
  - "formulario"
  - "site-para-criar-formularios"
description: Fala dev, neste artigo iremos da continuidade a série Criar Formulário HTML, nessa parte 2 vamos criar um pequeno servidor usando a tecnologia NodeJS para fazermos a comunicação entre front-end e back-end na prática, iremos enviar os dados preenchido no formulário para o nosso servidor em Node. Veja onde paramos, caso você não tenha lido a parte 1 [clique aqui](https//www.tipscode.com.br/criar-formulario-html5-parte-1/). Vamos ao código base.
imgArticle: /thumbnail-article/formulario-html-parte-2.png
imgHome: /thumbnail-home/formulario-html-parte-2.png
---

Fala dev, neste artigo iremos da continuidade a série **Criar Formulário** HTML, nessa parte 2 vamos criar um pequeno servidor usando a tecnologia NodeJS para fazermos a comunicação entre front-end e back-end na prática, iremos enviar os dados preenchido no formulário para o nosso servidor em Node. Veja onde paramos, caso você não tenha lido a parte 1 [clique aqui](/criar-formulario-html5-parte-1/). Vamos ao código base.

## Código Base - Criar Formulário

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <form action="" method="POST">
        <input type="text" name="nmae" />
        <input type="password" name="senha" />

        <textarea name="descricao" cols="30" rows="10"></textarea>

        <div>
            <input type="radio" name="tipo" value="admin" /> Admin
            <input type="radio" name="tipo" value="Regular"/> Regular
        </div>
        <div>
            <input type="checkbox" name="ativo" id="" /> Ativo
        </div>
        <select name="cidades">
            <option value="jua">Juazeiro do Norte</option>
            <option value="crato">Crato</option>
            <option value="bar">Barbalha</option>
            <option value="mv">Missão Velha</option>
     </select>

     <select name="interesses" multiple size="10">
            <option value="JavaScript"> JavaScript </option>
            <option value="Java"> Java </option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
    </select>
        <button>Enviar</button>
    </form>
    
</body>
</html>
```

![Criar Formulário HTML](/uploads/2020/02/Figura-01-Código-Base-1.jpg)

**Figura 01 - Código base / Criar Formulário HTML**

## Criando servidor para receber os dados

Agora que criamos nosso formulário, vamos criar um pequeno servidor usando a tecnologia NodeJS para receber esses dados e iremos ver na prática a comunicação entre servidor e cliente.

- Passo 1 - crie um diretório com o nome que você deseja (neste exemplo meu diretório se chamara form)
- Passo 2 - cria um arquivo chamado server.js
- passo 3 - abra o terminal dentro do diretório e escreva o comando npm init -y caso você use o npm, caso use o yarn que é meu caso escreva o comando yarn init (esse comando irá criar o arquivo package.js)
- passo 4 - Para nosso servidor roda legal, precisaremos instalar mais dois pacotes são eles o express e o body-parser; escreva o seguinte comando para a instalação: yarn add express e yarn add body-parser. (Caso você use o npm veja na documentação os comando de instalação de pacotes, mas é super simples)

![Criar Formulário HTML](/uploads/2020/02/Figura-02-Servidor.jpg)

Figura 02 - servidor

## Código do servidor - Criar Formulário

### DO ZERO A PROGRAMADOR FULL STACK JAVASCRIPT (REACT + NODEJS)

Veja o vídeo do Leonardo, onde ele explicar com detalhes como você sair do ZERO a DOMINA de uma vez por toda a STACK mais desejada do mercado, clique em Ver Vídeo agora mesmo

[VER VÍDEO](/programador-fullstack-8-semanas)

```
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static('.'))

app.post('/usuarios', (req, res) =>{
    console.log(req.body)
    res.send('Deu tudo certo!!')
})

app.listen(3000)
```

Eu não vou explicar o código desse servidor pois temos um vídeo em nosso canal no Youtube onde criamos um servidor nodejs semelhante a esse, então caso você tenha interesse em entender o código do servidor [clique aqui.](https://www.youtube.com/watch?v=RiBU3rEOj40&t=39s)

Para testar o servidor abra o terminal e digite o seguinte comando: node server.js veja na figura 3 como o terminal ficará depois que executa o comando.

![Criar Formulário HTML](/uploads/2020/02/Figura-03-servidor-rodando.jpg)

Figura 03 - Servidor rodando

Observe que o terminal ficou “travado” isso significa que o servidor está rodando e esperando alguma ação vinda do front-end, em nosso caso será o form.html iremos enviar os dados para o nosso servidor. Vamos testa e fazer o envio dos dados, abra o seu navegador e digite o seguinte endereço: [http://localhost:3000/form.html](http://localhost:3000/form.html)

![Criar Formulário HTML](/uploads/2020/02/Figura-04-Form-rodando-no-servidor.jpg)

**Figura 04 - Servidor rodando - Form.html**

Agora vamos preencher todos os campos do nosso formulário que criamos na parte 1 deste artigo, caso não tenha lido [clique aqui](/criar-formulario-html5-parte-1/), depois que preencher os campos do formulário cliquem no botão enviar. Veja na figura 5 como fico:

![Criar Formulário HTML](/uploads/2020/02/Figura-5-Comunicação-realizada-com-sucesso-1024x560.jpg)

Figura 5 - Comunicação Funcionando

## Conclusão - Criar Formulário

Galera chegamos ao fim de mais um artigo do site tipscode, neste artigo criamos um servidor em NodeJS e enviamos os dados do formulário que criamos na parte 1 deste artigo, caso você não tenha lido [clique aqui](/criar-formulario-html5-parte-1/). Na parte 3 neste artigo iremos se aprofunda no formulário e aprimorar nossa comunicação entre o servidor e o nosso cliente. **Criar Formulário**

### DO ZERO A PROGRAMADOR FULL STACK JAVASCRIPT (REACT + NODEJS)

Veja o vídeo do Leonardo, onde ele explicar com detalhes como você sair do ZERO a DOMINA de uma vez por toda a STACK mais desejada do mercado, clique em Ver Vídeo agora mesmo

[VER VÍDEO](/programador-fullstack-8-semanas)

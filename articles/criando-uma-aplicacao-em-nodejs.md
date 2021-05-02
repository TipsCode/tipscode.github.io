---
title: "Criando uma aplicação em Nodejs"
date: "2020-01-07"
categories: 
  - "artigos"
tags: 
  - "aplicacao-em-node"
  - "nodejs"
description: Fala dev, tudo bem? Neste artigo vamos criar nossa primeira aplicação em Nodejs, então sem mais conversa bora coda?
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Fala dev, tudo bem? Neste artigo vamos criar nossa primeira **aplicação em Nodejs,** então sem mais conversa bora coda?

### Instalando o Nodejs e o Yarn

Temos dois artigos aqui no site, onde ensino passo a passo a instalação do Nodejs e o Yarn, no artigo ensino instalar no Linux, caso você use o da uma pesquisada no Google é bem simples a instalação.

[Instalando o NodeJS](/conhecendo-nodejs/)

[Instalando o Yarn](/instalando-nodejs-no-manjaro/)

Agora vamos colocar a mão na massa. Siga os passos a baixo !!

- Passo 01: Crie um diretório \[nome você escolhe\];
- Passo 02: Entre neste diretório que você criou;
- Passo 03: Abra o terminal dentro do diretório;
- Passo 04: Escreva o seguinte código:

```
yarn init -y
```

Seu terminal deverá está parecido com esse:

![](/uploads/2020/01/Terminal-01.png)

**aplicação em Nodejs,**

O comando _yarn init -y_ cria um arquivo chamado _package.json_, vamos abrir o nosso editor de código, neste artigo estarei usando o _vccode_, mas fique a vontade para usa um de sua preferencia.

![](/uploads/2020/01/visualcode-aberto.png)

**aplicação em Nodejs,**

O arquivo package.json contém algumas informações, tais como o nome da aplicação, a versão, o arquivo base e a licença, porém essas informações só serão utilizadas caso o nosso projeto fosse ser disponibilizado para terceiro, caso contrário não vamos fazer uso. O package.json tem é responsabilidade por gerenciar nossos módulos e dependências, ou seja, tudo que instalarmos de terceiros vai ficar neste arquivo..

## Instalando express

O Express é um microframework do Nodejs, o Express vai nos dá algumas funcionalidades padrão e irá facilitar muito a nossa vida. Claro que o Express é bem mais complexo do que citei, caso você tenha interesse em estudar e aprender de forma 100% prática com projetos reais CLIQUE AQUI. Então vamos instalar o Express em nosso projeto com o seguinte comando.

```
yarn add express
```

![](/uploads/2020/01/package.jpg)

**aplicação em Nodejs**

Observe que o arquivo package.json foi alterado, agora temos um objeto com o nome “dependencies” e o nosso Express com o número da versão atual, isso é muito importante pois se outro programador pegar o nosso projeto ele não precisará o Express na mão, só é necessário executar o seguinte comando no terminal yarn e automaticamente todas as dependências serão instaladas.

## Arquivo Raiz

Vamos criar nosso arquivo raiz, nele será escrito a base de toda a aplicação, então vamos criar o o nome "index.js" outro nome bastante utilizado é o "app.js" fica a sua escolha beleza, neste arquivo vamos escrever o seguinte código:

```
const express = require('express')

const server = express()

server.get('/teste', () =>{
    console.log('Estamos no caminho certo !!')
})

server.listen(3000)
```

Começamos importando o Express, a partir deste momento todas as funcionalidades que o Express expõe vai está presente na variável "express". Agora vamos iniciar nosso servidor criando uma const "server" e instanciando o express. Para vermos isso funcionando precisamos criar nossa primeira rota, existem quatro tipos de métodos de rotas diferentes, são ele o get, post, put e o delete. Na linha 5 estamos falando o seguinte, oh quando a url /teste for chamada execute a função console.log() e exiba a mensagem no terminal. Vamos iniciar servidor, para fazer isso precisamos que ele escute alguma porta, então na linha 9 estamos mandando o servidor fica ouvindo a porta 3000, vamos testar, abra o terminal, e execute seguinte comando:

```
node index.js 
```

Abra navegador e digite na barra de endereço: _**https://localhost:3000/teste.**_ Note que o navegador ficou carregando, isso está acontecendo porque ele está esperando alguma resposta do nosso servidor, se formos olhar no terminal, veremos que a mensagem que escrevemos na função _consolo.log()_ está aparecendo. Para paramos a execução do servidor no terminal, pressionamos ás teclas ( ctrl + c ).

### Passando um retorno para o front-end

```
const express = require('express')

const server = express()

server.get('/teste', (req, res) =>{
    return res.send('Hello world')
})

server.listen(3000)
```

Essa função que criamos depois do "/teste" ela possui dois parâmetros o "req" e o "res" o req representa todos os dados da nossa requisição, o usuário pode enviar vários parâmetros através do req são eles:

Query Params;

Route Params;

request body

Não vou entrar em detalhes neste artigo aqui sobre, caso você tenha interesse em se aprofunda em Nodejs te recomendo o nosso curso [Programador Full Stack JavaScript em 8 semanas!](http://bit.ly/tipscode-curso-programador-full-stack-javascript) la explicamos tudo com detalhes e exemplos, criando na prática aplicações reais usando o Nodejs. No parâmetro "res" vamos ter todas as informações que precisamos para retorna uma resposta para o meu front-end, então vamos retorna um simples texto usando a função send(). Para testar rode o seguinte comando no terminal:

```
node index.js
```

Abra o navegador e digite localhost:3000/teste

![](/uploads/2020/01/Retorno-com-sucesso.png)

**aplicação em Nodejs,**

Uma API normalmente não retornar texto, e sim formatos como JSON ou XML, para enviamos um JSON por exemplo, vamos ao código:

```
const express = require('express')

const server = express()

server.get('/teste', (req, res) =>{
    return res.json( {message: 'Hello World' } )
})

server.listen(3000)
```

Faça o mesmo procedimento para executar o código e agora temos uma API retornando um json.

### Criando as rotas post, put e delete

Para podemos testar esses métodos, vamos precisar de uma ferramente, neste artigo vou usar o [Insomnia](https://insomnia.rest/download/), tem versão para Mac, Linux e Windows existe também o [postman](https://www.getpostman.com/), fique a vontade na escolha.

Antes de criamos nossos métodos com o Insomnia, precisamos entender um pouco sobre como funciona os métodos e como podemos captura-los através da url, vamos a um exemplo. Vamos ao navegador e digitamos o seguinte: [http://localhost:3000/teste?nome=Joao](http://localhost:3000/teste?nome=Joao)

![](/uploads/2020/01/nenhum-retorno.png)

**aplicação em Nodejs,**

Não temos nenhum feedback visual, pelo menos por enquanto, mas digamos que queremos que o nome que digitamos na barra do navegador apareça no corpo da mensagem, vamos ao código:

```
const express = require('express')

const server = express()

server.get('/teste', (req, res) =>{
    
    const nome = req.query.nome

    return res.json( {message: `Buscando o usuário ${nome} `} )
})

server.listen(3000)
```

Criamos uma const chamada "nome" onde essa variável receberá o req.query.nome, ou seja, então a variável nome irá receber o conteúdo que digitamos lá no navegador, e para mostrar esse nome, vou usar um recurso novo do JavaScript que é as templates string. Bom com essa alteração, podemos continuar nossa API, lembrando que temos um super treinamento onde passamos por cada detalhe do Nodejs para sabe mais [clique aqui](http://bit.ly/tipscode-curso-programador-full-stack-javascript).

### Capturando um id pela url

Abra seu navegador e digite [https://localhost/teste/1](https://localhost/teste/1)

```
const express = require('express')

const server = express()

server.get('/teste/:id', (req, res) =>{
    const id = req.params.id

    return res.json( {message: `Buscando o usuário ${id}` } )
})

server.listen(3000)
```

Vamos fazer uma pequena alteração em nosso código para capturamos o nosso ID:

```
server.get('/teste/:id', (req, res) =>{
    const id = req.params.id

    return res.json( {message: `Buscando o usuário ${id}` } )
})
```

Com essa pequena alteração, conseguimos capturar o id especifico digitado na url do navegador. Agora vamos abrir nossa ferramente para realizamos nossos testes.

![](/uploads/2020/01/Insomnia-1024x537.png)

**aplicação em Nodejs,**

### Criando Requisições

Abra seu navegador e digite [https://localhost/teste/1](https://localhost/teste/1)

![](/uploads/2020/01/Insomnia-criando-rota.png)

![](/uploads/2020/01/sucesso-insomnia.png)

**aplicação em Nodejs,**

### Melhorando nossa API

```
const express = require('express')

const server = express()

const users = ['Tipscode', 'Dukeza', 'Tux']

server.get('/teste/:index', (req, res) =>{
    const { index } = req.params

    return res.json(users[index])
})

server.listen(3000)
```

Precisamos salvar esses usuários em algum lugar da aplicação, como esse artigo não se propõe a mostrar nenhum banco de dados, não vamos utilizar dessa forma. O Nodejs quando é executado ele guarda em memoria todas as variáveis criadas no projeto, e o legal é que elas não são recriadas quando o usuário faz uma nova requisição, então vamos criar um array “users” para guarda esses usuários, em nosso parâmetro ao invés de receber o id vou pegamos o index que é a posição do usuário e no retorno, retornamos só users que é nosso array de acordo com a posição do index.

### Finalizando API

CRUD - Create, Read, Update, Delete

Nossa aplicação está começando a ganha forma. Nesta parte, vamos escrever o GRUD na nossa aplicação, GRUD significa create, read, update e delete, não vou foca em explicar detalhadamente se não o artigo ficará muito grande, mas basicamente nossa API vai criar um usuário, listar, alterar e deleta esses usuários. Vamos ao código fazer essas modificações.

### Listando usuários

```
const users = ['Tipscode', 'Dukeza', 'Tux']

server.get('/users', (req, res) =>{
    return res.json(users)
})
```

Criarmos uma rota, onde lista todos os usuários essa função não precisa receber parâmetros, apenas um json com todos os usuários que estiver em memória. Vamos abrir o Insomnia para testar a lista de usuários.

![](/uploads/2020/01/Listando-usuários-1024x281.jpg)

### Criando usuário

Vamos ao código

```
server.post('/users', (req, res) => {
    const { name } = req.body

    users.push(name)

    return res.json(users)
})
```

Criamos uma const “name” onde receberá o corpo da requisição, depois fazemos users.push(name) e o médoto push() adiciona ao array o elemento que passamos, neste caso o conteúdo da variável “nome” e por fim retornamos esse users. Salvamos e executamos o código com node index.js, agora vamos abrir o insommnia e criar as requisições para testamos nossa aplicação. Veja a figura abaixo.

![](/uploads/2020/01/Método-post-1024x425.jpg)

**aplicação em Nodejs,**

![](/uploads/2020/01/Erro-método-1024x301.jpg)

**aplicação em Nodejs,**

Veja que deu um erro, isso aconteceu por que o express tem várias formas de receber o corpo da requisição, uma delas é o json, vamos usar o json na maiorias das vezes, mas precisamos dizer isso ao express, oh express vamosa usar o formato json beleza, passando isso para o código escrevemos o seguinte:

```
server.use(express.json())
```

Vamos testar novamente !!

![](/uploads/2020/01/criar-e-lista-funcionando-1024x463.jpg)

**aplicação em Nodejs,**

Agora nossa aplicação está fazendo as duas operações básicas do GRUD, criando usuário e listando usuário, vamos agora editar esse usuário.

### Editando usuário

Para fazer a alteração do usuário precisamos saber qual o usuário especifico para editar, então precisamos localizar esse usuário, para fazermos isso, precisamos percorrer o nosso array e identificar o usuário na posição do array. Vamos ao código!

```
server.put('/users/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})
```

Primeiro vamos fazer uma alteração no parâmetro da função put(), /users/:index' esse trecho de código que dizer que tudo depois da /: conseguimos captura, depois criamos uma variável “index” e atribuímos o re.params, ou conteúdo do index lá da url será guardada na variável index que criamos, depois criamos outra variável com o nome “name” recebendo o req.body, ou seja, todo o corpo da requisição. Para finalizamos, setamos o array users na posição do índice que capturamos e atribuímos ao name, por fim retornarmos um json com o array users. Agora vamos testar usando a ferramente Insomnia.

![](/uploads/2020/01/editando-usuário-1024x301.jpg)

**aplicação em Nodejs,**

### Deletando usuário

```
server.delete('/users/:index', (req, res) => {
    const { index } = req.params

    users.splice(index, 1)
})
```

Para deleta usamos o método delete(), precisamos também identificar qual usuário deletar, então vamos usar a mesma estratégia do editar, capturando o índice do array, e ai usamos o método splice() basicamente ele percorre todo o array, vai chegar no índice que passamos, ele deleta a posição a partir do elemento encontrado.

![](/uploads/2020/01/Deletando-sucess-1024x564.jpg)

**aplicação em Nodejs,**

Nossa aplicação em NodeJS está pronta, estamos realizando as quatro tarefas básicas do CRUD são elas criar, listar, editar e deletar. Caso você queira clona o código, segue o link do repositório no GitHub [clique aqui](https://github.com/alissonsuassuna/crud-nodejs).

[![](/uploads/2020/01/banner-Porgramador-full-stack-Javascript-1024x1024.png)](/programador-fullstack-8-semanas)

### Se torne um desenvolvedor FULL STACK em apenas 8 SEMANAS

O maior treinamento online de JAVASCRIPT voltado 100% para o MERCADO DE TRABALHO. Você vai aprender JavaScript, Lógica de Programação, HTML5, CSS3, Bulma, NodeJs, Express, React, Git, Github.

[Quero Participar](/programador-fullstack-8-semanas)

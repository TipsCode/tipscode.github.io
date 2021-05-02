---
title: "Conhecendo NodeJs"
date: "2020-01-01"
categories: 
  - "artigos"
description: Neste artigo vamos conhece e saber com mais detalhes sobre essa plataforma de desenvolvimento que vem evolucionando o mercado web. NodeJS, a final de contas o que é? Por que ele está dominando o mercado? Quais são suas características? Quais são os benefícios? Todas essas perguntas esse artigo se propõe a responde-las, então sem mais delongas vamos la !!
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Neste artigo vamos conhece e saber com mais detalhes sobre essa plataforma de desenvolvimento que vem evolucionando o mercado web. NodeJS, a final de contas o que é? Por que ele está dominando o mercado? Quais são suas características? Quais são os benefícios? Todas essas perguntas esse artigo se propõe a responde-las, então sem mais delongas vamos la !!

## O que é NodeJS

- JavaScript no back-end;
    - Não lidamos com eventos do usuário final;
    - Rotas e integrações;
- Plataforma (não linguagem);
- Construída em cima da [engine V8](https://v8.dev/);
- Comparável a PHP / Ruby / Python / Go;

_NodeJs_ nos possibilita utilizar a linguagem _JavaScript_ no _back-end_, o _back-end_ é tudo o que o usuário não enxerga, ou seja, todo parte visual de um determinado site, cliques de botões, imagens, vídeos, áudios e links. O back-end é uma camada onde fica a regra de negócio da aplicação, a comunicação com banco de dados, integrações de serviços de terceiros como por exemplo plataformas de pagamentos, sistema de notas fiscais. Outra coisa que temos que levar em conta, quando iniciamos os estudos em _NodeJS_ é que não vamos lidar com nenhum tipo de evento vinda do usuário final, ou seja, não vamos fazer nenhum tratamento com cliques em botões, passar o mouse por cima de algum elemento, que é dessa forma que o JavaScript é utilizado nos navegadores, quando estamos desenvolvendo em NodeJs a única forma de ouvir eventos dos usuários é usando as rotas, ou seja, quando o usuário acessa alguma url e disparamos alguma resposta para o _**client-server.**_

![](/uploads/2019/12/O-que-é-NodeJS-1024x427.jpg)

NodeJS não é uma linguagem de programação, vejo vários programadores fazendo essa confusão. NodeJS é uma plataforma para desenvolvimento _back-end_, ele foi construído em cima da engine V8, V8 é o motor que está por trás do navegador Google Chrome, ele utiliza dessa engine para conseguir roda códigos JavaScript no back-end, isso faz com que ele seja muito rápido e conseguimos usar todos os recursos disponíveis na linguagem JavaScript no back-end. Podemos comparar o NodeJS com linguagens como PHP, Ruby, Python, GO que também rodam no _back-end_, ou qualquer outra que se aplique no lado do back-end.

### O que é NPM e YARN ?

![](/uploads/2019/12/detective-1424831_640-297x300.png)

- Instalar bibliotecas de terceiros;
- Fornece bibliotecas

Antes de falarmos algumas características do NodeJS em relação as linguagens mais tradicionais, temos que falar um pouco sobre os gerenciadores de pacotes que temos, exemplos são o **_NPM_** e o **_Yarn_** os dois são ferramentas similares. Esses gerenciadores nos permitem que fazemos instalações de pacotes de terceiros, exemplo, digamos que nossa aplicação precise de alguma **_lib_** de pagamentos como exemplo o PagSeguro, Paypal, geralmente não criamos do zero, apenas instalamos em nossos projetos e utilizamos. Podemos também fornecer nossas próprias bibliotecas e disponibiliza-las através desses gerenciadores de pacotes através de um repositório global. Podemos comparar o **_NPM_** e o **_Yarn_** com alguns gerenciadores de outras linguagens tais como:

- Composer do PHP;
- Gems do Ruby;
- PIP do Python

### Principais Características

Vamos explorar algumas das características do Node e entender o porque que ele está tão “famoso” e dominando a maior parte do mercado.

- Arquitetura Event-loop
    - Baseada em eventos (Rotas na maiorias das vezes);
    - Call Stack
- Node single-thread;
    - C++ por trás com libUV;
    - background threads;
- Non-blocking I/O

O Node segue uma arquitetura bem diferente das tradicionais, essa arquitetura se chama _Event-loop_ ela é totalmente baseada em eventos e tem um ponto central que é o **call Stack**. _O call stack_ nada mais é do que uma pilha de eventos, podemos imagina um evento como se fosse uma função, e o Node processa através de um loop eterno, onde o mesmo fica verificando se existe alguma nova função, e executa em formato de pilha, caso tenha interesse em estudar com mais detalhes, recomendo o treinamento [**INCRÍVEL E COM UMA METODOLOGIA INOVADORA DE ENSINO** PROGRANADOR FULL STACK JAVASCRIPT em 8 SEMANAS](http://bit.ly/tipscode-curso-programador-full-stack-javascript). Outra característica do Node é que ele é **_single-thread_**, ou seja, ele executa o processo em apenas um core do processador, mesmo que tenha vários cores, porém como ele utiliza várias libs do C++ por trás, e a mais famosa é a **_libuv_**, essa lib permite que utilizamos _multitheads_, isso que dizer que por baixo dos panos estamos utilizando mais de uma thread do processador, deixando nossa aplicação mais rápida. Outra característica muito poderosa do Node é o **_Non-blocking I/O_** traduzindo para português que dizer input e output não bloqueante, isso que dizer que quando é feita uma requisição para o Node, exemplo digamos que pedimos uma listagem de compras, não precisamos mandar a lista completa, conseguimos fazer essa listagem por partes, a conexão não será bloqueada, isso não acontece por exemplo em PHP que no momento que fazemos a requisição ela é respondida e a conexão é fechada imediatamente.

### Conceito Client-Server (Cliente - Servidor)

Algo de extrema importância para quem quer estudar e desenvolver aplicações com o NodeJs é entender o conceito de cliente-server, mas o que é um servidor? O servidor nada mais é do que uma aplicação com diversos serviços e pode ser requisitados por outras aplicações, já o client é uma aplicação capaz de fazer requisições para aplicação servidora, normalmente essas aplicações são executadas em maquinas distintas, mas por se trata de aplicações nada impede das duas coexista em uma mesma máquina, isso é muito comum no estágio do desenvolvimento.

![](/uploads/2019/12/client-server-1024x487.jpg)

Para que essa comunicação exista entre cliente e um servidor é necessário que ambas obedeça algumas regras de troca de mensagens, ou seja, um protocolo padrão de comunicação, no universo web, no lado do cliente estão os navegadores, google chrome, Firefox entre outros, no lado de servidores web conhecidos também como servidores HTTP, exemplos o apache e tomcat. A dinâmica é simples, a aplicação do lado do cliente é responsável por enviar uma requisição (request) para aplicação servidora, o mesmo faz todas as tratativas e enviar uma resposta (response) e por fim a aplicação cliente renderia todos os dados em tela.

![](/uploads/2019/12/Comunicação-entre-client-e-server-1024x427.jpg)

### Conclusões

Chegamos ao fim de mais um artigo, espero que tenha conseguido esclarece um pouco mais sobre o NodeJs, deixar seu comentário, vamos discutir mais sobre o assunto, feedbacks é muito bem-vindos e vão me ajudar a criar ainda mais conteúdo e com mais qualidade para vocês, até a próxima !

### Programador Full Stack JavaScript em 8 Semanas

Se você quer se tornar um desenvolvedor web de alta qualidade, que irá conseguir as melhores vagas, você precisa ter uma base sólida de conhecimentos e uma visão geral de como o mercado funciona.

JavaScript (HTML5, CSS3 e Lógica de Programação);

NodeJs (Back-End usando o Express);

CSS3 (Framework Bulma);

React

Git e GitHub.

Fazer deploy da aplicação;

Esse curso é um dos mais completos e atualizados do mercado que já vi, o Professor o [Leonardo Scorza](https://www.linkedin.com/in/leonardo-scorza-7aba352b) tem uma didática incrível e **INOVADORA**, além de ter uma vasta EXPERIÊNCIA no mercado **NACIONAL** E **INTERNACIONAL.** Neste curso você realmente vai aprender e domina o JavaScript e seu ecossistema para ser torna um verdadeiro desenvolvedor Full Stack.

![](/uploads/2020/01/banner-de-chamada-para-dentro-dos-artigos-1024x304.jpg)

[

###### Garanta já sua Vaga !

Programador Full Stack em 8 SEMANAS!



](/programador-fullstack-8-semanas)

https://www.youtube.com/watch?v=apg0tmnWERE&t=26s

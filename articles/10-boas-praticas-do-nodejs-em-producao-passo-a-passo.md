---
title: "10 Boas Práticas do NodeJS em Produção Tudo passo a passo"
date: "2020-09-30"
description: Neste artigo, veremos 10 boas práticas do Nodejs que devemos fazer com os nosso projetos que estão indo ou já está em produção.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Neste artigo, veremos **10 boas práticas do Nodejs** que devemos fazer com os nosso projetos que estão indo ou já está em produção.

Node.js é um runtime popular para escrever aplicações no backend. Essas aplicações costumam ser altamente escalável e usando por muitas pessoas. Para tornar mais fácil mantê-los, definimos algumas diretrizes para as programadores e programadoras seguirem.

Caso não conheça bem o NodeJS tenho duas recomendação para lhe fazer:

- [ARTIGO: Conhecendo NodeJS](/conhecendo-nodejs/)
- [VÍDEO: Crindo um CRUD com NodeJS](https://youtu.be/t4y9AFY9mmI)

## 01 - Use ambiente semelhante ao de produção para testes E2E

A execução de testes ponta a ponta em um ambiente de produção garante que não encontraremos problemas diferentes nas produções que detectamos de antemão.

  
Além disso, devemos executar nossos testes em um banco de dados com dados limpos para que possamos repetir nossos testes.

## 02 - Refatore regularmente usando ferramentas de análise estática

Antes de colocar nosso código em produção, devemos refatorá-lo para que seja executado rapidamente em produção. Os testes automatizados nos ajudarão a ter certeza de que a refatoração não quebrará nenhuma funcionalidade existente.

  
A má qualidade do código criará mais bugs e problemas de desempenho que são difíceis de corrigir.

Esse artigo poderá ajuda com relação as ferramentas: [clique aqui para ler](/30-ferramentas-para-um-desenvolvedor-front-end/)

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

## 03 - Escolha cuidadosamente a plataforma de CI

Jenkins e CircleCI são plataformas populares para integração contínua. Ter um pipeline de CI (integração contínua) nos permite executar testes e implantar automaticamente em segundo plano, em vez de executar tudo manualmente. Isso nos libera para fazer outros tipos de trabalho e nos dispensa de gerenciar manualmente a infraestrutura.

  
Fazer uma boa escolher e com cuidado é sem dúvida uma das boas práticas do nodejs, pois a migração de um para o outro será uma dor.

## 04 - Sempre monitore sua aplicação

Devemos monitorar sempre nossas aplicações para se certifica que está funcionando corretamente e não consuma muitos recursos. Para fazer isso, podemos usar ferramentas de monitoramento e adicionar **endpoints** de verificação de integridade para verificar se nossa aplicação está em execução.

  
Dessa forma, não vamos ser surpreendido por nenhum cliente ligando as 04h da manha dizendo que o sistema está fora do ar.

## 05 - Aumenta a transparência usando o Smart Logging

O registro nos permite solucionar problemas facilmente, identificando as atividades no log que podem estar causando problemas. A maioria das plataformas de registro pode controlar como os registros são coletados, armazenados e analisados ​​para garantir que ele esteja armazenando apenas os dados que desejamos.

## 06 - Delegar sempre que possível a um proxy reverso

Se algo pode ser feito com um proxy reverso, faça, pois eles não pertencem ao core da nossa aplicação. Tarefas como uso intensivo de CPU, como SSL, Gzip e terminação, devem ser feitas em um proxy reverso para aliviar a carga da aplicações.

  
Isso é especialmente importante para aplicativos do Node, pois ele é executado apenas em um encadeamento, portanto, não queremos amarrá-lo fazendo com que ele execute tarefas relacionadas à infraestrutura que pertencem ao proxy reverso.

## 07 - Dependência de bloqueio

Devemos bloquear as dependências de nosso aplicativo para que não mudem de versão nos ambientes. Hoje em dia, isso deve ser feito automaticamente, pois **npm install** gera um **package-lock.json** caso não exista. Se ele existir, **npm install** usará as versões do arquivo para instalar as dependências.

  
Se ele não existir em nosso repo ou se usarmos um controle refinado de como as versões são bloqueadas, podemos executar **npm shrinkwrap**. Este comando se transforma **package-lock.jso** nem publicável **npm-shrinkwrap.json** ou cria um novo.

  
Ele tem precedência **package-lock.json**.

## 08 - Atividades de Processo

Nossa aplicação deve ser reiniciado quando falhar e preciso está ligado quando isso acontece, para resolver esse problemas podemos usar Forever ou PM2 para monitorar nossa aplicação e reiniciá-la quando ela travar. Se temos um cluster, também temos que gerenciá-lo.

## 09 - Utilize todos os núcleos da CPU

![boas práticas do nodejs ](/uploads/2020/09/boas-praticas-do-nodejs-1024x682.jpg)

boas práticas do nodejs - CPU

Devemos usar todos os núcleos da CPU para executar nossa aplicação com o desempenho mais rápido possível. Um núcleo da CPU é inútil se ficar ocioso. Se for esse o caso, devemos replicar os processos do Node e utilizar todas as CPUs. Para aplicativos pequenos, podemos usar Node Cluster ou PM2. Caso contrário, podemos usar um cluster [Docker](/o-que-e-docker-guia-basico-passo-a-passo/) como o ECS.

## 10 - Crie um Endpoint de Manutenção

Podemos usar isso para expor com segurança as informações de diagnóstico da nossa aplicação sem fazer login no servidor. Algumas informações são mais fáceis de obter usando código.

  
No Node, podemos usar os **módulo** para expor informações sobre nosso servidor, essa atividade com certeza faz parte das **boas práticas do nodejs.** Por exemplo, podemos obter a plataforma para nosso aplicativo da seguinte maneira e retorná-la por meio de um endpoint:

```
const express = require ('express')
const bodyParser = require ('body-parser') 
const os = require ('os')
const app = express ()

app.use (bodyParser.json ())
app.use (bodyParser.urlencoded ({extended: true}))

app.get ('/', (req, res, próximo) => { 
  res.send (os.platform ()); 
})

app.listen (3000, () => console.log ('servidor iniciado')) 

module.exports = app
```

Claro, em um aplicativo de produção, isso deve ser protegido com autenticação.

## Conclusão

Antes de ir para a produção, devemos ter um conjunto de testes ponta a ponta que são executados em um ambiente de produção limpo. Os dados devem ser redefinidos a cada teste executado para que sejam executados corretamente. Isso também ajuda no teste após a refatoração.  
Devemos ter certeza de que temos implantado automatizado para liberar nosso tempo para outras tarefas.  

Além disso, certifique-se de que todos os núcleos da CPU do nosso servidor sejam utilizados.  

Finalmente, podemos desejar criar um endpoint de manutenção seguro para expor algumas informações para nós sem efetuar login no servidor.

### Recomendado

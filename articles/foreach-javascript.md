---
title: "Como usar o Foreach JavaScript"
date: "2020-01-11"
description: Fala dev, vamos a mais um artigo, neste vamos abordar um tema bastante importante e que vai lhe trazer bastante produtividade na hora de escrever seus códigos em JavaScript, estudaremos neste artigo o foreach JavaScript.
imgArticle: /thumbnail-article/como-usar-foreach.png
imgHome: /thumbnail-home/como-usar-foreach.png
---

Fala dev, vamos a mais um artigo, neste vamos abordar um tema bastante importante e que vai lhe trazer bastante produtividade na hora de escrever seus códigos em JavaScript, estudaremos neste artigo o _foreach JavaScript._

## O que é Foreach?

Foreach é uma função nativa da API do JavaScript, onde a mesma nos permiti percorrer os elementos de um array, existem várias formas de percorrer um array, breve estarei publicando aqui no site. Vamos ao nosso editor de texto para vermos na prática o funcionamento do foreach JavaScript.

```
const aprovados = ['Emanuel', 'Maria', 'João', 'Roberto', 'Gabriel']

aprovados.forEach( function(nome, indice) {
    console.log(` ${indice + 1} ${nome} `)
} )
```

![foreact javascript](/uploads/2020/01/Saide-do-exemplo-1.jpg)

foreach javascript

Começamos criando um array de elementos cujo o nome é “aprovados” e agora vamos percorrer essa lista de aprovados e imprimir na tela, então escrevemos aprovados.foreach(), neste momento passamos como parâmetro uma função _callback_, onde essa função será chamada para cada iteração do nosso array de aprovados passando o próprio elemento e o índice correspondente ao array, ou seja, ele irá percorrer os elementos por exemplo “Emanuel” e o índice do mesmo, depois “Maria” e o índice e assim sucessivamente para cada elemento de aprovados.

## Foreach sem Indice

Caso você não precise mostrar o índice do array é possível oculta o índice, pois não é obrigatório passa os parâmetros da função call-back no JavaScript, veja como é simples.

```
aprovados.forEach( nome => console.log( nome ) )
```

![foreact javascript](/uploads/2020/01/saida-do-exemplo-2.jpg)

foreach javascript

Neste caso estamos usando o novo recurso do JavaScript ás _arrow function_, neste cenário estamos interessados somente em imprimir o nome de cada elemento, caso você desconheça as arrow function [clique aqui para saber mais](http://bit.ly/tipscode-curso-programador-full-stack-javascript). Observação importante, aqui o índice ele é passado sim, porém o JavaScript o ignorar.

## Percorrendo com Variável

Outro cenário bem interessante é armazenar uma função em uma variável e passar a mesma como parâmetro. Veja como:

```
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
```

![foreact javascript](/uploads/2020/01/saida-do-exemplo-2-1.jpg)

foreach javascript

Criamos uma constante “exibirAprovados” atribuímos uma arrow function com o nome de “aprovado” onde será exibido no console.log os “aprovados”, ou seja, com essa função armazenada em uma variável, podemos passa como parâmetro para o foreach, como mostro na linha 3.

## Detalhando o Foreach

Foreach recebe dois parâmetros sempre, o name e o índice, caso não queira o índice podemos suprimir esse parâmetro, caso queira somente o índice somos obrigados a escrever o primeiro parâmetro, por que o índice sempre é passado como ultimo e não como primeiro. Cabe uma observação muito importante, o foreach na verdade tem 3 parâmetros, o próprio array do elemento é passado como parâmetro do foreach. Vamos ao código:

```
aprovados.forEach( function(nome, indice, array) {
    console.log(` ${indice + 1} ${nome} `)
    console.log(array)
} )
```

![foreact javascript](/uploads/2020/01/saida-do-exemplo-4.jpg)

foreach javascript

Veja que foi impresso o elemento e depois o próprio array, ou seja, a função call-back que passamos para o Foreach JavaScript receber 3 parâmetros, o nome, o índice e o próprio array. Lembrando que podemos suprimi-los, dependendo do seu problema em questão.

## Reescrevendo o Foreact

Para entendemos de uma vez por todas o Foreact JavaScript, vamos reescreve-lo e observar como ele funciona por debaixo dos panos, então vamos coda!!

```
const aprovados = ['Emanuel', 'Maria', 'João', 'Roberto', 'Gabriel']

aprovados.forEachPersonalizado( function(nome, indice) {
    console.log(` ${indice + 1} ${nome} `)
    
} )
```

![foreact javascript](/uploads/2020/01/saida-do-exemplo-5.jpg)

foreach javascript

Note que a função forEachPersonalizado() não existe, então vamos escrever nosso proprio foreach JavaScript. Vamos voltar ao visualCode.

```
Array.prototype.forEachPersonalizado = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
const aprovados = ['Emanuel', 'Maria', 'João', 'Roberto', 'Gabriel']

aprovados.forEachPersonalizado( function(nome, indice) {
    console.log(` ${indice + 1} ${nome} `)
    
} )
```

Criamos dentro de _prototype_ de um array e associamos a uma função, onde a mesma recebe uma função call-back como parâmetro. No corpo dessa função estamos percorrendo o array utilizando a estrutura de repetição _FOR_ do JavaScript. Então escrevemos “let i = 0, i < this.length; i++”, o _this_ representa o nosso array, onde acessamos o array dentro de uma função que pertence ao _prototype_, ou seja, acessamos a instancia do array através do “_this_” neste FOR estamos percorrendo os índices. Dentro do _FOR_ estamos chamando a função call-back passando três parâmetros, primeiro parâmetro é o próprio valor, segundo é o índice e o terceiro é o array completo. Vamos testar e ver o resultado.

![foreact javascript](/uploads/2020/01/saida-do-exemplo-6.jpg)

## Conclusão

Chegamos ao fim de mais um artigo galera, espero ter lhe ajudado de algum forma. Que ingressa no mercado de trabalho? Se sua resposta for SIM. Participe do MEGA treinamento PROGRAMADOR FULL STACK EM 8 SEMANAS. Esse curso é 100% voltado para o mercado de trabalho, o acesso é vitalicio. [QUERO ME TORNAR UM PROGRAMADOR FULL STACK](http://bit.ly/tipscode-curso-programador-full-stack-javascript)

[![](/uploads/2020/01/banner-JS8-1080x1080-2.png)](/programador-fullstack-8-semanas)

#### DO ZERO A PROGRAMADOR  
FULL STACK JAVASCRIPT (REACT + NODEJS)

Nele você vai aprender do zero: HTML 5, CSS, Bulma para criar sites responsivos, JavaScript + Lógica de programação, Git e Github, JavaScript moderno (es6+), React que é uma das libs mais pedidas pelo mercado, Express.js que é uma ferramenta de backend construída com NodeJs e muito mais!

[Saiba Mias!](/programador-fullstack-8-semanas)

Leia o artigo sobre NodeJS [CLIQUE AQUI](/conhecendo-nodejs/)

---
title: "CSS Grid - Tudo o que você não aprendeu | Parte 2"
date: "2020-01-26"
categories: 
  - "css"
tags: 
  - "css"
  - "css-grid"
  - "css3"
  - "desenvolvimento"
  - "desenvolvimento-web"
  - "grid"
  - "internet"
  - "javascript"
  - "programacao"
  - "web"
description: Vamos da continuidade ao nosso estudo sobre CSS Grid, caso você seja novo aqui no site saiba que esse artigo faz parte de uma série de trés artigos, caso você não leu ainda a parte 1 [CLIQUE AQUI](https//www.tipscode.com.br/css-grid-tudo-que-voce-nao-aprendeu-parte-1/)
imgArticle: /thumbnail-article/css-grid-parte-2.png
imgHome: /thumbnail-home/css-grid-parte-2.png
---

Vamos da continuidade ao nosso estudo sobre CSS Grid, caso você seja novo aqui no site saiba que esse artigo faz parte de uma série de trés artigos, caso você não leu ainda a parte 1 [CLIQUE AQUI](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/)

### Código Base - CSS Grid

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Grid Parte 2 - TipsCode</title>
    <style>
        html,
        body {
            margin: 20px;
            height: calc(100% - 40px);
            background-color: burlywood;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            border: solid 5px darkcyan;
            background: #fff;
        }

        body {
            display: grid;
        }
    </style>
</head>
<body>
    <div class="box1">01</div> 
    <div class="box2">02</div> 
    <div class="box3">03</div>    
</body>
</html>
```

![Figura 01 - Código Base - CSS Grid](/uploads/2020/01/Figura-01-Código-base-1.jpg)

**Figura 01 - Código Base - CSS Grid**

Reforçando esse artigo é a continuação do artigo **_CSS Grid_** - Tudo o que você não aprendeu | Parte 1, terá assuntos que não serão explicados aqui pois já foram na parte 1, caso você tenha alguma dificuldade no entendimento recomendo ler a parte 1.

```
body {
     display: grid;

     grid-template-columns: 
            [inicio] 1fr 
            [metade-1 meio-1] 1fr
            [metade-2 meio-2] 1fr [fim];
     grid-template-rows: repeat(3, 1fr);
}

.box1 {
      grid-column-start: meio;
      grid-column-end: fim;
}
```

Estamos usando a unidade fr (explicado no artigo parte 1), estamos criando três colunas e colocando um nome em cada uma, na primeira coluna chamamos de “inicio” a segunda de “metade-1 meio-1, metade-2 meio-2” e a terceira de “fim” depois usamos a função _repeat()_ para criar 9 células (**_observação: se você for testar no google-chrome ou outro navegador que não seja o Firefox, não mostrará as 9 célula_**s). Na classe “box1” estamos dizendo que o elemento 1 irá iniciar na linha 3, e terminar na linha 4. Veja a figura 02 (Estou usando o Firefox, foi explicado no artigo parte 1)

![Figura 01 - Renomeado colunas - CSS Grid](/uploads/2020/01/Figura-02-Renomeado-colunas-CSS-Grid.jpg)

**Figura 02 - CSS Grid**

### Você sabe por que muitos programadores desistem enquanto outros têm sucesso?

Talvez você já tem ouvindo essas frases “Eu não consigo aprender”, “Parece que o conteúdo nunca acaba”, “É difícil encontrar vagas para quem está começando” “Eu estou perdido, não sei mais o que estudar” é perfeitamente compreensível que alguns programadores se sintam assim, porém programação é uma carreira excelente e tem ótimos salários, tenho colegas que se formaram junto comigo que ganha mais de R$6.000 Reais por mês. Existem dois motivos muito forte para essa frustração, o primeiro motivo é a base de conhecimento **FRACA** e o segundo a falta de noção para se posicionar no mercado. Saiba mais detalhes [clicando aqui](http://bit.ly/tipscode-curso-programador-full-stack-javascript).

### Continuando o Conteúdo - CSS Grid

Existe outra forma de se usar essas propriedades não só especificamente com os nomes, mas podemos utilizar com os números também como virmos na parte 1 do artigo, temos uma propriedade onde podemos usar todos os atributos de uma só vez, ou seja, podemos colocar o start e o end em uma única propriedade.

```
grid-column: meio-1 / fim;
```

Estamos dizendo que o elemento “box1” irá iniciar na linha 2 e vai até o final que em nosso caso é a linha 4, por isso o elemento ocupou as duas células e deu uma quebra de linha. Veja o resultado na figura 03.

![Figura 03 - CSS Grid](/uploads/2020/01/Figura-03-Grid-column.jpg)

**Figura 03 - CSS Grid**

Podemos fazer isso também com as linhas com o seguinte código:

```
grid-row: 1 / span 2;
```

Faça o teste ai na sua casa. Existe outra propriedade bem interessante chamada "grid-area", ou seja, a área da linha essa propriedade irá configura a coluna e a linha em uma unica propriedade, a ordem para se utilizar os atributos é: "row-start column-start row-end column-end" vamos a um exemplo em código:

```
grid-area: 1 / meio-1 / span 3 / fim;
```

O elemento vai sair da linha 1 e da um span (salto) de 3 e a coluna sairá do meio e irá até o fim da coluna.

![CSS Grid](/uploads/2020/01/Figura-04-Grid-area.jpg)

**Figura 04 - CSS Grid**

### Gaps em colunas e linhas- CSS Grid

Podemos ainda utilizar **_gaps_** que significa pequenos espaços entre as colunas e as linhas, essa propriedade é bem interessante pois ela nos permite um poder de criação em grid enorme, vamos a um exemplo.

```
/*Propriedades utilizadas dentro do body*/
grid-column-gap: 20px;
grid-row-gap: 20px;
```

Estamos aplicando 20px entre as colunas e 20px entre as linhas, veja que algo muito simples de se trabalhar com essa propriedade.

![CSS Grid](/uploads/2020/01/Figura-05-Gaps.jpg)

Figura 05 - CSS Grid

Também tempos uma propriedade onde podemos usar o gap de coluna e linha em uma única propriedade Veja:

```
grid-gap: 80px 30px;
```

Primeiro atributo é a linha e o segundo atributo é a coluna, ou seja, aplicamos 80px nas linhas e 30px na coluna. Caso você coloque apenas um atributo, ele irá aplicar tanto nas colunas como nas linhas. Faça o teste aí na sua casa.

### Conclusão

Chegamos ao fim de mais um artigo aqui do blog TipsCode, caso tenha gostado do conteúdo assine nosso newsletter para receber as notificações via e-mail toda vez que for publicado conteúdo novo, deixa um comentário de feedback isso nos ajuda a está melhorando cada dia mais e compartilha esse artigo para seus amigos!.

### Programador Full Stack em 8 Semanas, passe para o próximo nível como programador!

[![](/uploads/2020/01/banner-JS8-1080x1920-stories-2-576x1024.jpg)](/programador-fullstack-8-semanas)

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.

- Introdução a Web + HTML5;
- CSS + Bulma;
- JavaScript + Lógica de Programação;
- Git e Github;
- JavaScript moderno (ES6+);
- React;
- NodeJS + Express + MongoDB;
- Como Criar um APP inspirado no Evernote;
- Como preparar seu portfólio e encontrar Jobs.

[Saiba mais!!](/programador-fullstack-8-semanas)

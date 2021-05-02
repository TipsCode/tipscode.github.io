---
title: "CSS Grid - Tudo o que você não aprendeu | Parte 1"
date: "2020-01-19"
categories: 
  - "css"
tags: 
  - "css"
  - "css-grid"
  - "css3"
  - "desenvolvimento"
  - "frontend"
description: Neste artigo vamos estudar CSS Grid, esse recurso maravilhoso do CSS3, tenho certeza que irá lhe ajuda bastante em criar seus próprios Layouts. Vamos a prática, bora coda!
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Neste artigo vamos estudar **_CSS Grid_**, esse recurso maravilhoso do _CSS3_, tenho certeza que irá lhe ajuda bastante em criar seus próprios Layouts. Vamos a prática, bora coda!

## Código Base - CSS Grid

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Grid - TipsCode</title>
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
    </style>
</head>
<body>
    <div class="box1">01</div> 
    <div class="box2">02</div> 
    <div class="box3">03</div> 
    <div class="box4">04</div> 
    <div class="box5">05</div> 
    <div class="box6">06</div> 
    <div class="box7">07</div> 
    <div class="box8">08</div> 
    <div class="box9">09</div> 
    <div class="box10">10</div> 
    <div class="box11">11</div> 
    <div class="box12">12</div>    
</body>
</html>
```

![CSS Grid](/uploads/2020/01/Figura-01-código-base.jpg)

**Figura 01 - CSS Grid**

No _HTML_ criamos 12 <_divs_\> cada uma contendo classes cujo o nome é “box” de 1 até 12, já no CSS temos um _margin_ de 20 pixels em volta do _body_, com uma altura de 100% subtraindo 40px da margem de cima e de baixo. Na <div> temos um display flex, ou seja, os elementos vão ser _flexbox_, os atributos “_alingn-items_ e _justify-content_” é para que o número que está dentro da <_div_\> fique alinhado ao centro, depois definimos o tamanho da fonte e a borda junto com o background. Essas configurações foram feitas para facilita nosso entendimento a respeito do **_CSS Grid_**, perceba que o recurso Flex Box aliado com **_CSS Grid_** é bastante interessante, breve teremos artigos sobre _FlexBox_.

Agora que temos nosso código base, iremos inicia os estudos sobre _**CSS Grid**_, esse artigo será muito prático, temos vários códigos e exemplos. Vamos começar, para dizer ao browser que vamos trabalhar com **_CSS Grid_** escrevemos o seguinte código:

```
body {
    display: grid;
}
```

![](/uploads/2020/01/Figura-02-Aplicação-do-CSS-Grid.jpg)

**Figura 02 - Aplicação do CSS Grid**

Note que houver uma pequena alteração em nosso layout, ele agora está ocupando todo o espaço, ou seja os 100% da altura, isso está acontecendo pois estamos usando no código base o “height” 100%. O **_CSS Grid_** possui linhas e colunas, ou seja, ele é bidimensional trabalha com duas dimensões, vamos explorar cada propriedade que envolve o _**CSS Grid**_, vamos a primeira delas:

## Grid-template-columns - CSS Grid

```
grid-template-columns: 50% 50%;
```

O “_grid-template-columns_” defini qual será a organização das colunas em nosso Layout, o nosso layout tem apenas 1 coluna, então vamos defini duas colunas para o nosso grid, então escrevemos “50%” e “50%” aqui estamos dizendo que, a primeira coluna ocupará 50% do espaço e a segunda coluna também ocupará 50% do espaço, neste cenário passamos a ter duas colunas. Veja o resultado na figura 03.

![CSS Grid
](/uploads/2020/01/Figura-03-Duas-colunas.jpg)

**_Figura 03 - Duas colunas_** **| CSS Grid**

Quando temos valores iguais na propriedade “grid-template-columns” que é o nosso caso onde temos 50% e 50%, podemos utilizar a função repeat().

```
grid-template-columns: repeat(4, 8.33% 8.33% 8.33);
```

Aqui colocamos o seguinte (4, 8.33% 8.33% 8.33%), estamos pedindo para repetir 4 vezes com 3 colunas um ocupado 8.33% multiplicado por 4 que da 8.33 12 vezes, isso significa que ao invés de termos apenas 2 colunas vamos ter 12 colunas. A função repeat() vai lhe dá a possibilidade de pega um determinado conjunto de valores e repetir pela quantidade de vezes que passamos no primeiro parâmetro.

![CSS Grid](/uploads/2020/01/Figura-04-12-colunas.jpg)

**Figura 04 - 12 colunas CSS Grid**

```
grid-template-columns: 200px 20% 1fr;
```

Neste código estamos dizendo que teremos 3 colunas para organiza os elementos, onde a primeira coluna irá ocupa 200 pixels do espaço, ou seja, um valor absoluto fixo, segundo coluna terá 20% e a terceira coluna 1fr (fr significa 1 fragmento), ou seja, a terceira coluna irá ocupado todo o restante do espaço que sobrou desses (200 pixels – os 20%). **_Observação esses 20% será variável conforme o tamanho da tela._**

![CSS Grid](/uploads/2020/01/Figura-05-3-coulunas-200-20-fr.jpg)

**Figura 05 - 3 colunas CSS Grid**

Podemos também usar a propriedade “grid-template-columns” só utilizando a unidade fr (fragmento) então podemos escrever algo assim:

```
grid-template-columns: 3fr 6fr 3fr;
```

Aqui estamos quebrando a largura em 12 colunas, onde a primeira coluna irá ocupado 3fr neste caso 12 avos, a segunda irá ocupa 6fr de 12 avos e a terceira 3fr de 12 avos, observe que a soma das colunas irá da 12 onde cada uma irá pega uma parcela desse fragmento. Veja o resultado na figura 06.

![CSS Grid](/uploads/2020/01/Figura-06-Unidade-FR.jpg)

**Figura 06 - unidade fr - CSS Grid**

## grid-template-rows - CSS Grid

CSS Grid nos permiti também fazer manipulação nas linhas, até então estávamos manipulando apenas as colunas, para fazemos isso escrevemos assim:

```
 grid-template-rows: 50% 25% 12.5% 12.5%;
```

Neste código estamos dizendo o seguinte que a primeira linha terá 50%, segunda 25%, terceira e quarta linha 12.5% cada uma. Vamos ver o resultado na figura 07

![CSS Grid](/uploads/2020/01/Figura-07-row.jpg)

Figura 07 - Row | CSS Grid

Note que é bem tranquilo trabalhar com _CSS Grid_, podemos fazer várias variações e criar o template de acordo com o projeto, recomendo que você de uma olhada no curso [PROGRAMADOR FULL STACK EM 8 SEMANAs](http://bit.ly/tipscode-curso-programador-full-stack-javascript), neste curso tem um módulo especifico de _CSS GRID_ onde é explicado essas variações que você pode fazer aplicando em projetos reais, onde você irá aprender ir do ZERO a ser TORNAR um PROGRAMADOR FULL STACK.

[![](/uploads/2020/01/banner-JS8-1080x1080-2-1024x1024.png)](/programador-fullstack-8-semanas)

### Programador Full Stack

\+ 1.800 minutos;

Acesso vitalício;

\+ módulos;

\+ 200 Vídeos.

[Inscreve-se](/programador-fullstack-8-semanas)

Continuando nossos estudos com CSS Grid.

```
grid-template-rows: 100px 1fr;
```

Aqui a primeiro linha irá ocupa 100px e a segunda linha 1 fr (um fragmento) e agora chegamos a uma dúvida, pois nos definimos no código acima que temos 3 colunas com 12 itens, ou seja, precisamos configura para 4 linhas e não duas certo? Neste caso vai acontece o seguinte, os 100px será usado na primeira linha e 1 fr pra segunda linha, as outras duas que nos não configuramos irá pegar o espaço que sobrar de acordo com que você configurou na primeira e segunda. Veja o resultado na figura 08:

![CSS Grid](/uploads/2020/01/Figura-08-duas-linha.jpg)

Figura 08 - Duas linhas | CSS Grid

```
grid-template-rows: 100px auto;
```

Estamos configurando a primeira linha com 100 pixels e as demais com o atributo **auto** (automático), ou seja, o browser irá distribuir às 3 linhas restante e dividir de maneira igualitária. Veja o resultado na figura 09:

![CSS Grid](/uploads/2020/01/Figura-09-1-linha-e-3-auto.jpg)

**Figura 09 - 1 linha | CSS Grid**

Antes da gente continua nossos estudos em **_CSS Grid_** tem uma coisa que quero lhe mostrar a respeito do navegador Firefox, pois ele tem uma ferramenta muito legal e que facilita bastante nossa vida ao trabalhar com **_CSS Grid_**, vamos conhece agora.

![](/uploads/2020/01/Figura-10-Firefox-1024x558.png)

**Figura 10 - Firefox | CSS Grid**

Veja que na aba Layout temos uma seção chama Grid, note que é bem mais fácil temos uma noção de como está organizado nosso layout, pois ele mostra graficamente como está as colunas e linhas e informa os números das colunas e linhas que temos.

## Manipulando de forma especifica ás colunas

```
.box8 {
    grid-column-start: 2;
    grid-column-end: 4;
}
```

O elemento marcado com a classe "box8" irá inicia a partir da coluna 2 e terminar na linha 4 é isso que estamos fazendo com as propriedades _grid-column-star_t e _grid-column-end_. Veja o resultado na figura 11:

![CSS Grid](/uploads/2020/01/Figura-11-stard-e-end.jpg)

**Figura 11 - Start e End | CSS Grid**

## Manipulando de forma especifica ás linhas

```
grid-row-start: 3;
grid-row-end: 5;
```

Estamos manipulando a linha 3 com a propriedade grid-row-start, estamos configurando para iniciar na linha 3, até a linha 5 com a propriedade grid-row-end. Veja o resultado na figura 12:

## Manipulando de forma especifica ás linhas

![CSS Grid](/uploads/2020/01/Figura-12-linha-start-e-end-1024x655.jpg)

**Figura 12 - Linha start e End**

Veja que com essa configuração a coluna 8 irá ocupa mais uma linha, ou seja 4 espaço e a coluna 11 e 12 vai para parte de baixo do layout.

## Problema de sobreposição - CSS Grid

Ao usarmos o **CSS Grid** podemos enfrenta um “problema” que é a _sobreposição_ de célula, temos que ter cuidado ao definir nosso layout, farei um exercício para forçar a sobreposição para vermos como funciona, então vamos ao código.

```
.box10,
.box11 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: span 1;
}
```

Estamos manipulando duas classes especifica “box10 e box 11” onde a coluna irá inicia na coluna 1 e vai até a coluna 3, ou seja, irá ocupa 3 espaços, vamos dizer também que a linha vai iniciar na linha 5 e vamos da um span 1, ou seja, irá pula uma linha. Veja o resultado na figura 13:

![CSS Grid](/uploads/2020/01/Figura-13-sobreposição-1024x411.jpg)

**Figura 13 - Sobreposição | CSS Grid**

Aqui temos a sobreposição como vocês podem ver na figura 13 a coluna 10 sumiu, e a coluna 11 sobrepôs a coluna 10. Como podemos resolver esse problema? Existe uma propriedade que pode nós ajudar a resolver que o **_z-index_**, essa propriedade configura o nível de profundidade dos elementos CSS, vamos a um exemplo com ele:

```
.box10 {
     z-index: 10;
}
```

O elemento que está marcado com a classe “box10” está por baixo do elemento 11, o z-index irá sobrepor, quanto maior o número que você atribuir maior a ordem de precedência do elemento. Veja o resultado na figura 14:

![CSS Grid](/uploads/2020/01/Figura-14-z-index-1024x408.jpg)

**Figura 14 - z-index | CSS Grid**

Bom pessoal, tem mais conteúdo sobre CSS Grid, mas não vou continua neste artigo pois se não irá fica muito grande e cansativo a leitura, então vou está dividindo esse conteúdo em 3 partes ok. Deixa seu like, comenta aí se você aprendeu ou não com esse artigo que deu um trabalho mostro para escreve-lo, teremos também ele em formato de vídeo em nosso canal do Youtube em breve, caso não conheça nosso canal [CLIQUE AQU](https://www.youtube.com/channel/UCZKLK7o6IVayeEjkkoWLwbQ?view_as=subscriber)I, inscreva-se para receber as notificações no seu e-mail quando sair artigo novo aqui no site. Abraço e até o próximo artigo!!

[![CSS Grid](/uploads/2020/01/banner-JS8-1200x628-pouco-texto-1024x536.png)](http://bit.ly/tipscode-curso-programador-full-stack-javascript)

**Programador Full Stack**

**Deseja ser torna um programador full stack profissional? Se a resposta for sim, você precisa conhece o curso PROGRAMADOR FULL STACK EM 8 SEMANAS, onde ele trás uma metodologia de ensino EXTREMAMENTE diferenciada com o foco 100% no MERCADO de trabalho.**

[Quero me tornar um programador full stack](http://bit.ly/tipscode-curso-programador-full-stack-javascript)

Visite nossa área de cursos clicando [AQUI](/cursos/)

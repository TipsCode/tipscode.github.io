---
title: "CSS Viewport: Entenda as Unidades de Visualizações do CSS"
date: "2020-08-05"
categories: 
  - "css"
tags: 
  - "alisson-suassuna"
  - "css"
  - "front-end"
  - "fullstack"
  - "html"
  - "programador"
  - "tipscode"
  - "unidades-do-css"
  - "viewport"
description: As unidades de viewport foram introduzidas no CSS faz algum tempo. Eles são realmente "unidades de comprimento responsivo", no sentido de que seu valor muda toda vez que o navegador é redimensionado. Se você já ouviu falar sobre essas unidades antes, mas nunca aprendeu sobre elas em detalhes, este artigo pode ajudá-lo.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

As unidades de **viewport** foram introduzidas no **CSS** faz algum tempo. Eles são realmente "unidades de comprimento responsivo", no sentido de que seu valor muda toda vez que o navegador é redimensionado. Se você já ouviu falar sobre essas unidades antes, mas nunca aprendeu sobre elas em detalhes, este artigo pode ajudá-lo.

## As Unidades do CSS

![css](/uploads/2020/04/perguntas-png-2.png)

Figura 01: CSS

Existem quatro unidades baseadas em **viewport** no **CSS**. Estes são **vh**, **vw**, **vmin** e **vmax**.

**Altura da janela de visualização (vh)**. Esta unidade é baseada na altura da janela de visualização. Um valor **1vh** é igual a **1%** da altura da janela de exibição.

**Largura da janela de visualização (vw)**. Esta unidade é baseada na largura da janela de visualização. Um valor **1vw** é igual a 1% da largura da janela de exibição.

**Mínimo de janela de visualização (vmin)**. Esta unidade é baseada na dimensão menor do **viewport** . Se a altura do **viewport** for menor que a largura, o valor de **1vmin** será igual a **1%** da altura do **viewport**. Da mesma forma, se a largura do **viewport** for menor que a altura, o valor de **1vmin** será igual a **1%** da largura do **viewport**.

**Máximo de janela de visualização (vmax)**. Esta unidade é baseada na dimensão maior do **viewport**. Se a altura do **viewport** for maior que a largura, o valor de **1vmax** será igual a **1%** da altura do **viewport**. Da mesma forma, se a largura do [**viewport**](https://www.eclipse.org/downloads/) for maior que a altura, o valor de **1vmax** será igual a **1%** da largura do **viewport**.

### Ebook Guia Completo HTML: Descubra o Poder o Verdadeira do HTML5

Baixe agora mesmo esse super livro digital com mais de 100 páginas de puro conteúdo sobre HTML, realmente muito completo seja você iniciante ou avançado, tenho certeza que você vai aprender algo novo. Tudo isso Grátis, então clicar no botão aqui em baixo e pegar agora seu ebook e descubra o verdadeiro poder do HTML

[Baixa agora](/ebook-gratuito-html)

Vamos ver qual será o valor dessas unidades em diferentes situações:

Se a janela de visualização tiver **1200px** de largura e **1000px** de altura, o valor de **10vws** erá **120px** e o valor de **100px 10vh**. Como a largura da viewport é maior que sua altura, o valor de **10vmax** será **120px** e o valor de **10vmin 100px**.

Se o dispositivo agora for girado para que a janela de visualização fique com **1000px** de largura e **1200px** de altura, o valor **10vh** será **120px** e o valor **10vw** é de **100px**. Curiosamente, o valor de **10vmax** ainda será **120px** porque agora será determinado com base na altura da janela de visualização. Da mesma forma, o valor de **10vmin** ainda será **100px**.

Se você redimensionar a janela do navegador para que a janela de visualização se torne **1000px** de largura e **800px** de altura, o valor de **10vh** se tornará **80px** e o valor de **10vw 100px**. Da mesma forma, o valor de **10vmaxs** e tornará [100px](https://www.eclipse.org/downloads/) e o valor de **10vmin** se tornará **80px**.

Nesse ponto, as unidades de janela de visualização podem parecer semelhantes às porcentagens. No entanto, eles são muito diferentes. No caso de porcentagens, a largura ou a altura do elemento filho são determinadas em relação ao seu pai. Aqui está um exemplo:

```
<!-- HTML -->
<main>
     <div class="elemento-pai">
         <div class="elemento-filho"></div>
     </div>
          
     <div class="viewport-pai">
         <div class="viewport-filho"></div>
    </div>
</main>

/* CSS */
* {
   box-sizing: border-box;
}

.elemento-pai {
    width: 50%;
    height: 300px;
    background: orange;
    padding-top: 75px;
    margin-bottom: 75px;
}
.elemento-filho {
    width: 80%;
    height: 150px;
    background: rgba(125, 255, 0, 0.5);
}

.viewport-pai {
    width: 50%;
    height: 300px;
    background: orange;
    padding-top: 75px;
    margin-bottom: 75px;
}

.viewport-filho {
    width: 80vw;
    height: 150px;
    background: rgba(125, 0, 255, 0.5);
}
```

Resultado no Navegador

![css](/uploads/2020/08/exemplo-navegador-css-viewport-1024x468.png)

Resultado browser

## Aplicações das Unidades Viewport

Como essas unidades são baseadas nas dimensões da janela de visualização, é muito conveniente usá-las em situações em que a largura, altura ou tamanho dos elementos precisam ser configurados em relação à janela de visualização.

## Imagens de fundo em tela cheia ou seções

É muito comum definir imagens de fundo em elementos que cobrem totalmente a tela. Da mesma forma, convém criar um site em que cada seção individual sobre um produto ou serviço tenha que cobrir a tela inteira. Nesses casos, você pode definir a largura dos respectivos elementos como iguais a **100%** e a altura deles igual a **100vh**.

Como exemplo, use o seguinte HTML:

```
<div class="tela-cheia">
   <p>Imagem 01</p>
</div>
```

Você pode obter uma seção de imagem de fundo de largura total usando o CSS abaixo:

```
* {
   box-sizing: border-box;
   margin: 0;
}

body {
   text-align: center;
   font-family: 'arial';
}

p {
   font-size: 6em;
}
.tela-cheia {
   width: 100%;
   height: 100vh;
   padding: 40vh;
}

.imagem1 {
   background: url('./papel-de-fundo.jpg') center/cover;
}
```

![css](/uploads/2020/08/exemplo-22-1024x472.jpg)

Figura 02 - Resultado do Browser

## Criando Títulos

### Ebook Guia Completo HTML: Descubra o Poder o Verdadeira do HTML5

Baixe agora mesmo esse super livro digital com mais de 100 páginas de puro conteúdo sobre HTML, realmente muito completo seja você iniciante ou avançado, tenho certeza que você vai aprender algo novo. Tudo isso Grátis, então clicar no botão aqui em baixo e pegar agora seu ebook e descubra o verdadeiro poder do HTML

[Baixa agora](/ebook-gratuito-html)

Como mencionei anteriormente, o valor das unidades do viewport muda diretamente com base no tamanho da viewport. Isso significa que, se você usar unidades de janela de visualização para definir font-size dos seus títulos, elas se encaixam perfeitamente na tela., também é possível fazer isso com [FlexBox](/flexbox-como-centralizar-elementos/) Sempre que a largura da janela de visualização mudar, o navegador também dimensionará automaticamente o texto do título adequadamente. A única coisa que você precisa fazer é descobrir o valor inicial correto para o font-size em termos de unidades de viewport.

Um grande problema com a configuração font-size dessa maneira é que o tamanho do texto variará bastante, dependendo da janela de visualização . Por exemplo, um font-size de **8vw** calculará para cerca de **96px** para uma largura de viewport de **1200px**, **33px** para uma largura de viewport de 400px e 154px para uma largura de viewport de 1920px. Isso pode tornar a fonte grande ou pequena demais para ser legível corretamente. Você pode ler mais sobre como dimensionar corretamente o texto usando uma combinação de unidades, juntamente com a função [calc()](https://developer.mozilla.org/en/docs/Web/CSS/calc), neste excelente artigo sobre tipografia baseada em unidade de janela de visualização.

```
<!-- HTML -->
<h1> Titulo Principal </h1>
<h2> SubTitulo</h2>

/* CSS */
* {
     box-sizing: border-box;
}

body {
    font-family: 'Lato';
    text-align: center;
    margin: 0;
}

h1 {
   font-size: calc(2em + 2vw);
}

h2 {
  font-size: calc(1.5em + 0.75vw);
}
```

![](/uploads/2020/08/titulos-1024x428.png)

## Centralize os Elementos

As unidades de viewport podem ser muito úteis quando você deseja colocar um elemento exatamente no centro da tela do usuário. Se você conhece a altura do elemento, basta definir o valor superior e inferior da propriedade margin para ser igual a \[(100 - height)/2\]vh:

```
/* CSS */
* {
    box-sizing: border-box;
}

body {
    font-family: 'Lato';
    text-align: center;
    margin: 0;
}

.centralize {
    width: 80vw;
    height: 70vh;
    margin: 15vh auto;
    background: brown;
    padding-top: 20px;
}

h1 {
    font-size: 4em;
    color: white;
}
<!-- HTML -->
<h1 class="centralize"> Titulo Principal </h1>
```

![](/uploads/2020/08/titulo-principal-1024x440.png)

Atualmente, no entanto, podemos usar o [Flexbox](/flexbox-como-centralizar-elementos/) ou [CSS Grid](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/) para centralizar elementos, tanto na vertical quanto na horizontal.

## Pense um pouco sobre

Se você decidir usar unidades de janela de visualização em seus projetos, há algumas coisas que você deve ter em mente.

Cuidado ao definir a largura de um elemento usando as unidades de janela de visualização. Isso ocorre quando a overflowpropriedade no elemento raiz é definida como auto, os navegadores assumem que as barras de rolagem não existem. Isso tornará os elementos um pouco mais amplos do que você espera. Considere a marcação com quatro elementos div com o seguinte estilo:

```
/*CSS*/
* {
            box-sizing: border-box;
        }

        body {
            font-family: 'Lato';
            text-align: center;
            margin: 0;
        }

        div {
            height: 50vh;
            width: 50vw;
            float: left;
        }

        .a {
            background: #ffddbb;
        }

        .b {
            background: #ddbb99;
        }

        .c {
            background: #bb9977;
        }

        .d {
            background: #997755;
        }
<!-- HTML -->
<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
<div class="d"></div>
```

![](/uploads/2020/08/navega22222-1024x470.png)

Definir a largura das <[divs](/flexbox-como-centralizar-elementos/)\> de **50vw** para **50%** resolverá esse problema. A conclusão é que você deve usar porcentagens ao definir a largura dos elementos do bloco, para que as barras de rolagem não interfiram no cálculo de sua largura.

Um problema semelhante também pode ocorrer em dispositivos móveis devido à barra de endereços que pode aparecer ou desaparecer, dependendo se o usuário está rolando ou não. Isso mudará a altura da janela de visualização e o usuário notará saltos repentinos ao visualizar o conteúdo.

## Suporte ao Navegador

### Ebook Guia Completo HTML: Descubra o Poder o Verdadeira do HTML5

Baixe agora mesmo esse super livro digital com mais de 100 páginas de puro conteúdo sobre HTML, realmente muito completo seja você iniciante ou avançado, tenho certeza que você vai aprender algo novo. Tudo isso Grátis, então clicar no botão aqui em baixo e pegar agora seu ebook e descubra o verdadeiro poder do HTML

[Baixa agora](/ebook-gratuito-html)

Com base nos dados disponíveis no [Caniuse](http://caniuse.com/#feat=viewport-units) , parece que todos os principais navegadores suportam essas unidades. No entanto, ainda existem alguns bugs e problemas que você deve estar ciente ao usar unidades de viewport. Por exemplo, no Firefox, há um bug documentado em 100vh que não afeta nenhum elemento com a propriedade **display** definida como **table**. Novamente, o Chrome não suporta unidades de janela de visualização para larguras de borda, intervalos de coluna, valores de transformação, sombras de caixa ou calc() até a versão 34. Confira Caniuse para obter uma lista completa de bugs conhecidos.

## Conclusões

Neste artigo, abordamos brevemente o significado, os aplicativos e o suporte ao navegador das unidades de viewport. Se você conhece algum outro aplicativo interessante ou problema de navegador em relação a essas unidades, por que não nos falar sobre eles nos fóruns .

Leve suas habilidades de CSS para o próximo nível com [treinamento programador fullstack javascript](/programador-fullstack-8-semanas), neste treinamento você vai aprende muito mais do que apenas CSS.

### Recomendações

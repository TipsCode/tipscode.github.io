---
title: "CSS Grid - Tudo o que você não aprendeu | Parte 3"
date: "2020-02-02"
description: Neste artigo iremos aborda a última parte da série de artigos sobre CSS Grid, vamos aprender novas formas de organizar os elementos do layout sem a necessidade de fazer os posicionamentos estudados no artigo [parte 1](https//www.tipscode.com.br/css-grid-tudo-que-voce-nao-aprendeu-parte-1/) e [parte 2](https//www.tipscode.com.br/css-grid-o-que-voce-nao-aprendeu-parte-2/) que era colunas e linhas onde colocávamos a coluna 1 até a 3 ou coisa do tipo. Neste vamos aborda uma alternativa bem mais simples para você organiza dentro da Grid ocupando os espaços a partir de um determinado elemento. Vamos ao nosso código base
---

Neste artigo iremos aborda a última parte da série de artigos sobre CSS Grid, vamos aprender novas formas de organizar os elementos do layout sem a necessidade de fazer os posicionamentos estudados no artigo [parte 1](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/) e [parte 2](/css-grid-o-que-voce-nao-aprendeu-parte-2/) que era colunas e linhas onde colocávamos a coluna 1 até a 3 ou coisa do tipo. Neste vamos aborda uma alternativa bem mais simples para você organiza dentro da Grid ocupando os espaços a partir de um determinado elemento. Vamos ao nosso código base

### Código Base - CSS Grid

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>CSS Grid Parte 3</title>

    <style>
        * {
            padding: 0;
            margin: 0;
        }
        body {
            margin: 10px;
        }
        .box {
            border: solid 5px rebeccapurple;
            font-size: 30px;
        }
    </style>
</head>
<body>
    <main class="box">CONTEÚDO</main>
    <header class="box">CABEÇALHO</header>
    <footer class="box">RODAPÉ</footer>
    <nav class="box">NAVEGAÇÃO</nav>
</body>
</html>
```

No código base estamos realizando as seguintes configurações, eliminamos os espaços da página com _padding_ e _margin_ \= 0, aplicamos também 10 pixels de _margin_ envolta do corpo da página (_body_) e usamos uma bordar com 5px de espessura e uma cor para dá um destaque aos elementos. No código _HTML_ dividimos o conteúdo de forma semântica, usando as tags <_main_\>, <_header_\>, <_footer_\> e <_nav_\>. A tag <main> está no inicio pois você vai perceber que teremos uma flexibilidade muito grande na hora de colocar os elementos com _**CSS Grid**_. Veja na figura 01 o resultado.

![Figura 01 - CSS Grid](/uploads/2020/02/Figura-01-Código-base.jpg)

**Figura 01 - CSS Grid**

### Elementos com Nomes - CSS Grid

```
header {
     grid-area: cabecalho;
}

nav {
     grid-area: navegacao;
}

main {
     grid-area: conteudo;
}

footer {
     grid-area: rodape;
}
```

Agora vamos aplicar uma propriedade do _**CSS Grid**_ chamada "_grid-area_" e vamos da para cada elemento do nosso HMTL um nome especifico, e por fim dizer ao browser que iremos fazer uso do CSS Grid, aplicando na tag <body> o display grid. Veja o resultado na figura 02.

![Figura 02 - CSS Grid](/uploads/2020/02/Figura-02-Elementos-com-nomes.jpg)

**Figura 02 - CSS Grid**

Perceba que nossa tela ficou extremamente bagunçada, por que essas propriedades grid-area será usada para especifica como nossos elementos serão organizados em nossa grid.

### Configurando nossa Grid- CSS Grid

```
 body {
     display: grid;
     min-height: 100vh;
     grid-template-columns: 300px 1fr;
     grid-template-rows: 100px 1fr 100px;

     grid-template-areas:
        'cabecalho cabecalho'
         'navegacao conteudo'
         'rodape rodape';
}
```

Estamos aplicando min-height 100vh, ou seja irá ocupa a altura inteira da tela, depois vamos definir as colunas e linhas com a propriedade grid-template-columns, onde a primeira coluna terá 300 pixels a segunda vai ocupa o espaço de 1fr, ou seja, todo o restante da tela, com a propriedade grid-template-rows estamos dizendo que a primeira linha terá 100 pixels, ou seja, o cabeçalho, o meio com 1fr, ou seja, o conteúdo irá ocupa o espaço inteiro e lá em baixo 100 pixels para a linha do rodapé.

A partir da linha 7, iremos configurar o posicionamento utilizando os nomes das propriedades _grid-area_ que atribuirmos para cada elemento especifico anteriormente, usando o _grid-template-areas_ note que é no plural e aqui vamos configura as posições de cada elemento. Pelas configurações que realizamos até agora temos 6 slots na nossa grid, onde são 2 colunas e 3 linhas, então vamos organizar da seguinte forma: “cabeçalho cabecalho” ocupando a primeira linha, na segunda linha ‘navegacao e conteudo’ e na terceira linha ‘footer footer’, ou seja a linha inteira. Veja o resultado na figura 03.

### Você sabe por que muitos programadores desistem enquanto outros têm sucesso?

[![](/uploads/2020/01/banner-JS8-1080x1920-stories-1-576x1024.jpg)](/programador-fullstack-8-semanas)

Talvez você já tem ouvindo essas frases “Eu não consigo aprender”, “Parece que o conteúdo nunca acaba”, “É difícil encontrar vagas para quem está começando” “Eu estou perdido, não sei mais o que estudar” é perfeitamente compreensível que alguns programadores se sintam assim, porém programação é uma carreira excelente e tem ótimos salários, tenho colegas que se formaram junto comigo que ganha mais de R$6.000 Reais por mês. Existem dois motivos muito forte para essa frustração, o primeiro motivo é a base de conhecimento **FRACA** e o segundo a falta de noção para se posicionar no mercado. Saiba mais detalhes [clicando aqui](http://bit.ly/tipscode-curso-programador-full-stack-javascript).

[Sabe mais !](/programador-fullstack-8-semanas)

![Figura 03 - CSS Grid](/uploads/2020/02/Figura-03-Organizando-por-Nomes.jpg)

**Figura 03 - CSS Grid**

Mas, você pode me perguntar, Alisson caso eu queira que a navegação fosse até lá em baixo e o footer ficasse alinhado com o conteúdo como faria isso? Muito simples só fazer a seguinte modificação:

```
grid-template-areas:
      'cabecalho cabecalho'
      'navegacao conteudo'
      'navegacao rodape';
}
```

![Figura 04 - CSS Grid](/uploads/2020/02/Figura-04-Modificando-posições.jpg)

**Figura 04 - CSS Grid**

Veja que é muito simples mentalmente de você pensar como irá organizar seus elementos, primeiro você configura a base com altura, colunas e linha e depois é só organizar seu grid usando os nomes específicos.

### Conteúdo bônus - CSS Grid responsivo

Esse é um conteúdo bônus onde vou lhe mostrar um pouco do poder do CSS Grid trabalhando com com responsividade em vários tamanhos de telas diferentes. Vamos ao código:

```
/*CSS Grid responsivo*/
    @media(max-width: 700px) {

       body {
           grid-template-columns: 1fr;
           grid-template-rows: 80px 80px 1fr 100px;
           grid-template-areas: 
             'cabecalho'
              'navegacao'
              'conteudo'
              'rodape';
   }
}
```

![Figura 05 - CSS Grid](/uploads/2020/02/Figura-05-conteúdo-responsivo-1024x671.jpg)

**Figura 05 - CSS Grid**

Aplicamos no body a propriedade grid-template-columns: 1fr, ou seja, irá ocupa a coluna inteira, depois usamos o grid-template-rows para configura 80px na primeira linha, 80px na segunda, terceira vai ocupa o máximo possível e a ultima linha 100px. Feito essas configurações básicas basta usar o grid-template-areas para realizar o posicionamento para o tamanho da tela em questão como no exemplo anterior.

### Conclusão

Chegamos ao fim de mais um artigo aqui do site Tipscode.com.br, caso tenha gostado deixa seu like aqui em baixo, se tive alguma dúvida deixa nos comentários que vou ter o maior prazer em lhe ajuda, caso você ainda não viu estamos com um canal no [Youtube, clicar aqui e se inscreva lá](https://www.youtube.com/channel/UCZKLK7o6IVayeEjkkoWLwbQ?view_as=subscriber), estamos publicando vídeos toda semana.

### Do ZERO a PROGRAMADOR full stack JAVASCRIPT (React + Nodejs)

[![](/uploads/2020/01/banner-JS8-1080x1920-stories-1-576x1024.jpg)](/programador-fullstack-8-semanas)

Talvez você já tem ouvindo essas frases “Eu não consigo aprender”, “Parece que o conteúdo nunca acaba”, “É difícil encontrar vagas para quem está começando” “Eu estou perdido, não sei mais o que estudar” é perfeitamente compreensível que alguns programadores se sintam assim, porém programação é uma carreira excelente e tem ótimos salários, tenho colegas que se formaram junto comigo que ganha mais de R$6.000 Reais por mês. Existem dois motivos muito forte para essa frustração, o primeiro motivo é a base de conhecimento **FRACA** e o segundo a falta de noção para se posicionar no mercado. Saiba mais detalhes [clicando aqui](http://bit.ly/tipscode-curso-programador-full-stack-javascript).

[Sabe mais !](/programador-fullstack-8-semanas)

---
title: "Flexbox: Como Centralizar elementos"
date: "2020-07-12"
categories: 
  - "css"
tags: 
  - "css"
  - "flexbox"
description: O Flexbox é um módulo do CSS que ajuda a posicionar elementos HTML na tela. A centralização horizontal e vertical é uma delas. A centralização do Flexbox resolve problemas comuns de alinhamento que você pode encontrar ao trabalhar com o modelo de CSS box tradicional. Ele permite centralizar itens em seu contêiner horizontal e verticalmente com apenas algumas linhas de código CSS.
imgArticle: /thumbnail-article/css-flexbox.png
imgHome: /thumbnail-home/css-flexbox.png
---

O Flexbox é um módulo do CSS que ajuda a posicionar elementos HTML na tela. A centralização horizontal e vertical é uma delas. A centralização do Flexbox resolve problemas comuns de alinhamento que você pode encontrar ao trabalhar com o modelo de CSS box tradicional. Ele permite centralizar itens em seu contêiner horizontal e verticalmente com apenas algumas linhas de código CSS.

## Layouts Flexbox com base em linha e coluna

![flexbox](/uploads/2020/07/flexbox-banner-1024x709.png)

O Flexbox é um módulo de layout unidimensional, o que significa que seus layouts são baseados em linhas ou colunas. Você pode definir a direção do layout usando a propriedade **_flex-direction_** que você precisa usar no container flex. Pode levar quatro valores: linha, linha inversa, coluna e coluna reversa. É assim que as quatro direções flexíveis diferentes são exibidas na tela:

Layout flexível baseado em linha (padrão):

```
<!-- HTML -->
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>       
</div>

/* CSS */
.container {
    display: flex;
    flex-direction: row;
}
```

![flexbox](/uploads/2020/07/layou-01-1.png)

Figura 01

Layout flexbox baseado em linhas invertidas:

```
.container {
    display: flex;
    flex-direction: row-reverse;
}
```

![flexbox](/uploads/2020/07/layout-02.png)

Figura 02

Layout flexbox baseado em coluna:

```
.container {
    display: flex;
    flex-direction: column;
}
```

![flexbox](/uploads/2020/07/layout-03-1.png)

Figura 03

Layout flexbox baseado em coluna invertida:

```
.container {
    display: flex;
    flex-direction: column-reverse;
}
```

![flexbox](/uploads/2020/07/layout-04.png)

Figura 04

Nas ilustrações acima, você pode ver os layouts **_flexbox_** de linha única, pois não alteramos o valor padrão da propriedade **_flex-wrap_**, que é _**agorarap**_. Portanto, se você deseja exibir os itens em mais de uma linha ou coluna, adicione o flex-wrap: wrap; regra para o contêiner flex também.

## Como Funciona a Centralização

De fato, o flexbox não usa os conceitos de centralização “horizontal” e “vertical”. Em vez disso, funciona com os eixos principal e cruzado, que na tela se parecem com centralização horizontal e vertical. A direção dos eixos principal e transversal depende do valor da propriedade de direção flexível mencionada acima .

Nos layouts flexbox baseados em linhas ( linha e linha inversa ), o eixo principal é executado na direção horizontal, enquanto o eixo transversal é vertical. Por outro lado, nos layouts flexbox baseados em colunas ( coluna e coluna inversa ), o eixo principal é executado verticalmente, enquanto o eixo transversal é horizontal. Se você estiver interessado em saber como os eixos do flexbox funcionam, [consulte esse treinamento onde você vai aprender tudo isso e muito mais](/programador-fullstack-8-semanas).

Quando falamos sobre centralização do flexbox, falamos sobre dois tipos de centralização:

- Centralização ao longo do eixo principal (também chamado de eixo de bloco);
- Centralização ao longo do eixo transversal (também chamado de eixo embutido).

Se você deseja um item flexível perfeitamente centralizado, é necessário centralizá-lo ao longo dos dois eixos.

### Centralizar pelo Eixo Principal

Você precisa usar a propriedade **_justify-content_** para centralizar itens no flexbox ao longo do eixo principal. Seu valor padrão é **_flex-start_**, que alinha todos os itens dentro do **_contêiner flex_** ao início do eixo principal. Se você quiser centralizar os itens, precisará usá-lo com o valor central .

No caso de layouts baseados em linhas, o seguinte código CSS centraliza os itens horizontalmente (como aqui, o eixo principal também é executado horizontalmente):

```
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
```

![flexbox](/uploads/2020/07/layout-05.png)

Figura 05

E, no caso de layouts baseados em colunas, a mesma propriedade justify-content alinha os itens verticalmente (como aqui, o eixo principal é executado verticalmente):

```
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

![flexbox](/uploads/2020/07/layout-06.png)

figura 06

Tal como nos exemplos acima, que têm-se centrado os itens de flex, as fileiras-reverso e de coluna inversa instruções trabalham da mesma maneira como linha e coluna. Isso ocorre porque o centro do eixo principal está à mesma distância dos pontos inicial e final.

No entanto, observe que se você deseja usar a propriedade justify-content com outro valor, como flex-end, os layouts resultantes parecerão diferentes quando as direções forem invertidas.

### Centralizar pelo Eixo Transversal

Como o flexbox é um layout unidimensional, o eixo transversal tem uma função secundária. Os itens flexíveis fluem ao longo do eixo principal. O eixo transversal não altera a direção do fluxo, apenas ajusta os itens na tela. Existem três propriedades CSS que você pode usar para centralizar ao longo do eixo transversal:

- align-items para centralizar uma linha de todos os itens flexíveis;
- align-self para centralizar uma linha de um item flexível individual;
- align-content conteúdo para centralizar várias linhas de todos os itens flexíveis (essa propriedade funciona apenas quando itens flexíveis são agrupados em várias linhas).

Agora, vamos ver como eles funcionam com os diferentes valores da propriedade **_flex-direction_**.

#### 1 - Centralização de Eixo Cruzado de Linha Única

Você pode usar a propriedade **_align-items_** para alinhar itens ao longo do eixo transversal. Se você usá-lo junto com a propriedade **_center_**, ele centralizará os itens verticalmente quando a direção for linha ou reversa, e horizontalmente quando a direção for coluna ou reverso da coluna.

É assim que os itens de centralização ao longo do eixo transversal se parecem nos layouts baseados em linhas:

```
.container {    
    display: flex;
    flex-direction: row;
    align-items: center;
}
```

Como não alteramos o **_justify-content_**, o valor padrão é o **_flex-start_**. Dessa forma, os itens flexíveis são alinhados ao início do eixo principal (horizontal) e ao centro do eixo transversal (vertical):

![flexbox](/uploads/2020/07/layout-07-1.png)

Figura 07

Ao trabalhar com layouts baseados em colunas, você pode usar a propriedade _**align-items**_ para centralizar itens flexíveis horizontalmente, pois nesse caso, o eixo transversal é executado horizontalmente. Em CSS:

```
.container {    
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

Aqui, a propriedade **_justify-content_** também permanece em seu valor padrão ( f**_lex-start_** ). Como nos layouts baseados em colunas, o eixo principal é o vertical, o **_flexbox_** alinha os itens ao topo do contêiner (o início do eixo principal), enquanto o centraliza horizontalmente seguindo a regra de alinhar itens: central.

![flexbox](/uploads/2020/07/layout-08-1.png)

#### 2 - Centralização de Eixo Cruzado de Item Única

Você não pode apenas centralizar itens flexíveis em massa ao longo do eixo transversal, mas também optar por centralizar apenas um único item usando a propriedade CSS _**align-self**_ que substitui os itens de alinhamento. Você precisa adicionar alinhamento aos itens flex individuais (em vez do contêiner flex) da seguinte maneira:

```
<!-- HTML -->
<div class="container">
        <div class="item"></div>
        <div class="item center"></div>
        <div class="item"></div>
</div>

/* CSS */
.container {
    display: flex;
    flex-direction: row;
}
.center {
    align-self: center;
    background: magenta;
}
```

Como você pode ver na captura de tela abaixo, ele centraliza o segundo item ao longo do eixo transversal (verticalmente, pois é um layout baseado em linhas). Ao mesmo tempo, o restante dos itens permanece no local padrão:

![flexbox](/uploads/2020/07/layout-09.png)

O exemplo acima usa um layout flexbox baseado em linhas, mas o alinhar itens também funciona da mesma maneira no caso de layouts baseados em colunas.

#### 3 - Centralização de Eixo Cruzado em várias linhas

O módulo de layout flexbox também permite centralizar várias linhas de itens ao longo do eixo transversal. A propriedade **_align-content_** permite distribuir o espaço ao redor dos itens quando eles se agrupam em várias linhas. É um pouco difícil entender a diferença entre alinhar itens e alinhar conteúdo, então vamos ver como eles se comparam.

Quando você define **_flex-wrap_** para quebrar e centralizar apenas a propriedade **_align-items_**, é isso que você obtém:

![flexbox](/uploads/2020/07/layout-10.png)

Embora os itens flexíveis de agrupamento estejam centralizados ao longo do eixo transversal (verticalmente), o espaço é distribuído igualmente entre eles. É isso que você pode alterar com a ajuda do **_align-content_** da seguinte maneira:

```
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
}
```

Como você pode ver abaixo, a propriedade **_align-content_** é responsável pela distribuição do espaço ao longo do eixo transversal. Como foi definido para o centro, os itens de várias linhas são "puxados" em direção ao centro do contêiner flexível, tanto quanto possível:

![](/uploads/2020/07/layout-11.png)

Observe que o alinhamento de conteúdo só funciona quando há mais de uma linha de itens flexíveis. Portanto, você não precisa se preocupar com isso quando tiver apenas um ou alguns itens flexíveis.

#### Item flexbox perfeitamente Centralizados

Para criar um layout perfeitamente centralizado com o flexbox, você precisa centralizá-lo ao longo dos eixos principal e transversal. O caso de uso mais frequente é quando você centraliza um elemento dentro de outro. Com o flexbox, são apenas três regras CSS e funciona com qualquer tipo de elemento HTML, não apenas com divs:

```
<!-- HTML -->
<div class="container">
    <div class="item"></div>
</div>

/* CSS */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Como não definimos um valor para a propriedade flex-direction , ele assume o padrão, que é a linha:

![](/uploads/2020/07/layou-12.png)

Além de um único item, você também pode centralizar perfeitamente várias linhas de itens com o flexbox. Você precisa usar o seguinte CSS no caso de layouts baseados em linhas:

```
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}
```

![](/uploads/2020/07/layou-13.png)

E é assim que o layout de várias linhas perfeitamente centralizado se parece quando a direção flexível está definida como coluna :

```
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
```

![](/uploads/2020/07/layou-14-1.png)

## Conclusão

A centralização do Flexbox permite centralizar qualquer tipo de elemento HTML dentro do contêiner. Adicionando a exibição: a regra flexível a um contêiner é útil quando você deseja centralizar itens horizontalmente, verticalmente ou ambos. A centralização do Flexbox é uma excelente solução para criar títulos, imagens, vídeos e galerias de produtos perfeitamente centralizados e muito mais.

Existem muitas técnicas e ferramentas de CSS que podem facilitar sua vida. Para saber mais sobre eles, dê uma olhada nos nossos artigos sobre as 5 coisas que você deve saber sobre a especificação CSS ou consulte também nossa coleção dos melhores trechos de código flexbox .

### Recomendações

[Mais artigos](/react-guia-completo-para-testes/)

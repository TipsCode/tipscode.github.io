---
title: "Let e Const no JavaScript: Entenda as Diferença de uma vez por Todas"
date: "2020-11-01"
description: Neste artigo, vou lhe mostrar alguns pontos sobre as diferenças entre let e const no javascript, duas novas palavras-chave adicionadas ao JavaScript com a chegada da versão ES6 ([caso você queira entender mais sobre esse tal ES6 tem um vídeo no canal sobre isso](https//youtu.be/PlFlKxZbVqs)), essa mesma que mudou muito o jeito que alguns via a linguagem. Essa versão trouce muitas que aprimoraram.
imgArticle: /thumbnail-article/let-e-const.png
imgHome: /thumbnail-home/let-e-const.png
---

Neste artigo, vou lhe mostrar alguns pontos sobre as diferenças entre **let e const no javascript**, duas novas palavras-chave adicionadas ao JavaScript com a chegada da versão ES6 ([caso você queira entender mais sobre esse tal ES6 tem um vídeo no canal sobre isso](https://youtu.be/PlFlKxZbVqs)), essa mesma que mudou muito o jeito que alguns via a linguagem. Essa versão trouce muitas que aprimoraram.

Este artigo é um dos muitos que cobrem novos recursos de JavaScript introduzidos com **ES6**, incluindo **Map** e **WeakMap**, **Set** e **WeakSet**, novos métodos disponíveis para **String** , **Number** e **Array**, e a nova sintaxe disponível para funções.

## Palavra reservada let

Até ES5, JavaScript tinha apenas dois tipos de escopo, o **escopo de função** e **escopo global**. Isso causou muita frustração e comportamentos inesperados para os desenvolvedores vindos de outras linguagens como C, C ++ ou Java. JavaScript não tinha escopo de bloco, o que significa que uma variável só pode ser acessada dentro do bloco no qual está definida. Um bloco é tudo dentro de uma chave de abertura e fechamento. Vamos dar uma olhada no seguinte exemplo:

```
function fora() {
  var dentroV = 1;
  if (dentroV >= 0) {
    var dentroF = 2;
    console.log(dentroV); // saída 1
    console.log(dentroF); // saída 2
  }
  console.log(dentroV); // saída 1
  console.log(dentroF); // saída 2
}
fora();
```

Depois de executar esse código, você verá a seguinte saída no console:

```
1
2
1
2
```

O que a maioria dos desenvolvedores vindos das linguagens mencionadas acima esperariam é que a função **fora()** do bloco do **if** você não pode acessar a variável **dentoF**. Por exemplo, executar o código equivalente em C resulta no erro 'dentroF' undeclared at line …que se refere ao uso da variável "dentroF" fora do if.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

Esta situação mudou no ES6 com a disponibilidade do escopo do bloco. Os membros da organização ECMA sabiam que não podiam alterar o comportamento da palavra-chave var, pois isso quebraria a compatibilidade com versões anteriores. Então, eles decidiram introduzir uma nova palavra-chave chamada let. O último pode ser usado para definir variáveis ​​que limitam seu escopo ao bloco em que são declaradas. Além disso, ao contrário var, as variáveis ​​declaradas usando let não são içadas . Se você referenciar uma variável em um bloco antes que a **let** declaração dessa variável seja encontrada, isso resultará em a **ReferenceError**. Mas o que isso significa na prática? É bom apenas para iniciantes? De modo nenhum!

Para explicar por que você vai gosta de usa o **let**, considere o seguinte código retirado do meu artigo:

```
// Código HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>TipsCode</title>
</head>
<body>
  <h1>Palavra reservada VAR</h1>
  <button class="var">Clique 01</button>
  <button class="var">Clique 02</button>
  <button class="var">Clique 03</button>
</body>
</html>

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener('click', function() {
    console.log('You clicked element #' + i);
  });

// JS
var nodes = document.querySelectorAll('button');
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener('click', function() {
    console.log('Você clicou no Elemento' + i);
  });
}
```

Aqui você pode reconhecer um problema conhecido que vem da declaração de variáveis, seu escopo e manipuladores de eventos.

![](/uploads/2020/11/Problemas-no-var.png)

Código sendo executado no Codepen

Graças ao **ES6**, podemos facilmente resolver esse problema declarando a variável **i** no **loop for** usando **let**

```
// html
<html>
<head>
  <meta charset="utf-8">
  <title>TipsCode</title>
</head>
<body>
  <h1>Palavra reservada LET</h1>
  <button class="let">Clique 01</button>
  <button class="let">Clique 02</button>
  <button class="let">Clique 03</button>
</body>
</html>

// js
var nodes = document.querySelectorAll('button');
for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener('click', function() {
    console.log('Você clicou no Elemento ' + i);
  });
}
```

![let e const no javascript](/uploads/2020/11/resolvido-com-let.png)

let

A declaração **let** é compatível com o Node e todos os navegadores modernos. Existem, no entanto, alguns truques no Internet Explorer 11 que você pode ler na tabela de compatibilidade do ES6.

Uma demonstração ao vivo que mostra a diferença entre var e let é mostrada abaixo e também está disponível [aqui](https://kangax.github.io/compat-table/es6/):

As palavras **_let e cont no javascript_**, veio realmente para levar o javascript para outro nível, já vimos um pouco com o let, agora vamos estudar o const.

## Palavra Reservada Const

O **const** aborda a necessidade comum dos desenvolvedores de associar um nome **mnemônico** a um determinado valor, de forma que o valor não possa ser alterado (ou, em termos mais simples, defina uma constante).

Por exemplo, se estiver trabalhando com fórmulas matemáticas, pode ser necessário criar um **objeto Math**. Dentro desse objeto, você deseja associar os valores de PI (π ) PI é um valor mnemônico.

A palavra **const** permite que você alcance esse objetivo. Usando-o, você pode criar uma constante que pode ser **global** ou **local** para a função na qual é declarada.

Constantes definidas com const seguem as mesmas regras de escopo das variáveis, mas não podem ser declaradas novamente. Constantes também compartilham um recurso com variáveis ​​declaradas usando o let fato de que têm escopo de bloco em vez de escopo de função (e, portanto, não são içadas).

Caso tente acessar uma constante antes de ser declarada, você receberá um **ReferenceError**. Se você tentar atribuir um valor diferente a uma variável declarada com **0**, receberá um **TypeError**.

```
const fora= {}

fora.dentro = 37

console.log(fora.dentro)

// 37
```

Se você quiser tornar os valores de um objeto verdadeiramente imutáveis, use [Object.freeze()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

O suporte dos navegadores com o recurso **const** é tão bom quanto para o **let**. A declaração **const** é compatível com o Node e todos os navegadores modernos.

Veja um exemplo de uso do **const**:

```
'use strict';

function fora() {
  const con1 = 3.141;
  if (con1 > 3) {
    const con2 = 1.414;
    console.log(con1); // saída 3.141
    console.log(con2); // saída 1.414
  }
  console.log(con1); // saída 3.141
  try {
    console.log(con2);
  } catch(ex) {
    console.log('Cannot access con2 outside its block');
  }
}
fora();
```

![let e const no javascript](/uploads/2020/11/const-1024x411.png)

let e const no javascript

## Conclusão

Neste tutorial, apresentei a você lete const, dois novos métodos para declarar variáveis ​​que foram apresentados à linguagem com ES6. Embora varnão vá desaparecer tão cedo, eu encorajo você a usar conste, letsempre que possível, reduzir a suscetibilidade do seu código a erros. Para ler mais, você também pode gostar de nossa dica rápida Como declarar variáveis ​​em JavaScript , que se aprofunda na mecânica da declaração de variáveis.

### Recomendação

---
title: "Expressões Regulares Um guia para Iniciantes"
date: "2020-05-18"
tags: 
  - "aprender-expressoes-regulares"
  - "aula-expressao-regular"
  - "como-fazer-expressao-regular"
  - "como-usar-expressoes-regular"
  - "curso-de-expressoes-regulares"
  - "expressao-regular"
  - "expressao-regular-javascript"
  - "expressoes-regulares"
  - "expressoes-regulares-2"
  - "expressoes-regulares-com-sed"
  - "expressoes-regulares-em-java"
  - "expressoes-regulares-para-iniciantes"
  - "o-que-e-expressao-regular"
  - "regex"
  - "regexp"
  - "regular-expression"
  - "regular-expressions"
  - "regulares"
description: Mais cedo ou mais tarde, você encontrará uma expressão regular. Com sua sintaxe enigmática, documentação confusa e curva de aprendizado maciça, a maioria dos desenvolvedores resolve copiá-los e colá-los no StackOverflow e torcer para que eles funcionem. Mas e se você pudesse decodificar expressões regulares e aproveitar seu poder? Neste artigo, mostrarei por que você deve examinar novamente as expressões regulares e como usá-las no mundo real.
imgArticle: /thumbnail-article/expressoes-regulares-para-iniciantes.png
imgHome: /thumbnail-home/expressoes-regulares-para-iniciantes.png
---

Mais cedo ou mais tarde, você encontrará uma expressão regular. Com sua sintaxe enigmática, documentação confusa e curva de aprendizado maciça, a maioria dos desenvolvedores resolve copiá-los e colá-los no StackOverflow e torcer para que eles funcionem. Mas e se você pudesse decodificar expressões regulares e aproveitar seu poder? Neste artigo, mostrarei por que você deve examinar novamente as expressões regulares e como usá-las no mundo real.

### Por que Expressões Regulares

Expressões Regulares

Por que se preocupar com expressões regulares? Por que você deveria se importar?

- **Correspondência**: Expressões regulares são ótimas para determinar se uma sequência corresponde a algum formato, como número de telefone, email ou número de cartão de crédito;
- **Substituição**: Expressões regulares facilitam a localização e substituição de padrões em uma sequência. Por exemplo, **_text.replace(/\\s+/g, " ")_**substitui todos os pedaços de espaço em branco **_text_**, como **_"\\n\\t "_**, por um único espaço;
- **_Portabilidade_**: Quase todos os idiomas principais possuem uma biblioteca de expressões regulares. A sintaxe é padronizada principalmente, para que você não precise se preocupar com reaprender expressões regulares ao alternar idiomas;
- **_Codificação_**: ao escrever código, você pode usar expressões regulares para pesquisar arquivos com ferramentas como localizar e substituir no Atom ou ack na linha de comando;
- **_Clara e concisa_**: se você se sentir confortável com expressões regulares, poderá executar algumas operações bastante complicadas com uma quantidade muito pequena de código;
- **_Extração_**: é fácil extrair informações de um padrão com expressões regulares. Por exemplo, **_name.matches(/^(Mr|Ms|Mrs|Dr).?\\s/i)\[1\]_** extrai o título de uma pessoa de uma sequência, como **_"Mr"_**de **_"Mr. Schropp"_**.

### Expressões Regulares na prática

Expressões Regulares

A melhor maneira de aprender expressões regulares é usando um exemplo. Digamos que você esteja criando uma página Web com uma entrada de número de telefone. Como você é um desenvolvedor, decide exibir uma marca de **_V_** quando o número de telefone for válido e um **_X_** quando for inválido.

![Expressões Regulares](/uploads/2020/05/expressoes-770x515-1.jpg)

**_Figura 01: Expressões Regulares_**

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="LandonSchropp" data-slug-hash="zxRmeG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Regular Expression Demo"><span>See the Pen <a href="https://codepen.io/LandonSchropp/pen/zxRmeG">Regular Expression Demo</a> by Landon Schropp (<a href="https://codepen.io/LandonSchropp">@LandonSchropp</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

```
<input id="phone-number" type="text" /> 
<label class="valid" for="phone-number"><img src="check.svg"></label> 
<label class="inválido" for="phone-number"><img src="x.svg"></ label >
```

```
input:not ([data-validation = "valid"]) ~ label.valid ,
input:not ([data-validation = "invalid"]) ~ label.invalid  { 
  display: none; 
}
```

```
$("input").on("input blur", função(evento) { 
  if(isPhoneNumber($(this).val())) { 
    $(this).attr({"data-validation":"valid"}); 
    return ; 
  }
  if(event.tipe == "blur" ){ 
    $ (this).attr({"data-validation":"invalid"  } ) ; 
  } 
  else { 
    $(this ).removeAttr("data-validation"); 
  } 
});
```

Com o código acima, sempre que uma pessoa digita ou cola um número válido na entrada, o **_V_** é exibido. Quando o usuário desfoca da entrada (blur) e o valor for inválido, o **_X_** é exibido.

### Crie seu jogo com JavaScript mesmo que você seja iniciante

Esse é o meu MiniCurso onde vou te ensinar a desenvolver do ZERO um jogo completo usando o que há mais de moderno na linguagem javascript e o melhor esse conteúdo é totalmente gratuito, para você receber esse mega conteúdo basta clicar no botão quero participar e vou lhe enviar o conteúdo para o seu e-mail

[QUERO PARTICIPAR](https://bit.ly/mini-curso-criando-game-js)

Como você sabe que os números de telefone são compostos por dez dígitos, você escreve a função isPhoneNumberé assim:

```
function isPhoneNumber(string) {
  return /\d\d\d\d\d\d\d\d\d\d/.test(string);
}
```

Esta função contém uma expressão regular entre os _**/**_ caracteres com dez **_\\d_** ou dígitos. O método **_test()_** retornará true se o **_regex_** corresponder à string e false se não corresponder. Se você executar **_isPhoneNumber("5558675309")_**, ele retornará **true**.

No entanto, escrever 10 **_\\d_** é um pouco redundante. Então, você pode fazer dessa forma:

```
function isPhoneNumber(string) {
  return /\d{10}/.test(string);
}
```

Às vezes, quando os usuários digitam números de telefone, começam com 1. Não seria bom se o seu regex pudesse lidar com esses casos? Você pode usando ?.

```
function isPhoneNumber(string) {
  return /1?\d{10}/.test(string);
}
```

O ? símbolo significa zero ou um, então agora **_isPhoneNumber()_** retorna true para ambos "5558675309"e "15558675309"!

Até agora, **_isPhoneNumber_** está ficando legal, mas você não percebeu um detalhe muito importante: as expressões regulares são mais do que combinar partes de uma sequência. Tal como está, **_isPhoneNumber("555555555555555555")_** onde retorna _**true**_ porque essa sequência contém dez números. Você pode corrigir esse problema usando as âncoras ^e $.

```
função  isPhoneNumber (string)  { 
  return /^1?\d{10}$/.teste(string) ; 
}
```

Aproximadamente, ^corresponde ao início da string e $ ao final; agora, seu **_regex_** corresponderá ao número de telefone inteiro.

### Vamos nos aprofunda mais um pouco

Expressões Regulares

Tudo indo muito bem até aqui. você colocou sua página no ar, e está indo super bem, mas há um outro problema que temos que analisar. Que são as várias formas de se escrever um número de telefone, e como a internet é global você como desenvolvedor tem que ver o cenário como um todo, por exemplo a maneira de se digita números telefônicos nos Estados Unidos é bem diferente do Brasil, veja o exemplo:

- (234) 567-8901
- 234-567-8901
- 234.567.8901
- 234/567-8901
- 234 567 8901
- +1 (234) 567-8901
- 1-234-567-8901

Claro você deve ver esse cenário caso sua aplicação for roda fora do contexto brasileiro, coloquei essa parte apenas a titulo de exemplo ok.

Embora seus usuários possam deixar de fora a pontuação, é muito mais fácil digitar um número formatado.

Embora você possa escrever uma expressão regular para lidar com todos esses formatos, provavelmente é uma má idéia. Mesmo que você pregue todos os formatos desta lista, é muito fácil perder um. Além disso, você realmente se importa apenas com os dados, não com a formatação . Então, em vez de se preocupar com pontuação, por que não removê-la?

```
função isPhoneNumber(string) { 
  return /^1?\d{10}$/.teste(string.replace(/\D/g,"")); 
}
```

A função replace() está substituindo o caractere \\D, que corresponde a qualquer caractere que não seja um dígito, por uma sequência vazia. O g é o "sinalizador" global ou diz à função para substituir todas as correspondências pela expressão regular, em vez de apenas a primeira.

### Seja um profissional mais completo, estude expressões regulares

Expressões Regulares

Hoje todos os sites e sistemas web tem uma página de formulário de contato e a maioria pede número de telefone. No entanto, você como desenvolvedor terá que ver todos os cenários possíveis para ter uma página completa sem bugs.

O [Plano de Numeração da América do Norte](https://en.wikipedia.org/wiki/North_American_Numbering_Plan) é o padrão de número de telefone usado nos EUA, Canadá e 23 outros países. Este sistema possui algumas regras simples, [assim como a brasileira](https://www.anatel.gov.br/setorregulado/plano-de-numeracao-brasileiro):

- Um número de telefone ( (234) 567-8901) é dividido em três partes: o código de área ( 234), o código de troca ( 567) e o número de assinante ( 8901);
- Para o código de área e o código de troca, o primeiro dígito pode 2 passar 9 e o segundo e o terceiro dígitos podem 0 passar 9;
- O código de troca não pode ter 1 como terceiro dígito se 1 também for o segundo dígito.

Seu regex já funciona para a primeira regra, mas quebra a segunda e a terceira. Por enquanto, vamos nos preocupar apenas com a segunda regra. A nova expressão regular precisa se parecer com o seguinte:

```
/ ^ 1? <CÓDIGO DE ÁREA> <CÓDIGO DE TROCA> <NÚMERO DE ASSINANTE> $ /
```

O número do assinante é fácil; são quatro dígitos.

```
/ ^ 1? <CÓDIGO DE ÁREA> <CÓDIGO DE TROCA> \ d {4} $ /
```

O código de área é um pouco mais complicado. Você precisa de um número entre 2 e 9, seguido por dois dígitos. Para conseguir isso, você pode usar um conjunto de caracteres! Um conjunto de caracteres permite especificar um grupo de caracteres para escolher.

```
/ ^ 1? [23456789] \ d \ d <CÓDIGO DE TROCA> \ d {4} $ /
```

Isso é ótimo, mas é irritante digitar todos os caracteres entre 2 e 9. Limpe-o com um intervalo de caracteres.

### Avance para o próximo nível. Se torne um programador FullStack JavaScript

Você sabia que a maioria das pessoas que buscam se tornar programadores(as) desistem porque se sentem perdidos(a) e não sabem qual caminho seguir? Eu já passei por isso e de verdade quero lhe ajudar, assista esse vídeo clicando no botão abaixo

[Assistir Vídeo](/programador-fullstack-8-semanas)

```
/ ^ 1? [2-9] \ d \ d <CÓDIGO DE TROCA> \ d {4} $ /
```

Isso é melhor! Como o código de troca é o mesmo que o código de área, você pode duplicar seu regex para finalizar o número.

```
/ ^ 1? [2-9] \ d \ d [2-9] \ d \ d \ d {4} $ /
```

Mas, não seria bom se você não tivesse que copiar e colar a seção de código de área do seu regex? Você pode simplificar usando um grupo! Os grupos são formados envolvendo caracteres entre parênteses.

```
/ ^ 1? ([2-9] \ d \ d) {2} \ d {4} $ /
```

É isso aí! Aqui está a isPhoneNumberaparência da função final :

Agora, \[2-9\]\\d\\destá contido em um grupo e {2}especifica que esse grupo deve ocorrer duas vezes.

```
função  isPhoneNumber ( string )  { 
  return /^1?([2-9]\d\d){2}\d{4}$/.test(string.replace(/\D/g,"")) ; 
}
```

aaa

### Casos que devemos evitar Expressões Regulares

Expressões Regulares

Expressões regulares é um recurso incrível, mas há alguns casos/problemas que você não deve considera antes de usar.

- **Não seja muito rigoroso**: Não tem como resolver tudo com expressões regulares. Exemplo para números de telefone, mesmo que correspondamos a todas as regras do país, ainda não há como saber se um número de telefone é real. Se eu recitar o número (555) 555-5555, ele corresponde ao padrão, mas não é um número de telefone real, não tem muito o que fazer;
- _**Não escreva um "analisador" de HTML**_. Embora seja bom usar expressões regulares para analisar coisas simples, elas não são úteis para analisar linguagens inteiras, você não vai se divertir analisando linguagens não regulares com expressões regulares;
- **Não tente complicar muito**. O regex completo para e-mails tem 6.318 caracteres. Um simples, imperfeitos se parece com isso: **_/^\[^@\]+@\[^@\]+.\[^@.\]+$/._** Como uma regra geral, se a expressão regular for maior que uma linha de código, talvez seja hora de procurar outra solução.

### Conclusões

Expressões Regulares

Neste artigo, você aprendeu quando usar expressões regulares e quando evitá-las e experimentou o processo de escrever uma. Espero que expressões regulares pareçam um pouco menos ameaçadoras e talvez até intrigantes. Se você usar um regex para resolver um problema complicado, deixe-me saber nos comentários, breve farei um vídeo sobre esse tema em nosso [canal do Youtube](https://www.youtube.com/channel/UCZKLK7o6IVayeEjkkoWLwbQ?view_as=subscriber).  

#### Conteúdo recomendados

- [15 Componentes React](/15-componentes-incriveis-do-react/)
- [Sass e SCSS qual é a diferença?](/qual-a-diferencas-entre-sass-e-scss/)
- [React Router Guia completo](/react-router-versao-5-guia-completo/)

##### Nosso canal no Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/bsc1ZQW_5CI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Crie seu jogo com JavaScript mesmo que você seja iniciante

Esse é o meu MiniCurso onde vou te ensinar a desenvolver do ZERO um jogo completo usando o que há mais de moderno na linguagem javascript e o melhor esse conteúdo é totalmente gratuito, para você receber esse mega conteúdo basta clicar no botão quero participar e vou lhe enviar o conteúdo para o seu e-mail

[QUERO PARTICIPAR](https://bit.ly/mini-curso-criando-game-js)

### Avance para o próximo nível. Se torne um programador FullStack JavaScript

Você sabia que a maioria das pessoas que buscam se tornar programadores(as) desistem porque se sentem perdidos(a) e não sabem qual caminho seguir? Eu já passei por isso e de verdade quero lhe ajudar, assista esse vídeo clicando no botão abaixo

[Assistir Vídeo](/programador-fullstack-8-semanas)

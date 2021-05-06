---
title: "Arrow Functions: Uma sintaxe concisa em JavaScript"
date: "2020-04-07"
tags: 
  - "arrow"
  - "arrow-function"
  - "arrow-functions"
  - "arrow-functions-es6"
  - "arrow-functions-javascript"
  - "arrow-functions-js"
  - "arrow-functions-tutorial"
  - "easy-arrow-functions"
  - "es6-arrow-functions"
  - "fat-arrow"
  - "fat-arrow-functions"
  - "function"
  - "functions"
  - "javascript-arrow-function"
  - "javascript-arrow-function-tutorial"
  - "javascript-arrow-functions"
  - "javascript-arrow-functions-explained"
  - "javascript-arrow-functions-vs-function"
  - "javascript-functions"
  - "js-arrow-functions"
description: As arrow functions foram introduzidas no ES6 como uma nova sintaxe para escrever funções JavaScript. Esse recurso economiza tempo dos desenvolvedores e simplificam o escopo das funções.
imgArticle: /thumbnail-article/arrow-function.png
imgHome: /thumbnail-home/arrow-function.png
---

As arrow functions foram introduzidas no ES6 como uma nova sintaxe para escrever funções JavaScript. Esse recurso economiza tempo dos desenvolvedores e simplificam o escopo das funções.

### Mini-Curso: Construindo Jogo em JavaScript (GRATUITO)

Neste mini-curso você vai aprender a construir um jogo do ZERO, passo a passo, linha a linha, usando JavaScript puro, HTML5 e CSS3 e o melhor 100% Grátis. FAÇA SUA INSCRIÇÃO AGORA MESMO.

[Inscreva-se agora](https://bit.ly/mini-curso-criando-game-js)

### O que é Arrow Functions?

Arrow Functions

![Arrow Functions
](/uploads/2019/12/Perguntas-para-artigos-300x182.jpg)

Figura 01 - Arrow Functions

As arrow functions - também chamadas de funções de "seta gorda", do CoffeeScript ( uma linguagem transcompilada ) - são uma sintaxe mais concisa para escrever expressões de função. Eles utilizam um novo token =>, que parece uma flecha gorda. As arrow functions são anônimas e alteram a maneira como as funções são vinculadas a palavra reservada this.

As arrow functions tornam nosso código mais conciso e simplificam o escopo da função e a palavra - chave this . São mini-funções de uma linha que funcionam como Lambdas em outras linguagens como C # ou Python. Ao usar as arrow functions, evitamos digitar a palavra-chave function e a palavra-chave return (essas palavras-chaves estão implícitas nas arrow functions) e colchetes.

### Usando as Arrow Functions?

Arrow Functions

Há várias formas de se escrever uma arrow functions. Abordaremos os comuns aqui para você começar. Vamos transforma funções normais que escrevemos no dia-a-dia em arrow functions.

```
// ES5
var multiplicacao = function(x, y) {
  return x * y
}

// ES6 (Arrow Functions)
const multiplicacao = (x, y) => { return x * y}
```

O exemplo da arrow functions acima permite que um desenvolvedor obtenha o mesmo resultado com menos linhas de código e aproximadamente metade da digitação.

Parênteses não são necessários se apenas uma expressão estiver presente. O exemplo anterior também pode ser escrito dessa forma:

```
const multiplicacao = (x, y) => x * y
```

#### Sintaxe básica com Parâmetro

Parênteses são opcionais quando apenas um parâmetro está presente

```
// ES5
var fraseSplitterExs5 = function fraseSplitter(frase) {
  return frase.split(' ')
}

// ES6
const fraseSplitterEs6 = frase => frase.split("")

console.log(fraseSplitterEs6("ES6 é muito bom")) // ["ES6", "muito bom"]
```

#### Sem Parâmetro

Parênteses são necessários quando nenhum parâmetro está presente.

```
//ES5
var docLogEs5 = function docLog() {
    console.log(document);
};

//ES6
var docLogEs6 = () => { console.log(document); };
docLogEs6(); // #document... <html> ….
```

#### Sem Parâmetro

Arrow functions, como expressões de função, podem ser usadas para retornar uma expressão literal de objeto. A única ressalva é que o corpo precisa estar entre parênteses, a fim de distinguir entre um bloco e um objeto (os quais usam colchetes).

```
//ES5
var setNomeIdsEs5 = function setNomeIds(id, nome) {
  return {
    id: id,
    nome: nome
  };
};

// ES6
var setNomeIdsEs6 = (id, nome) => ({ id: id, nome: nome });

console.log(setNameIdsEs6 (2, "Alisson"));   // Object {id: 2, nome: "Alisson"}
```

#### Situações usando as Arrow Functiond

Agora que abordamos as sintaxes básicas, vamos ver como as funções de seta são usadas.

Um caso de uso comum para arrow functions é a manipulação de arrays. É comum que você precise mapear ou reduzir um array. Exemplo:

```
const celulares= [
  { nome:'iphone', preco:649 },
  { nome:'Galaxy S6', preco:576 },
  { nome:'Galaxy Note 5', preco:489 }
];
```

Poderíamos criar um array de objetos com apenas os nomes ou preços fazendo isso no ES5:

```
// ES5
var precos = celulares.map(function(celular) {
  return celular.preco;
});

console.log(precos); // [649, 576, 489]
```

Agora usando a arrow functions:

```
// ES6
const precos = celulares.map(celular => celular.preco);
console.log(precos); // [649, 576, 489]
```

Outros exemplos usando agora o método filter:

```
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisivelPorTresEs5= array.filter(function (v){
  return v % 3 === 0;
});

// ES6
const divisivelPorTresEs6 = array.filter(v => v % 3 === 0);

console.log(divisivelPorTresEs6); // [3, 6, 9, 12, 15]
```

#### Promises e retornos de chamadas

### Mini-Curso: Construindo Jogo em JavaScript (GRATUITO)

Neste mini-curso você vai aprender a construir um jogo do ZERO, passo a passo, linha a linha, usando JavaScript puro, HTML5 e CSS3 e o melhor 100% Grátis. FAÇA SUA INSCRIÇÃO AGORA MESMO.

[Inscreva-se agora](https://bit.ly/mini-curso-criando-game-js)

O código que faz uso de retornos de chamada assíncronos ou promessas geralmente contém muitas palavras-chaves como function e return. Ao usar promises, essas expressões de função serão usadas para encadeamento. Aqui está um exemplo simples:

```
// ES5
aAsync().then(function() {
  returnbAsync();
}).then(function() {
  returncAsync();
}).done(function() {
  finish();
});
```

Este código é simplificado e, sem dúvida, mais fácil de ler usando as arrow functions:

```
// ES6
aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);
```

As arrow funtions também devem simplificar o código NodeJS carregado de retorno de chamada.

O outro benefício do uso das arrow functions com promises / retornos de chamada é que reduz a confusão em torno da palavra-chave this. No código com várias funções aninhadas, pode ser difícil acompanhar e lembrar de vincular o this em um contexto correto. No ES5, você pode usar soluções alternativas, como o método ( que é lento ) ou criar um fechamento usando ..bind var self = this;

Como as arrow funtions permitem manter o escopo do chamador dentro da função, você não precisa criar fechamentos ou usar o bind.self = this.

Sem as funções Arrow, o código da promise seria escrito assim:

```
// ES5
API.prototype.get = function(resource) {
  var self = this;
  return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
      resolve(data);
    });
  });
};
```

Veja como esse mesmo código ficaria usando as arrow functions:

```
// ES6
API.prototype.get = function(resource) {
  return new Promise((resolve, reject) => {
    http.get(this.uri + resource, function(data) {
      resolve(data);
    });
  });
};
```

Você pode usar expressões de função se precisar de this funções dinâmicas e de arrow functions para um léxico this.

### Armadilhas das Arrow Functions

![Arrow Functions](/uploads/2020/04/armadilha-300x159.png)

**Figura 02 - Armadilhas**

As arrow funtions trazem uma sintaxe de função útil para o ECMAScript, mas, como em qualquer novo recurso, elas vêm com suas próprias armadilhas e truques.

As opiniões dos desenvolvedores variam em quase tudo, incluindo arrow functions. Por essa questão, aqui estão algumas coisas que você deve observar ao usar as arrow functions.

Como mencionado anteriormente, a palavra-chave this funciona de maneira diferente nas arrow functions. Os métodos call (), apply () e bind () não alteram o valor do this. (De fato, o valor de this dentro de uma função simplesmente não pode ser alterado; será o mesmo valor de quando a função foi chamada.) Se você precisar vincular a um valor diferente, precisará usar uma expressão de função.

#### Construtores

As arrow functions não podem ser usadas como construtores, como outras funções. Não os use para criar objetos semelhantes como faria com outras funções. Se você tentar usar new com uma arrow function, ocorrerá um erro. As arrow functions, como funções internas (também conhecidas como métodos), não possuem uma propriedade de protótipo ou outros métodos internos. Como os construtores geralmente são usados para criar objetos semelhantes a classes em JavaScript, você deve usar as novas classes ES6

#### Geradores

As arrow functions são projetadas para serem leves e não podem ser usadas como geradores . Usar a palavra-chave yield no ES6 gerará um erro. Use os geradores ES6 .

#### Objeto Argumentos

### Mini-Curso: Construindo Jogo em JavaScript (GRATUITO)

Neste mini-curso você vai aprender a construir um jogo do ZERO, passo a passo, linha a linha, usando JavaScript puro, HTML5 e CSS3 e o melhor 100% Grátis. FAÇA SUA INSCRIÇÃO AGORA MESMO.

[Inscreva-se agora](https://bit.ly/mini-curso-criando-game-js)

As arrow functions não possuem variável local, assim arguments como outras funções. O objeto de argumentos é um objeto de array que permite que os desenvolvedores descubram e acessem dinamicamente os argumentos de uma função. Isso é útil porque as funções JavaScript podem receber um número ilimitado de argumentos. As funções de seta não possuem esse objeto.

#### Quando devo usar as Arrow Functions?

![](/uploads/2020/04/perguntas-png-2.png)

Figura 03 - Onde devemos usar?

O recurso da arrow function foi um grande passo para a linguagem javascript, veja alguns cenários que é interessante fazer uso desse recurso incrível do ES6:

- Use function no escopo global e para propriedades Object.prototype;
- Use class para construtores de objetos;
- Use arrrow em qualquer outro lugar.

Os recursos do Es6 como as arrow functios, let e const , provavelmente se tornarão padrão, a menos que expressões ou declarações de função sejam necessárias. As arrow functions são poderosas, concisas e os desenvolvedores as amam. Talvez seja hora de você começar a usá-los!

### Conclusões

Sentir a necessidade de escrever esse artigo pois ainda vejo muitos desenvolvedores com dúvidas sobre esse recurso tão legal da linguagem JavaScript, caso eu tenha deixado passa algo por favor deixa aqui nos comentários. Até a próxima.

### Links importantes

##### DO ZERO A PROGRAMADOR  
FULL STACK JAVASCRIPT (REACT + NODEJS)

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.

[Inscreva-se agora](/programador-fullstack-8-semanas)

[A evolução das ferramentas javascript: Uma linguagem moderna](/a-evolucao-das-ferramentas-javascript-moderno/)  
[Aprenda a utilizar o Git](/10-tecnicas-do-git-que-vocce-precisa-conhecer/)

#### Canal do Youtube

Arrow Functions

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZuqixZLiP3E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

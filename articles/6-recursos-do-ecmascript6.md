---
title: "6 Recursos do ECMAScript6 Extraordinários"
date: "2020-05-29"
tags: 
  - "6-recursos"
  - "arrow-functions-es6"
  - "css"
  - "defalut-argument-values"
  - "desenvolvimento-web"
  - "ecmascript6"
  - "find"
  - "findindex"
  - "html"
  - "javascript"
  - "recursos"
  - "spreadoperator"
  - "template-literals"
  - "tipscode"
  - "web"
description: Todos na comunidade JavaScript adoram novas APIs, atualizações de sintaxe e recursos - eles fornecem maneiras melhores, mais inteligentes e mais eficientes de realizar tarefas importantes. O ECMAScript6 veio com um enorme quantidade de novas funcionalidades e navegadores trabalharam para implementar todas elas. Embora essa atualização trouxe grandes melhorias na linguagem, mas algumas mudou completamento e deixo tudo mais fácil e menos complicado para nos desenvolvedores da linguagem. Neste artigo vou lhe apresenta os 6 recursos que fez a linguagem mudar completamente o nível. Vamos agora mesmo a elas.
imgArticle: /thumbnail-article/6-recursos-do-es6.png
imgHome: /thumbnail-home/6-recursos-do-es6.png
---

Todos na comunidade JavaScript adoram novas APIs, atualizações de sintaxe e recursos - eles fornecem maneiras melhores, mais inteligentes e mais eficientes de realizar tarefas importantes. O **ECMAScript6** veio com um enorme quantidade de novas funcionalidades e navegadores trabalharam para implementar todas elas. Embora essa atualização trouxe grandes melhorias na linguagem, mas algumas mudou completamento e deixo tudo mais fácil e menos complicado para nos desenvolvedores da linguagem. Neste artigo vou lhe apresenta os 6 recursos que fez a linguagem mudar completamente o nível. Vamos agora mesmo a elas:

![ECMAScript6](/uploads/2020/01/js.png)

JavaScript - ECMAScript6

### 1 - Configuração de objeto \[chaves\]

Recursos do ECMAScript6

Um aborrecimento que os desenvolvedores de JavaScript enfrentavam há anos era ser capaz de definir o valor de uma chave a uma variável em uma declaração literal de objeto - você precisa adicionar a chave / valor após a declaração original, algo com isso:

```
// Exemplo muito reduzido 
let minhaChave = 'chave3'; 

let obj =  { 
    chave1:  'Um' , 
    chave2:  'Dois' 
}; 

obj[minhaChave] = 'Três';
```

Na melhor das hipóteses, esse padrão é inconveniente e, na pior, é confuso e feio. O versão **ECMAScript6**, também conhecida como ES6 fornece aos desenvolvedores uma maneira de sair dessa bagunça, veja o exemplo a baixo:

```
let minhaChave = 'Variavel Chave';

let obj = {
    chave1: 'Um',
    chave2: 'Dois',
    [minhaChave]: 'três' 
};
```

A inclusão da chave variável \[\] permite que os desenvolvedores executem tudo em uma única instrução!

### 2 - Arrow Function

Recursos do ECMAScript6

Você não precisa aprender todas as funcionalidades que o ECMAScript6 trouse para o javascript para saber sobre as Arrow Funtions, ou no pt-br (funções de seta) elas foram a alvo de muitas confusões dentro da comunidade JavaScript (pelo menos inicialmente). Eu já escrevi um artigo dedicado somente a esse recurso, clique aqui para [ler o artigo completo](/arrow-functions-sintaxe-facil-em-javascript/), quero destacar aqui que as arrow functions fornecem um método para encurta as funções simples:

```
// Adiciona um imposto de 10% ao total
let calcularTotal = total => total * 1.1;
  calcularTotal(10) // 11

// Cancelar um evento - outra pequena tarefa
let umEvento = event => event.preventDefault();
document.querySelector('div').addEventListener('click', umEvento);
```

Veja não temos a palavra reservado **_function_** ou **_return_**, às vezes nem mesmo a necessidade de adicionar **_()_** as arrow funtions são ótimo atalho de codificação para funções simples, recomendo que você leia o nosso [artigo](/arrow-functions-sintaxe-facil-em-javascript/) sobre.

### Descubra Hoje Mesmo Como Criar um JOGO usando Apenas JavaScript

Conteúdo 100% GRATUITO, basta você clicar no BOTÃO saiba mais e se inscrever no MiniCurso que vou lhe enviar no seu e-mail as 6 aulas e vou te ensinar do ZERO a criar um jogo com JavaScript, HTML5 e CSS3.

[Saiba Mais!](/mini-curso-gratuito)

### 3 - Find e FindIndex

Recursos do ECMAScript6

O JavaScript permite que os desenvolvedores obtenham o índice de um determinado item dentro de um array com o **_Array.prototype.indexOf_**, mas **_indexOf_** não fornece um método para calcular a condição do item desejado; você também precisa procurar um valor conhecido exato. Escreva find e findIndex - dois métodos para pesquisar em um array a primeira correspondência de um valor calculado:

```
let idade = [12, 19, 6, 4];

let idadeDeAdulto = idades.find(idade => idade >= 18); // 19
let idadeDeAdultoIndex = idades.findIndex(ideda => idade >= 18); // 1
```

**_find()_** e **_findIndex()_**, ao permitir uma pesquisa de valor calculada, evita também efeitos colaterais desnecessários. Recurso muito legal do ECMAScript6, caso você está iniciando agora nesse mundo, lá em nosso canal no Youtube tem um vídeo onde explico tudo sobre as versões do JavaScript, o que é esse tal de ECMAScript6 ou ES6 [clique aqui para assistir](https://youtu.be/PlFlKxZbVqs)

### 4 - Spread Operator

Recursos do ECMAScript6

O operador **_spread_** sinaliza que um array ou objeto iterável deve ter seu conteúdo dividido em argumentos separados dentro de uma chamada. Veja esse exemplo:

```
// Passe para a função que espera vários argumentos separados
// Muito parecido com Function.prototype.apply ()
let numeros = [9, 4, 7, 1];
Math.min(...numeros); // 1

// Converter NodeList em um array
let divsArray = [...document.querySelectorAll('div')];

// Converter argumentos em um array
let argsArray = [...arguments];
```

O incrível bônus adicional é poder converter objetos iteráveis ​​( **NodeList**, **arguments** etc.) em um array verdadeiro - algo que usamos Array.from ou outros hacks para fazer por um longo tempo. Essa versão do **ECMAScript6** veio realmente para facilitar muito nossa vida.

### 5 - Template Literals

Recursos do ECMAScript6

As sequências de linhas\\ múltiplas no JavaScript foram originalmente criadas por concatenação ou finalização da linha com um caractere, o que pode ser difícil de manter. Muitos desenvolvedores e até algumas estruturas começaram a abusar de <script> tags para encapsular modelos de múltiplas linhas, outros criaram os elementos com o DOM e usaram  
**_outerHTML_** para obter o elemento HTML como uma string.

O **_ECMAScript6_** nos fornece literais de modelo, nos quais você pode criar facilmente cadeias multilinhas usando caracteres de reticulação:

```
// Cadeia de linhas múltiplas
let minhaString = `Opa nova 
    linha aqui`; // No error!

// Interpolação básica
let objeto = { x: 1, y: 2 };
console.log(`seu total é: ${objeto.x + objeto.y}`); // Seu total é: 3
```

É claro que os literais de modelo permitem que você crie mais do que sequências multilinhas, como interpolação simples a avançada, mas apenas a capacidade de criar sequências multilinhas elegantemente me deixou super feliz e tenho certeza que a comunidade JavaScript adorou também.

### 6 - Default Argument Values

Recursos do ECMAScript6

### Descubra Hoje Mesmo Como Criar um JOGO usando Apenas JavaScript

Conteúdo 100% GRATUITO, basta você clicar no BOTÃO saiba mais e se inscrever no MiniCurso que vou lhe enviar no seu e-mail as 6 aulas e vou te ensinar do ZERO a criar um jogo com JavaScript, HTML5 e CSS3.

[Saiba Mais!](/mini-curso-gratuito)

O fornecimento de valores de argumento padrão nas assinaturas de funções é uma capacidade fornecida por muitas linguagens do servidor, como python e PHP, e agora temos essa capacidade no JavaScript:

```
// Uso básico
function cumprimentar(nome = 'Alisson Suassuna') {
  console.log(`E aí ${nome}!`); 
}
cumprimentar(); // E aí Alisson Suassuna

// Você também pode ter uma função!
function cumprimentar(nome = 'Alisson Suassuna', callback = function(){}) {
  console.log(`E aí ${nome}!`);

callback();

}
// Defina apenas um padrão para um parâmetro
function cumprimentar(nome, callback = function(){}) {}
```

Outras linguagens podem emitir um aviso se argumentos sem um valor padrão não forem fornecidos, mas o JavaScript continuará definindo esses valores como **undefined**.

Os seis recursos que listei aqui são apenas uma gota do que o **ECMAScript6** fornece aos desenvolvedores, mas esses recursos você vai usar com muita freqüência. São essas pequenas adições que, muitas vezes, não chamam a atenção, mas se tornam essenciais para a nossa codificação.

### Conclusão

Recursos do ECMAScript6

Espero que vocês gostem desses 6 recursos do ECMAScript6, caso eu tenha deixado alguma funcionalidade fora! Deixe aqui nos comentários, vou deixa aqui em baixo alguns conteúdos extras da uma olhadinha..

#### Conteúdos Recomendados

- [Programador FullStack](/programador-fullstack-8-semanas);
- [React Hooks guia completo](/react-hooks-guia-completo-passo-a-passo/);
- [Expressões Regulares Guia completo](/expressoes-regulares-guia-completo-iniciante/);
- [15 Componentes React incríveis](/15-componentes-incriveis-do-react/)

[![](/uploads/2020/03/Banner-de-promoção-programador-full-stack-1024x1024.jpeg)](/programador-fullstack-8-semanas)

<iframe width="560" height="315" src="https://www.youtube.com/embed/rNaK6oCrXWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

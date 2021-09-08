---
title: "3 Atualizações JavaScript que você precisa conhecer para mudar de nível"
date: "2020-03-10"
description: Vou lhe mostrar 3 atualizações do JavaScript. Essas atualizações vão lhe ajuda como criar um código melhor. Se você desconhece ou não usa esses 3 novos recursos, você estará codificado na idade da pedra.
imgArticle: /thumbnail-article/3-atualizacoes-javascript.png
imgHome: /thumbnail-home/3-atualizacoes-javascript.png
---

Vou lhe mostrar **3 atualizações do JavaScript.** Essas atualizações vão lhe ajuda como criar um código melhor. Se você desconhece ou não usa esses 3 novos recursos, você estará codificado na idade da pedra.

A falta de conhecimento e conscientização por parte de alguns programadores em ignorá novas atualizações acaba que “dificultando” a evolução da tecnologia. Aqui estão três atualizações fundamentais em JavaScript que você deve conhecer se quiser se atualizar de um desenvolvedor júnior um pouco confuso para um engenheiro profissional.

### Escopo - 3 Atualizações JavaScript

3 Atualizações JavaScript

Todos os desenvolvedores sabem e não sabem o que é um escopo. Resumindo, pense em um escopo como uma cerca que dá acesso ás suas variáveis. Veja um exemplo na figura 01:

![3 Atualizações do JavaScript](/uploads/2020/03/Figura-01-Escopo.png)

**Figura 01: Escopo | 3 Atualizações JavaScript**

Existem dois tipos de escopos - um escopo local e um escopo global, vamos detalha mais sobre esses dois tipos.

### Escopo Local

3 Atualizações JavaScript

Um escopo local é aquele em que só é acessível dentro da “cerca” especificamente. Na figura 01, o escopo mais interno é um escopo local. Isso ocorre porque ele só é acessível dentro do contexto dessa “cerca”.

A acessibilidade do escopo ocorre para dentro. Isso significa que os escopos não são acessíveis além de suas linhas de limite, mas podem ser usados ​​dentro da “cerca” normalmente.

Os dois anéis internos de escopos da figura 01 podem usar as outras variáveis ​​da “cerca, mas não o contrário.

### Escopo Global

3 Atualizações JavaScript

Um escopo global é uma variável em que todos os scripts e funções têm acesso a ele. Não existe um “cerca” impedindo seu acesso, tudo está acessível.

#### Let e Var no JavaScript

3 Atualizações JavaScript

Let e var são maneiras de declarar uma variável em JavaScript. Embora ambos façam as mesmas coisas, existem algumas diferenças entre os dois.

Let está disponível apenas dentro do escopo em que foi declarado. Var define uma variável globalmente ou localmente para uma função inteira, independentemente do escopo do bloco.

Pense em um escopo de bloco como onde seu { } par começa e termina. Um loop, por exemplo, é um escopo de bloco. Let limita a acessibilidade para bloquear o escopo enquanto var limita a acessibilidade ao escopo da função.

#### Onde declaramos

3 Atualizações JavaScript

Podemos criar um escopo global em JavaScript usando let ou var antes do nome da variável

```
var gatoNome = "Dukeza";
let CachorroName = "Ralf";
function callCat(){ 
   console.log("Aqui é, " + catName); 
}
function callDog(){
   console.log("Aqui é, " + dogName);
}
```

Quando você declarar suas variáveis ​​no nível mais alto, elas se tornam um escopo global.

Como alternativa, você pode anexá-lo ao windowobjeto. O windowobjeto é um objeto var anexado quando um nome de variável é declarado usando-o.

Portanto, escrever algo assim também funcionará:

```
window.cat = "miau"
console.log(cat)
```

### Condicionais

3 Atualizações JavaScript

As estruturas condicionais if e else podem ser divertidas e fáceis de escrever - até ficarem sem controle algum.

As alternativas que podemos utilizar são:

#### Switch

3 Atualizações JavaScript

A estrutura switch é uma condição baseada em uma série de casos. Se a condição se encaixar, o caso relevante é selecionado e executado. Seque o exemplo em código:

```
switch (gatoNome){ 
   case "Dukeza":  
     console.log("Sim! sou uma gatinha linda!"); 
     break;
case "Ralf":  
     console.log("Sou um cachorro muito lindo."); 
     break;
default:  
     console.log("Não sou nenhum desses ai"); 
}
```

A break palavra-chave diz ao intérprete JavaScript para parar de executar o código. Switch é bom usar quando você se depara com a possibilidade de vários resultados e o código a ser manipulado não é tão grande.

Como alternativa, você pode executar outras funções com base no resultado do caso.

#### Loops

3 Atualizações JavaScript

A estrutura loops podem ficar um pouco loucas se não soubemos a maneira exata de escrever. Segue um exemplo em código da estrutura loop

```
for (declaração 1; declaração 2; declaração3) { 
   // algum código aqui 
}
```

Existem cinco tipos diferentes de loops - for, for/in, for/of, while, e do/while.

#### for loops

3 Atualizações JavaScript

Um for loop possui três instruções na área de condição, são elas:

- A primeira instrução é o que é executado antes da execução do código. Esta parte é executada apenas uma vez;
- A segunda instrução é a condição para executar o bloco de código.;
- A terceira instrução é executada depois que seu código é executado.

#### for/in loops

3 Atualizações JavaScript

Vamos fingir que você tem um objeto. E, por qualquer motivo, você precisa trabalhar as propriedades desse objeto.

Nunca tema! for/inloop está aqui!

Veja a implementação em código:

```
var  nomeDoSeuObjeto  =  {  name : "Rall" ,  digite : "cat" ,  cor : "ginger"  } ;
var  meuloop ;
for (  meuLoop  em  nomeDoSeuObjeto  )  {
   // faça algo com nomeDoSeuObjeto [meuLoop] 
}
```

## Venha aprender com quem realmente saber ensinar

Clique neste vídeo incrível e conheça o método step by step, que Eu desenvolvi e que está evolucionando o mercado!!.

[Ver método clique aqui](https://bit.ly/2YivXeS)

#### for/of loops

3 Atualizações JavaScript

for of é uma instrução que passa valores de objetos iteráveis. Portanto, isso significa que você pode usá-lo em arrays, strings, maps e qualquer coisa que pareça uma lista de algum tipo. Veja o código:

```
var iterable = ["Rallf", "Spark", "Rufus", "Tigwe"]; 
var trackerVariable; 
for (trackerVariable of yourIterable) { 
   // faça algo com trackerVariable 
}
```

for of também podem fazer um loop sobre seqüências de caracteres. Isso significa que ele passará por cada caractere da sua string e trackerVariableé representativo da posição e do valor.

Exemplo em código:

```
var someTxt = 'Olá!'; 
var x; // aqui, sua variável de rastreador 
para (x em someTxt) { 
console.log (x); 
}
```

#### while

3 Atualizações JavaScript

A estrutura de repetição while continua executando um bloco de código enquanto a condição permanecer true (Verdadeira). Isso significa que a condição deve ser avaliada para obter um booleanresultado (Um valor falso ou verdadeirio).

Em vez de usar for, a palavra while- chave é usada.

Veja a implementação em código:

```
while (condição) {
   // algum código aqui
}
```

Se você estiver iterando sobre algo por um período de tempo especificado, também precisará esclarecer isso.

Por exemplo:

```
var i;
while ( i < 5 ) {
   // faz algo aqui
   i++  // i + 1
}
```

No código acima, a variável  i precisa recebê + 1 até chegar à condição satisfatória; caso contrário, o loop continuará sendo executado até o final dos tempos (ou quando o código travar).  

#### do/while

3 Atualizações JavaScript

do while é um conceito semelhante while, apenas escrito de forma diferente. A diferença entre do/while e while é que no while será executada pelo menos uma vez, mesmo que a condição seja false.

Veja o código:  

```
do {
  // algo vai acontece aqui
} while (condição)
```

#### Promises

3 Atualizações JavaScript

Uma promise acontece quando seu código precisa ser interrompido momentaneamente, pois ele faz alguma coisa. Isso pode acontecer quando você espera um resultado de uma API ou há um atraso por qualquer motivo.

O código JavaScript é que ele será cobrado, de cima para baixo, sem esperar. Em parte, é porque não sabe quando esperar.

Isso é o que uma promise faz. Ele diz ao seu código para aguentar, aguarde uma resposta e depois continue com o que deveria estar fazendo.

Há três partes em uma promessa - a evocação, o invólucro e o resultado retornado.

Vamos ver no código:

```
yourPromisedFunction (). then ((resolvedObj) => { 
   // faça algo com resolvedObj 
});
```

Há mais tipos de promises, mas essa é a parte principal de forma resumida, caso queira se aprofunda no assunto veja mais em:

## Venha aprender com quem realmente saber ensinar

Clique neste vídeo incrível e conheça o método step by step, que Eu desenvolvi e que está evolucionando o mercado!!.

[Ver método clique aqui](https://bit.ly/2YivXeS)

### Conclusão

3 Atualizações JavaScript

Há muito mais conceitos em JavaScript que são importantes, mas esses são os três que considero fundamentais para você passar para o próximo nível na sua carreira melhorar suas estruturas de sintaxe e código.

Sim. São idéias fundamentais.

E sim, simplifiquei-os para facilitar a digestão mental.

Se você é iniciante, espero que tenha achado útil e obrigado pela leitura.

Veja também [6 Linguagens e Frameworks para aprender em 2020](/6-linguagens-e-frameworks-para-aprender-2020/)

### Conheça nosso Canal no Youtume

3 Atualizações JavaScript

[Ver Vídeo](https://www.youtube.com/watch?v=dKh8Jc\_XgSU&t)

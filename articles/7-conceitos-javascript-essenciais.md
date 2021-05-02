---
title: "7 Conceitos JavaScript essenciais"
date: "2020-04-15"
description: No mundo do desenvolvimento, os tópicos mais avançados geralmente estão fora de alcance e muitas vezes desencorajam os novos desenvolvedores. Em parte, é porque parece que nada parece fazer muito sentido, e a forma como é ensinado acaba dificultando ainda mais. As letras e palavras podem parecer familiares, mas nada disso faz sentido.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

No mundo do desenvolvimento, os tópicos mais avançados geralmente estão fora de alcance e muitas vezes desencorajam os novos desenvolvedores. Em parte, é porque parece que nada parece fazer muito sentido, e a forma como é ensinado acaba dificultando ainda mais. As letras e palavras podem parecer familiares, mas nada disso faz sentido.

  
E é difícil entender tudo, especialmente se você precisar parar a todo momento para descobrir o que a frase está tentando lhe dizer.

  
Esse artigo, eu decidi explicar os 7 conceitos javascript essenciais para você que está iniciando. Espero que você os ache úteis em sua busca para se tornar um desenvolvedor melhor.

![Conceitos JavaScript](/uploads/2020/01/js.png)

Conceitos JavaScript

### 1 - Imutabilidade | Mutação | Mutável

Conceitos JavaScript

Quando o formato dos seus dados não muda.

Portanto, se você tem um objeto que entra em uma função, ele sai exatamente da mesma forma. Os dados passados como parâmetros podem mudar, mas os dados que estão dentro da função não.  
Por exemplo, esse código aqui é uma mutação:

```
function mudanMe(somaObjetos) {
    somaObjetos.age = 3
    return somaObjetos
}

let exemplo1 = {
    "Gata": "Dukeza"
}

console.log(mudanMe(exemplo1))
```

A função altera a forma do objeto, isso significa que é mutável.

### 2 - Declarativo

Conceitos JavaScript

Não importa em que ordem você faz algo, as regras subjacentes garantem que você obtenha o mesmo resultado sempre.  

Por exemplo, esta equação matemática segue uma metodologia declarativa.

```
(2 * 2) - 1 + 6 = 9 
```

Mesmo que você mude a ordem da equação, ainda sim terá o mesmo resultado

```
- 1 + (2 * 2) + 6 = 9

6 - 1 + (2 * 2) = 9
```

Na programação JavaScript, um padrão declarativo é onde a ordem das funções não importa para a construção do resultado final. Você pode chamá-los em qualquer ordem. A sequência não importa.

### 3 - Recursão

Conceitos JavaScript

Quando a função continua a ser chamada até que uma condição específica seja atendida.

  
Não. Não é um loop for. Pode parecer, mas não é.

  
Um loop for é um método condicional do JavaScript. Uma recursão é uma função inteira que continua a ser chamada até que uma condição especifica for atendida.

  
Isso significa que há duas partes em uma recursão - a chamada com base em uma condição específica e a cláusula de saída. Sua cláusula de saída é basicamente o que acontece no final de sua recursão.

  
Veja como pode ser uma recursão simples e potencial:

```
function somaDoLucro(venda){ 
    if(//condição para a recursão terminar){ 
        return objetoOuResultadoFinal; 
    } else{ 
      //faz algum coisa. limite da condição. 
      return somaDoLucro(limiteDaCondição); 
    }
 
}
```

### 4 - Callbacks

Conceitos JavaScript

Uma função callback é uma função que é executada após a conclusão de outra função.

  
Por que nós precisamos disso? Porque o JavaScript é uma linguagem orientada a eventos - o que significa que ela não espera por respostas. Quando as coisas estão funcionando de maneira independente, isso não importa tanto.

  
Torna-se um pouco mais complexo quando você começa a confiar em respostas externas como por exemplo de uma API. O atraso é o tempo que leva para o seu código JavaScript enviar a solicitação e recebê-la de volta.

  
Aos olhos do JavaScript, ele fez seu trabalho - ele executou o código com sucesso.

### DESCUBRA como criar seu próprio jogo em JavaScript, HTML5 e CSS3

Mini-Curso Construindo seu Jogo em JavaScript 100% GRATUITO. Para você ter acesso ao curso basta clicar no botão INSCREVA-SE. A criação do jogo é realizada passo a passo, linha a linha onde QUALQUER pessoa é capaz de fazer o curso. Então te vejo nas aulas, abraços

[INSCREVA-SE](/mini-curso-construindo-seu-jogo-em-javascript/)

  
No entanto, na realidade, você ainda está esperando por uma resposta. Às vezes, você força a execução do seu código, por meio de promise ou temporizador de atraso ([Em nosso canal do Youtube temos um vídeo que explica o que é promises e como usá-las](https://youtu.be/fRa33RSJpSo)). Depois de confirmado, você chama uma função callback().

  
Seja qual for o caso, veja como pode ser uma função callback:

```
function esperePorMim(valores, callback){
 //Faça algo com os valores
 callback(); 
}
esperePorMim('A resposta é 102', function(){ 
  alert('Realizado agora!'); 
 });
```

Você também pode abstrair sua função callback e deixa-lá dessa forma:

```
function esperePorMim(valores, callback){
 //Faça algo com os valores
 callback(); 
}
function realizado(){ 
  alert('Realizado agora'); 
 }
waitForMeeeee('A resposta é 102', realizado);
```

### 5 - Async

Conceitos JavaScript

Pense em uma linha reta. Seu código JavaScript é executado de uma extremidade à outra. Mas, às vezes, você precisa fazer uma pausa, apenas por um momento, por exemplo espera uma resposta de uma API.

  
O momento da pausa é a parte _assíncrona_ do JavaScript.  

A palavra-chave **_async_** também retorna uma promise (promessa) de forma implícito.  

O que significa implícito? Ele retorna uma promessa por padrão.  

O que é uma promessa? É o que diz ao seu código para aguardar, porque haverá um atraso na realização de algo. Por exemplo, você está esperando uma API externa responder com os dados corretos.  

Por que isso é importante? Porque você pode usar **_then()_** com a função **_async()_**  

O que é **_then()_**? É o seu retorno de chamada equivalente a promise funções baseadas que permitem que você faça as coisas após a conclusão da execução promise.  

Como é tudo isso? Aqui está um exemplo:

```
async function facaAlgumaCoisa(){
 //Faça alguma coisa
 return 'boora estudar!';
}
facaAlgumaCoisa().then(
function(result){
  console.log(result);
});
```

Ou se você realmente deseja tornar a parte da promise explícita:

```
async function facaAlgumaCoisa(){
 //Faça alguma coisa.
 return Promise.resolve('boora estudar!');
}
facaAlgumaCoisa().then(
function(result){
  console.log(result);
});
```

### 6 - Proxy

Conceitos JavaScript

Pense nisso como uma extensão adicional de seus objetos. É a capacidade de criar um comportamento personalizado em relação a algo que já existe.

  
De certa forma, ele também atua como um intermediário entre o objeto original e os recursos adicionais.  

Sim. Proxies podem alterar e processar dados.  

Sim. É frequentemente usado como um verificador de validação, entre outras coisas.  

Como funciona?  

Existem três partes em um proxy – o handler (em pt-br manipulador), as traps (em ptr-br armadilhas), também conhecidas como métodos) e o target(em pt-br o alvo ou destino).

  
Existem 13 traps disponíveis para proxies. Você precisará pesquisá-los no Google porque se fosse lista aqui o artigo iria fica muito grande.  

Aqui está um exemplo de um proxy com uma armadilha implementada:

```
let manipulador = {
 get: function(objetoPassado, nomeDoObjeto){ 
       //algum lógica acontece aqui!
       console.log(objetoPassado, nomeDoObjeto);
       return  'Realizado' ; 
      }
}
let objeto = { elementoA: 1, elementob: 2};
let valorNome = new Proxy(objeto, manipulador);
console.log(valorNome.objeto);
```

Pessoal esse recurso ele é bem mais profundo, a ideia do artigo é lhe da um ponto inicial, caso queria se aprofunda no assunto [clique aqui](http://bit.ly/video-do-leonardo)

### 7 - Garbage Collection

Conceitos JavaScript

Tudo ocupa memória. Quando uma variável é inicializada, ela recebe um pouco de espaço alocado de memória para ela.  

A memória é inicializada apenas quando é chamada. Portanto, quando uma função é executada e há variáveis dentro dela, sua existência dura apenas enquanto a função está sendo executada.  

O **_garbage collection_** é um recurso que a linguem possui com o objetivo é realiza a limpeza da memória.

Um vazamento de memória ocorre quando a **_garbage collection_** não ocorre porque a variável é declarada no espaço global, o que causa poluição e ocupa espaço desnecessário.  

Isso poderá afeta a performance da sua aplicação deixando-o mais lento. Portanto, tenha bastante cuidado ao declarar uma variável global na sua aplicação.

### Conclusão

Conceitos JavaScript

O objetivo deste artigo é atuar como uma referência / resumo de ideias para ajudá-lo. Cada termo é um tópico em si, mas, para fins de comprimento e digestibilidade, reduzi o máximo possível às ideias principais.

  
Há muito mais do que o que está escrito aqui, mas no geral, então recomenda pega cada tópico desses e da uma estudada mais a fundo. Recomendo da uma olhada nos links abaixo.

### Saiba como se torna um PROFISSIONAL FULLSTACK

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.

[Sabe mais](/programador-fullstack-8-semanas)

[Arrow Functions: Uma sintaxe concisa em JavaScript](/arrow-functions-sintaxe-facil-em-javascript/)

[A evolução das ferramentas JavaScript: Uma linguagem Moderna](/a-evolucao-das-ferramentas-javascript-moderno/)

[10 Técnicas do Git que Você precisa conhecer](/10-tecnicas-do-git-que-vocce-precisa-conhecer/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZuqixZLiP3E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

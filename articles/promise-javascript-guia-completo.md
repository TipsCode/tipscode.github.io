---
title: "Promise JavaScript (Guia Completo) Passo a Passo"
date: "2020-06-03"
tags: 
  - "alisson-suassuna"
  - "frontend"
  - "javascript"
  - "javascript-promises"
  - "javascript-promises-tutorial"
  - "javascript-tutorial"
  - "promise-javascript"
  - "promise-javascript-es6"
  - "promise-javascript-example"
  - "promises-in-javascript"
  - "tipscode"
description: Embora o código síncrono seja mais fácil de seguir e depurar, o assíncrono geralmente é melhor para desempenho e flexibilidade. Por que "interromper o programa" quando você pode acionar vários pedidos de uma só vez e depois lidar com eles quando cada um está pronto? As promessas estão se tornando uma grande parte do mundo do JavaScript, com muitas novas APIs sendo implementadas com a filosofia da promessa. Vamos dar uma olhada nas promessas, a API, como é usada!
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Embora o código síncrono seja mais fácil de seguir e depurar, o assíncrono geralmente é melhor para desempenho e flexibilidade. Por que "interromper o programa" quando você pode acionar vários pedidos de uma só vez e depois lidar com eles quando cada um está pronto? As promessas estão se tornando uma grande parte do mundo do JavaScript, com muitas novas APIs sendo implementadas com a filosofia da promessa. Vamos dar uma olhada nas promessas, a API, como é usada!

### API XMLHttpRequest

promise javascript

A API **XMLHttpRequest** é assíncrona, mas não usa a **_API Promises_**. Existem algumas APIs nativas que agora usam promises javascript. As promises se tornarão mais predominantes, por isso é importante que todos os desenvolvedores JavaScript se acostumem a esse recurso. Também é importante notar que o Node.js é outra plataforma para o Promises (obviamente, como o Promise é um recurso da linguagem)

Testar **_promises_** é provavelmente mais fácil do que você pensa, porque podemos utilizar o **_setTimeout()_** para simular uma "_tarefa_" assíncrona!

### O básico

promise javascript

![promise javascript](/uploads/2020/06/promise-javascript-1024x538.jpeg)

**_Figura 01: promise javascript_**

O construtor **_new Promise()_** deve ser usado apenas para tarefas assíncronas herdadas, como o uso de **_setTimeout()_** ou **_XMLHttpRequest()_**. Uma nova promise é criada com a palavra reservada **_new_** e fornece o **_resolve_** e **_reject_** essas funções funciona para o retorno de chamada fornecido, veja o exemplo:

```
const promesa = new Promise(function(resolve, reject) {

	if(/*uma condição */) {
		resolve('Sucesso!');
	}
	else {
		reject('falha!');
	}
});

promesa.then(function(result) { 
	/* fazer algo com esse resultado */
}).catch(function() {
	/* se der algum erro:( */
}).finally(function() {
   /* executa independentemente ou sucesso por falha */ 
});
```

Cabe ao desenvolvedor fazer manualmente o `**_resolve()_** ou **_reject_**() no` corpo do retorno da chamada com base no resultado de sua tarefa. Um exemplo disso seria converter um evento criado com **_XMLHttpRequest()_** em uma tarefa **promise javascript**:

```
function get(url) {
  // Retorna uma nova promise.
  return new Promise(function(resolve, reject) {

    let req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // Essa função é chamada mesmo que de 404
      // Então faz a verificação do status
      if (req.status == 200) {
        // Resolve a promise com algum texto de sucesso!
        resolve(req.response);
      }
      else {
        // Caso contrário a promise é rejeitada com a mensagem do status
        reject(Error(req.statusText));
      }
    };

    // Lidar com algum erro da rede
    req.onerror = function() {
      reject(Error("A rede deu erro!"));
    };

    // Aqui estamos enviado a requisição
    req.send();
  });
}

get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});
```

Às vezes, você não precisa concluir tarefas assíncronas dentro da promise javascript, é possível que uma ação assíncrona seja executada, no entanto, retornar uma promessa será melhor para que você possa sempre contar com uma promessa que sai de uma determinada função . Nesse caso, você pode simplesmente fazer uma **Promise.resolve()** ou **_Promise.reject()_** sem usar a palavra reservada **_new_**. Por exemplo:

### Descubra como Criar um jogo passo a passo usando apenas JavaScript

Conteúdo 100% GRATUITO, basta você clicar no BOTÃO saiba mais e se inscrever no Curso que vou lhe enviar todas as aulas para o seu e-mail

[Saiba Mais!](https://bit.ly/mini-curso-criando-game-js)

```
let userCache = {};

function getUserDetail(username) {
  // Nos dois casos, em cache ou não, uma promessa será retornada

  if (userCache[username]) {
  	// Devolver uma promessa sem a palavra-chave "new"
    return Promise.resolve(userCache[username]);
  }

  // Usa uma API de busca para obter as informações
  // Onde essa buscar retorna uma promessa
  return fetch('users/' + username + '.json')
    .then(function(result) {
      userCache[username] = result;
      return result;
    })
    .catch(function() {
      throw new Error('Não foi possível encontrar o usuário: ' + username);
    });
}
```

Como uma **promise javascript** sempre é retornada, você sempre pode usar os métodos `**_then()_**` e `**_catch()_**` em seu valor de retorno!

### Função then()

promise javascript

Todas as instâncias de promessa obtêm um método **_then()_** que permite que você reaja à promessa. O primeiro método de retorno de chamada recebe o resultado fornecido pela **_resolve()_**:

```
new Promise(function(resolve, reject) {
	// Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});

// Resultado será 10
```

O retorno do método **_then()_** é acionado quando a **promise javascript** é resolvida. Você também pode encadear vários **_then()_** como retorno

```
new Promise(function(resolve, reject) { 
	// Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('primeiro then: ', num); return num * 2; })
.then(function(num) { console.log('segundo then: ', num); return num * 2; })
.then(function(num) { console.log('último then: ', num);});

// No console:
// primeiro then:  10
// segundo then:  20
// último then:  40
```

Cada um **_then()_** recebe o resultado do **_then()_** anterior fazendo assim uma transformação no seu dado.

Se uma **promise javascript** já foi resolvida, mas o método **_then()_** é chamada novamente, o retorno dessa chamada é acionado imediatamente. Se a promessa for rejeitada e se esse then() foi invocado após a rejeição, o retorno de chamada nunca será chamado.

### Função catch()

promise javascript

A função (método) **_catch()_** é o resultado do retorno caso a promise javascript for rejeitada, veja o exemplo em código:

```
new Promise(function(resolve, reject) {
	// Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { reject('Feito!'); }, 3000);
})
.then(function(e) { console.log('Feito', e); })
.catch(function(e) { console.log('catch: ', e); });

// No console:
// 'catch: Feito!'
```

O que você fornece ao método reject() é com você. Um padrão frequente está enviando um Error para o método catch(), algo parecido com esse exemplo:

```
reject(Error('Não foi possível encontrar os dados'));
```

### Função finally()

promise javascript

O método **_finally()_** retorna uma promise javascript recém-introduzido e ela é chamado independentemente do sucesso ou falha a promise em questão:

```
(new Promise((resolve, reject) => { reject("Nope"); }))
    .then(() => { console.log("sucesso") })
    .catch(() => { console.log("falha") })
    .finally(res => { console.log("sucesso ou falha (final)") });
```

### Função Promise.all()

promise javascript

O método **_promise.all()_** executa várias promises de uma só vez e gerenciar tudo em formato de pilha. Existe alguns cenários que é interessante executa várias promise javascript, mas só quer responder quando todas elas forem concluídas, é aí que o recurso **_Promise.all_** entra, lá em nosso canal do youtube estamos desenvolvendo um projeto do zero usando apenas JavaScript e tem uma parte lá que uso esse recurso, caso queira ver [clique aqui](https://youtu.be/rNaK6oCrXWM).

```
Promise.all([promise1, promise2]).then(function(results) {
	// Ambas as promessas resolvidas
})
.catch(function(error) {
	// Uma ou mais promessas foram rejeitadas
});
```

Uma maneira perfeita de se usar a função Promise.all é disparar várias fetch solicitações AJAX (via ) ao mesmo tempo:

```
let request1 = fetch('/users.json');
let request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Ambas as promessas resolvidas
});
```

Você pode combinar APIs como fetch e a API battery, pois ambas retornam promise javascript:

```
Promise.all([fetch('/users.json'), navigator.getBattery()]).then(function(results) {
	// Ambas as promessas feitas!
});
```

Lidar com a rejeição é, obviamente, difícil. Se qualquer promessa for rejeitada, os **_catch_** serve para essa situação:

```

var req1 = new Promise(function(resolve, reject) { 
	// Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) { 
	// Uma ação assíncrona simulada usando setTimeout 
	setTimeout(function() { reject('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});

// No console:
// Catch: Segunda!
```

Promise.all será super útil à medida que mais APIs avançarem para **promise javascript**.

### Função Promise.race()

promise javascript

A função/Método **_Promise.race()_** é uma função interessante e pouco conhecida, não sei o porque, em vez de esperar que todas as **_promise javascript_** forem resolvidas ou rejeitadas, **_Promise.race()_** dispara assim que qualquer promessa em um array for resolvida ou rejeitada, veja no código de exemplo que interessante:

```
let req1 = new Promise(function(resolve, reject) { 
	// Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) { 
	//Estou usando o setTimeout apenas para simular um evento assíncrono
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('3: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// 3: segundos!
```

Um caso de uso: Podemos está acionando uma solicitação para uma fonte primária e uma fonte secundária (caso o primário ou o secundário não estejam disponíveis).

### Descubra como Criar um jogo passo a passo usando apenas JavaScript

Conteúdo 100% GRATUITO, basta você clicar no BOTÃO saiba mais e se inscrever no Curso que vou lhe enviar todas as aulas para o seu e-mail

[Saiba Mais!](https://bit.ly/mini-curso-criando-game-js)

### Conclusões

promise javascript

A **_promise javascript_** têm sido um tópico importante nos últimos anos (ou nos últimos 10 anos) e os frameworks modernos passaram cada vez mais a usar promise javascript como um padrão. Provavelmente, é sensato supor que você verá a maioria das novas APIs JavaScript sendo implementadas com um padrão baseado em promise javascript…

Isso é uma coisa muito boa, pois os desenvolvedores vão evitar o uso da de callback confusas e as interações assíncronas podem ser transmitidas como qualquer outra variável. As promessas levam algum tempo para se acostumar, pois as ferramentas estão (nativamente) lá e agora é a hora de aprendê-las!

#### Recomendação extra

- [6 Recursos do ECMAScript6 Extraordinários](/6-recursos-do-ecmascript6/)
- [Guia completo de envio de e-mail](/guia-para-envio-de-e-mail-marketing-completo/)
- [Guia completo de React Hooks](/react-hooks-guia-completo-passo-a-passo/)

#### Vídeo complementar ao tema do artigo

<iframe width="560" height="315" src="https://www.youtube.com/embed/fRa33RSJpSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Vídeo recém publicado em nosso canal do Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/GUx-EElkUWw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Treinamento recomendado

[![](/uploads/2020/04/banner-de-divulgação-dos-artigos-1024x1024.png)](/programador-fullstack-8-semanas)

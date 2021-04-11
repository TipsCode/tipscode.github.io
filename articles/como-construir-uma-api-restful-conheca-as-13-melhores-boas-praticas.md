---
title: "Como Construir uma API RESTful: Conheça Ás 13 Melhores Boas Praticas"
date: "2020-09-13"
categories: 
  - "nodejs"
tags: 
  - "api"
  - "boas-praticas"
  - "como-construir-uma-api-restful"
  - "nodejs"
  - "o-que-e-api-restfull"
description: Como construir uma API RESTful, neste artigo você vai descobrir quais são ás 13 melhores práticas para criar uma API RESTFull. Facebook, GitHub, Google e muitas outras gigantes precisam de uma forma de servir e consumir dados. A API RESTful ainda é uma das melhores opções atualmente no cenário de desenvolvimento para servir e consumir dados.
---

_****Como construir uma API RESTful**,** **neste artigo você vai descobrir quais são ás 13 melhores práticas para criar uma API RESTFull. Facebook, GitHub, Google e muitas outras gigantes precisam de uma forma de servir e consumir dados. A API RESTful ainda é uma das melhores opções atualmente no cenário de desenvolvimento para servir e consumir dados.**_

Você já pensou em aprender sobre os padrões de como construir uma API RESTful, portando saiba quais são as práticas recomendadas para projetar uma API RESTful? Em teoria, qualquer pessoa pode ativar rapidamente uma API de dados em menos de cinco minutos, usando [Node.js](/conhecendo-nodejs/), Ruby, Java ou Python.

Em resumo, exploraremos 13 **práticas recomendadas** de como construir uma API RESTful, mas, primeiramente, vamos esclarecer uma questão.

## O que é uma API RESTful?

Rest API é o conjunto de boas práticas utilizadas nas requisições HTTP realizadas por uma API em uma aplicação web. Todavia, entenda como funciona essa tecnologia, quais os tipos de APIs existentes e sua importância em um site.

Uma API RESTful precisa atender às seguintes restrições para ser chamada de API RESTful.

1 . **Cliente-servidor**: uma API RESTful segue o modelo cliente-servidor em que o servidor fornece dados e os clientes se conectam ao servidor para consumir dados. Assim, a interação entre cliente e servidor ocorre por meio de solicitações HTTP (S) que transferem os dados solicitados.

2 . **Sem estado**: mais importante, uma API RESTful deve ser sem estado. Dessa forma, cada solicitação é tratada como uma solicitação independente. O servidor não deve controlar nenhum estado interno que possa influenciar o resultado de solicitações futuras.

[![Como Construir uma API RESTful](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

3 . **Interface uniforme:** Por último, a uniformidade define como o cliente e o servidor interagem. Em conclusão, ás APIs RESTful definem as melhores práticas para nomear recursos, porque as operações HTTP fixas permitem modificar e interagir com os recursos, portanto, ás seguintes operações HTTP por exemplo quando eu faço uma requisição **GET** é porque quero recuperar um recurso.

**Solicitação POST**: cria um recurso ou envie informações para a API

**Chamada PUT**: cria ou substitua um recurso

**Solicitação PATCH**: atualiza um recurso existente

**Pedido DELETE**: elimina um recurso

Com entendimento mais profundo das características da interface de programação de aplicativos, então é hora de aprender mais sobre as práticas recomendadas para construí uma API RESTfull.

## Práticas recomendadas de como construir uma API RESTful

Vou apresentar ás 13 práticas uma a uma e explorar um pouco cada uma delas.

### 1\. Use métodos HTTP corretamente

Já discutimos os possíveis métodos HTTP que você pode usar para modificar recursos: GET, POST, PUT, PATCH e DELETE.

Percebo, constantemente que alguns desenvolvedores tendem a abusar de GET e POST, ou PUT e PATCH. Por exemplo, vejo alguns desenvolvedores usarem uma solicitação POST para recuperar dados. 

No entanto, vejo alguns desenvolvedores usarem frequentemente uma solicitação PUT, sobretudo, substitui o recurso, embora os mesmos prefiram utilizar apenas um único campo para esse recurso.

Em primeiro lugar, certifique-se de usar o método HTTP correto, porém, criará muita confusão para os desenvolvedores que usam sua API RESTful. É melhor seguir as diretrizes pretendidas.

### 2\. Convenções de nomenclatura

![Como Construir uma API RESTful](/uploads/2020/09/o-que-e-API-RESTful.jpg)

Em principio, entender as convenções de nomenclatura da API RESTful o ajudará muito a projetar sua API de maneira organizada. Portanto, projete uma API RESTful de acordo com os recursos que você já atende.

Em resumo, sua API gerencia autores e livros. Dessa forma, queremos adicionar um novo autor ou acessar um autor com ID `3`. Você pode projetar as seguintes rotas para atender a esse propósito:

- **api.com/addNewAuthor**
- **api.com/getAuthorByID/3**

Imagine uma API que hospeda muitos recursos, cada um com muitas propriedades. Assim sendo, a lista de endpoint possíveis se tornará interminável e não muito amigável. Portanto, precisamos de uma maneira mais organizada e padronizada de projetar endpoint da API.

Dessa forma, as melhores práticas da API RESTful descrevem que um endpoint deve começar com o nome do recurso, enquanto a operação HTTP descreve a ação. Exemplo:

- POST api.com/authors
- GET api.com/authors/3

E se quisermos acessar todos os livros que o autor com ID `3` já escreveu? Também neste caso, as APIs RESTful têm uma solução:

- GET api.com/authors/3/books

Por último, e se você quiser excluir um livro com ID `5` de um autor com ID `3`. Novamente, vamos seguir a mesma abordagem estruturada para formar o seguinte endpoint:

- DELETE api.com/authors/3/books/5

Resumindo, use as operações HTTP e a forma estruturada de mapeamento de recursos para formar um caminho de endpoint legível e compreensível. Dessa maneira, a grande vantagem dessa abordagem é que todo desenvolvedor entende como as APIs RESTful são projetadas, assim também, podem usar a API imediatamente sem ter que ler a documentação em cada endpoint.

### 3\. Use recursos plurais

Os recursos devem sempre usar sua forma no plural. Dessa forma, imagine que você deseja recuperar todos os autores. Portanto, você chamaria o seguinte endpoint: `GET api.com/authors`.

Contudo, ao ler a solicitação, não é possível saber se a resposta da API conterá apenas um ou todos os autores. Dessa maneira, os endpoints da API devem usar vários recursos.

### 4\. Uso correto de códigos de status como construir uma API RESTfull

Os códigos de status não estão aqui apenas para diversão. Eles têm um propósito claro. Um código de status notifica o cliente sobre o sucesso de sua solicitação.

As categorias de código de status mais comuns incluem:

- **200 (OK)**: A solicitação foi tratada e concluída com êxito.
- **201 (criado)**: indica a criação bem-sucedida de um recurso.
- **400 (Solicitação inválida)**: representa um erro do lado do cliente, porque a solicitação foi malformada ou faltam parâmetros de solicitação.
- 401 (não autorizado): você tentou acessar um recurso para o qual não tem permissão.
- 404 (não encontrado): o recurso solicitado não existe.
- 500 (Erro interno do servidor): Sempre que o servidor levanta uma exceção durante a execução da solicitação.

Uma lista completa de códigos de status pode ser encontrada em [Mozilla Developers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) . 

### 5\. Siga as convenções de casing

Mais comumente, uma API RESTful fornece dados JSON, portanto, a convenção de embalagem camelCase deve ser praticada. No entanto, diferentes linguagens de programação usam diferentes convenções de nomenclatura .

### 6\. Como lidar com a pesquisa, paginação, filtragem e classificação

Ações como pesquisa, paginação, filtragem e classificação não representam pontos de extremidade separados. Essas ações podem ser realizadas por meio do uso de parâmetros de consulta fornecidos com a solicitação da API.

Por exemplo, vamos recuperar todos os autores classificados por nome em ordem crescente. Seu pedido API deve olhar como este: **`api.com/authors?sort=name_asc`.**

Além disso, desejo recuperar um autor com o nome 'Alisson'. O pedido é assim `api.com/authors?search=Alisson`.

Felizmente, muitos projetos de API vêm com recursos integrados de pesquisa, paginação, filtragem e classificação. Da mesma forma vai economizar muito tempo.

### 7\. Controle de versão de API

Não vejo isso com muita frequência, porque é uma prática recomendada criar uma versão de sua API. É uma maneira eficaz de comunicar as mudanças importantes aos usuários.

Freqüentemente, o número da versão da API é incorporada na URL API, como este: `api.com/v1/authors/3/books`.

### 8\. Envie metadados por meio de cabeçalhos HTTP

Os cabeçalhos HTTP permitem que um cliente envie informações adicionais com sua solicitação. Por exemplo, o `Authorization`cabeçalho é comumente usado para enviar dados de autenticação para acessar a API.

Uma lista completa de todos os cabeçalhos HTTP possíveis pode ser encontrada [aqui](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) .

### 9\. Limitação de taxa

A limitação de taxa é uma abordagem interessante para controlar o número de solicitações por cliente. Estes são os possíveis cabeçalhos de limitação de taxa que seu servidor pode retornar:

- **X-Rate-Limit-Limit**: Informa o número de solicitações que um cliente pode enviar em um intervalo de tempo especificado.
- **X-Rate-Limit-Remaining**: Informa quantas solicitações o cliente ainda pode enviar no intervalo de tempo atual.
- **X-Rate-Limit-Reset**: Informa ao cliente quando o limite de taxa será redefinido.

### 10\. Tratamento significativo de erros

Caso algo dê errado, é importante fornecer uma mensagem de erro significativa ao desenvolvedor. Da mesma forma, a API Twilio retorna o seguinte formato de erro:

```
{
    "status": 400,
    "message": "O recurso não existe!",
    "code": 24801,
    "more_info": "api.com/docs/errors/24801"
}
```

Neste exemplo, o servidor retorna o código de status e uma mensagem legível. Além disso, um código de erro interno também é retornado para o desenvolvedor pesquisar o erro específico. Isso permite que o desenvolvedor procure rapidamente mais informações sobre o erro.

### 11\. Escolha a estrutura de API certa

Existem muitos frameworks para diferentes linguagens de programação. É importante escolher uma framework que ofereça suporte às práticas recomendadas da API RESTful.

Para Node.js, os desenvolvedores de back-end adoram usar [Express.js](https://expressjs.com/), caso queira [aprender mais sobre NodeJS com Express clique aqui](/programador-fullstack-8-semanas), enquanto para Python, [Falcon](https://falconframework.org/) é uma ótima opção.

### 12\. Documente sua API

Por último, escreva a documentação! Mas ainda é uma das maneiras mais fáceis de transferir conhecimento sobre sua API recém-desenvolvida.

Embora sua API siga todas as práticas recomendadas de **como construir uma APIs RESTful**, acima de tudo, o mais importante é documentar vários elementos, como os recursos que sua API manipula ou quais limites de taxa se aplicam ao seu servidor.

Pense em seus colegas desenvolvedores. A documentação reduz drasticamente o tempo necessário para aprender sobre sua API.

### 13\. Mantenha a simplicidade!

Não complique sua API e mantenha os recursos simples. Uma definição adequada dos diferentes recursos que sua API manipula o ajudará a evitar problemas relacionados a recursos no futuro. 

Defina seus recursos, porque também defina com precisão suas propriedades e as relações entre os recursos. Por exemplo, não há espaço para disputas sobre como conectar os diferentes recursos.

## Conclusão

Espero que você tenha gostado deste artigo, tentei explorar as melhores práticas utilizadas e testadas no mercado de desenvolvimento web, caso tenha gostado, deixa seu like, compartilhar com seu colegas que está com dificuldade nessas questões abordadas no artigo, deixa seu comentário caso você tenha alguma dica a mais para complementar o artigo. Fica com Deus forte abraço.

### Recomendação

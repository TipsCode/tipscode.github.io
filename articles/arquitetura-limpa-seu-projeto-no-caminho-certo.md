---
title: "Arquitetura Limpa - O seu projeto no caminho certo"
date: "2020-02-27"
tags: 
  - "arquitetura"
  - "arquitetura-clean"
  - "arquitetura-de-interiores"
  - "arquitetura-de-sistemas"
  - "arquitetura-de-software"
  - "arquitetura-hexagonal"
  - "construcao-limpa"
  - "limpeza"
  - "sustentabilidade"
  - "wm-arquitetura"
description: Fala dev, neste artigo irei aborda um tema meio “polemico” entre nós desenvolvedores, mas quais benefícios essa tal de arquitetura limpa me proporcionará, o que é, com funciona? Esse artigo tem como objetivo responde essas perguntas, então vem comigo aprender um pouco mais sobre arquitetura limpa.
imgArticle: /thumbnail-article/arquitetura-limpa.png
imgHome: /thumbnail-home/arquitetura-limpa.png
---

Fala dev, neste artigo irei aborda um tema meio “polemico” entre nós desenvolvedores, mas quais benefícios essa tal de arquitetura limpa me proporcionará, o que é, com funciona? Esse artigo tem como objetivo responde essas perguntas, então vem comigo aprender um pouco mais sobre arquitetura limpa.

### Arquitetura limpa: o que é?

Proposto por Robert Cecil Martin, a arquitetura limpa não é uma proposta necessariamente nova. Na verdade, é uma tentativa de integrar várias ideias arquitetônicas que apareceram nos anos anteriores, como arquitetura da cebola e arquitetura hexagonal.

![Arquitetura limpa](/uploads/2020/02/Arquitetura-limpa-1024x570.png)

**Figura 01 - Arquitetura limpa**

### Benefícios da Arquitetura limpa

- **Agnóstico de banco de dados**: sua lógica de negócios principal não se importa se você estiver usando Postgres, MongoDB ou Neo4J para esse assunto;
- **Agnóstico da interface do cliente**: A lógica comercial principal não se importa se você estiver usando uma CLI, uma API REST ou mesmo um gRPC;
- **Agnóstico de estrutura:** Usando o vanilla nodeJS, express, fastify? Sua lógica de negócios principal também não se importa com isso.

Agora, se você quiser ler mais sobre como a arquitetura limpa funciona, pode ler o blog fantástico, The Clean Architecture , do tio Bob . Por enquanto, vamos pular para a implementação. Para acompanhar, veja o repositório aqui .

![Arquitetura limpa](/uploads/2020/02/Exemplo-arquitetura-limpa.png)

**Figura 02 - Exemplo de arquitetura limpa**

### Entidades

Entities são os principais objetos de negócios que podem ser realizados por funções. Em termos de MVC, eles são a camada de modelo da arquitetura limpa. Todas as entities e serviços são colocados em um diretório chamado pkg. Na verdade, é isso que queremos abstrair do restante do aplicativo.

### DO ZERO A PROGRAMADOR FULL STACK JAVASCRIPT (REACT + NODEJS)

Nesse super treinamento você vai aprender de **forma totalmente prática** através de **aulas, exercícios e projetos** a programação web Javascript **focada no mercado de trabalho**. CLIQUE NO BOTÃO SABER MAIS E ASSISTA O VÍDEO, lhe garanto que vai vale apena.

[Saber mais](/programador-fullstack-8-semanas)

Entidades são usadas no Repositório interface, que pode ser implementado em qualquer banco de dados. Neste caso, implementamos no Postgre, no postgres.go. Como os repositórios podem ser realizados para qualquer banco de dados, eles são independentes de todos os detalhes de implementação.

### Serviços

Os serviços incluem interfaces para funções orientadas a lógica de negócios de nível superior. Os serviços são uma camada de abstração sobre os repositórios pelo fato de não interagirem com o banco de dados, mas pela interface do repositório. Os serviços são implementados no nível da interface do usuário.

### Adaptadores de Interface

Cada interface do usuário possui um diretório separado. No nosso caso, como temos uma API como interface, temos um diretório chamado api. Agora, como cada interface do usuário escuta solicitações de maneira diferente, os adaptadores de interface têm seus próprios arquivos main.go , com as seguintes tarefas:

- Criando Repositórios;
- Empacotando Repositórios dentro de Serviços;
- Serviços Wrap dentro de manipuladores

Aqui, os manipuladores são simplesmente a implementação no nível da interface do usuário do modelo de solicitação-resposta. Cada serviço tem seu próprio manipulador.

### Manipulação de erros

![Arquitetura limpa](/uploads/2020/02/Fluxo-de-Erro.png)

**Figura 03: Fluxo de erro | Arquitetura limpa**

O princípio básico por trás do tratamento de erros na Arquitetura Limpa é o seguinte:

- Os erros de repositório devem ser uniformes e devem ser agrupados e implementados de maneira diferente para cada adaptador de interface;
- O que isso significa essencialmente é que todos os erros no nível do banco de dados devem ser tratados pelas interfaces do usuário de maneira diferente. Por exemplo, se a interface do usuário em questão for uma API REST, os erros deverão ser manifestos na forma de códigos de status HTTP, nesse caso, o código 500. Considerando que, se for uma CLI, deverá sair com o código de status 1;
- Na Arquitetura Limpa, os erros do Repositório podem estar na raiz do pkg, para que as funções do Repositório possam chamá-los no caso de um aborto espontâneo do fluxo de controle, conforme mostrado abaixo.

Os mesmos erros podem ser implementados de acordo com a interface do usuário específica e, na maioria das vezes, podem ser agrupados em visualizações, no nível do manipulador. Cada erro no nível do repositório, ou não, é agrupado dentro de um mapa, que retorna um código de status HTTP correspondente ao erro apropriado.

### Conclusão

A arquitetura limpa é uma ótima maneira de estruturar seu código e, em seguida, esquecer todas as complexidades que podem surgir devido a iterações ágeis ou prototipagem rápida. Sendo o banco de dados, a interface do usuário e a estrutura independente, a Arquitetura Limpa é uma boa alternativa para um projeto de grande porte. E isso galera, espero te passado uma visão geral do que é Arquitetura Limpa para vocês, até o próximo artigo.

### DO ZERO A PROGRAMADOR FULL STACK JAVASCRIPT (REACT + NODEJS)

Nesse super treinamento você vai aprender de **forma totalmente prática** através de **aulas, exercícios e projetos** a programação web Javascript **focada no mercado de trabalho**. CLIQUE NO BOTÃO SABER MAIS E ASSISTA O VÍDEO, lhe garanto que vai vale apena.

[Saber mais](/programador-fullstack-8-semanas)

Leia também: [Express Vs Spring Boot](/express-vs-spring-boot-qual-e-o-melhor/)

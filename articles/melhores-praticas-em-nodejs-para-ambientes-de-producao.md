---
title: "Melhores práticas em NodeJS para Ambientes de Produção"
date: "2021-01-08"
categories: 
  - "nodejs"
tags: 
  - "alisson-suassuna"
  - "backend"
  - "javascript"
  - "melhores-praticas"
  - "melhores-praticas-em-nodejs"
  - "nodejs"
  - "tipscode"
description: Esta é uma tentativa de listar as Melhores práticas em NodeJS e as mais importantes para desenvolver e implantar em um ambiente de produção.
imgArticle: /thumbnail-article/melhores-praticas-nodejs.png
imgHome: /thumbnail-home/melhores-praticas-nodejs.png
---

Esta é uma tentativa de listar as Melhores práticas em NodeJS e as mais importantes para desenvolver e implantar em um ambiente de produção.

Eu mesmo venho trabalhando nessa tecnologia há algum tempo. Percebo seu enorme potencial e lugar no processo de desenvolvimento. Com forte concorrência de linguagens como Python e Golang, o NodeJS provou sua utilidade em casos de uso apropriados.

Antes de me aprofundar nas práticas recomendadas?, Gostaria de fazer uma breve introdução ao que é um padrão de microsserviço. Então vamos lá..

## O que são microsserviços?

Microsserviços - também conhecido como arquitetura de microsserviços - é um estilo de arquitetura que estrutura uma aplicação como uma coleção de serviços que são:

- Altamente sustentável e testável;
- Fracamente acoplado;
- Independentemente Implantável;
- Organizado envolta do negócio.

A arquitetura de microsserviço permite a entrega / implantação contínua de aplicações grandes e complexos. Também permite que uma organização desenvolva sua stack de tecnologia e essa sem dúvida é uma das Melhores práticas em NodeJS.

## Como sabe se preciso de microsserviços?

Inicialmente, quando você está apenas começando a trabalhar em seu MVP, talvez não precise usar microsserviços. A escala do eixo Y pode não ser sua agenda agora. Mas quando o produto começa a amadurecer e às vezes muito cedo, quando você precisa lidar com o dimensionamento, a decomposição em módulos funcionais faz mais sentido, pois o próprio negócio está se decompondo. Este será o ponto certo para começar a examinar o padrão de arquitetura de microsserviços.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

Os microsserviços são mais comumente considerados durante a substituição de uma aplicação monolítico que costumava ser bastante comum até recentemente, quando as soluções de conteinerização como o Docker começaram a governar o mundo do DevOps. Vamos falar mais sobre adiante.

Seria injusto se eu continuasse sem mencionar o Domain Driven Design (DDD). É uma estratégia muito popular para decompor seu produto em módulos funcionais. Portanto, é muito útil criar microsserviços.

## O que é um domínio de acordo com DDD?

Cada problema que você está tentando resolver é um domínio.

Cada domínio é subdividido em contextos limitados mutuamente exclusivos. Esses contextos nada mais são do que áreas separadas desse problema específico.

Em um padrão de microsserviço, cada contexto limitado se correlaciona a um microsserviço. Os padrões DDD ajudam a compreender a complexidade do domínio. Para o modelo de domínio para cada contexto limitado, você identifica e define as  
entidades, objetos de valor e agregados que modelam seu domínio.

Dependendo da complexidade do seu software, você pode escolher os princípios DDD ou executar uma abordagem mais simples.

O objetivo é obter um modelo de domínio altamente coeso e fracamente acoplado. Para isso, siga esta abordagem por exemplo:

![Melhores práticas em NodeJS](/uploads/2021/01/modelo-de-dominio-1024x178.png)

Modelo

Daqui em diante, falarei mais sobre as práticas específicas do NodeJS. E o que quero dizer é que os microsserviços e o DDD ajudam a avaliar o verdadeiro potencial do NodeJS, no entanto. A pergunta que fica no ar é si realmente é completo? Então vamos ver com mais detalhes e você tira suas próprias conclusões beleza?.

## Qual Design Pattern usar ao se utilizar o NodeJs?

Os Padrões de Projeto referem-se ao projeto de software usando certos padrões conhecidos por vários desenvolvedores. E esses padrões vão lhe auxilia a fazer as Melhores práticas em NodeJS.

Existem vários padrões de design que podemos usar. Eu gostaria de apresentar e / ou recapitular para desenvolvedores que já conhecem um padrão chamado Padrão de Repositório.

Este padrão torna mais fácil separar a lógica MVC enquanto também torna mais fácil lidar com a definição e interação do modelo com o resto da lógica.

Isso consiste de:

- **Controlador**: lida apenas com a solicitação e resposta e atributos associados. Ele também não terá nenhuma lógica de negócios ou definição de modelo ou associações de modelo. (nome da pasta: controladores);
- **Serviço**: contém lógica de negócios para seu microsserviço. O controle passa do controlador para um serviço. É um relacionamento 1: 1 entre um controlador e seu serviço e um relacionamento 1: muitos entre o serviço e os repositórios. (nome da pasta: serviços);
- **Repositório**: interage com os modelos que fazem parte da pasta de modelos. Qualquer consulta ao banco de dados por meio da camada de modelo será formada aqui. Não terá nenhuma lógica de negócios. (nome da pasta: repositórios);
- **Modelo**: contém a definição do modelo, associações, funções e etc;
- **Utilitários**: conterá classes / funções auxiliares que podem ser usadas como serviços. Ex: um utilitário Redis que possui todas as funções necessárias para interagir com o Redis. (nome da pasta: utilitários);
- **Caso de teste**: Isso incluirá casos de teste de unidade contra métodos de controlador para garantir cobertura máxima de código. (nome da pasta: especificação)

## Módulos de cluster

Uma única instância de Node.js é executada em uma única thread. Para tirar proveito dos sistemas multi-core, o usuário às vezes vai querer lançar um cluster de processos Node.js para lidar com a carga.

O módulo de cluster permite a criação fácil de processos filhos que compartilham portas de servidor.

Observe que é ideal usar um processo por contêiner ao usar a conteinerização do Docker para implantação por meio de microsserviços. Conseqüentemente, os módulos de cluster não são úteis ao usar a dockerização.

## Como lidar com o fluxo de controle no NodeJS

Ao usar retornos de chamada ou promessas, veja essas bibliotecas elas vão ajudar com certeza a Melhores práticas em NodeJS:

- Async ( [https://www.npmjs.com/package/async](https://www.npmjs.com/package/async) )
- Vasync (como melhora o rastreamento de operação) [https://www.npmjs.com/package/vasync](https://www.npmjs.com/package/vasync)
- Bluebird (lidar com promessas, por exemplo, Promise.all etc.) [https://www.npmjs.com/package/bluebird](https://www.npmjs.com/package/bluebird)

## Loop

- **Loop de série**: executando cada passo um por um em ordem;
- **Loop atrasado**: loop com um tempo limite;
- **Loop paralelo**: coleta todas as promessas em um loop e executa em paralelo

## Ferramentas úteis de linting

As ferramentas de linting analisam seu código estaticamente (sem executá-lo). Eles identificam possíveis bugs ou padrões perigosos. Padrões como o uso de variáveis ​​não declaradas ou instruções de “caso” dentro de um switch sem uma instrução de “quebra”.

Habilitar o modo estrito em sua base de código com 'usar estrito' pode ajudar seu código a falhar rapidamente se o analisador JavaScript puder identificar um comportamento global vazado ou mau semelhante.

Exemplos de linters são Javascript lint e JS lint.

## Como lidamos com o Logging?

Alguns pacotes npm comumente usados ​​são:

- Winston ([https://www.npmjs.com/package/winston](https://www.npmjs.com/package/winston));
- Bunyan ([https://www.npmjs.com/package/bunyan](https://www.npmjs.com/package/bunyan))

Formato de registro possível:

Para sistemas distribuídos como microsserviços, você gostaria de explorar o rastreamento distribuído usando ZipKin etc.

Uma observação sobre os pacotes NPM: você deve usar um pacote apenas se ele resolver um problema que você não consegue resolver sozinho. Realize auditorias de npm regularmente para encontrar problemas críticos com suas dependências de npm.

## Tratamento de exceções não detectadas

Por padrão, o Node.js lida com essas exceções imprimindo o rastreamento da pilha em **stderr** e saindo com o código 1, substituindo qualquer **process.exitCode** definido anteriormente

Nota: Adicionar um manipulador para o evento 'uncaughtException' substitui esse comportamento padrão.

Como alternativa, altere o process.exitCode no manipulador 'uncaughtException' que resultará na saída do processo com o código de saída fornecido. Caso contrário, na presença de tal manipulador, o processo será encerrado com 0.

process.exit (0) - finalização bem-sucedida  
process.exit (1) - finalização malsucedida

## Lidar com rejeições não tratadas

As promessas são onipresentes no código Node.js e, às vezes, acorrentadas a uma lista muito longa de funções que retornam promessas e assim por diante.

Não usar um manipulador de rejeição .catch (…) apropriado fará com que um evento unhandledRejection seja emitido. Se não for detectado e inspecionado adequadamente, você pode roubar sua única chance de detectar e possivelmente corrigir o problema.

## Dica bônus

console.time () e console.timeEnd ()  
O objeto de console possui métodos time () e timeEnd () que ajudam a analisar o desempenho de partes do seu código.

Esta não é uma solução para produção, mas pode ser usada quando você não tiver ferramentas melhores.

### Recomendação

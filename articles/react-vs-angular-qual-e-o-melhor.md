---
title: "React vs Angular: Qual desses gigantes levará a melhor?"
date: "2020-04-24"
tags: 
  - "alisson-suassuna"
  - "angular"
  - "react"
  - "react-vs-angular"
  - "tipscode"
description: Qual desses dois escolher React ou Angular? Cada framework tem muito a oferecer e não é fácil escolher entre os dois. Seja você um iniciante tentando descobrir por onde começar, um freelancer escolhendo um framework para o seu próximo projeto ou um arquiteto de nível empresarial planejando uma visão estratégica para sua empresa, provavelmente se beneficiará de ter uma visão instruída sobre neste artigo.
---

Qual desses dois escolher React ou Angular? Cada framework tem muito a oferecer e não é fácil escolher entre os dois. Seja você um iniciante tentando descobrir por onde começar, um freelancer escolhendo um framework para o seu próximo projeto ou um arquiteto de nível empresarial planejando uma visão estratégica para sua empresa, provavelmente se beneficiará de ter uma visão instruída sobre neste artigo.

Para economizar algum tempo, deixe-me dizer uma coisa com antecedência: este artigo não fornecerá uma resposta clara sobre qual framework é melhor ou qual é pior. Mas nem centenas de outros artigos com títulos semelhantes. Não posso lhe dizer isso, porque a resposta depende de uma ampla gama de fatores que tornam uma tecnologia específica mais ou menos adequada para o seu ambiente e caso de uso.

Como não podemos responder à pergunta diretamente, tentaremos outra coisa. Vamos comparar o Angular e React, para demonstrar como você pode abordar o problema de comparar os dois frameworks de maneira estruturada por conta própria e adaptá-las ao seu ambiente. Você sabe, a velha abordagem "ensina um homem a pescar". A ideia aqui é te oferece um uma analise bem detalhada para que você tenha uma base boa de informação sobre.

Como não podemos responder à pergunta diretamente, tentaremos outra coisa. Vamos comparar Angular e React, para demonstrar como você pode abordar o problema de comparar quaisquer framework de maneira estruturada por conta própria e adaptá-las ao seu ambiente.

### Mas, por onde devo começar?

React vs Angular

Antes de escolher qualquer ferramenta, você precisa responder a duas perguntas simples: “Essa é uma boa ferramenta em si?” e "Funcionará bem no meu caso de uso?" Nenhum deles significa nada por si só, então você sempre precisa manter os dois em mente. Tudo bem, as perguntas podem não ser tão simples, então tentaremos dividi-las em outras menores.

Então pare um pouco e faça essas perguntas:

- Qual é o nível de maturidade e quem desenvolveu?
- Quais são os recursos?
- Qual é a arquitetura, paradigma e padrões que ela emprega?
- Qual é o seu ecossistema ao seu redor?

Perguntas para você refletir:

- Eu e meus colegas seremos capazes de aprender esta ferramenta com facilidade?
- Isso se encaixa bem no meu projeto?
- Como é a experiência do desenvolvedor?

Usando esse conjunto de perguntas, você pode iniciar sua avaliação de qualquer ferramenta e também basearemos nossa comparação de React e Angular.

Há outra coisa que precisamos levar em consideração. Estritamente falando, não é exatamente justo comparar o Angular com o React, pois o Angular é um framework completo e rico em recursos, enquanto o React é apenas uma biblioteca de componentes de interface do usuário. Para equilibrar as chances, falaremos sobre o React em conjunto com algumas das bibliotecas usadas com frequência.

### Maturidade

React vs Angular

Uma parte importante de ser um desenvolvedor habilitado é manter o equilíbrio entre abordagens estabelecidas e comprovadas pelo tempo e avaliar novas tecnologias de ponta. Como regra geral, você deve ter cuidado ao adotar ferramentas que ainda não amadureceram devido a certos riscos:

- A ferramenta pode estar com erros e instável;
- Pode ser inesperadamente abandonado pelo fornecedor;
- Pode não haver uma grande base de conhecimento ou comunidade disponível, caso você precise de ajuda.

React e Angular provêm de boas famílias, portanto parece que podemos ter confiança nesse aspecto.

#### React

React vs Angula

![React vs Angula](/uploads/2020/04/React-300x269.png)

Figura 01 - React vs Angula

O React é desenvolvido e mantido pelo Facebook e usado em seus próprios produtos, incluindo Instagram e WhatsApp . Já existe há cerca de 6 anos , portanto não é exatamente novo. É também um dos projetos mais populares no GitHub, com cerca de +119.000 estrelas que estou escrevendo esse artigo.

#### Angular

React vs Angula

![React vs Angula](/uploads/2020/04/Angular.png)

Figura 02 - React vs Angula

O Angular está em torno de menos que o React, mas não é um garoto novo no quarteirão. É mantido pelo Google e, como mencionado por Igor Minar, usado em mais de 600 aplicativos no Google , como Firebase Console, Google Analytics, Google Express, Google Cloud Platform e muito mais.

### Características

React vs Angular

Como mencionei anteriormente, o Angular tem mais recursos prontos do que o React. Isso pode ser uma coisa boa e ruim, dependendo de como você olha para ela.

Ambos frameworks compartilham alguns recursos principais em comum: componentes, ligação de dados e renderização independente de plataforma.

#### Angular

React vs Angula

O Angular fornece muitos dos recursos necessários para um aplicativo Web moderno pronto para uso. Alguns dos recursos padrão são:

- Injeção de dependência;
- Modelos, com base em uma versão estendida do HTML;
- Roteamento, fornecido por @angular/router;
- Solicitações Ajax usando @angular/common/http;
- @angular/forms para construção de formulários;
- Encapsulamento CSS de componente;
- Proteção XSS;
- Utilitários para componentes de teste de unidade.

Alguns desses recursos estão embutidos no núcleo do framework e você não tem a opção de não usá-los. Isso requer que os desenvolvedores estejam familiarizados com recursos como injeção de dependência para criar até um pequeno aplicativo Angular. Outros recursos, como o cliente HTTP ou os formulários, são completamente opcionais e podem ser adicionados conforme a necessidade.

#### React

React vs Angula

Com o React, você está começando com uma abordagem mais minimalista. Se olharmos apenas para o React, eis o que temos:

- Nenhuma injeção de dependência;
- Em vez de modelos clássicos, ele possui JSX, uma linguagem semelhante a XML construída com JavaScript;
- Gerenciamento de estado usando o **_setState_** e a API de contexto;
- Proteção XSS;
- Utilitários para componentes de teste de unidade.

Não muito. E isso pode ser uma coisa boa. Isso significa que você tem a liberdade de escolher quaisquer bibliotecas adicionais a serem adicionadas com base em suas necessidades. O ruim é que você realmente precisa fazer essas escolhas. Algumas das bibliotecas populares que são frequentemente usadas em conjunto com o React são:

- [React-router](https://reacttraining.com/react-router/) para roteamento;
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (ou [axios](https://github.com/axios/axios)) para solicitações HTTP;
- Uma grande variedade de técnicas para encapsulamentos CSS;
- [Enzyme](https://github.com/enzymejs/enzyme) para utilitários adicionais de teste de unidade

Descobrimos a liberdade de escolher suas próprias bibliotecas. Isso nos permite adaptar nossa pilha a requisitos específicos de cada projeto, e não encontramos o custo de aprender novas bibliotecas tão altas.

### Linguagend, Paradigmas e Padrões

React vs Angular

Recuando um pouco dos recursos de cada framework, vamos ver que tipos de conceitos de nível superior são populares em ambos os frameworks.

#### React

React vs Angula

### Desenvolva um APP real com React e NodeJS

Você já pensou em desenvolver um App inspirado no Evernote, que é um dos APPs mais famosos do mundo? 💻

[GARANTE SUA VAGA AGORA](/programador-fullstack-8-semanas)

Há várias coisas importantes que vêm à mente quando se pensa em React: JSX, componentes funcionais, gerenciamento de estado, PropTypes e Flow.

##### JSX

React vs Angular

JSX é um tópico polêmico para muitos desenvolvedores: alguns gostam e outros pensam que é um grande passo para trás. Em vez de seguir uma abordagem clássica de separar marcação e lógica, o React decidiu combiná-los em componentes usando uma linguagem semelhante a XML que permite escrever a marcação diretamente no seu código JavaScript.

Embora os méritos de misturar marcação com JavaScript possam ser discutíveis, ele tem um benefício indiscutível: a análise estática. Se você cometer um erro na sua marcação JSX, o compilador emitirá um erro em vez de continuar em silêncio. Isso ajuda capturando instantaneamente erros de digitação e outros erros tolos.

##### Componentes Funcionais

React vs Angular

No React, você pode definir componentes usando funções e classes. Os componentes funcionais geralmente são puros e fornecem um mapeamento claro entre os adereços de entrada e a saída renderizada. O código funcional geralmente é menos acoplado e mais fácil de reutilizar e testar. No entanto, os componentes funcionais do React têm suas limitações. Por exemplo, eles não podem ter um estado em oposição aos componentes da classe. Isso requer que os desenvolvedores alternem entre os dois paradigmas para fazer o melhor dos dois mundos.

A situação mudará quando a proposta de ganchos for finalizada e liberada. Isso permitirá que os componentes funcionais tenham um estado e usem outros recursos dos componentes da classe, como ganchos do ciclo de vida. Poderemos, então, escrever aplicativos React puramente funcionais.

##### Gerenciamento de estado

React vs Angular

O conceito de gerenciamento de estado é importante para os dois frameworks e o React tem várias abordagens a oferecer. Cada componente pode ter seu próprio estado, portanto, você pode usá-lo para criar componentes com estado para manter o estado de uma parte da aplicação. Isso é conhecido como padrão de elevação ([Lifting State Upe](https://reactjs.org/docs/lifting-state-up.html)). Isso, no entanto, torna-se impraticável, pois você precisa armazenar o estado global necessário em diferentes partes da aplicação, além de transmitir dados manualmente em diferentes níveis da árvore de componentes. Para atenuar isso, o React 16.3 introduziu a [API de contexto](https://reactjs.org/docs/context.html) que permite disponibilizar dados em todos os níveis da árvore de componentes sem transmiti-los explicitamente. Os contextos não armazenam o próprio estado, eles apenas expõem os dados, mas se você o agrupar em um componente com estado, poderá implementar uma maneira conveniente e nativamente suportada de armazenar o estado.

Também existem bibliotecas de terceiros para gerenciamento de estado no React. O [Redux](https://redux.js.org/) é uma biblioteca de gerenciamento de estado inspirada no [Flux](http://facebook.github.io/flux/) , mas com algumas simplificações. A idéia principal do Redux é que todo o estado da aplicação seja representado por um único objeto, que é mutado por funções chamadas redutores. Os próprios redutores são funções puras e são implementados separadamente dos componentes. Isso permite uma melhor separação de preocupações e testabilidade.

[MobX](https://github.com/mobxjs/mobx) é uma biblioteca alternativa para gerenciar o estado de uma aplicação Em vez de manter o estado em um único armazenamento imutável, como Redux, ele incentiva você a armazenar apenas o estado mínimo necessário e extrair o restante dele. Ele fornece um conjunto de decoradores para definir observáveis ​​e observadores e introduzir lógica reativa ao seu estado.

##### PropTypes

React vs Angular

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) é um recurso opcional do React que pode trazer medidas de segurança adicionais se você não estiver usando o Flow ou o TypeScript. Ele permite definir um conjunto de validadores para os props de componentes que verificarão seus valores no tempo de execução. Desde da versão 15.5, os [tipos de objetos](https://github.com/facebook/prop-types) foram movidos para uma biblioteca de tipos de objetos separados e agora são completamente opcionais. Considerando seus benefícios, recomendamos usá-lo para melhorar a confiabilidade do seu aplicativo.

##### Flow

React vs Angular

O [Flow](https://flow.org/) é uma ferramenta de verificação de tipo para JavaScript também desenvolvida pelo Facebook. Ele pode analisar o código e verificar se há erros de tipo comuns, como conversão implícita ou desreferenciação nula.

Ao contrário do TypeScript, que tem um objetivo semelhante, não é necessário migrar para uma nova linguagem e anotar seu código para que a verificação de tipo funcione. No Flow, as anotações de tipo são opcionais e podem ser usadas para fornecer dicas adicionais ao analisador. Isso faz do Flow uma boa opção se você deseja usar a análise de código estático, mas deseja evitar a necessidade de reescrever o código existente.

Todos os três recursos podem melhorar significativamente sua experiência de desenvolvedor: JSX, Flow e PropTypes permitem identificar rapidamente locais com possíveis erros, e escolher cuidadosamente sua abordagem ao gerenciamento de estado ajudará a obter uma estrutura mais clara para o seu projeto.

#### Angular

React vs Angula

O Angular também tem algumas coisas interessantes na manga, como TypeScript, RxJS e Angular Elements, além de sua própria abordagem ao gerenciamento de estado.

##### TypeScript

React vs Angular

O [TypeScript](https://www.typescriptlang.org/) é uma nova linguagem criada sobre JavaScript e desenvolvida pela Microsoft. É um superconjunto do JavaScript ES2015 ([caso você não saiba o que é ES2015, tem um vídeo bem completo lhe explicando, clique aqui para assistir](https://www.youtube.com/watch?v=PlFlKxZbVqs)) e inclui recursos de versões mais recentes da linguagem. Você pode usá-lo em vez do Babel para escrever o JavaScript mais avançado. Ele também possui um sistema de digitação extremamente poderoso que pode analisar estaticamente seu código usando uma combinação de anotações e inferência de tipo.

Há também um benefício mais sutil. O TypeScript foi fortemente influenciado por Java e .NET; portanto, se seus desenvolvedores têm experiência em uma dessas linguagens, é provável que eles achem o TypeScript mais fácil de aprender do que o JavaScript simples (observe como passamos da ferramenta para o seu ambiente pessoal). Embora o Angular tenha sido a primeira grande estrutura a adotar ativamente o TypeScript, também é possível usá-lo em conjunto com o React.

##### RxJS

React vs Angular

O [RxJS](http://reactivex.io/rxjs/) é uma biblioteca de programação reativa que permite um tratamento mais flexível de operações e eventos assíncronos (Meu TCC da faculdade foi sobre programação reativa, caso você queira se aprofunda nesse paradigma, deixa um comentário aqui no artigo que lhe mando o meu TCC). É uma combinação dos padrões Observer e Iterator combinados com programação funcional. O RxJS permite tratar qualquer coisa como um fluxo contínuo de valores e executar várias operações nele, como mapeamento, filtragem, divisão ou mesclagem.

A biblioteca foi adotada pela Angular em seu módulo HTTP, bem como para uso interno. Quando você executa uma solicitação HTTP, ele retorna um Observable em vez de [uma promise usual](https://www.youtube.com/watch?v=fRa33RSJpSo&t=28s). Essa abordagem abre a porta para possibilidades interessantes, como a capacidade de cancelar uma solicitação, tentar novamente várias vezes ou trabalhar com fluxos de dados contínuos, como soquetes da web. Mas isso é apenas a superfície. Para dominar o RxJS, você precisará conhecer diferentes tipos de observáveis, assuntos, além de uma centena de métodos e operadores .

##### Gerenciamento de Estado

React vs Angular

Semelhante ao React, os componentes Angular podem armazenar dados em suas propriedades e passá-los para seus filhos. Se você precisar acessar valores nos componentes irmãos, poderá movê-lo para um serviço com estado que pode ser injetado posteriormente nos componentes. Como a programação reativa e o RxJS são cidadãos de primeira classe no Angular, você pode usar observáveis ​​para recalcular partes do estado com base em algumas informações. Isso, no entanto, pode ser complicado em aplicações maiores, pois alterar algumas variáveis ​​pode desencadear uma cascata multidirecional de atualizações que é difícil de seguir.

[NgRx](https://github.com/ngrx), a biblioteca de gerenciamento de estado mais popular do Angular, pode facilitar as coisas. É inspirado no Redux, mas também usa o RxJS para assistir e recalcular dados no estado. O uso do NgRx pode ajudar a impor um fluxo de dados unidirecional compreensível, além de reduzir o acoplamento no seu código.

O [NGXS](https://ngxs.gitbook.io/ngxs/) é outra biblioteca de gerenciamento de estado inspirada no Redux. Ao contrário do NgRx, o NGXS se esforça para reduzir o código padrão, usando os modernos recursos TypeScript e melhorando a curva de aprendizado e a experiência geral de desenvolvimento.

##### Elementos Angular

React vs Angular

Os elementos Angular fornecem uma maneira de empacotar componentes angulares como elementos personalizados. Também conhecidos como web components, os elementos personalizados são uma maneira padronizada independente da estrutura de criar elementos HTML personalizados controlados pelo seu código JavaScript. Depois de definir esse elemento e adicioná-lo ao registro do navegador, ele será renderizado automaticamente em qualquer lugar em que for usado no HTML. Os elementos Angular fornecem uma API que cria o wrapper necessário para implementar a API do componente personalizado e fazê-lo funcionar com o mecanismo de detecção de alterações da Angular. Esse mecanismo pode ser usado para incorporar outros componentes ou aplicativos Angular inteiros no aplicativo host, potencialmente gravados em uma estrutura diferente com um ciclo de desenvolvimento diferente.

Descobrimos que o TypeScript é uma ótima ferramenta para melhorar a capacidade de manutenção de nossos projetos, especialmente aqueles com uma grande base de código ou lógica complexa de domínio / negócios. O código escrito no TypeScript é mais descritivo e mais fácil de seguir. O RxJS apresenta novas maneiras de gerenciar o fluxo de dados em seu projeto, mas exige que você tenha uma boa compreensão do assunto. Caso contrário, pode trazer complexidade indesejada ao seu projeto. Os elementos angulares têm o potencial de reutilizar os componentes angulares e é interessante ver como isso ocorre no futuro.

##### Ecossistem

React vs Angular

A grande vantagem das estruturas de código aberto é o número de ferramentas criadas em torno delas. Às vezes, essas ferramentas são ainda mais úteis que a própria estrutura. Vamos dar uma olhada em algumas das ferramentas e bibliotecas mais populares associadas a cada estrutura.

#### Angular

React vs Angula

##### CLI Angular

React vs Angular

Uma tendência popular dos framework modernas é ter uma ferramenta CLI que o ajuda a inicializar seu projeto sem precisar configurar a compilação. Angular tem CLI angular para isso. Ele permite gerar e executar um projeto com apenas alguns comandos. Todos os scripts responsáveis ​​por criar a aplicação, iniciar um servidor de desenvolvimento e executar testes estão ocultos em **_node\_modules_**. Você também pode usá-lo para gerar novo código durante o desenvolvimento e instalar dependências.

Angular apresenta uma nova maneira interessante de gerenciar dependências no seu projeto. Ao usar, **_ng add_** você pode instalar uma dependência e ela será configurada automaticamente para uso. Por exemplo, quando você _**run ng add**_ **_@angular/material_**, a Angular CLI baixa o Angular Material do registro **_npm_** e executa seu script de instalação que configura automaticamente sua aplicação para usar o Angular Material. Isso é feito usando [esquemas angular](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2). Esquemas são uma ferramenta de fluxo de trabalho que permite que as bibliotecas façam alterações em sua base de código. Isso significa que os autores da biblioteca podem fornecer maneiras automáticas de resolver problemas incompatíveis com versões anteriores que você pode enfrentar ao instalar uma nova versão.

##### Ionic Framework

React vs Angular

Ionic é uma framework popular para o desenvolvimento de aplicativos móveis híbridos. Ele fornece um contêiner Cordova que é bem integrado ao Angular e uma biblioteca de componentes de material. Com ele, você pode configurar e criar facilmente um aplicativo móvel. Se você preferir um aplicativo híbrido ao invés de um nativo, é uma boa escolha

##### Angular Material

React vs Angular

Se você é fã de design de materiais, ficará feliz em saber que há uma biblioteca de componentes de materiais disponível para o Angular com uma boa seleção de componentes prontos

#### Angular

React vs Angular

##### Universo Angular

React vs Angular

O [Angular universal](https://github.com/angular/universal) é um projeto que agrupa ferramentas diferentes para habilitar a renderização do lado do servidor para aplicativos Angular. Ele é integrado à CLI Angular e suporta vários frameworks do Node.js., como express e hapi, além do núcleo do .NET.

##### Augury

React vs Angular

Augury é uma extensão de navegador para Chrome e Firefox que ajuda a depurar aplicativos Angular em execução no modo de desenvolvimento. Você pode usá-lo para explorar sua árvore de componentes, monitorar a detecção de alterações e otimizar problemas de desempenho.

#### React

React vs Angula

##### Criar aplicativo React

React vs Angular

O [Create React App](https://github.com/facebookincubator/create-react-app) é um utilitário da CLI para o React configurar rapidamente novos projetos. Semelhante à CLI Angular, permite gerar um novo projeto, executar o aplicativo no modo de desenvolvimento ou criar um pacote de produção. Ele usa o Jest para testes de unidade, suporta o perfil de aplicativos usando variáveis ​​de ambiente, proxies de back-end para desenvolvimento local, Flow e TypeScript, Sass, PostCSS e vários outros recursos.

##### React Native

React vs Angular

O [React Native](https://facebook.github.io/react-native/) é uma plataforma desenvolvida pelo Facebook para criar aplicativos móveis nativos usando o React. Ao contrário do Ionic, que produz um aplicativo híbrido, o React Native produz uma interface do usuário verdadeiramente nativa. Ele fornece um conjunto de componentes padrão do React que são vinculados aos seus homólogos nativos. Também permite criar seus próprios componentes e vinculá-los ao código nativo escrito em Objective-C, Java ou Swift.

##### Material UI

React vs Angular

Também existe uma biblioteca de [componentes de design de materiais](http://www.material-ui.com/) para o React. Comparado com a versão da Angular, esta é mais madura e possui uma ampla gama de componentes disponíveis.

##### Next.js

React vs Angular

O [Next.js](https://github.com/zeit/next.js/) é uma framework para a renderização do servidor de aplicações React. Ele fornece uma maneira flexível de renderizar total ou parcialmente sua aplicação no servidor, retornar o resultado ao cliente e continuar no navegador. Ele tenta facilitar a tarefa complexa de criar aplicativos universais, para que a configuração seja projetada para ser o mais simples possível, com uma quantidade mínima de novas primitivas e requisitos para a estrutura do seu projeto.

##### Gatsby

React vs Angular

[Gatsby](https://www.gatsbyjs.org/) é um gerador de site estático que usa React.js. Ele permite que você use o GraphQL para consultar os dados de seus sites definidos em descontos, YAML, JSON, APIs externas e também em sistemas populares de gerenciamento de conteúdo.

##### React 360

React vs Angular

O [React 360](https://facebook.github.io/react-360/) é uma biblioteca para criar aplicações de realidade virtual para os navegadores. Ele fornece uma API React declarativa, construída sobre as APIs do navegador WebGL e WebVR, facilitando a criação de experiências de 360 ​​VR.

##### React Developer Tools

React vs Angular

O [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) é uma extensão do navegador para depurar aplicações React que permite percorrer a árvore de componentes do React e ver seus props e estado.

### Adoção, curva de aprendizado e experiência em desenvolvimento

React vs Angular

Um critério importante para escolher uma nova tecnologia é como é fácil aprender. Obviamente, a resposta depende de uma ampla gama de fatores, como sua experiência anterior e uma familiaridade geral com os conceitos e padrões relacionados. No entanto, ainda podemos tentar avaliar o número de coisas novas que você precisará aprender para começar com uma determinado framework. Agora, se assumirmos que você já conhece o ES6 +, criar ferramentas e tudo isso, vamos ver o que mais você precisará entender sobre React vs Angular.

### Desenvolva um APP real com React e NodeJS

Você já pensou em desenvolver um App inspirado no Evernote, que é um dos APPs mais famosos do mundo? 💻

[GARANTE SUA VAGA AGORA](/programador-fullstack-8-semanas)

#### React

React vs Angula

Com o React, a primeira coisa que você encontrará é JSX. Parece estranho escrever para alguns desenvolvedores. No entanto, ele não adiciona tanta complexidade - apenas expressões, que na verdade são JavaScript, e sintaxe especial semelhante a HTML. Você também precisará aprender a escrever componentes, usar adereços para configuração e gerenciar o estado interno. Você não precisa aprender novas estruturas ou loops lógicos, pois tudo isso é JavaScript simples.

[Para você inicia seus estudos com React te indico clica aqui](http://bit.ly/video-do-leonardo). Quando terminar, familiarize-se com o React Router pode ser um pouco complexo e não convencional, mas não há com o que se preocupar. Dependendo do tamanho, da complexidade e dos requisitos do seu projeto, você precisará encontrar e aprender algumas bibliotecas adicionais, e essa pode ser a parte complicada, mas depois disso tudo deve ser tranquilo.

Fiquei genuinamente surpreso com a facilidade de começar a usar o React. Até pessoas com experiência em desenvolvimento de back-end e experiência limitada em desenvolvimento de front-end conseguiram se atualizar rapidamente. As mensagens de erro que você pode encontrar ao longo do caminho geralmente são claras e fornecem explicações sobre como resolver o problema subjacente. A parte mais difícil pode ser encontrar as bibliotecas corretas para todos os recursos necessários, mas estruturar e desenvolver um aplicativo é notavelmente simples.

#### Angular

React vs Angula

O Learning Angular apresentará mais conceitos novos que o React. Primeiro de tudo, você precisará se sentir confortável com o TypeScript. Para desenvolvedores com experiência em linguagens de tipo estaticamente, como Java ou .NET, isso pode ser mais fácil de entender do que JavaScript, mas para desenvolvedores puros de JavaScript, isso pode exigir algum esforço.

O framework em si é rico em tópicos a serem aprendidos, começando pelo básico, como módulos, injeção de dependência, decoradores, componentes, serviços, tubulações, modelos e diretrizes, até tópicos mais avançados, como detecção de alterações, zonas, compilação AoT e Rx .js. Tudo isso é coberto na documentação . O Rx.js é um tópico pesado por si só e é descrito em muitos detalhes no site oficial . Embora relativamente fácil de usar em um nível básico, fica mais complicado ao passar para tópicos avançados.

Em suma, percebemos que a barreira de entrada para Angular é maior que para React. O grande número de novos conceitos pode ser esmagador para os recém-chegados. E mesmo depois que você começou, a experiência pode ser um pouco difícil, pois você precisa ter em mente coisas como gerenciamento de assinaturas Rx.js., desempenho de detecção de alterações e bananas em uma caixa (sim, esse é um conselho real da documentação) . Muitas vezes, encontramos mensagens de erro enigmáticas demais para entender, por isso tivemos que pesquisá-las no Google e orar por uma correspondência exata.

Pode parecer que sou a favor do React aqui, e definitivamente não. Tive uma experiência em projetos Angular e React de tamanho e complexidade comparáveis ​​e, de alguma forma, com o React, ele sempre foi mais suave. Mas, como eu disse anteriormente, isso depende de uma ampla gama de fatores e pode funcionar de maneira diferente para você.

### Vamos por em Contexto

React vs Angular

Você já deve ter notado que cada framework possui seu próprio conjunto de recursos, com seus lados bons e ruins. Mas essa análise foi feita fora de qualquer contexto específico e, portanto, não fornece uma resposta sobre qual framework você deve escolher. Para decidir sobre isso, você precisará revisá-lo usando a perspectiva do seu projeto. Isso é algo que você precisará fazer por conta própria.

Para começar, tente responder a estas perguntas sobre o seu projeto e, quando o fizer, combine as respostas com o que aprendeu sobre os dois framework. Esta lista pode não estar completa, caso você tem alguma sugestões deixa no comentário, mas deve ser suficiente para você começar:

- Qual é o tamanho do projeto?
- Por quanto tempo ele será mantido?
- Todas as funcionalidades estão claramente definidas com antecedência ou você deve ser flexível?
- Se todos os recursos já estiverem definidos quais recursos você precisa?
- O modelo de domínio e a lógica de negócios são complexos?
- Quais plataformas você está alvejando? Web, celular, computador?
- Você precisa da renderização no servidor? SEO é importante?
- Você lidará com muitos fluxos de eventos em tempo real?
- Qual é o tamanho da sua equipe?
- Qual é a experiência de seus desenvolvedores e qual é o background deles?
- Existem bibliotecas de componentes prontas que você gostaria de usar?

Se você está iniciando um grande projeto e deseja minimizar o risco de fazer uma má escolha, considere criar um produto de prova de conceito primeiro. Escolha alguns dos principais recursos dos projetos e tente implementá-los de maneira simplista usando um framework. Os PoCs geralmente não levam muito tempo para serem construídos, mas oferecem uma experiência pessoal valiosa no trabalho com o framework e permitem validar os principais requisitos técnicos. Se você estiver satisfeito com os resultados, poderá continuar com o desenvolvimento completo. Caso contrário, falhar rapidamente poupará muitas dores de cabeça a longo prazo.

### Um Framework para tudo?

React vs Angular

Depois de escolher um framework para um projeto, você ficará tentado a usar exatamente a mesma stack de tecnologia para seus próximos projetos. Não. Mesmo que seja uma boa ideia manter sua stack de tecnologia consistente, não use sempre a mesma abordagem às cegas. Antes de iniciar cada projeto, reserve um momento para responder às mesmas perguntas mais uma vez. Talvez para o próximo projeto as respostas sejam diferentes ou o cenário mude. Além disso, se você tiver o luxo de fazer um pequeno projeto com uma stack de tecnologia não familiar, faça-o. Tais experiências fornecerão uma experiência inestimável. Mantenha sua mente aberta e aprenda com seus erros. Em algum momento, uma certa tecnologia parecerá natural e correta .

### Conclusão

React vs Angular

Bom ficamos por aqui, espero que eu tenha conseguido te dá um norte entre esses dois gigantes do mercado de desenvolvimento web, esse artigo não tem o objetivo te afirma quem é melhor ou não, mas sim lhe fornece um guia com informações para facilita sua tomada de decisão.

##### Materiais recomendados

React vs Angular

### DESCUBRA como criar seu próprio jogo em JavaScript, HTML5 e CSS3

Mini-Curso Construindo seu Jogo em JavaScript 100% GRATUITO. Para você ter acesso ao curso basta clicar no botão INSCREVA-SE. A criação do jogo é realizada passo a passo, linha a linha onde QUALQUER pessoa é capaz de fazer o curso. Então te vejo nas aulas, abraços

[GARANTE SUA VAGA AGORA](https://bit.ly/mini-curso-criando-game-js)

- [7 Conceitos JavaScript essenciais](/7-conceitos-javascript-essenciais/)
- [As 10 principais extensões do Google Chrome para aumentar sua produtividade como desenvolvedor](/10-principais-extensoes-do-google-chrome/)
- [Arrow Functions: Uma sintaxe concisa em JavaScript](/arrow-functions-sintaxe-facil-em-javascript/)

### Saiba como se torna um PROFISSIONAL FULL STACK

[Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.](http://bit.ly/video-do-leonardo)

[GARANTE SUA VAGA AGORA](http://bit.ly/video-do-leonardo)

React vs Angular

<iframe width="560" height="315" src="https://www.youtube.com/embed/PlFlKxZbVqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

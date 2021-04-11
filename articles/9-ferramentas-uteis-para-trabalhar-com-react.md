---
title: "9 Ferramentas úteis para trabalhar com React: Aumentando sua produtividade"
date: "2020-03-20"
tags: 
  - "development"
  - "environment"
  - "google"
  - "programacao"
  - "react"
  - "reacto"
  - "science"
  - "visual-studio-code"
  - "vs-code"
description: O React é uma coleção de ferramentas e bibliotecas independentes entre si. As muitas ferramentas garantem muita liberdade, porque você pode procurar as melhores para o trabalho em questão. No React, existem muitas maneiras de resolver um problema, portanto, conhecer mais do que algumas ferramentas é uma boa ideia. Existem ferramentas que são melhores em certos problemas do que em outros, tudo depende do contexto. Abaixo está uma lista de ferramentas que considero úteis em um projeto React, algumas são mais recentes que outras e algumas resolvem um problema específico ao trabalhar com o React - mas todas são muito úteis.
---

O React é uma coleção de ferramentas e bibliotecas independentes entre si. As muitas ferramentas garantem muita liberdade, porque você pode procurar as melhores para o trabalho em questão. No React, existem muitas maneiras de resolver um problema, portanto, conhecer mais do que algumas ferramentas é uma boa ideia. Existem ferramentas que são melhores em certos problemas do que em outros, tudo depende do contexto. Abaixo está uma lista de ferramentas que considero úteis em um projeto React, algumas são mais recentes que outras e algumas resolvem um problema específico ao trabalhar com o React - mas todas são muito úteis.

### Do ZERO a Programador FullStack.

Neste treinamento você vai aprender tudo o que você precisa saber para se tornar um programador full stack javascript completo.

[QUERO ME INSCREVER AGORA](/programador-fullstack-8-semanas)

Para cada ferramenta, fornecerei um breve resumo com informações básicas antes de mergulhar um pouco mais nas coisas legais que ela pode fazer. Lembre-se de que todas essas ferramentas estão sujeitas a alterações.

### 1 - create-react-app

Ferramentas úteis para trabalhar com React

- Site: [https://create-react-](https://create-react-app.dev/)[app.dev/](https://create-react-app.dev/)
- Repositório: [https://github.com/facebook/](https://github.com/facebook/create-react-app)[create-react-a](https://github.com/facebook/create-react-app)[pp](https://github.com/facebook/create-react-app)
- Estrelas no GitHub: mais de 60.000
- Desenvolvedor: Facebook
- Colaboradores: mais de 600

Uma ótima maneira de começar um projeto React é através do Create-React-App. Essa ferramenta abstrai grande parte das ferramentas React em uma única dependência. Ferramentas como Webpack, Babel e ESList estão seguras. Você pode iniciar um projeto React inteiro com um único comando. A ferramenta gera um conjunto mínimo de arquivos para que você possa se concentrar no aplicativo.

Por exemplo, para iniciar uma aplicação usando o npx:

```
npx create-react-app [nome do projeto]
```

A execução do comando acima criará um diretório e gerará todos os arquivos necessários para sua aplicação. O comando instala dependências transitivas sem intervenção. Não há arquivos de configuração complicados, apenas o mínimo necessário para criar seu aplicativo.

As atualizações são encapsuladas por um único pacote NPM. Não é necessário mexer com o webpack com os recursos mais recentes. Você pode atualizar o Create React App com um único comando quando novas versões forem enviadas. Para atualizar, instale o **_react-scripts@latestpacote NPM._**

Dentro da pasta do projeto, você pode encontrar comandos internos. A execução _**npm start**_, por exemplo, inicializa o aplicativo. Durante a execução, o aplicativo carrega todas as alterações feitas no código. À medida que você salva os arquivos do projeto, ele recarrega essas alterações no navegador. Quaisquer erros de compilação que ocorrerem aparecerão no console que executou o aplicativo.

O Create React App está de olho na automação de testes. A execução **_npm test_** ativará o Jest e executará todos os testes em seu projeto. O comando executa um observador no modo interativo, para acompanhar as alterações no arquivo. Conforme você faz as alterações, o inspetor executa apenas os testes afetados. Certifique-se de nomear os arquivos de teste **_\*.test.js_** para que o Jest possa buscá-los.

Os desenvolvedores de JavaScript geralmente reclamam que a configuração de ferramentas modernas é difícil. Então, aqui está uma ferramenta que automatiza isso para você sem problemas.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Comece com um único comando;
- Apenas uma única dependência;
- Nenhuma configuração necessária.

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Nenhuma Renderização no Servidor

### 2 - Next.js

Ferramentas úteis para trabalhar com React

- Site: [https://nextjs.org](https://nextjs.org/)[/](https://nextjs.org/)
- Repositório: [https://github.com/zeit/next.js/](https://github.com/zeit/next.js/)
- Estrelas no GitHub: mais de 35.000
- Desenvolvedor: ZEIT
- Colaboradores: mais de 600

O Next.js faz a renderização no lado do servidor por meio de uma aplicação React isomórfico. Não há configuração e leva pouco tempo para começar. Você obtém divisão de código, roteamento baseado em pasta, recarregamento de código ativo e renderização universal. A divisão de código carrega apenas os componentes necessários na página. O roteamento procura uma **_pages_** (pasta) no projeto e localiza o arquivo que corresponde à rota vinculada. O código recarrega os relógios para alterações de arquivos e recarrega partes do aplicativo. Isso é bom para desenvolvedores que gostam de ciclos rápidos de feedback entre alterações de código. A renderização acontece no cliente e no servidor porque o aplicativo é isomórfico. Isso permite a reutilização de código, porque o mesmo código que é executado no servidor também é executado no cliente.

Para iniciar o Next.js execute o seguinte comando:

```
npm install --save next react react-dom
```

Certifique-se de criar uma pasta de projeto com um **_package.json_**. Neste arquivo escreva **_next builde next start scripts_**. Esses scripts são mapeados para executar os scripts executados por meio do NPM.

Com o Next.js, você pode hospedar arquivos estáticos criando uma staticpasta. Tudo o que você coloca nesta pasta se torna um ativo estático no aplicativo. Isso permite a veiculação de ativos como imagens ou CSS.

Você pode exportar o Next.js como páginas HTML estáticas para eliminar a renderização do servidor. Na pasta do projeto, **_next export_** gera páginas HTML estáticas que você pode hospedar em qualquer lugar. A exportação suporta quase todos os recursos, URLs dinâmicos, pré-busca, pré-carregamento e importações dinâmicas. Por padrão, não há configuração necessária. Ele gera arquivos HTML estáticos a partir do **_pages_** (diretório). O comando de exportação está dentro do **_package.json_**, então execute-o com **_npm run export._** Os arquivos de exportação aparecerão no **_out_** diretório.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Configuração zero com recursos avançados;
- app está pronto para produção sem problemas;
- opção HTML estática elimina a renderização do lado do servidor

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Personalizar rotas pode ser meio complicado de fazer

### 3 - Redux

Ferramentas úteis para trabalhar com React

- Site: [https://redux.js.org/](https://redux.js.org/)
- Repositório: [https://github.com/r](https://github.com/reduxjs/redux)[eduxjs/redu](https://github.com/reduxjs/redux)[x](https://github.com/reduxjs/redux)
- Estrelas do GitHub: mais de 45.000
- Desenvolvedor: The Moon
- Colaboradores: mais de 700

No React, é complicado passar muitos adereços e parâmetros de estado. Uma hierarquia de componentes pode ter muitos componentes. Um erro de parâmetro único em algum ponto da cadeia pode quebra toda a aplicação. Isso faz essa tarefa ser frustrante, quando a depuração de parâmetros tem muitos componentes.

Uma solução melhor é abstrair isso por meio de uma máquina de estado. Redux é um contêiner de estado para aplicações em JavaScript. Todo o estado da aplicação entra em único local. Para mudar de estado, inicie uma ação e deixe os redutores lidarem com o resto. Pense no Redux como uma máquina de estado que modifica as mudanças de estado emitindo ações. O envio de ações é a única maneira de alterar o estado. Os redutores não mudam de estado, mas retornam apenas um novo objeto quando o estado é alterado. Isso faz do redutor uma função pura que mantém o aplicativo previsível. Os bugs costumam rastrear onde há comportamento imprevisível; portanto, os redutores eliminam esse problema.

Redux é uma biblioteca autônoma que você pode usar em JavaScript. As bindings do React estão disponíveis para conectar com uma aplicação React com menos esforço. O disponibiliza o repositório Redux para o componente raiz. O connect é uma função que mapeia os estados para adereços para todos os componentes. A função de conexão alimenta os parâmetros necessários para que cada componente funcione.

Em um aplicativo React típico, há um único componente raiz com uma loja. Pode haver uma hierarquia de lojas Redux que dividem a árvore de estados. É como React, onde um único componente raiz pode ter muitos componentes pequenos.

Para configurar o Redux em um projeto React:

```
npm install --save redux react-redux
```

Certifique-se de tratar o Redux e o React-Redux como dependências separadas.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Abrace a programação sonora com funções puras;
- Bindings estão disponíveis para React;
- Automatiza o gerenciamento de Estado.

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Configurar do zro pode ser um pouco complicado

### 4 - Enzyme

Ferramentas úteis para trabalhar com React

- Site: [https://enzymejs.github.io/enzyme/](https://enzymejs.github.io/enzyme/)
- Repositório: [https://github.com/enzymejs/enzyme](https://github.com/enzymejs/enzyme)
- Estrelas do GitHub: mais de 15,000+
- Desenvolvedor: Airbnb
- Colaboradores: mais de 300

O Enzyme é como o jQuery para testar os componentes do React. Você pode renderizar componentes rasos sem um navegador e sem um headless. Você pode percorrer, procurar componentes e fazer afirmações. Isso reduz o ciclo de feedback porque elimina o navegador. A renderização superficial é útil porque não vai mais do que um nível. Isso isola o teste em um único nível em uma hierarquia de componentes do React.

A API da enziyme suporta a simulação de eventos. A **_simulate()_** função chama o manipulador de eventos em um único nó. Por exemplo, **_.simulate('click')_** chama **_onClick_**

O enzyma vem com um adaptador para cada versão do React. Portanto, **_enzyme-adapter-react-16_** funciona no React 16.4 ou superior. Para o React 16.3.0, use o **_enzyme-adapter-react-16.3_** adaptador. Para o Jest 15+, o Enzyme não precisa mais de nenhuma configuração especial. Para escrever testes, importe as funções React, Enzyme e o sistema em teste na parte superior.

Exemplo em código:

```
import React from 'react';
import { shallow } from 'enzyme';

import Foo from '../Foo'; // system under test

describe('A killer test suite', () => {
  it('should shallow render without a browser', () => {
    // arrange
    const component = shallow(<Foo />);

    // act
    const result = component.contains(<div className="foo">Bar</div>);

    // assert
    expect(result).toBe(true);
  });
});
```

#### Vantagens

Ferramentas úteis para trabalhar com React

- Renderização superficial isola componentes do React;
- API rica para encontrar nós de interesse;
- Não há necessidade de um navegador sem headless.

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Adaptadores podem ser perigosos a cada atualização do React

### 5 - ExtReact

Ferramentas úteis para trabalhar com React

### Do ZERO a Programador FullStack.

Neste treinamento você vai aprender tudo o que você precisa saber para se tornar um programador full stack javascript completo.

[QUERO ME INSCREVER AGORA](/programador-fullstack-8-semanas)

- Site: [https://www.sencha.com/products/extreact/#overview](https://www.sencha.com/products/extreact/#overview)
- Repositório: [https://github.com/sencha/ext-react](https://github.com/sencha/ext-react)
- Desenvolvedor: Sencha.

O React oferece uma abordagem baseada em componentes para a criação de aplicações Web, mas o React por si só não inclui nenhum componente. O ExtReact oferece componentes pré-criados, como menus, grades, gráficos e formulários, para oferecer funcionalidade. A comunidade de código aberto é grande e há muitos componentes disponíveis; no entanto, combater os problemas de compatibilidade entre muitas bibliotecas de componentes e o React é assustador. Uma ideia melhor é reduzir o risco, obtendo o máximo de componentes de menos bibliotecas ou, na melhor das hipóteses, uma única biblioteca. O ExtReact oferece um conjunto mais completo de componentes em um pacote profissional e inclui suporte comercial.

Para começar, você precisará do Node 8.11+, NPM 6+ e Java 8 & 11. Com uma avaliação gratuita, você pode efetuar login no repositório do NPM em [npm.sencha.com](https://npm.sencha.com/) . Instale o gerador de aplicativos com **_npm install -g @sencha/ext-react-gen_**. Em seguida, crie uma aplicação com ext-react-gen app \[nome do projeto\]. Vá para a pasta do projeto e execute um **_npm startaplicativo_** React para barebones.

Importe os componentes ExtReact do **_ext-react_** pacote. Um componente pode vir com seus próprios dados. Muitos acessórios estão disponíveis com funcionalidade pré-criada. Por exemplo, **_onSelect_** informa ao _**List**_ componente o que fazer ao clicar em um item da lista. Os classificadores estão disponíveis para classificar os itens da lista no componente.

Por exemplo, vamos imagina que precisamos importar um List componente, em termos de código séria algo assim:

```
import React, { Component } from 'react';
import { List } from '@sencha/ext-modern';

export default class BasicList extends Component {
  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'data/people.json'
    },
    sorters: ['first_name']
  });

  tpl = data => (
    <div>
      <div>{data.first_name}</div>
    </div>
  );

  onSelect = (list, record) => {
    console.log(`${record.get('first_name')}`);
  };

  render() {
    return (
      <List
        shadow
        itemTpl={this.tpl}
        store={this.store}
        onSelect={this.onSelect}
      />
    );
  }
}
```

O ExtReact oferece mais de 115 componentes de interface do usuário pré-criados com suporte comercial completo. Os componentes ExtReact são criados para uma integração perfeita durante a vida útil do aplicativo.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Ampla variedade de componentes React pré-construídos;
- Menos dependências sobre as muitas opções de código aberto;
- Componentes profissionais com suporte comercial

#### Desvantagem

Ferramentas úteis para trabalhar com React

- Dependência em Java (kkkkkkkkkk, brincadeira. Java é uma linguagem muito bacana.)

### 6 - React Dev Tools

Ferramentas úteis para trabalhar com React

- Site: [https://addons.mozilla.org/en-US/firefox/addon/react-devtools/](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Repositório: [https://github.com/facebook/react-devtools](https://github.com/facebook/react-devtools)
- Estrelas no GitHub: mais de 9.000
- Desenvolvedor: Facebook
- Colaboradores: mais de 100

As Ferramentas do desenvolvedor do React permitem inspecionar os componentes do React diretamente no navegador. Ele pode inspecionar uma hierarquia de componentes, com adereços e estado. É fornecido como uma extensão do navegador para o Chrome e Firefox. O navegador Opera pode instalar a extensão do Chrome com a opção de extensões do Chrome ativadas. O ícone da extensão acende nos sites usando o React e diz para abrir as ferramentas do desenvolvedor.

Nos aplicativos React, observe a guia React nas ferramentas do desenvolvedor. Clicar na guia mostra uma hierarquia de componentes e uma exibição em árvore será mostrada. Componentes com estado mostram um botão de recolhimento de árvore que tem uma cor diferente. Você pode navegar na árvore com as teclas de seta ou hjkl caso use o Vim. Clicar com o botão direito fornece opções como mostrar no painel de elementos, rolar para exibição ou mostrar código-fonte.

O painel lateral fornece mais informações sobre cada componente. Ele permite que você faça alterações no navegador e destaca essas alterações. Você pode manipular adereços e estado, além de armazenar objetos como uma variável global.

Use a barra de pesquisa para encontrar componentes pelo nome. Isso economiza seu tempo quando há muitos componentes em uma árvore. A barra de pesquisa suporta regex para fazer pesquisas precisas. Uma dica é encontrar o componente usando o inspetor DOM regular ou a guia Elementos. Escolha o elemento da página e mude para a guia Reagir. O componente é selecionado na árvore React. Clicar com o botão direito do mouse tem a opção de “Localizar o nó DOM”, que leva você de volta à guia regular.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Ajuda a visualizar componentes React em uma árvore
- Manipular e depurar componentes
- Ferramentas de pesquisa úteis para localizar determinado componente

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Complemento extra, mas oferece uma versão autônoma

### 7 - Redux Dev Tools

Ferramentas úteis para trabalhar com React

- Site: [https://addons](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)[.](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)[mozilla.org/en-US/firefox/addon/reduxdevtools/](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
- Repositório: [https://github.com/reduxjs/redux-devtools](https://github.com/reduxjs/redux-devtools)
- Estrelas do GitHub: mais de 10.000
- Desenvolvedor: The Moon
- Colaboradores: mais de 70

A Ferramentas do desenvolvedor Redux suportam hot reloading e ação de repetição. Trata-se de uma extensão do navegador, independente. O componente React está dentro do aplicativo host. A ferramenta permite inspecionar cada carga útil de estado e ação. Ou volte no tempo cancelando ações. Fazer alterações no código reavalia as ações marcadas como preparadas.

Instale a extensão através da Chrome Web Store ou dos complementos da Mozilla. O componente React está disponível para navegadores que não suportam a extensão. Alterações no seu projeto são necessárias para usar a extensão. A extensão deve ser configurada na loja Redux, junto com as opções de extensão.

Por exemplo, para configurar o Redux Developer Tools com opções:

```
const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    actionCreators,
    trace: true,
    traceLimit: 5
  })
);
```

As ações disponíveis no Dispatcher são originadas pelo actionCreators. Esta é uma lista de funções de ações. Importe todas as ações de interesse do projeto para essa variável. Os rastreadores incluirão o rastreamento de pilha para cada ação despachada. Inspecionar o guia Rastreio permite clicar para acessar o código. O valor padrão para esta opção é falso. Um limite de rastreamento define os quadros máximos de pilha mostrados, o padrão é 10.

A aplicação de qualquer middleware requer composeWithDevTools. Obtenha essa função do redux-devtools-extension pacote NPM. A applyMiddleware função entra nesta função como um parâmetro. Isso permite que a ferramenta dev funcione com o middleware.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Ferramenta de passagem de tempo do estado da aplicação
- Mantém o controle de alterações de código com hot realoding
- Rastreios de pilha de depuração por ação

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Configuração requer alterações no código do projeto

### 8 - Redux-immutable-state-invariant

Ferramentas úteis para trabalhar com React

- Site: [https://www.npmjs.com/package/redux-immutable-state-invariant](https://www.npmjs.com/package/redux-immutable-state-invariant)
- Repositório: [https://github.com/leoasis/redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant)
- Estrelas no GitHub: mais de 700
- Desenvolvedor: leoasis
- Colaboradores: mais de 10

O Redux-immutable-state-invariant é um middleware que gera um erro ao alterar o estado dentro ou entre despachantes. Os redutores assumem que os argumentos não mudam de estado. Toda vez que os redutores retornam o estado, ele deve ser um novo objeto. Uma boa prática é evitar o estado de mutação fora do redutor. Isso requer uma atenção a mais por parte do programado(a)r. Portanto, uma boa ideia é automatizar essa inspeção por meio de uma ferramenta.

Redux-immutable-state-invariant é útil para detectar erros apenas durante o desenvolvimento. Ela faz muitas cópias de objetos para reforçar a imutabilidade. Isso significa alto consumo de memória, o que prejudica o desempenho da aplicação. Por esse motivo, não ative essa ferramenta na produção. Uma ideia é definir uma variável de ambiente **_NODE\_ENV_**, por exemplo, para **_production_**.

Para fazer uso desta biblioteca como um middleware:

```
import { applyMiddleware, createStore } from 'redux';

let middleware = [];

// Be sure to ONLY add this middleware in development!
if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-immutable-state-invariant').default());
}

const store = createStore(
  applyMiddleware(...middleware)
);
```

Se você não está mudando de estado, a ferramenta desaparece. Mude o estado dentro ou entre despachantes e a ferramenta grita com uma mensagem de erro. Mantém você no seu melhor comportamento de programação, como qualquer boa ferramenta deveria.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Funciona com qualquer fluxo de trabalho;
- Automatiza a disciplina do programador;
- Gera erros com uma mensagem descritiva

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Muitas cópias de objetos afetam o desempenho.

### 9 - Redux-logger

Ferramentas úteis para trabalhar com React

- Site: [https://www.npmjs.com/package/redux-logger](https://www.npmjs.com/package/redux-logger)
- Repositório: [](https://github.com/leoasis/redux-immutable-state-invariant) [https://github.com/LogRocket/redux-logger](https://github.com/LogRocket/redux-logger)
- Estrelas no GitHub: mais de 4.000
- Desenvolvedor: LogRocket
- Colaboradores: mais de 40

### Do ZERO a Programador FullStack.

Neste treinamento você vai aprender tudo o que você precisa saber para se tornar um programador full stack javascript completo.

[QUERO ME INSCREVER AGORA](/programador-fullstack-8-semanas)

Um logger de ações para Redux. Captura as ações do expedidor no console de log do navegador. Vem com muitas opções e permite uma visão de cada ação despachada. À medida que as ações percorrem à aplicação, isso captura e permite que você faça drill de cada ação. Cada entrada de log captura o estado anterior e o atual e a ação do expedidor. Pense em cada ação como uma mensagem de log. O criador de logs permite que você veja como essas mensagens se parecem quando mudam de estado da aplicação.

Para usar o criador de logs, configure-o no repositório Redux:

```
import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';

const store = createStore(
  applyMiddleware(logger)
);
```

Verifique se o criador de logs é o último argumento **_applyMiddleware_** para capturar ações. Estão disponíveis opções para alterar o comportamento do criador de logs. Você precisará importar **_createLogger_** de **_redux-logger_**. Em seguida, chame a **_createLogger_** função com um objeto de opções. Por exemplo, **_predicate_** especifica uma função que é chamada antes de cada ação. Fazer **_(getState, action) => action.type !== UP\_COUNT_** filtra ações que aumentam a contagem. Uma **_collapsed_** opção é uma função que retorna true se o grupo de logs entrar em colapso. Fazer **_(getState, action) => action.type === DOWN\_COUNT_** reduz os tipos de ação que reduzem a contagem.

#### Vantagens

Ferramentas úteis para trabalhar com React

- Captura ações do expedidor como mensagens de log;
- Permite detalhar cada ação e inspecionar o estado da aplicação;
- opções permitem ajustar o que é capturado.

#### Desvantagens

Ferramentas úteis para trabalhar com React

- Somente logger do lado do cliente.

### Conclusão

Ferramentas úteis para trabalhar com React

A utilidade do React decorre de ser uma coleção de ferramentas e bibliotecas que funcionam bem. Essas ferramentas geralmente são leves, para que você possa usa como se fosse um plug-and-play. A programação não é reinventar a roda, mas reutilizar as soluções existentes que funcionam bem. A popularidade do React decorre do fato de que você pode escolher o que resolve o problema de imediato. Isso permite que você se concentre em problemas que ainda não têm uma boa solução. Espero que esse artigo lhe ajude, deixa um comentário de alguma outra ferramenta que não foi listadas aqui neste artigo e compartilha esse conteúdo com mais programadores e programadoras. Abraço e até o próximo conteúdo.

#### Veja também

Ferramentas úteis para trabalhar com React

- [6 Linguagens e Frameworks para aprender em 2020](/6-linguagens-e-frameworks-para-aprender-2020/)
- [Visite nosso canal do Youtube](https://www.youtube.com/channel/UCZKLK7o6IVayeEjkkoWLwbQ)

#### Vídeo Recomendado

Conheça o BigInt o Mais Novo (Tipo de Dados do Javascript )

https://www.youtube.com/watch?v=1ZsicM1eOeM&t=3s

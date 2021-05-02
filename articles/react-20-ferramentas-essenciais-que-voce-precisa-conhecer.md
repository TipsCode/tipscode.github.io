---
title: "19 Ferramentas essenciais para o React que você precisa conhecer"
date: "2020-11-09"
categories: 
  - "react"
description: 19 Ferramentas essenciais para o React. O ecossistema React evoluiu para uma lista crescente de ferramentas e bibliotecas de desenvolvimento. A abundância de ferramentas é um verdadeiro testemunho da popularidade do React.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

**_19 Ferramentas essenciais para o React. O ecossistema React evoluiu para uma lista crescente de ferramentas e bibliotecas de desenvolvimento. A abundância de ferramentas é um verdadeiro testemunho da popularidade do React._**

Para os desenvolvedores, pode ser um exercício estonteante navegar por esse labirinto que muda a uma velocidade muito rápida. Para lhe ajudar em relação a isso fiz uma compilação com **19 ferramentas essenciais** para o React, abaixo está essa lista **com as 19 ferramentas essenciais** para o react, técnicas e habilidades.

## 01 - Hooks

- Site Oficial: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
- Repositório: [https://github.com/facebook/react/tree/v16.8.0](https://github.com/facebook/react/tree/v16.8.0)
- Estrelas no GitHub: 157,000+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 16.14.0
- Colaboradores: 1.500+

Embora não seja estritamente uma ferramenta, qualquer desenvolvedor que trabalhe com o React em 2020 precisa estar familiarizado com os Hooks. Esta é uma nova adição ao React a partir da versão 16.8, que desbloqueia recursos úteis em componentes de função. Por exemplo, o hook **useState** permite que um componente de função tenha seu próprio estado, enquanto **useEffect** permite que você execute efeitos colaterais após a renderização inicial - por exemplo, manipular o DOM ou a obtenção de dados. Os hooks podem ser usados ​​para replicar métodos de ciclo de vida em componentes funcionais e permitir que você compartilhe código entre componentes.

Os seguintes hooks básicos estão disponíveis

- [useState](https://reactjs.org/docs/hooks-state.html) : para mutação de estado em um componente de função sem métodos de ciclo de vida;
- [useEffect](https://reactjs.org/docs/hooks-effect.html) : para executar funções pós-renderização, útil para disparar solicitações Ajax;
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) : para acessar dados de contexto do componente, mesmo fora dos props do componente

Vantagens

- Mitiga a complexidade do gerenciamento de estado;
- Suporta componentes de função;
- Incentiva a separação de responsabilidades

Desvantagens

- A troca de dados de contexto pode aumentar a carga cognitiva da aplicação

Se você quiser mais detalhes sobre o React Hooks [clique aqui](/react-hooks-guia-completo-passo-a-passo/)

## 02 - Componentes de Função

- Site Oficial: [](https://reactjs.org/docs/hooks-intro.html) [reactjs.org/docs/components-and-props](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- Repositório: [github.com/facebook/react](https://github.com/facebook/react/tree/v16.12.0)
- Estrelas no GitHub: 157,000+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 16.14.0
- Colaboradores: 1.500+

Com o advento dos Hooks, os componentes de função - uma forma declarativa de criar marcação JSX sem usar uma classe - estão se tornando mais populares do que nunca. Eles abraçam o paradigma funcional porque não gerenciam o estado nos métodos de ciclo de vida. Isso enfatiza o foco na marcação da IU sem muita lógica. Como o componente depende de adereços, ele se torna mais fácil de testar. Os adereços têm uma relação de um para um com a saída renderizada. Sem dúvidas das 19 Ferramentas essenciais para o React é uma que considero mais importante.

Esta é a aparência de um componente funcional no React:

```
function SenhorDeus(props) {
  return <h1>Vem senhor, {props.name}</h1>;
}

// Saída
"Vem senhor, Deus"
```

Vantagens

- Concentra-se na IU;
- Componente testável;
- Menos carga cognitiva.

Desvantagem

- Sem métodos de ciclo de vida

[![](/uploads/2020/11/JavaScript-NodeJS-React-1024x1024.png)](https://lp.tipscode.com.br/seminario-tipscode)

Evento 100% gratuito

## 03 - Create React App

- Site Oficial: [](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [https://create-react-app.dev/](https://create-react-app.dev/)
- Repositório: [github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
- Estrelas no GitHub: 82,000+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 3.4.1
- Colaboradores: 800+

O Create React é a ferramenta essencial para iniciar um novo projeto React. Ele gerencia todas as dependências do React por meio de um único pacote npm. Chega de lidar com Babel, webpack e etc.

Basta um comando para configurar um ambiente de desenvolvimento local, com suporte React, JSX e ES6. Mas isso não é tudo. O Create React também oferece recarregamento de módulo dinâmico (suas alterações são refletidas imediatamente no navegador durante o desenvolvimento), linting automático de código, um executor de teste e um script de construção para agrupar JS, CSS e imagens para produção.

É fácil começar:

```
npx create-react-apa nome-do-projeto
```

E é ainda mais fácil atualizar mais tarde. A cadeia de ferramentas dependência inteira é atualizado com **react-scripts** em **package.json**:

```
npm i react-scripts@latest
```

Vantagens

- Fácil de começar;
- Fácil de atualizar;
- Única meta

Desvantagens

- Sem renderização do lado do servidor, mas permite a integração

## 04 - Proxy Server

- Site Oficial: [](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [create-react-app.dev/docs/proxying-api-requests-in-development](https://create-react-app.dev/docs/proxying-api-requests-in-development)
- Repositório: [github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
- Estrelas no GitHub: 82,000+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 3.4.1
- Colaboradores: 800+

A partir da versão **react-scripts@0.2.3** ou superior, é possível fazer proxy de solicitações de API. Isso permite que a API de back-end e o projeto local Create React App coexistam. Do lado do cliente, fazer uma solicitação para **/meu-app-api/get-data** roteia a solicitação por meio do servidor proxy. Essa integração perfeita funciona tanto no desenvolvimento local quanto na pós-construção. Se o dev local for executado na porta **localhost:3000**, as solicitações de API passarão pelo servidor proxy. Depois de implantar ativos estáticos, ele passa por qualquer back-end que hospede esses ativos.

Para definir um servidor proxy em **package.json**:

```
"proxy": "http://localhost/meu-app-api-base-url"
```

Se a API de back-end estiver hospedada com um caminho relativo, defina a página inicial:

```
"homepage": "/relative-path"
```

Vantagens

- Integração perfeita com API de back-end;
- Elimina problemas de CORS;
- Fácil configuração.

Desvantagens

- Pode precisar de uma camada de proxy do lado do servidor com várias APIs. Essa das 19 Ferramentas essenciais para o React é muito show.

## 05 - PropTypes

- Site Oficial: [](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [npmjs.com/package/prop-types](https://www.npmjs.com/package/prop-types)
- Repositório: [github.com/facebook/prop-types](https://github.com/facebook/prop-types)
- Estrelas no GitHub: 3,600+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 15.7.2
- Colaboradores: 45+

PropTypes declara o tipo pretendido para o componente React e documenta sua intenção. Isso mostra um aviso no dev local se os tipos não corresponderem. Ele suporta todas as primitivas de JavaScript, como Boolean, Number, e String. Ele pode documentar quais adereços são necessários por meio isRequired.

Por exemplo:

```
import PropTypes;

MyComponent.propTypes = {
  boolProperty: PropTypes.bool,
  numberProperty: PropTypes.number,
  requiredProperty: PropTypes.string.isRequired
};
```

Vantagens

- Intenção do componente de documentos;
- Mostra avisos no dev local;
- Suporta todos os primitivos de JavaScript

Desvantagens

- Sem verificação de tipo de compilação

## 06 - TypeScript

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [typescriptlang.org/](https://www.typescriptlang.org/)
- Repositório: [github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript)
- Estrelas no GitHub: 65,000+
- Desenvolvido: Microsoft
- Versão atual da criação do artigo: 4.0.3
- Colaboradores: 530+

TypeScript oferece suporte a todas as bibliotecas e ferramentas React com declarações de tipo. O mesmo é um superconjunto do JavaScript, portanto, é possível desativar o verificador de tipo. Isso documenta a intenção e falha na construção quando não corresponde. Em projetos Create React App, ative-o transmitindo **\--template typescript** ao criar seu aplicativo. O suporte TypeScript está disponível a partir da versão **react-script@2.1.0.**

Para declarar um tipo de prop:

```
interface MyComponentProps {
  boolProp?: boolean; // optional
  numberProp?: number; // optional
  requiredProp: string;
}
```

Vantagens

- Verificação de tipo de compilação;
- Ótima maneira de aprimorar suas habilidades em JavaScript;
- Suporta todas as ferramentas e bibliotecas React, incluindo Create React App

Desvantagem

- Tem uma curva de aprendizado muito alta.

## 07 - Redux

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [redux.js.org/](https://redux.js.org/)
- Repositório: [github.com/reduxjs/redux](https://github.com/reduxjs/redux)
- Estrelas no GitHub: 54,000+
- Desenvolvido: Dan Abramov e Andrew Clark
- Versão atual da criação do artigo: 4.0.5
- Colaboradores: 800+

O Redux é um contêiner de gerenciamento de estado previsível para aplicativos JavaScript. Essa ferramenta vem com um armazenamento que gerencia os dados de estado.

A mutação de estado só é possível por meio de uma mensagem de despacho. O objeto de mensagem contém um tipo que sinaliza ao redutor qual mutação disparar. A recomendação é manter tudo do aplicativo em uma única loja.

Redux suporta vários redutores em uma única loja. Os redutores têm uma relação de um para um entre os parâmetros de entrada e o estado de saída. Isso torna os redutores funções puras. Das 19 Ferramentas essenciais para o React o Redux sem dúvida é um dos mais importantes.

Um redutor típico que sofre mutação pode ter a seguinte aparência:

```
const simpleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_UPDATE_DATA':
      return {...state, data: action.payload};

    default:
      return state;
  }
};
```

Vantagens

- Gerenciamento de estado previsível;
- Vários reducers em uma única loja;
- Reducers são funções puras

Desvantagem

- Configurar do zero pode ser um pouco doloroso

## 08 - React-Redux

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [react-redux.js.org/](https://react-redux.js.org/)
- Repositório: [github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux)
- Estrelas no GitHub: 18.500+
- Desenvolvido: Equipe Redux
- Versão atual da criação do artigo: 7.2.1
- Colaboradores: 220+

Se você quiser usar Redux em seus projetos React, logo descobrirá os vínculos oficiais do React para Redux. Isso vem em dois módulos principais: **Providere** e **connect**. O Provideré um componente React com um storeprop.

Este acessório é como uma única loja se conecta à marcação JSX. A connectfunção tem dois parâmetros: mapStateToPropse mapDispatchToProps.

É aqui que o gerenciamento de estado do Redux se conecta aos adereços de componentes. À medida que o estado muda ou dispara disparos, as ligações cuidam de definir o estado no React.

Esta é a aparência de uma conexão:

```
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state.simple;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({() => ({type: 'SIMPLE_UPDATE_DATA'})}, dispatch);

connect(mapStateToProps, mapDispatchToProps)(SimpleComponent);
```

Vantagens

- Ligações oficiais do React para Redux;
- Vincula-se a marcação JSX;
- Conecta componentes a uma única loja

Desvantagem

- A curva de aprendizado é um pouco íngreme

## 09 - React Router

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [reactrouter.com/](https://reactrouter.com/)
- Repositório: [github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)
- Estrelas no GitHub: 42,200+
- Desenvolvido: React Training
- Versão atual da criação do artigo: 5.2.0
- Colaboradores: 640+

React Router é a biblioteca de roteamento padrão de fato para React. Quando você precisar navegar por um aplicação React com várias visualizações, precisará de um roteador para gerenciar os URLs. O React Router cuida disso, mantendo a IU da aplicação e a URL em sincronia.

A biblioteca é composta por três pacotes:

- react-router;
- react-router-dom;
- react-router-native

O pacote principal do roteador é o **react-router**, enquanto os outros dois são específicos do ambiente. Você deve usar react-router-domse estiver criando um site e react-router-nativese estiver criando um aplicativo React Native.

Versões recentes do React Router introduziram o hooks, que permitem acessar o estado do roteador e realizar a navegação de dentro de seus componentes, bem como um padrão de renderização de rota mais recente:

```
<Route path="/">
  <Home />
</Route>
```

Se quiser saber mais sobre o que o React Router clique neste artigo [React Router v5: O guia completo](/react-router-versao-5-guia-completo/).

Vantagens

- O roteamento entre componentes é rápido;
- Animações e transições podem ser facilmente implementadas;
- Conecta componentes a uma única loja

Desvantagem

- Sem configuração adicional, os dados são baixados para visualizações que um usuário pode não visitar;
- Roteamento do lado do cliente (por meio do qual JavaScript é convertido em HTML) tem implicações de SEO.

## 10 - ESLint

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [eslint.org/](https://eslint.org/)
- Repositório: [github.com/lodash/lodash](https://github.com/lodash/lodash)
- Estrelas no GitHub: 17.000+
- Desenvolvido: Nicholas C. Zakas e a equipe ESLint
- Versão atual da criação do artigo: 7.11.0
- Colaboradores: 820+

ESLint é uma ferramenta de linting que pode ser usada para manter seu estilo de código consistente das, impor a qualidade do código e detectar erros potenciais e padrões ruins com antecedência, 19 Ferramentas essenciais para o React essa é indispensável. Ele oferece um plugin com regras de linting específicas do React e é frequentemente usado em conjunto com o guia de estilo React do Airbnb .

Embora ESLint possa ser executado através da linha de comando, vale a pena gastar algum tempo integrando-o ao editor de sua escolha. Muitos dos problemas que encontra podem ser corrigidos automaticamente e, juntamente com uma ferramenta como o mais bonito , ESLint pode seriamente ajudar a melhorar a qualidade de seu código, bem como a sua experiência global desenvolvedor.

Qualquer pessoa que usar o Create React perceberá que ele já vem com o ESLint habilitado e fornece um conjunto mínimo de regras destinadas a encontrar erros comuns.

Vantagens

- Flexível: qualquer regra pode ser alternada e muitas regras têm configurações extras que podem ser ajustadas;
- Extensível: muitos plug-ins disponíveis;
- Suporte para JSX e TypeScript

Desvantagens

- A integração do editor pode ser potencialmente incômoda;
- Pode potencialmente introduzir várias novas dependências para um projeto

## 11 - Lodash

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [lodash.com/](https://lodash.com/)
- Repositório: [github.com/lodash/lodash](https://github.com/lodash/lodash)
- Estrelas no GitHub: 46.500+
- Desenvolvido: John-David Dalton e Lodash team
- Versão atual da criação do artigo: 4.17.20
- Colaboradores: 300+

Lodash é uma biblioteca de utilitários JavaScript moderna, útil para componentes React. Por exemplo, eventos de entrada do formulário React, como **onChange** para disparar uma vez por pressionamento de tecla. Se o componente obtém dados de uma API de back-end, ele dispara solicitações uma vez por pressionamento de tecla. Isso spams a API de back-end e causa problemas quando muitas pessoas usam a IU. O Lodash vem com eventos depurados, que disparam uma solicitação de API com muitos pressionamentos de tecla.

Para configurar um evento com **onChange**:

```
onChange={(e) => debounce(updateDataValue(e.target.value), 250)}
```

Vantagens

- Dependência modular;
- Funciona bem com divisão de código;
- Fácil de usar

Desvantagem

- Saber quando debounce eventos não é imediatamente óbvio

## 12 - Axios

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [npmjs.com/package/axios](https://www.npmjs.com/package/axios)
- Repositório: [github.com/axios/axios](https://github.com/axios/axios)
- Estrelas no GitHub: 77.500+
- Desenvolvido: Equipe Axios
- Versão atual da criação do artigo: 0.20.0
- Colaboradores: 250+

Fazer solicitações HTTP para buscar ou salvar dados é uma das tarefas mais comuns de uma aplicação JavaScript do lado do cliente precisa fazer. E sem dúvida que nenhuma biblioteca é mais adequada para a tarefa do que axios, um cliente HTTP baseado em Promise com uma API fácil de usar.

A ferramenta suporta **async… await** para fazer solicitações Ajax do navegador. Ele suporta o tratamento de erros caso haja erros via catch. A API da ferramenta suporta solicitações HTTP, como GET, DELETE, POST, PUT e PATCH. Isso também funciona bem com chamadas de API Promise, como Promise.all() enviar solicitações HTTP em paralelo.

Semelhante à função do jQuery **$.ajax**, você pode fazer qualquer tipo de solicitação HTTP passando um objeto options para axios:

```
axios({
  method: 'post',
  url: '/login',
  data: {
    user: 'camilo',
    lastName: 'reyes'
  }
});
```

Vantagens

- Baseado em promessa;
- Suporta async / await;
- Suporta tratamento de erros

Desvantagens

- Não achei um ponto negativo assim claro. (Caso você saiba deixa aqui nos comentários)

## 13 - Jest

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [jestjs.io/](https://jestjs.io/)
- Repositório: [github.com/facebook/jest](https://github.com/facebook/jest)
- Estrelas no GitHub: 32.500+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 26.5.3
- Colaboradores: 1.000+

Jest é um framework de teste com foco na simplicidade para projetos JavaScript. A boa notícia é que ele vem integrado com o **Create React**. Funciona com projetos que usam Babel, TypeScript e Node.

Não há configuração na maioria dos projetos React. Os testes podem ser executados no modo de observação, que rastreia as alterações de código e executa novamente os testes. A API contém **ite expect** para começar rapidamente. 19 Ferramentas essenciais para o React, essa sobres teste você dev precisa conhece mais sobre teste, caso queira ler mais sobre o assunto de teste com react [clique aqui](/react-guia-completo-para-testes/)

Uma verificação de integridade para garantir que os testes sejam executados é:

```
it('says true is true', () => {
  expect(true).toBe(true);
});
```

Vantagens

- Fácil configuração com Create React App;
- API fluente;
- Roda em modo relógio

Desvantagem

- Estrutura um pouco grande para renderizar componentes React

## 14 - Enzima

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [jestjs.io/](https://jestjs.io/)
- Repositório: [github.com/facebook/jest](https://github.com/facebook/jest)
- Estrelas no GitHub: 19.000+
- Desenvolvido: Airbnb
- Versão atual da criação do artigo: 3.11.0
- Colaboradores: 350+

Enzyme é um utilitário de teste de JavaScript para React que torna mais fácil testar componentes. A API deve ser tão intuitiva quanto jQuery para travessia de componentes. Para obter o Enzyme, ele precisa de dois pacotes: enzymee um adaptador separado. O adaptador deve ser compatível com a versão do React. Por exemplo, enzyme-adapter-react-16para React ^16.4.0, enzyme-adapter-react-16.3for ~16.3.0, assim por diante e assim por diante. O adaptador precisa de um arquivo de configuração setupTest.jspara se integrar ao Jest.

Ao usar o React 16, instale o Enzyme com:

```
npm i --save-dev enzyme enzyme-adapter-react-16
```

Vantagens

- Suporta componentes React;
- Suporta o framework de teste Jest;
- API intuitiva.

Desvantagens

- Meio doloroso configurar um adaptador no Jest

## 15 - Storybook

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [storybook.js.org/](https://storybook.js.org/)
- Repositório: [github.com/storybookjs/storybook](https://github.com/storybookjs/storybook)
- Estrelas no GitHub: 54.000+
- Desenvolvido: Storybook
- Versão atual da criação do artigo: 6.0.26
- Colaboradores: 1100+

Esta é uma ferramenta de código aberto para teste manual de componentes React isoladamente. O Storybook fornece uma caixa para construir componentes para entrar em casos extremos difíceis de alcançar. Ele permite simular para que possa renderizar componentes em estados-chave que são difíceis de reproduzir. A configuração é automática com Create React App ao usar **react-scripts**. Cada história no Storybook pode ter como alvo um único componente com muitos estados. Os arquivos de histórias têm uma convenção **component.stories.js** para que possam ser encontrados rapidamente.

Para começar com o Storybook:

```
npx -p @storybook/cli sb init
```

Vantagens

- Cobre casos extremos difíceis de alcançar;
- Renderiza componentes na sandbox;
- Integra-se com Create React App

Desvantagem

- Difícil de automatizar testes

## 16 - React Bootstrap

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [react-bootstrap.github.io/](https://react-bootstrap.github.io/)
- Repositório: [github.com/react-bootstrap/react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- Estrelas no GitHub: 18.400+
- Desenvolvido: React Bootstrap
- Versão atual da criação do artigo: 1.3.0
- Colaboradores: 300+

Este é o framework de front-end mais popular reconstruída para React. Cada componente do Bootstrap é construído do zero como um componente React. Isso substitui o Bootstrap JavaScript e dependências de nukes como o jQuery. A versão mais recente é compatível com Bootstrap 4.5. O React Bootstrap funciona com os milhares de temas do Bootstrap já encontrados na versão 4. Cada componente tem acessibilidade em mente e é acessível por padrão. Ele oferece suporte para Criar aplicativo React pronto para uso, e temas personalizados também são suportados.

Para iniciar o React Bootstrap em um projeto React:

```
npm install react-bootstrap bootstrap
```

Vantagens

- Reconstruído do zero com componentes React;
- Acessibilidade em mente;
- Suporta Criar aplicativo React

Desvantagem

- Temas personalizados podem ser complicados em Create React App

## 17 - Material-UI

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [material-ui.com/](https://material-ui.com/)
- Repositório: [github.com/mui-org/material-ui](https://github.com/mui-org/material-ui)
- Estrelas no GitHub: 54.500+
- Desenvolvido: Material-UI
- Versão atual da criação do artigo: 4.9.3
- Colaboradores: 1.500+

O Material-UI oferece componentes React populares para um desenvolvimento web mais rápido e fácil. Permite construir seu próprio sistema de design ou começar com Material Design.

Existem modelos e temas disponíveis, premium e gratuitos. Os temas premium têm uma etiqueta de preço dependendo da funcionalidade. Material-UI vem através de um pacote npm para instalação rápida.

Para começar com Material-UI:

```
npm install @material-ui/core
```

Veja alguns exemplos:

![React 20 Ferramentas essenciais](/uploads/2020/11/exemplo-materialui.jpg)

Exemplos material ui com React

Vantagens

- Construir uma interface de usuário poderosa com pouco esforço;
- Oferece muitos componentes;
- Oferece muitos modelos

Desvantagens

- alguns modelos premium tem valores altos (Porém não sei se isso é uma desvantagem)

## 18 - React DevTools

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [reactjs.org/new-react-devtools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- Repositório: [github.com/facebook/react](https://github.com/facebook/react/tree/v16.12.0)
- Estrelas no GitHub: 157.000+
- Desenvolvido: Facebook
- Versão atual da criação do artigo: 16.14.0
- Colaboradores: 1.500+

Uma das ferramentas mais importantes no conjunto de ferramentas de qualquer desenvolvedor React deve ser React Developer Tools - uma extensão de navegador para Chrome e Firefox . Isso permite que você inspecione facilmente uma árvore React, incluindo a hierarquia de componentes, adereços, estado e muito mais.

Depois de instaladas, as ferramentas de desenvolvimento fornecerão duas novas guias no console do seu navegador - Componentes e Perfilador . Clicar no primeiro mostrará todos os componentes na árvore atual e permitirá que você os filtre por nome, enquanto o último permite registrar informações de desempenho sobre seu aplicativo React.

Esta é uma ferramenta indispensável quando se trata de depurar um aplicativo React que consiste em mais de um punhado de componentes.

Vantagens

- Ajuda você a entender o que está acontecendo em seu aplicativo React;
- Torna a depuração consideravelmente menos dolorosa;
- Veja quais sites estão usando React na produção.

Desvantagem

- Leve curva de aprendizado

## Awesome React

- Site Oficial[:](https://reactjs.org/docs/components-and-props.html#function-and-class-components) [github.com/enaqx/awesome-react](https://github.com/enaqx/awesome-react)
- Estrelas no GitHub: 39.500+
- Desenvolvido: n/a
- Versão atual da criação do artigo: n/a
- Colaboradores: 550+

Vamos terminar esta lista com … outra lista! Desta vez, awesome-react - um repositório GitHub contendo uma coleção de coisas incríveis relacionadas ao ecossistema React.

O repo tem uma seção de ferramentas que contém muitas das ferramentas listadas neste artigo (e muito mais além), bem como seções de tutoriais , demonstrações , vídeos , conferências , ReactNative , GraphQL e muito mais. Seja o que for que você esteja procurando no mundo do React, este é um ótimo lugar para começar.

Vantagens

- Para todos os níveis
- Cobre uma ampla variedade de recursos;
- Mantido ativamente atualizado

Desvantagem

- Uma ampla variedade de escolhas

## Conclusão

Como mostrado, o ecossistema do React explodiu nos últimos anos. É a ferramenta ideal para empresas que desejam reutilizar componentes do React em um pacote consistente. Cada ferramenta é autônoma com poucas interdependências. Para 2020, minha recomendação é dar a essas ferramentas pelo menos uma chance.

### Convite Especial para o Seminário Web TipsCode

---
title: "React Router versão 5: Um guia completo Passo a passo"
date: "2020-05-08"
tags: 
  - "alisson-suassuna"
  - "aprender-javascript"
  - "aprender-react"
  - "desenvolvimento-web"
  - "frontend"
  - "javascript"
  - "programacao"
  - "react"
  - "react-router-versao-5"
  - "router"
  - "tipscode"
description: O [React Router](https//reacttraining.com/react-router/) é a biblioteca de roteamento padrão do React. Quando você precisar navegar por uma aplicação React com várias visualizações, precisará de um roteador para gerenciar suas URLs. O React Router cuida disso, mantendo a interface do usuário da aplicação e a URL sincronizadas.
imgArticle: /thumbnail-article/react-router.png
imgHome: /thumbnail-home/react-router.png
---

O [React Router](https://reacttraining.com/react-router/) é a biblioteca de roteamento padrão do React. Quando você precisar navegar por uma aplicação React com várias visualizações, precisará de um roteador para gerenciar suas URLs. O React Router cuida disso, mantendo a interface do usuário da aplicação e a URL sincronizadas.

### Introdução

React Router versão 5

React é uma biblioteca popular para criar aplicações de página única (SPAs) que são renderizadas no lado do cliente. Uma SPA pode ter várias views (também conhecidas como páginas ) e, diferentemente das aplicações convencionais de várias páginas, a navegação nessas views não deve resultar no recarregamento da página inteira. Em vez disso, queremos que as views sejam renderizadas em linha na página atual. O usuário final, acostumado a aplicativos de várias páginas, espera que os seguintes recursos estejam presentes em um SPA:

- Cada view em uma aplicação deve ter uma URL que especifique exclusivamente essa view. Isso é para que o usuário possa marcar o URL como referência posteriormente. Por exemplo **_www.example.com/products_**;
- O botão Voltar e Avançar do navegador deve funcionar conforme o esperado;
- As views aninhadas geradas dinamicamente também devem ter um URL próprio. Por exemplo, em **_tipscode.com/artigos/react/10_** onde 10/ é o ID do produto.

O roteamento é o processo de manter a URL do navegador sincronizada com o que está sendo renderizado na página. O React Router permite lidar com o roteamento declarativamente . A abordagem de roteamento declarativo permite controlar o fluxo de dados em sua aplicação, dizendo "a rota é para está dessa forma":

```
<Route path="/noticia" component={noticia} />
```

Você pode colocar seu componente em qualquer lugar que desejar que sua rota seja renderizada. Desde , e todos os outros Reagir Router APIs que vamos estar lidando com são apenas componentes, você pode facilmente se acostumar com roteamento em Reagir.

Uma observação antes de começar. Há um equívoco comum de que o React Router é uma solução de roteamento oficial desenvolvida pelo Facebook. Na realidade, é uma biblioteca de terceiros amplamente popular por seu design e simplicidade. Se os seus requisitos estiverem limitados aos roteadores para navegação, você poderá implementar um roteador personalizado do zero, sem muito aborrecimento. No entanto, entender como o básico do React Router fornecerá informações melhores sobre como um roteador deve funcionar. Então vamos fazer uma configuração na prática como exemplo.

### Configurando o React Router

React Router versão 5

Presumo que você já tenha um ambiente de desenvolvimento em funcionamento. Caso contrário, como alternativa, você pode usar o Create React App para gerar os arquivos necessários para criar um projeto básico do React. Esta é a estrutura de diretórios padrão gerada pelo Create React App:  
  

![React Router versão 5](/uploads/2020/05/Estrutura-React-Router.png)

Figura 01: Estrutura

O React Router versão 5 é composta por três pacotes: **_react-router_**, **_react-router-dom_**, e **_react-router-native_**. react-router é o pacote principal do roteador, enquanto os outros dois são específicos do ambiente. Você deve usar **_react-router-dom_** se estiver criando um site ou react-router-native estiver instalado em sua máquina e você estiver usando o React Native.

Use o npm ou yarn para instalar react-router-dom:

```
npm install --save react-router-dom
```

### Meu Minicurso onde você cria um game do zero com javascript passo a passo gratuito

Nesse curso você vai aprender a criar um JOGO do zero passo a passo, linha a linha com JavaScript, HTML5 e CSS3, neste curso sua lógica de programação e sua capacidade de resolver problemas complexos com JS SERÁ resolvidos. Clique agora em se inscrever-se

[Inscrever-se](https://bit.ly/mini-curso-criando-game-js)

### Noções básicas sobre o React Router

React Router versão 5

Veja esse exemplo de rota:

```
<Router>/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            /* Os componentes de link são usados para vincular a outras visualizações */
            <li>
              <Link to="/">Página inicial</Link>
            </li>
            <li>
              <Link to="/categoria">Categoria</Link>
            </li>
            <li>
              <Link to="/artigos">React</Link>
            </li>
          </ul>
        </nav>
        /* Os componentes da rota são renderizados se o caminho prop corresponder ao URL atual*/
        <Route path="/" component={paginaInicial} />
        <Route path="/categoria" component={categoria} />
        <Route path="/artigos" component={react} />
      </div>
    );
  }
}
  <Route exact path="/" component={Home} />
  <Route path="/category" component={Category} />
  <Route path="/login" component={Login} />
  <Route path="/products" component={Products} />
</Router>
```

#### Router

React Router versão 5

Você precisa de um componente de router e vários componentes de rota para configurar uma rota básica, como exemplificado acima. Como estamos construindo uma aplicação baseado em navegador, podemos usar dois tipos de roteadores da API do React Router:

1. BrowserRouter;
2. HashRouter

A principal diferença entre eles é evidente nos URLs que eles criam:

```
// <BrowserRouter>
http://example.com/about

// <HashRouter>
http://example.com/#/about
```

O mais popular entre os dois usa a API de histórico do HTML5 para acompanhar o histórico do seu router, por outro lado, usa a parte de hash da URL ( **_window.location.hash_**) para lembrar as coisas. Se você pretende oferecer suporte a navegadores herdados, é uma boa.

Envolva o componente em torno do componente App.

###### index.js

```
/* Import statements */
import React from "react";
import ReactDOM from "react-dom";

/* App é o ponto de entrada para o código React.*/
import App from "./App";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

Nota: Um componente do router pode ter apenas um único elemento filho. O elemento filho pode ser um elemento HTML - como um <div> ou um componente de reação.

Para o React Router funcionar, você precisa importar a API relevante da **_react-router-dom_** biblioteca. Aqui eu importei o **_BrowserRouter_** para index.js. Também importei o **_Appcomponente_** do **_App_**.js, como você deve ter adivinhado, é o ponto de entrada para react componentes.

O código acima cria uma instância do histórico para todo o componente da aplicação. Deixe-me apresentá-lo com mais detalhes

#### history

React Router versão 5

**_history_** é uma biblioteca JavaScript que permite gerenciar facilmente o histórico da sessão em qualquer lugar onde o JavaScript for executado. **_history_** fornece uma **_API_** mínima que permite gerenciar a pilha de histórico, navegar, confirmar a navegação e persistir o estado entre as sessões.

Cada componente do router cria um objeto de histórico que controla o local atual ( **_history.location_**) e também os locais anteriores em uma pilha. Quando o local atual é alterado, a exibição é renderizada novamente e você obtém uma sensação de navegação. Como a localização atual muda? O objeto de história possui métodos como **_history.push()_** e **_history.replace()_** para cuidar disso. **_history.push()_** é chamado quando você clica em um componente e **_history.replace()_** é chamado quando você usa. Outros métodos - como **_history.goBack()_** e **_history.goForward()_**\- são usados ​​para navegar pela pilha de histórico retornando ou encaminhando uma página.

Continuando, temos Links e Rotas.

#### Links e Rotas

React Router versão 5

O componente é o mais importante no **_React Router_**. Ele renderiza uma interface do usuário se o local atual corresponder ao caminho da rota. Idealmente, um componente deve ter um suporte nomeado **_path e_**, se o nome do caminho corresponder ao local atual, ele será renderizado.

O componente, por outro lado, é usado para navegar entre as páginas. É comparável ao elemento âncora HTML. No entanto, o uso de links âncora resultaria em uma atualização do navegador, o que não queremos. Portanto, podemos usar para navegar para um URL específico e ter a exibição renderizada novamente sem uma atualização do navegador.

Vamos ao exemplo de um.

#### Exemplo 01: Router básico

React Router versão 5

###### src / App.js

```
/* Import statements */
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

/* Componente Pagina Inicial */
const PaginaInicial = () => (
  <div>
    <h2>Página Inicial</h2>
  </div>
);

/* Componente Categoria */
const categoria= () => (
  <div>
    <h2>Categoria</h2>
  </div>
);

/* Componente de Artigos */
const artigos = () => (
  <div>
    <h2>Artigos</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Pagina inicial</Link>
          </li>
          <li>
            <Link to="/categoria">Categoria</Link>
          </li>
          <li>
            <Link to="/artigos">React Router</Link>
          </li>
        </ul>
      </nav>
      /* Os componentes da rota são renderizados se o caminho prop corresponder ao URL atual */
      <Route path="/" component={PagiInicial} />
      <Route path="/categoria" component={categoria} />
      <Route path="/artigos" component={artigos} />
    </div>
  );
}
```

Declaramos os componentes para a página inicial, Categoria e Artigos dentro **_App.js_**. Embora esteja tudo bem por enquanto, quando o componente começar a crescer, é melhor ter um arquivo separado para cada componente. Como regra geral, normalmente crio um novo arquivo para um componente se ele ocupar mais de 20 linhas de código. A partir da segunda demonstração, criarei um arquivo separado para componentes que cresceram demais como exemplo para você entender melhor beleza.

Dentro do componente App, escrevemos a lógica do router. O caminho é correspondido com a localização atual e um componente é renderizado. O componente que deve ser renderizado é passado como um segundo suporte.

Aqui **_/corresponde_** a ambos / e **_/categoria_**. Portanto, ambas as rotas são correspondidas e renderizadas. Como evitamos isso? Você deve passar os **_exact= {true}_** objetos para o router com **_path='/'_**:

```
<Route exact={true} path="/" component={PaginaInicial} />
```

Se você deseja que uma rota seja renderizada apenas se os caminhos forem exatamente iguais, use os adereços exatos.

#### Router aninhado

React Router versão 5

Para criar rotas aninhadas, precisamos entender melhor como funciona. Então vamos fazer isso agora mesmo.

Router aninhadas possui três adereços que você pode usar para definir o que é renderizado:

- **_component_**: Já vimos isso em ação. Quando a URL é correspondida, o roteador cria um elemento React a partir do componente especificado usando **_React.createElement_**;
- **_render_**: Isso é útil para renderização embutida. O objeto de renderização espera uma função que retorne um elemento quando o local corresponder ao caminho da rota;
- **_children_**: O **_prop_** filho é semelhante ao render, pois espera uma função que retorne um elemento React. No entanto, os filhos são renderizados independentemente de o caminho corresponder ao local ou não.

#### Caminho e partida

React Router versão 5

O caminho é usado para identificar a parte da URL que o roteador deve corresponder. Ele usa a biblioteca **_Path-to-RegExp_** para transformar uma string de caminho em uma expressão regular. Ele será comparado com o local atual.

Se o caminho e o local do roteador forem correspondidos com sucesso, um objeto é criado e nós o chamamos de objeto de partida (o termo em inglês é match. Esse nome em pt-br eu particularmente acho estranho rsrs). O objeto de partida (match) carrega mais informações sobre a URL e o caminho. Esta informação é acessível através de suas propriedades, listadas abaixo:

- **_match.url_**: Uma sequência que retorna a parte correspondente da URL. Isso é particularmente útil para criar <**_link_**\> aninhados;
- **_match.path_**: Uma string que retorna a string do caminho da rota, ou seja, <**_routerpath=""_**\>. Usaremos isso para criar <_**Router**_\>s aninhados;
- **_match.isExact_**: Um booleano que retorna true se a correspondência for exata (sem nenhum caractere à direita);
- **_match.params_**: Um objeto que contém pares de chave / valor da URL analisada pelo pacote Path-to-RegExp.

Agora que sabemos um pouco sobre <Route>s, vamos construir um roteador com rotas aninhadas.

#### Switch Component

React Router versão 5

Antes de seguirmos para o código de demonstração, quero mostrar o componente <**_Switch_**\>. Quando vários <**_Router_**\>s são usados ​​juntos, todas as rotas de partida (match) são renderizadas inclusive. Considere este código do exemplo 01 acima. Adicionei uma nova rota para demonstrar por que <**_Switch_**\> é útil:

```
<Route exact path="/" component={PaginaInicial}/>
<Route path="/artigos" component={Artigos}/>
<Route path="/categoria" component={Categorias}/>
<Route path="/:id" render = {()=> (<p> Quero que este texto apareça em todas as rotas que não sejam '/', '/artigos' e '/categoria' </p>)}/>
```

Se a URL for **_/artigos_**, todas as rotas que correspondem ao local **_/artigos_** são renderizadas. Portanto, o caminho com **_:id_** renderizado junto com o componente Artigos. Isso ocorre por design. No entanto, se esse não é o comportamento esperado, você deve adicionar o componente às suas rotas. Com <**_Switch_**\>, apenas o primeiro filho que corresponde ao local é renderizado.

#### Exemplo 02: Router Aninhados

React Router versão 5

Anteriormente, criamos rotas para /, **_/categorias/artigos_**. E se quiséssemos um URL de formulário seria algo do tipo /categorias/formulario?

###### src / App.js

```
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Categorias from "./Categorias";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
          <li>
            <Link to="/artigos">Artigos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/artigos" component={Artigos} />
      </Switch>
    </div>
  );
}
```

Diferente da versão anterior do **_React Router_**, nas versões 4 e seguintes, os <**_Router_**\>s aninhados devem preferencialmente entrar no componente pai. Ou seja, o componente Categoria é o pai aqui, e declararemos as rotas para categorias **_/:nome_** dentro do componente pai.

###### src / Categorias.jsx

```
import React from "react";
import { Link, Route } from "react-router-dom";

const Categorias = ({ match }) => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to={`${match.url}/noticias`}>Noticias</Link>
        </li>
        <li>
          <Link to={`${match.url}/artigos`}>Artigos sobre programação</Link>
        </li>
        <li>
          <Link to={`${match.url}/cursos`}>Cursos de qualidade para programação</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:nome`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.nome} </h3>
          </div>
        )}
      />
    </div>
  );
};
export default Categorias;
```

Primeiro, declaramos alguns links para as rotas aninhadas. Como mencionado anteriormente, **_match.ur_**l será usado para criar links aninhados e **_match.path_** para rotas aninhadas. Se você está tendo problemas para entender o conceito de partida (match), console.log(match)fornece algumas informações úteis que podem ajudar a esclarecê-lo.

```
<Route
  path={`${match.path}/:nome`}
  render={({ match }) => (
    <div>
      <h2> {match.params.nome} </h2>
    </div>
  )}
/>
```

Esta é a nossa primeira tentativa de roteamento dinâmico. Em vez de codificar as rotas, usamos uma variável dentro do nome do caminho. :nameé um parâmetro de caminho e captura tudo depois category/até que outra barra seja encontrada. Portanto, um nome de caminho como products/running-shoescriará um paramsobjeto da seguinte maneira:

```
{
  nome: "As noticias está ok";
}
```

Os dados capturados devem estar acessíveis em **_match.params_** ou **_props.match.params_** dependendo de como os objetos são transmitidos. A outra coisa interessante é que usamos um **_render_** para da um suporte. **_render_** adereços são bastante úteis para funções embutidas que não exigem um componente próprio.

#### Exemplo 03: Router Aninhados com parâmetros de camiho

React Router versão 5

Vamos complicar um pouco mais as coisas, não é? Um router no mundo real terá que lidar com dados e exibi-los dinamicamente. Suponha que tenhamos os dados do produto retornados por uma API do servidor no formulário abaixo.

### Crie seu próprio Evernote e leve seu portfólio para outro nível

Você já pensou em desenvolver um App inspirado no Evernote, que é um dos APPs mais famosos do mundo? 💻 Clique no botão saiba mais para mais detalhes

[Saiba Mais!](/programador-fullstack-8-semanas)

###### src / Artigos.jsx

```
const productData = [
  {
    id: 1,
    nome: "TipsCode",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available",
  },
  {
    id: 2,
    nome: "Seja um profissional Fullstack",
    descricao:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Out of Stock",
  },
  {
    id: 3,
    nome: "artigo sobre C#",
    descricao:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available",
  },
  {
    id: 4,
    nome: "artigo sobre Python",
    descricao:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock",
  },
];
```

Agora precisamos criar as seguintes rotas:

- **_/artigos_**: Isso deve exibir uma lista de produtos.
- /**_artigos/:artigosId_**: Se um produto com o **_:artigosId_** existir, ele deve exibir os dados do artigos e, se não, ele deve exibir uma mensagem de erro.

###### src / Artigos.jsx

```
const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      nome: "Artigo sobre React",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Avaliação",
    },

   
  ];
  
  const linkList = artigoData.map((artigo) => {
    return (
      <li>
        <Link to={`${match.url}/${artigo.id}`}>{artigo.nome}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3> Artigos </h3>
          <ul> {linkList} </ul>
        </div>
      </div>

      <Route
        path={`${match.url}/:artigotId`}
        render={(props) => <Artigo data={artigoData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Por favor, selecione o artigo</div>}
      />
    </div>
  );
};
```

Primeiro, criamos uma lista de <**_Link_**\>s usando os **_artigoData.id_** e os armazenamos **_linkList_**. A rota recebe um parâmetro na cadeia de caminho que corresponde à do ID do artigo.

```
<Route
  path={`${match.url}/:artigoId`}
  render={(props) => <Artigo data={artigoData} {...props} />}
/>
```

Você pode ter esperado em component = { Artigo } vez da função de renderização embutida. O problema é que precisamos passar artigoData para o componente Artigo junto com todos os acessórios existentes. Embora existam outras maneiras de fazer isso, acho esse método o mais fácil. {…props}usa a sintaxe de dispersão do ES6 para passar todo o objeto de props para o componente.

Aqui está o código para o componente Artigo.

###### src / Artigos.jsx

```
const Artigo = ({ match, data }) => {
  var artigo = data.find(p => p.id == match.params.artigoId);
  var artigoData;

  if (artigo)
    artigoData = (
      <div>
        <h3> {artigo.nome} </h3>
        <p>{artigo.descricao}</p>
        <hr />
        <h4>{artigo.status}</h4>{" "}
      </div>
    );
  else artigoData = <h2> Desculpa, O artigo não existe </h2>;

  return (
    <div>
      <div>{artigoData}</div>
    </div>
  );
};
```

O método **_find_** é usado para pesquisar no array por um objeto com uma propriedade ID igual a _**match.params.productId**_. Se o artigo existir, artigoData será exibido. Caso contrário, a mensagem "O artigo não existe" é renderizada.

#### Como proteger Rotas

React Router versão 5

Vamos ver algumas técnicas relacionadas à proteção de rotas. Portanto, se alguém tentar acessar **_/admin_**, será necessário fazer login primeiro. No entanto, há algumas coisas que precisamos cobrir antes de podermos proteger rotas.

###### Redirecionar

Como os redirecionamentos do lado do servidor, substituirá o local atual na pilha do histórico por um novo local. O novo local é especificado pelo tosuporte. Veja como usaremos :

```
<Redirect to={{pathname: '/login', state: {from: props.location}}}
```

Portanto, se alguém tentar acessar o **_/adminlogoff_**, será redirecionado para a /login rota. As informações sobre o local atual são transmitidas por estado, para que, se a autenticação for bem-sucedida, o usuário possa ser redirecionado de volta ao local original. Dentro do componente filho, você pode acessar essas informações em **_this.props.location.state_**.

#### Rotas Personalizads

React Router versão 5

Uma rota personalizada é uma palavra sofisticada para uma rota aninhada dentro de um componente. Se precisarmos decidir se uma rota deve ser renderizada ou não, escrever uma rota personalizada é o caminho a percorrer. Aqui está a rota personalizada declarada entre outras rotas.

###### src / App.js

```
<nav className="navbar navbar-light">
  <ul className="nav navbar-nav">
    ...
    <li><Link to="/admin">Área administrativa</Link></li>
  </ul>
</nav>

<Switch>
  <Route exact path="/" component={PaginaInicial} data={data} />
  <Route path="/categorias" component={Categorias} />
  <Route path="/login" component={Login} />
  <PrivateRoute path="/admin" component={Admin} />
  <Route path="/artigos" component={Artigos} />
</Switch>
```

**_fakeAuth.isAuthenticated_** retorna true se o usuário estiver logado e false caso contrário.

Aqui está a definição para **_PrivateRoute_**:

###### src / App.js

```
/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
```

A rota renderiza o componente Admin se o usuário estiver conectado. Caso contrário, o usuário será redirecionado para /login. O bom dessa abordagem é que ela é evidentemente mais declarativa e **_PrivateRoute_** é reutilizável.

Finalmente, aqui está o código para o componente Login:

### Crie seu próprio Evernote e leve seu portfólio para outro nível

Você já pensou em desenvolver um App inspirado no Evernote, que é um dos APPs mais famosos do mundo? 💻 Clique no botão saiba mais para mais detalhes

[Saiba Mais!](/programador-fullstack-8-semanas)

###### src / Login.js

```
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>Você deve fazer login para visualizar a página em {from.pathname}</p>
      <button onClick={login}>Fazer login</button>
    </div>
  );
}

/* Função de autenticação falsa */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};
```

A linha abaixo demonstra a [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) de objetos , que faz parte da especificação ES6:

```
const { from } = this.props.location.state || { from: { pathname: "/" } };
```

### Conclusão

React Router versão 5

Como você viu neste artigo, o React Router é uma biblioteca poderosa que complementa o React por criar rotas melhores e declarativas. Diferente das versões anteriores do React Router, na v5, tudo é "apenas componentes". Além disso, o novo padrão de design se encaixa perfeitamente na maneira React de fazer as coisas.

#### Conteúdos Recomendados

React Router versão 5

- [5 Projetos para você dominar o CSS3](/5-projetos-para-voce-dominar-css3/)
- [20 sites criados com React](/conheca-20-sites-criados-com-react/)
- [React vs Angular](/react-vs-angular-qual-e-o-melhor/)
- [5 Habilidades que um programador não pode negligenciar](https://www.youtube.com/watch?v=J49R5KTVsHo&t=6s)
- [Como trabalhar remoto](https://www.youtube.com/watch?v=sCEnknD5Tso)
- [5 ideias de projetos](https://www.youtube.com/watch?v=l0UZ-OqN-20&t=1s)

### Meu Minicurso onde você cria um game do zero com javascript passo a passo gratuito

Nesse curso você vai aprender a criar um JOGO do zero passo a passo, linha a linha com JavaScript, HTML5 e CSS3, neste curso sua lógica de programação e sua capacidade de resolver problemas complexos com JS SERÁ resolvidos. Clique agora em se inscrever-se

[Inscrever-se](https://bit.ly/mini-curso-criando-game-js)

###### Último vídeo publicado em nosso canal do Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/ItxwWzETcZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

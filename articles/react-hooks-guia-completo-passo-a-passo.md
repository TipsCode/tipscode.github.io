---
title: "API React Hooks Guia completo (Passo a Passo)"
date: "2020-05-23"
tags: 
  - "api-react-hooks-guia-completo"
  - "hooks"
  - "javascript"
  - "nodejs"
  - "react"
  - "react-hook-guia-completo"
  - "tipscode"
description: Neste artigo, você aprenderá e entenderá o que são os Hooks do React, os hooks básicos do React disponíveis e também exemplos de como escrevê-los para suas aplicações em React. No processo, você também conhecerá alguns hooks adicionais que foram enviados para a versão 16.8 e também como escrever seus próprios hooks no React.
imgArticle: /thumbnail-article/api-react-hooks-passo-a-passo.png
imgHome: /thumbnail-home/api-react-hooks-passo-a-passo.png
---

Neste artigo, você aprenderá e entenderá o que são os Hooks do React, os hooks básicos do React disponíveis e também exemplos de como escrevê-los para suas aplicações em React. No processo, você também conhecerá alguns hooks adicionais que foram enviados para a versão 16.8 e também como escrever seus próprios hooks no React.

Quando o React 16.8 foi lançado oficialmente no início de fevereiro de 2019, foi fornecido com uma API adicional que permite usar o estado e outros recursos no React sem escrever uma classe. Essa API adicional é chamada Hooks e está se tornando popular no ecossistema React, desde projetos de código aberto até o uso em aplicações em produção.

O React Hooks são totalmente ativados, o que significa que reescrever o código existente não é necessário, eles não contêm nenhuma alteração de interrupção e estão disponíveis para uso com o lançamento do React 16.8. Alguns desenvolvedores curiosos já usavam a API Hooks antes mesmo de ser lançada oficialmente, mas naquela época não era estável e era apenas um recurso experimental. Agora é estável e recomendado para os desenvolvedores do React usarem.

### O que é React Hooks?

API React Hooks Guia completo

![React Hooks Guia completo](/uploads/2020/05/react-hooks.png)

Figura 01: React Hooks Guia completo

O React Hooks são funções integradas que permitem que os desenvolvedores do React usem métodos de estado e de ciclo de vida em componentes funcionais; eles também trabalham em conjunto com o código existente, para que possam ser facilmente adotados em uma base de código. A maneira como os Hooks foram lançados ao público foi que eles permitiram que os desenvolvedores usassem o estado em componentes funcionais, mas, sob o capô, os Hooks são muito mais poderosos que isso. Eles permitem que os React Developers desfrutem dos seguintes benefícios:

- **Reutilização** de código aprimorado;
- Melhor **composição** de Código;
- Melhores **padrões**;
- Compartilhamento de **lógica** não visual como uso de hooks personalizados;
- **Flexibilidade** para subir e descer components de árvore

Com o React Hooks, os desenvolvedores têm o poder de usar componentes funcionais para quase tudo o que precisam fazer, desde renderizar a interface do usuário até lidar com o estado e também a lógica - o que é bastante interessante.

### Problemas que o React Hooks busca solucionar

API React Hooks Guia completo

![React Hooks Guia completo](/uploads/2020/05/problematica-png-1.png)

Figura 02: React Hooks Guia completo

De acordo com a [documentação](https://reactjs.org/docs/hooks-intro.html) oficial do [ReactJS](https://reactjs.org/docs/hooks-intro.html), esse recurso foi desenvolvido para solucionar os seguintes problemas:

- **Reutilizar a lógica estável entre componentes era um pouco complicada**: _Com o Hooks, você pode reutilizar a lógica entre seus componentes sem alterar sua arquitetura ou estrutura;_
- **Componentes complexos se tornam difíceis de entender**: _Quando os componentes aumentam e realizam muitas operações, fica difícil entender a longo prazo. Os hooks resolvem isso permitindo que você separe um componente único em várias funções menores, com base em quais partes desse componente separado estão relacionadas (como configurar uma assinatura ou buscar dados), em vez de precisar forçar uma divisão com base nos métodos do ciclo de vida;_
- **As explicações estavam ficando cada vez mais complexas**: _As aulas são um obstáculo ao aprendizado do React; você precisaria entender como **this** funciona com JavaScript, que difere de outras linguagens. O React Hooks resolve esse problema, permitindo que os desenvolvedores usem o melhor dos recursos do React sem precisar usar classes._

### Regras do React Hooks

API React Hooks Guia completo

### Aprenda a criar um jogo com JavaScript

treinamento você aprenderá:  
\- Lógica de Programação  
\- Manipulação do DOM  
\- Criar Elementos HTML dinâmicos com JavaScript  
\- Fazer cálculos complexos de um jeito simples;  
\- Muito mais.  
Tudo isso GRATUITO.

[Saiba Mais!](https://bit.ly/mini-curso-criando-game-js)

Existem duas regras principais que devem ser seguidas estritamente, conforme declarado pela equipe principal do React, na qual são descritas na documentação da proposta do React Hooks.

- Certifique-se de não usar Hooks dentro de loops, condições ou funções aninhadas;
- Use apenas hooks dentro das Funções de reação.

### Hooks Básicos

API React Hooks Guia completo

Existem 10 hooks embutidos que foram enviados com o React 16.8, mas os hooks básicos (comumente usados) incluem:

- **useState();**
- **useEffect();**
- **useContext();**
- **useReducer()**

Estes são os 4 hooks básicos que são comumente usados ​​pelos desenvolvedores do React que adotaram o React Hooks em suas bases de código.

###### useState()

O useState() hooks que permite que os desenvolvedores do React atualizem, manipulem o estado dentro dos componentes funcionais sem precisar convertê-lo em um componente de classe. Vamos usar o trecho de código abaixo, trata-se de um componente simples do contador de idade e vamos usá-lo para explicar a função hooks **useState()**

```
function App() {
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1)

  return 
      <div> 
          I am {age} Years Old 
        <div> 
        <button onClick={handleClick}>Increase my age! </button>
      </div>
   </div>
}
```

Se você notou, nosso componente parece bastante simples, conciso e agora é um componente funcional e também não possui o nível de complexidade que um componente de classe teria.

O hooks useState() recebe um estado inicial como argumento e, em seguida, retorna, usando a desestruturação do array em JavaScript, as duas variáveis ​​do array podem ser nomeadas como. A primeira variável é o estado real, enquanto a segunda variável é uma função destinada à atualização do estado, fornecendo um novo estado.

###### useEffect()

O hooks useEffect() aceita uma função que conteria código funcional. Em componentes funcionais, efeitos como mutações, assinaturas, cronômetros, log e outros efeitos não podem ser colocados dentro de um componente funcional, pois isso levaria a muitas inconsistências quando a interface do usuário é renderizada e também a erros confusos.

Ao usar o useEffect(), a função é passada para ele será executada logo após a renderização ter sido exibida na tela. Os efeitos são basicamente vistos na maneira imperativa de criar interfaces de usuário bastante diferentes da maneira funcional do React.

Por padrão, os efeitos são executados principalmente após a conclusão da renderização, mas você tem a opção de acioná-los também quando certos valores mudam.

O hooks useEffect() é usado principalmente para efeitos colaterais que geralmente são usados ​​para interações com a API do navegador / DOM ou com a busca ou assinatura de dados externos do tipo API. Além disso, se você já está familiarizado com o funcionamento dos métodos do ciclo de vida do React, também pode pensar em usar o useEffect() como montagem, atualização e desmontagem de componentes - tudo combinado em uma única função. Permite replicar os métodos do ciclo de vida em componentes funcionais.

Usaremos os trechos de código abaixo para explicar a maneira mais básica possível, usando o hooks useEffect().

Exemplo 01: Definir o estado da sua aplicação:

```
import React, {useState} from 'react';
function App() {
    //Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};
export default App
```

Assim como discutimos na seção anterior sobre como usar o useState() para manipular o estado dentro dos componentes funcionais, usamos no nosso snippet de código para definir o estado da aplicação que renderiza meu nome completo.

Exemplo 02: Chamar o Hooks com useEffect():

```
import React, {useState, useEffect} from 'react';
function App() {
 
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    //Call the use effect hook
    useEffect(() => {
      setName({name: 'Alisson', surname: 'Suassuna'})
    }, [])
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surame}</h3>
        </div>
    );
};
export default App
```

Agora importamos o useEffect() e também utilizamos a useEffect() que é umafunção para definir o estado de nossa propriedade de nome e sobrenome.

Você deve ter notado que o useEffect() no segundo argumento, que é um array vazia; isso ocorre porque ele contém uma chamada para a setFullName no qual não há uma lista de dependências. Passar o segundo argumento impedirá uma cadeia infinita de atualizações ( componentDidUpdate()) e também permitirá que nosso useEffect() atue como componentDidMount que é um método de ciclo de vida e será renderizado uma vez sem renderizar novamente todas as alterações na árvore.

Também podemos usar alterar a propriedade title da nossa aplicação dentro do useEffect() chamando a a função setTitle(), assim:

```
import React, {useState, useEffect} from 'react';
function App() {
  
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    //Call the use effect hook
    useEffect(() => {
      setName({name: 'Alisson', surname: 'Suassuna'})
      setTitle({'My Full Name'}) //Set Title
    }, [])
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surame}</h3>
        </div>
    );
};
export default App
```

###### useContext()

O hooks **_useContext(_**) aceita um objeto de contexto, ou seja, o valor retornado **_React.createContexte_**, em seguida, retorna o valor atual do contexto para esse contexto.

Esse hooks fornece aos componentes funcionais acesso fácil ao contexto da aplicação React. Antes do hook useContext() introduzir o hooks, você precisaria configurar um contextType para acessar seu estado global transmitido de algum provedor em um componente de classe.

Basicamente, o hooks useContext() funciona com a API do React Context, que é uma maneira de compartilhar dados profundamente em toda a aplicação, sem a necessidade de passar manualmente os acessórios da aplicação por vários níveis. Agora, o uso do useContext() é um pouco mais fácil.

Os trechos de código abaixo mostrarão como a API de contexto funciona e como o useContextHook a torna melhor.

Veja a forma normal de usar a API do context:

```
import React from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();
function App() {
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
```

Vamos agora detalhar o trecho de código e explicar cada conceito.

Abaixo, estamos criando um contexto chamado NumberContext. Ele é utilizado para retornar um objeto com dois valores: { Provider, Consumer }.

```
const NumberContext = React.createContext();
```

Em seguida, usamos o Providervalor retornado do NumberContextque criamos para disponibilizar um valor específico para todos os filhos.

```
function App() {
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}
```

Com isso, podemos usar o Consumer onde está retornado do NumberContextque onde criamos para obter o valor que disponibilizamos para todas as componentes filho.

```
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));

```

Observe como conseguimos obter o valor do **_Appcomponente_** para o **_Displaycomponente_**, agrupando nosso conteúdo em um **_NumberContext.Consumere_** usando o método render **_props_** para recuperar o valor e renderizá-lo.

Tudo funciona bem e o método de adereços de renderização que usamos é um padrão muito bom para lidar com dados dinâmicos, mas, a longo prazo, ele introduz um aninhamento e confusão desnecessários, se você não estiver acostumado.

###### Usando o método useContext()

Para explicar o useContext método, reescrevemos o **_Displaycomponente_** usando o gancho **_useContext_**.

```
// import useContext (or we could write React.useContext)
import React, { useContext } from 'react';

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}
```

É tudo o que precisamos para mostrar nosso valor. Bem arrumado, certo? Você chama o useContext() e passa o objeto de contexto que criamos e obtemos o valor dele.

Nota: Não esqueça que o argumento transmitido ao hooks **_useContext_** deve ser o próprio objeto de contexto e qualquer componente que chame o **_useContext_** sempre será renderizado novamente quando o valor do contexto for alterado.

###### useReducer()

O useReducergancho é usado para manipular estados complexos e transições em estado. Ele recebe uma reducerfunção e também uma entrada de estado inicial; depois, ele retorna o estado atual e também uma dispatchfunção como saída por meio da destruição da matriz.

O código abaixo é a sintaxe adequada para usar o useReducer hook.

```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

É uma espécie de alternativa ao hook useState; geralmente é preferível useState quando você tem uma lógica de estado complexa relacionada a vários subvalores ou quando o próximo estado depende do anterior.

### Outros Hooks disponíveis

API React Hooks Guia completo

- **useCallback()**: Esse hook retorna uma função de retorno de chamada que é memorizada e que muda apenas se uma dependência na árvore de dependência é alterada;
- **useMemo()**: Este hook retorna um valor memorizado, você pode passar uma função "create" e também um array de dependências. O valor retornado usará apenas o valor memorizado novamente se uma das dependências na árvore de dependências for alterada;
- **useRef()**: Esse hook retorna um objeto **_ref_** mutável cuja **_.currentpropriedade_** é inicializada no argumento passado ( initialValue). O objeto retornado estará disponível durante toda a vida útil do componente;
- **useImperativeHandle()**: Esse hook é usado para personalizar o valor da instância disponibilizado para componentes-pai ao usar refs no React;
- **useLayoutEffect()**: Esse hook semelhante ao useEffectgancho, no entanto, é acionado de forma síncrona após todas as mutações do DOM. Também é renderizado da mesma maneira que componentDidUpdatee componentDidMount;
- **useDebugValue()**: Esse hook pode ser usado para exibir um rótulo de ganchos personalizados nas Ferramentas de Desenvolvimento do React. É muito útil para depurar com o React Dev Tools.

### Aprenda a criar um jogo com JavaScript

treinamento você aprenderá:  
\- Lógica de Programação  
\- Manipulação do DOM  
\- Criar Elementos HTML dinâmicos com JavaScript  
\- Fazer cálculos complexos de um jeito simples;  
\- Muito mais.  
Tudo isso GRATUITO.

[Saiba Mais!](https://bit.ly/mini-curso-criando-game-js)

### Hooks Personalizados

API React Hooks Guia completo

Um "hook personalizado" é uma função JavaScript cujos nomes são prefixados com a palavra **_use_** podem ser usados ​​para chamar outros hooks. Também permite extrair a lógica do componente em funções reutilizáveis; são funções JavaScript normais que podem usar outros Hooks dentro dele e também contêm uma lógica stateful comum que pode ser usada dentro de vários componentes.

```
import { useState } from "react";

export const useInfiniteScroll = (start = 30, pace = 10) => {
  const [limit, setLimit] = useState(start);
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLimit(limit + pace);
    }
  };
  return limit;
};
```

Esse hook personalizado aceita dois argumentos que são **_starte_** e **_pace_**. O argumento de início é o número inicial dos elementos a serem renderizados enquanto o argumento de ritmo é o número subseqüente dos elementos a serem renderizados. Por padrão, os argumentos **_starte_** e **_pace_** são definidos como **_30 e_** **_10 respectivamente_**, o que significa que você pode realmente chamar o Hook sem argumentos e esses valores padrão serão usados.

Portanto, para usar esse hook em uma aplicação React, devemos usá-lo com uma API on-line que retorna dados 'falsos':

```
import React, { useState, useEffect } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";

const App = () => {
  let infiniteScroll = useInfiniteScroll();

  const [tableContent, setTableContent] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => setTableContent(json));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.slice(0, infiniteScroll).map(content => {
            return (
              <tr key={content.id}>
                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                <td style={{ paddingTop: "10px" }}>{content.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
```

O código acima renderizará uma lista de dados falsos ( userIDe title) que fazem uso do gancho de rolagem infinito para exibir o número inicial de dados na tela.

### Conclusões

API React Hooks Guia completo

Espero que você tenha deste artigo. Da uma olhadinha nos demais materiais que preparei para você aqui em baixo

Se você tiver alguma dúvida, deixe-a na seção de comentários e terei prazer em responder a todos!

### Do zero à programação júnior em 8 semanas

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a Programação Web Javascript focada no mercado de trabalho.  
Passo a passo do treinamento:  
\- Introdução a Web + HTML 5  
\- CSS + Bulma  
\- Javascript + lógica de programação  
\- Git e Github  
\- Javascript moderno (ES6+)  
\- React  
\- NodeJs + MongoDB  
\- Como criar um APP inspirado no Evernote  
\- Como preparar seu portfólio e encontrar Jobs

[Saiba Mais!!](/programador-fullstack-8-semanas)

#### Mais conteúdos que você poderá gosta:

- **[Expressões Regulares Um guia para Iniciantes](/expressoes-regulares-guia-completo-iniciante/)**
- [**15 Componentes Incríveis do React**](/15-componentes-incriveis-do-react/)
- **[Qual é a Diferença entre Sass e SCSS?](/qual-a-diferencas-entre-sass-e-scss/)**

### Aprenda a criar um jogo com JavaScript

treinamento você aprenderá:  
\- Lógica de Programação  
\- Manipulação do DOM  
\- Criar Elementos HTML dinâmicos com JavaScript  
\- Fazer cálculos complexos de um jeito simples;  
\- Muito mais.  
Tudo isso GRATUITO.

[Saiba Mais!](https://bit.ly/mini-curso-criando-game-js)

#### Nosso canal no Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-mGgOz5NEA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

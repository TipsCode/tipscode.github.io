---
title: "React: Guia completo para testa suas aplicações"
date: "2020-07-08"
categories: 
  - "react"
tags: 
  - "alisson-suassuna"
  - "componente-react"
  - "componentes"
  - "jest"
  - "react"
  - "react-dom"
  - "react-teste"
  - "tipscode"
description: Neste artigo, apresentarei uma ferramenta de teste do React chamada Jest, juntamente com a popular biblioteca Enzyme, projetada para testar os componentes do React. Apresentarei as técnicas de teste do Jest, incluindo execução de testes, teste de componentes do React, entre outros. Se você é novo no no mundo dos teste e quer saber como começar, este artigo lhe será muito útil porque começaremos com uma introdução ao teste. No final, você estará entendendo um pouco mais e testando aplicações escritas com React usando Jest e Enzyme.
imgArticle: /thumbnail-article/react-para-iniciantes.png
imgHome: /thumbnail-home/react-para-iniciantes.png
---

Neste artigo, apresentarei uma ferramenta de teste do React chamada **_Jest_**, juntamente com a popular biblioteca _**Enzyme**_, projetada para testar os componentes do React. Apresentarei as técnicas de teste do Jest, incluindo: execução de testes, teste de componentes do React, entre outros. Se você é novo no no mundo dos teste e quer saber como começar, este artigo lhe será muito útil porque começaremos com uma introdução ao teste. No final, você estará entendendo um pouco mais e testando aplicações escritas com React usando Jest e Enzyme.

## Introdução

![react](/uploads/2020/07/man-pointing-on-laptop-screen-3981798-1024x682.jpg)

Figura 01: Teste com React

Teste é uma revisão linha por linha de como seu código será executado. Um conjunto de testes para uma aplicação compreende vários bits de código para verificar se aplicação está sendo executado com êxito e sem erros. Os testes também são úteis quando são feitas atualizações no código. Após atualizar um trecho de código, você pode executar um teste para garantir que a atualização não quebre a funcionalidade já existente.

### Por que Testa?

É bom entender por que estamos fazendo algo antes de fazê-lo. Então, por que testar e qual é o seu propósito?

O primeiro objetivo do teste é impedir a regressão. Regressão é o reaparecimento de um bug que havia sido corrigido anteriormente. Faz com que um recurso pare de funcionar como pretendido após a ocorrência de um determinado evento;

O teste garante a funcionalidade de componentes complexos e aplicativos modulares;

Os testes são necessários para o desempenho efetivo de um aplicativo ou produto de software.

O teste torna um aplicativo mais robusto e menos propenso a erros. É uma maneira de verificar se o seu código faz o que você quer que ele faça e se o seu aplicativo funciona conforme o planejado para seus usuários.

Vamos examinar os tipos de teste e o que eles fazem.

### TESTE DE UNIDADE

Nesse tipo de teste, unidades ou componentes individuais do software são testados. Uma unidade pode ser uma função, método, procedimento, módulo ou objeto individual. Um teste de unidade isola uma seção do código e verifica sua exatidão, a fim de validar que cada unidade do código do software tenha o desempenho esperado.

No teste de unidade, procedimentos ou funções individuais são testados para garantir que eles estejam funcionando corretamente e todos os componentes são testados individualmente. Por exemplo, testar uma função ou se uma instrução ou loop em um programa está funcionando corretamente se enquadra no escopo do teste de unidade.

### Teste de Componentes

O teste de componente verifica a funcionalidade de uma parte individual de um aplicativo. Os testes são realizados em cada componente isoladamente de outros componentes. Geralmente, os aplicativos React são compostos de vários componentes; portanto, o teste de componentes lida com o teste desses componentes individualmente.

Por exemplo, considere um site que tenha páginas da web diferentes com muitos componentes. Cada componente terá seus próprios subcomponentes. Testar cada módulo sem considerar a integração com outros componentes é chamado de teste de componente.

Testes como este no React requerem ferramentas mais sofisticadas. Portanto, precisaríamos de ferramentas Jest e, às vezes, mais sofisticadas, como Enzyme, que discutiremos brevemente mais adiante.

### Teste Instantâneo

Um teste de captura instantânea garante que a interface do usuário (UI) de um aplicativo Web não seja alterada inesperadamente. Ele captura o código de um componente em um momento no tempo, para que possamos comparar o componente em um estado com qualquer outro estado possível.

Aprenderemos sobre o teste de instantâneo em uma seção posterior.

### Vantagens e Desvantagens

O teste é excelente e deve ser feito, mas possui vantagens e desvantagens.

#### Vantagens

- Impede regressão inesperada;
- Ele permite que o desenvolvedor se concentre na tarefa atual, em vez de se preocupar com o passado;
- Ele permite a construção modular de um aplicativo que seria complexo demais para ser construído;
- Reduz a necessidade de verificação manual.

#### Desvantagens

- Você precisa escrever mais código, além de depurar e manter;
- Falhas de teste não críticas podem fazer com que o aplicativo seja rejeitado em termos de integração contínua.

## Introdução Ao Jest

![React](/uploads/2020/07/jest-1.png)

Figura 02: Jest - React

O [Jest](https://jestjs.io/en/) é uma estrutura de teste de JavaScript deliciosa, com foco na simplicidade. Pode ser instalado com [npm](https://www.npmjs.com/) ou fio. O Jest se encaixa em uma categoria mais ampla de utilitários, conhecidos como corredores de teste . Funciona muito bem para aplicativos React, mas também funciona bem fora dos aplicativos React.

A [enzima](https://enzymejs.github.io/enzyme/) é uma biblioteca usada para testar os aplicativos [React](/react-hooks-guia-completo-passo-a-passo/). Ele foi projetado para testar componentes e possibilita escrever asserções que simulam ações que confirmam se a interface do usuário está funcionando corretamente.

Jest e Enzyme se complementam tão bem que, neste artigo, usaremos os dois.

### Processo de Execução de um Teste com o Jest

Nesta seção, estaremos instalando o Jest e escrevendo testes. Se você é novo no React, recomendo usar o [Create React App](https://create-react-app.dev/), pois ele está pronto para uso e é enviado com o Jest.

```
npm init react-app my-app
```

Precisamos instalar o Enzyme \*\*\*\* e enzyme-adapter-react-16com react-test-renderer(o número deve ser baseado na versão do React que você está usando).

```
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```

Agora que criamos nosso projeto com Jest e Enzyme, precisamos criar um setupTest.jsarquivo na srcpasta do projeto. O arquivo deve ficar assim:

```
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
```

Isso importa a enzima e configura o adaptador para executar nossos testes.

Antes de continuar, vamos aprender algumas noções básicas. Algumas coisas importantes são muito usadas neste artigo e você precisará entendê-las.

itou test Você passaria uma função para esse método e o executor de testes executaria essa função como um bloco de testes;

describe Este método opcional é para agrupar qualquer número de itou testinstruções;

expect Essa é a condição que o teste precisa passar. Ele compara o parâmetro recebido com o correspondente. Também oferece acesso a vários matchers que permitem validar coisas diferentes. Você pode ler mais sobre isso na documentação .

mount Esse método renderiza o DOM completo, incluindo os componentes filhos do componente pai, nos quais estamos executando os testes;

shallow Isso renderiza apenas os componentes individuais que estamos testando. Não processa componentes filho. Isso nos permite testar componentes isoladamente.

### Criando Arquivo de Teste

Como o Jest sabe o que é um arquivo de teste e o que não é? A primeira regra é que qualquer arquivo encontrado em qualquer diretório com o nome \_\_test\_\_seja considerado um teste. Se você colocar um arquivo JavaScript em uma dessas pastas, o Jest tentará executá-lo quando você ligar para o Jest, para o bem ou para o mal. A segunda regra é que o Jest reconhecerá qualquer arquivo com o sufixo .spec.jsou .test.js. Ele pesquisará os nomes de todas as pastas e todos os arquivos em todo o seu repositório.

Vamos criar nosso primeiro teste, para um miniaplicativo React criado para este tutorial. Você pode cloná-lo no [GitHub](https://github.com/daacode/react-jest) . Execute npm installpara instalar todos os pacotes e, em seguida, npm startinicie o aplicativo. Verifique o README.mdarquivo para obter mais informações.

Vamos abrir App.test.jspara escrever nosso primeiro teste. Primeiro, verifique se nosso componente de aplicativo é renderizado corretamente e se especificamos uma saída:

```
it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

No teste acima, o primeiro teste, with shallow, verifica se nosso componente de aplicativo é renderizado corretamente sem travar. Lembre-se de que o shallowmétodo renderiza apenas um único componente, sem componentes filhos.

O segundo teste verifica se especificamos uma h1saída de tag "Exibir conta de usuário ativo" em nosso componente de aplicativo, com um correspondente Jest de toEqual.

Agora, execute o teste:

```
npm run test 
/* OR */
npm test
```

A saída no seu terminal deve ser assim:

```
 PASS  src/App.test.js
  √ renders without crashing (34ms)
  √ renders Account header (13ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        11.239s, estimated 16s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

Como você pode ver, nosso teste passou. Isso mostra que temos um conjunto de testes nomeado App.test.js, com dois testes bem-sucedidos quando o Jest foi executado. Falaremos sobre o teste de instantâneo mais tarde, e você também verá um exemplo de falha no teste.

#### Ignorando Ou Isolando Um Teste

Ignorar ou isolar um teste significa que, quando o Jest é executado, um teste marcado específico não é executado.

```
it.skip("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});
```

Nosso primeiro teste será ignorado porque usamos o skipmétodo para isolar o teste. Portanto, ele não será executado ou fará alterações em nosso teste quando o Jest for executado. Somente o segundo será executado. Você também pode usar it.only().

É um pouco frustrante fazer alterações em um arquivo de teste e depois executar manualmente npm testnovamente. O Jest possui um bom recurso chamado modo de observação, que observa alterações no arquivo e executa testes de acordo. Para executar o Jest no modo de exibição, você pode executar npm test -- --watchou jest --watch. Eu também recomendaria deixar o Jest em execução na janela do terminal pelo restante deste tutorial.

#### Funções Mock

Um mock é uma duplicata convincente de um objeto ou módulo sem qualquer funcionamento interno real. Pode ter um pouquinho de funcionalidade, mas comparado à coisa real, é uma farsa. Pode ser criado automaticamente pelo Jest ou manualmente.

Por que devemos zombar? A zombaria reduz o número de dependências - ou seja, o número de arquivos relacionados que precisam ser carregados e analisados ​​quando um teste é executado. Portanto, o uso de muitas zombarias faz com que os testes sejam executados mais rapidamente.

As funções simuladas também são conhecidas como "espiões", porque permitem espionar o comportamento de uma função chamada diretamente por algum outro código, em vez de apenas testar a saída.

Há duas maneiras de simular uma função: criando uma função de simulação para usá-la no código de teste ou escrevendo uma simulação manual para substituir uma dependência de módulo.

As zombarias manuais \*\*\*\* são usadas para remover a funcionalidade com dados simulados. Por exemplo, em vez de acessar um recurso remoto, como um site ou um banco de dados, convém criar uma simulação manual que permita usar dados falsos.

Usaremos uma função simulada na próxima seção.

#### Testando Componentes do React

A seção combinará todo o conhecimento que adquirimos até o momento para entender como testar os componentes do React. O teste envolve garantir que a saída de um componente não tenha sido alterada inesperadamente para outra coisa. Construir componentes da maneira correta é de longe a maneira mais eficaz de garantir testes bem-sucedidos.

Uma coisa que podemos fazer é testar os adereços dos componentes - especificamente, testar se os adereços de um componente estão sendo passados ​​para outro. O Jest e a API Enzyme nos permitem criar uma função simulada para simular se objetos estão sendo transmitidos entre componentes.

Temos que passar os props da conta de usuário do Appcomponente principal para o Accountcomponente. Precisamos fornecer detalhes da conta do usuário Accountpara renderizar a conta ativa dos usuários. É aqui que a zombaria é útil, permitindo testar nossos componentes com dados falsos.

Vamos criar um mock para os useradereços:

```
const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};
```

Criamos uma função de simulação manual em nosso arquivo de teste e a envolvemos nos componentes. Digamos que estamos testando um grande banco de dados de usuários. Não é aconselhável acessar o banco de dados diretamente de nosso arquivo de teste. Em vez disso, criamos uma função simulada, que nos permite usar dados falsos para testar nosso componente.

```
describe("", () => {
  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  });
});
```

Temos dois testes acima e usamos uma describecamada que leva o componente a ser testado. Ao especificar os props e valores que esperamos que sejam aprovados no teste, podemos prosseguir.

No primeiro teste, verificamos se os objetos que passamos para o componente montado são iguais aos objetos simulados que criamos acima.

Para o segundo teste, passamos os acessórios do usuário para o Accountcomponente montado . Em seguida, verificamos se podemos encontrar o

elemento que corresponde ao que temos no Accountcomponente. Quando executamos o conjunto de testes, você verá que o teste é executado com êxito.

Também podemos testar o estado do nosso componente. Vamos verificar se o estado da mensagem de erro é igual a nulo:

```
it("renders correctly with no error message", () => {
  const wrapper = mount();
  expect(wrapper.state("error")).toEqual(null);
});
```

Neste teste, verificamos se o estado do erro de nosso componente é igual a nulo, usando um toEqual()correspondente. Se houver uma mensagem de erro em nosso aplicativo, o teste falhará quando executado.

Na próxima seção, veremos como testar os componentes React com o teste de instantâneo, outra técnica incrível.

#### Teste Rápido

O teste de captura instantânea captura o código de um componente em um momento, a fim de compará-lo a um arquivo de referência instantâneo armazenado ao lado do teste. É usado para acompanhar as alterações na interface do usuário de um aplicativo.

A representação de código real de uma captura instantânea é um arquivo JSON, e esse JSON contém um registro da aparência do componente quando a captura instantânea foi feita. Durante um teste, o Jest compara o conteúdo desse arquivo JSON com a saída do componente durante o teste. Se combinarem, o teste passa; caso contrário, o teste falha.

Para converter um wrapper Enzyme em um formato compatível com o teste de captura instantânea Jest, precisamos instalar enzyme-to-json:

```
npm install --save-dev enzyme-to-json
```

Vamos criar nosso teste de instantâneo. Quando o executamos pela primeira vez, o instantâneo do código desse componente será composto e salvo em uma nova \_\_snapshots\_\_pasta no srcdiretório

```
it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
```

Quando o teste acima for executado com êxito, o componente atual da interface do usuário será comparado ao existente.

Agora, vamos executar o teste:

```
npm run test
```

Quando o conjunto de testes for executado, um novo instantâneo será gerado e salvo na \_\_snapshots\_\_pasta. Quando executamos um teste posteriormente, o Jest verifica se os componentes correspondem ao instantâneo.

Conforme explicado na seção anterior, esse shallowmétodo do pacote Enzyme é usado para renderizar um único componente e nada mais. Não renderiza componentes filhos. Em vez disso, fornece uma boa maneira de isolar o código e obter melhores informações durante a depuração. Outro método, denominado mount, é usado para renderizar o DOM completo, incluindo os componentes filhos do componente pai, nos quais estamos executando os testes.

Também podemos atualizar nosso instantâneo. Vamos fazer algumas alterações em nosso componente para que nosso teste falhe, o que acontecerá porque o componente não corresponde mais ao que temos no arquivo de instantâneo. Para fazer isso, vamos alterar a  
tag em nosso componente de  
Loading…  
para Fetching Users…  
. Quando o teste for executado, é isso que obteremos no terminal:

```
 FAIL  src/App.test.js (30.696s)
  × renders correctly (44ms)

  ● renders correctly

    expect(received).toMatchSnapshot()
    Snapshot name: `renders correctly
1

    - Snapshot
    + Received

      
        
          Display Active Users Account Details
        
        
    - Loading...
    +     Fetching Users...
        
      

       7 | it("renders correctly", ()
=> {
       8 |   const wrapper = shallow();
    >  9 |   expect(toJson(wrapper)).toMatchSnapshot();
         |                           ^      10 | });
      11 |
      12 | /* it("renders without crashing", () => {

      at Object. (src/App.test.js:9:27)

 › 1 snapshot failed.
Snapshot Summary
 › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   1 failed, 1 total
Time:        92.274s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

Se queremos que nosso teste seja aprovado, alteramos o teste para o estado anterior ou atualizamos o arquivo de captura instantânea. Na linha de comando, o Jest fornece instruções sobre como atualizar o instantâneo. Primeiro, pressione wna linha de comando para mostrar mais e, em seguida, pressione upara atualizar o instantâneo.

```
› Press u to update failing snapshots.
```

Quando pressionamos upara atualizar o instantâneo, o teste será aprovado.

## Conclusão

Espero que você tenha gostado de trabalhar neste tutorial. Aprendemos algumas técnicas de teste Jest usando a biblioteca de testes Enzyme. Também apresentei o processo de execução de um teste, teste de componentes do React, zombaria e teste de instantâneo. Se você tiver alguma dúvida, deixe-a na seção de comentários abaixo e teremos prazer em responder a todas e solucionar quaisquer problemas com você.

### Recomendações

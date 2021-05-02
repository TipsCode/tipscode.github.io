---
title: "Create-React-App: Crie Aplicações React Rapidamente"
date: "2020-12-16"
description: Iniciar um novo projeto React não é tão simples. Em vez de mergulhar diretamente no código e dar vida a sua aplicação, você precisa gastar tempo configurando as ferramentas de construção certas para configurar um ambiente de desenvolvimento local, teste de unidade e produção. Felizmente, existi uma forma com 0 configuração que é através da ferramenta create-react-app.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Iniciar um novo projeto React não é tão simples. Em vez de mergulhar diretamente no código e dar vida a sua aplicação, você precisa gastar tempo configurando as ferramentas de construção certas para configurar um ambiente de desenvolvimento local, teste de unidade e produção. Felizmente, existi uma forma com 0 configuração que é através da ferramenta create-react-app.

Create-React-App é uma ferramenta de linha de comando criada pelo Facebook que permite gerar um novo projeto React, e usa o **webpack** pré-configurado para desenvolvimento. Há muito tempo ele se tornou uma parte integrante do ecossistema React, que elimina a necessidade de manter pipelines de construção complexos em seu projeto, permitindo que você se concentre na criação e não em configuração.

## Como Funciona o Create-React-App ?

Create React App é uma ferramenta autônoma que pode ser executada tanto com npm quanto com Yarn.

Você pode gerar e executar um novo projeto usando npm apenas com alguns comandos, depois que a ferramenta estiver instalada em sua máquina:

```
npm install -g create-react-app // comando para instalação via terminal 
```

Depois que você já instalou a ferramenta, para criar um projeto é muito simples:

```
npx create-react-app [nome-do-webapp]
cd [nome-do-webapp]
npm start // Comando para subir a aplicação
```

Caso use o Yarn, o comando será assim:

```
yarn create-react-app [nome-do-webapp]
cd [nome-do-webapp]
yarn start // Comando para subir a aplicação
```

Essa é a estrutura do projeto quando criado com o creacte-react-app:

![create-react-app](/uploads/2020/12/Estrutura-do-projeto-criado-com-create-react-app.png)

Estrutura do Create-React-app

Ele também adicionará um pacote **react-scripts** ao seu projeto que conterá todos os scripts de configuração e construção. Em outras palavras, seu projeto depende do **react-scripts**, não do **create-react-app** si mesmo. Assim que a instalação for concluída, você pode iniciar o servidor de desenvolvimento e começar a trabalhar em seu projeto.

## Recursos Básicos

### Servidor de Desenvolvimento Local

A primeira coisa de que você precisa é um ambiente de desenvolvimento local. A execução npm iniciará um servidor de desenvolvimento webpack com um observador que irá recarregar automaticamente a aplicação assim que você mudar alguma coisa.

A partir da versão 4, o **create-react-app** oferece suporte à atualização rápida do React como uma alternativa à substituição de módulo ativo. Como seu predecessor, isso nos permite atualizar rapidamente partes da nossa aplicação após fazer alterações na base de código, mas também possui alguns novos recursos.

O **Fast Reload** tentará recarregar apenas a parte modificada da aplicação, preservar o estado dos componentes funcionais e [hooks](/react-hooks-guia-completo-passo-a-passo/) e recarregar automaticamente a aplicação após corrigir um erro de sintaxe por exemplo.

Você também pode servir sua aplicação por HTTPS, definindo a variável HTTPS para **true** antes de executar o servidor.

A aplicação será gerado com muitos recursos integrados.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

### ES6 e ES7

O aplicativo vem com seu próprio preset Babel - babel-preset-react-app - para suportar um conjunto de recursos ES6 e ES7. Alguns dos recursos suportados são:

- Async/await;
- Object Rest / Spread Properties;
- Dynamic import();
- Class Fields e Static Properties.

Observe que Create-React-App não fornece nenhum polyfills para recursos de tempo de execução, portanto, se você precisar de algum deles, deverá incluí-los você mesmo.

### Importação de Ativos

Você pode importar arquivos CSS, imagens ou fontes de seus módulos JavaScript que permitem agrupar arquivos usados ​​em seu projeto. Assim que a aplicação for criado, o Create-React-App copiará esses arquivos para a pasta de construção. Aqui está um exemplo de importação de uma imagem:

```
import image from './tipscode.png';

console.log(image);
```

Podemos usar também recursos CSS como:

```
.image {
  background-image: url(./tipscode.png);
}
```

### Estilo

Conforme mencionado na seção anterior, Criar aplicação React permite adicionar estilos apenas importando os arquivos CSS necessários. Ao construir o projeto, todos os arquivos CSS serão concatenados em um único pacote e adicionados à pasta de construção.

A ferramenta Create React App também oferece suporte a módulos CSS. Por convenção, os arquivos nomeados como **\*.module.css** são tratados como módulos CSS. Essa técnica nos permite evitar conflitos de seletores CSS, uma vez que Create React App criará seletores de classe exclusivos nos arquivos CSS resultantes.

Como alternativa, se preferir usar pré-processadores CSS, você pode importar arquivos Sass .scss . No entanto, você precisará instalar o pacote **node-sass** separadamente.

Além disso, o **Create-React-App** fornece uma maneira de adicionar redefinições CSS adicionando **@import-normalize**; qualquer lugar em seus arquivos CSS. Os estilos também passam por pós-processamento, que os reduz, adiciona prefixos de fornecedores usando Auto prefixer e polyfills, recursos sem suporte, como allpropriedade, propriedades personalizadas e intervalos de consulta de mídia.

### Execução de testes de unidade

A execução do comando **npm test** executará testes usando **Jest** e iniciará um observador para executá-los novamente sempre que você mudar algo:

![](/uploads/2020/12/teste-react-1024x609.png)

React Teste

Temos um artigo bem completo sobre testes com React, caso tenha interesse [clique aqui para ler](/react-guia-completo-para-testes/)

[Jest](https://jestjs.io/pt-BR/) é um poderoso Framework de Testes em JavaScript com um foco na simplicidade, é uma alternativa ao **Mocha** ou **Karma**. Ele executa os testes em um ambiente Node em vez de em um navegador real, mas fornece alguns dos globais específicos do navegador usando [jsdom](https://github.com/jsdom/jsdom).

O Jest também vem integrado com seu sistema de controle de versão e, por padrão, só executará testes em arquivos alterados desde seu último commit.

### EsLint

Durante o desenvolvimento, seu código também será executado por meio do [ESLint](https://eslint.org/), um analisador de código estático que o ajudará a detectar erros durante o desenvolvimento.

## Criando um Pacote para Produção

Quando você finalmente tiver algo para implantar, poderá criar um pacote de produção usando o comando **npm run build**. Isso irá gerar uma construção otimizada de seu projeto, pronta para ser implantada em seu ambiente. Os artefatos gerados serão colocados na pasta de construção:

![Create-react-app](/uploads/2020/12/em-producao.png)

Pronto para Fazer o Deploy

### Detalhes sobre o Deploy que você deverá está atento

Como a construção de seu projeto é com Create React App ele consiste apenas em arquivos estáticos, existem diferentes maneiras de implantá-los em seu ambiente remoto. Você pode usar um servidor Node.js se estiver executando em um ambiente Node.js ou servir o aplicação usando um servidor web diferente, como NGINX.

A seção de implantação na [documentação](https://create-react-app.dev/docs/deployment/) oficial fornece uma visão geral de como implantar o aplicativo no Azure, AWS, Heroku, Netlify e outros ambientes de hospedagem populares.

## Recursos de Desenvolvimento

Antes de entrar nesta seção quero deixar um avisor importante, estou criando uma série de aulas usando o React e o create-react-app lá no canal TipsCode, então se deseja aprender mais comigo vai lá e da uma olhada.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pCkw6b5HRkM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Variáveis de Ambiente

Você pode usar variáveis ​​de ambiente do Node para injetar valores em seu código no momento da construção. O Create React procurará automaticamente quaisquer variáveis ​​de ambiente começando com **REACT\_APP\_** e as disponibilizará no global **process.env**. Essas variáveis ​​podem estar em um arquivo chamado **.env**:

```
REACT_APP_BACKEND=http://novo-api.com
REACT_APP_BACKEND_USER=root
```

Você também pode referencia no código:

```
fetch({process.env.REACT_APP_SECRET_CODE}/endpoint)
```

### Proxing para Back-end

Se a sua aplicação trabalhar com um back end remoto, talvez você precise ser capaz de enviar solicitações durante o desenvolvimento local para ignorar o **CORS**. Isso pode ser configurado adicionando um campo de proxy ao seu arquivo package.json:

```
"proxy": "http://localhost:6000",
```

Dessa forma, o servidor encaminhará para o endereço fornecido qualquer solicitação que não aponte para um arquivo estático.

### Divisão de Código

Criar aplicação React com o create-react-app vai lhe oferece suporte à divisão de código usando a diretiva **import () dinâmica**. Em vez de retornar os valores exportados pelo módulo, ele retornará uma Promise que resolve esses valores. Como resultado, os módulos importados dessa forma não serão incluídos no pacote final, mas serão construídos em arquivos separados. Isso permite que você reduza o tamanho do pacote final e carregue o conteúdo sob demanda.

### Suporte ao TypeScript

Você pode habilitar o TypeScript para obter os benefícios da análise de tipo estático ao gerar um novo projeto. Isso pode ser feito usando um modelo não padrão diferente para gerar o projeto:

```
npx create-react-app novo --template typescript
```

Você também pode adicionar suporte a TypeScript a um projeto existente, conforme descrito na documentação .

### Progressive Web Apps

Da mesma forma, você pode adicionar suporte aplicações progressivas web. Você pode usar **service workers** adicionando um src/service-worker.jsarquivo. A partir da v4, ele será injetado no aplicativo usando a biblioteca Workbox .

Para habilitar service workers em um novo projeto, eles precisam ser gerados a partir de um modelo personalizado:

```
npx create-react-app novo-app --template cra-template-pwa


npx create-react-app my-app --template cra-template-pwa-typescript
```

### Web Vitals

Vai permite medir o desempenho e a capacidade de resposta da sua aplicação. Isso é feito monitorando as métricas definidas pelo web vitals e medidas usando a biblioteca web-vitals . As métricas incluem Largest Contentful Paint , que mede o desempenho de carregamento, First Input Delay e Cumulative Layout Shift para resposta.

A ferramenta create-react-app oferece uma função conveniente para rastrear todas as métricas disponíveis:

```
// index.js

reportWebVitals(console.log);
```

### Recusando

Se em algum momento você sentir que os recursos fornecidos não são mais suficientes para o seu projeto, você pode cancelar o uso react-scripts executando **npm run eject**. Isso copiará a configuração do webpack e criará scripts de **react-scripts** seu projeto e removerá a dependência. Depois disso, você está livre para modificar a configuração da maneira que achar melhor.

Como alternativa, você também pode bifurcar react-scriptse manter seu branch com os recursos de que precisa. Isso pode ser mais fácil, caso você tenha muitos projetos para manter.

## Conclusão

Se você está procurando iniciar um novo projeto React, te recomendo muito usar o create-react-app. Criar aplicação React permitirá que você comece a trabalhar rapidamente em sua aplicação em vez de escrever outra configuração de pacote web. Também torna mais fácil atualizar suas ferramentas de construção com um único comando ( `**npm install react-scripts@latest**`) - algo que normalmente é uma tarefa difícil e demorada.

A ferramente Create React App tornou-se parte integrante do ecossistema React. Quer você o use para montar um protótipo rápido ou para criar seu próximo grande projeto, você economizará muitas horas de tempo de desenvolvimento.

## Venha ser meu Aluno(a)

[![ CURSO DESENVOLVEDOR FULL STACK TURBO](/uploads/2020/11/PROJETO-CURSO-DESENVOLVEDOR-FULL-STACK-TURBO.jpg)](/desenvolvedor-full-stack-turbo)

CURSO DESENVOLVEDOR FULL STACK TURBO

[

###### Saiba Mais

Venha Turbinar seus estudos com o TipsCode



](/desenvolvedor-full-stack-turbo)

### Venha Turbinar Seus estudos

##### O que você vai aprender neste Curso

- HTML5, CSS3 e JavaScript (ES+);
- Lógica de Programação;
- React;
- Jquery;
- Bootstrap 4.5 (Será atualizado para a versão 5);
- NodeJS, EJS e ExpressJS;
- MongoDb (Mongose);
- SQL;
- Git (Controle de Versão);
- Terminal Linux;
- Autenticação e Segurança;
- Deploy de Aplicações.

##### Bônus

- Mentorias (Em formato de Lives) Todos os Meses;
- Como Vender Software;
- Entrevistas com Pessoas de Sucessos;
- Engenharia de Software;
- Dominando o Linux;
- Projeto Calculadora com React.
- Projeto Clone do Instagram.

[

###### Saiba Mais !

Venha Turbinar seus Estudos com o TipsCode



](/desenvolvedor-full-stack-turbo)

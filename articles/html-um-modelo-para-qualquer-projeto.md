---
title: "HTML um Modelo básico para qualquer Projeto"
date: "2020-07-01"
categories: 
  - "html"
tags: 
  - "alisson-suassuna"
  - "html"
  - "html5"
  - "iniciante"
  - "modelo"
  - "projeto-html"
  - "tipscode"
description: À medida em que você aprende HTML e adiciona novas técnicas à sua caixa de ferramentas, é provável que você queira criar um modelo básico a partir do qual possa iniciar todos os seus projetos baseados em HTML. Eu lhe encorajo a fazer isso, e você também pode considerar usar uma das muitas fontes on-line que fornecem um ponto de partida básico do HTML5 para você.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

À medida em que você aprende **HTML** e adiciona novas técnicas à sua caixa de ferramentas, é provável que você queira criar um modelo básico a partir do qual possa iniciar todos os seus projetos baseados em HTML. Eu lhe encorajo a fazer isso, e você também pode considerar usar uma das muitas fontes on-line que fornecem um ponto de partida básico do HTML5 para você.

![tml](/uploads/2020/06/modelo-html-1.jpg)

Figura 01: HTML

Neste artigo, veremos como começar com isso. Vamos começar de maneira simples, com uma página HTML básica:

```
<html lang="pt-br">
<head>
  <meta charset="utf-8">

  <title>Modelo Básico HTML</title>
  <meta name="description" content="modelo html" />
  <meta name="author" content="Alisson Suassuna" />

  <link rel="stylesheet" href="css/styles.css" />

</head>

<body>
  <script src="js/scripts.js"></script>
</body>
</html>
```

Com esse modelo básico, agora vamos examinar algumas das partes significativas da marcação e como elas podem diferir de como o HTML foi escrito antes do HTML5.

## O Doctype

html

Primeiro, temos a Declaração do tipo de documento ou **_doctype_** . Essa é simplesmente uma maneira de informar ao navegador - ou qualquer outro analisador - que tipo de documento ele está visualizando. No caso de arquivos HTML, significa a versão específica do HTML. O **_doctype_** deve sempre ser o primeiro item na parte superior de qualquer arquivo HTML. Muitos anos atrás, a declaração de tipo de documento era uma bagunça e muito verbosa. Veja como era para XHTML 1.0 Strict:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

E para HTML4 Transitional:

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//PT-BR"
   "http://www.w3.org/TR/html4/loose.dtd">
```

Embora essa longa seqüência de texto na parte superior de nossos documentos não tenha nos prejudicado (além de forçar os espectadores de nossos sites a baixar alguns bytes extras), o HTML5 acabou com forma "baguçada". Agora tudo o que você precisa fazer é isso:

```
<!doctype html>
```

Simples e direto ao ponto. O doctype pode ser escrito em maiúsculas, minúsculas ou misto. Você notará que o "5" está conspicuamente ausente da declaração. Embora a iteração atual da marcação na Web seja conhecida como "HTML5", é realmente apenas uma evolução dos padrões HTML anteriores - e as especificações futuras serão simplesmente um desenvolvimento do que temos hoje.

Como os navegadores geralmente são necessários para oferecer suporte a todo o conteúdo existente na Web, não há confiança no tipo de documento para dizer quais recursos devem ser suportados em um determinado documento. Em outras palavras, o doctype por si só não tornará suas páginas compatíveis com HTML5. Cabe realmente ao navegador fazer isso. De fato, você pode usar um desses dois doctypes mais antigos com novos elementos HTML5 na página e a página renderizará o mesmo que faria se você usasse o novo doctype.

## Elemento <html>

O próximo item de qualquer documento HTML é o elemento html, que não foi alterado significativamente com o HTML5. Em nosso exemplo, incluímos o atributo **_lang_** com um valor "pt-br", que especifica que o documento está em português do Brasil. Na sintaxe baseada em XHTML, você deveria incluir um atributo **_xmlns_**. No HTML5, isso não é mais necessário, e mesmo o atributo lang é desnecessário para o documento validar ou funcionar corretamente.

Então, aqui está o que temos até agora, incluindo a tag de fechamento :

```
<!doctype html>
<html lang="pt-br">

</html>
```

## Elemento <head>

A próxima parte da nossa página é a seção. A primeira linha dentro da tag **_<head>_** é a que define a codificação de caracteres para o documento. Este é outro elemento que foi simplificado desde do **_XHTML_** e **_HTML4_** e é um recurso opcional, mas **_recomendado_**. No passado, fazíamos dessa forma:

[![Criando jogo com javascript](/uploads/2020/06/Criando-jogo-com-javascript-1024x1024.png)](/mini-curso-construindo-seu-jogo-em-javascript/)

Criando jogo com javascript

## Curso Grátis

Você Vai aprender:

- Manipulação da DOM;
- Crianção de Elementos com JavaScript;
- Animação de Personagem;
- Inserção de elementos externos;
- Criação de Layout com CSS3;
- E muito mais...

[

Quero me Inscrever agora!

](/mini-curso-construindo-seu-jogo-em-javascript/)

```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

O versão 5 do HTML aprimora isso reduzindo o mínimo possível a tag de codificação de caracteres, deixando assim:

```
<meta charset="utf-8" />
```

Em quase todos os casos, utf-8 é o valor que você usará em seus documentos. Uma explicação completa da codificação de caracteres está além do escopo deste artigo, e provavelmente também não será interessante para você. No entanto, se você quiser se aprofundar um pouco mais, recomendo fortemente esse [treinamento completo](/programador-fullstack-8-semanas).

`**Nota: para garantir que todos os navegadores leiam a codificação de caracteres corretamente, toda a declaração de codificação de caracteres deve ser incluída em algum lugar nos primeiros 512 caracteres do seu documento. Ele também deve aparecer antes de qualquer elemento baseado em conteúdo (como o elemento que segue em nosso site de exemplo) .</p> <p>Poderíamos escrever muito mais sobre esse assunto, mas vou lhe poupar desses detalhes! Por enquanto, estamos satisfeitos em aceitar esta declaração simplificada e passar para a próxima parte do nosso documento:</p>**`

```
<title>Modelo Básico HTML</title>
<meta name="description" content="modelo html" />
<meta name="author" content="Alisson Suassuna" />

<link rel="stylesheet" href="css/styles.css" />
```

Nessas linhas, o HTML5 mal difere das sintaxes anteriores. O título da página (o único elemento obrigatório dentro do head) é declarado o mesmo de sempre, e as **_metatags_** que incluímos são apenas exemplos opcionais para indicar onde eles seriam colocados; você pode colocar aqui quantos elmentos meta válidos que quiser.

![html](/uploads/2020/06/elementos-html-1024x576.jpeg)

Figura 02: Elementos HTML

## Nova <Tags>

A parte principal desse pedaço de marcação é a folha de estilo, incluída a tag <link>. Não há atributos necessários para outros link que não href e rel. O atributo type (que era comum em versões mais antigas do HTML) não é necessário, nem nunca foi necessário indicar o tipo de conteúdo da folha de estilo.

Quando a versão 5 do HTML foi introduzido, ele incluiu várias novas tags, como <**_article_**\> e <_**section**_\>. Você pode pensar que esse seria um grande problema para o suporte de navegadores mais antigos a elementos não reconhecidos, mas você estaria errado. Isso ocorre porque a maioria dos navegadores não se importa com as tags usadas. Se você tivesse um documento HTML com uma tag (ou mesmo uma tag _**ziggy**_) e seu CSS anexasse alguns estilos a esse elemento, quase todos os navegadores prosseguiriam como se isso fosse totalmente normal, aplicando seu estilo sem reclamar.

Obviamente, esse documento hipotético falharia na validação e poderia ter problemas de acessibilidade, mas seria renderizado corretamente em quase todos os navegadores - com exceção das versões antigas do Internet Explorer (IE). Antes da versão 9, o IE impedia que elementos não reconhecidos recebessem estilo. Esses elementos misteriosos foram vistos pelo mecanismo de renderização como "elementos desconhecidos"; portanto, você não conseguiria por exemplo alterar a aparência ou o comportamento deles. Isso inclui não apenas nossos elementos imaginados, mas também quaisquer elementos que ainda não haviam sido definidos no momento em que essas versões do navegador foram desenvolvidas. Isso significa (você adivinhou) os novos elementos HTML5.

A boa notícia é que, atualmente, o uso do IE caiu muito, com o IE11 caindo para cerca de 2,7% do uso global (a partir de 2018), e as versões anteriores a esse praticamente caíram do mapa. (Você pode visualizar estatísticas sobre o uso do navegador e o suporte a recursos HTML5 em nesse [site](https://caniuse.com/#search=html5) ).

## Outras <Tags>

Observando o restante do nosso modelo inicial, temos a tag <**_body_**\>, juntamente com sua marca de fechamento e a marca html de fechamento . Também temos uma referência a um arquivo JavaScript dentro da nossa tags.

Assim como a tag link citada anteriormente, a tag não exige que você declare o atributo type. Se você já escreveu XHTML, pode se lembrar de suas script tags assim:

```
<script src="js/scripts.js" type="text/javascript"></script>
```

[![Criando jogo com javascript](/uploads/2020/06/Criando-jogo-com-javascript-1024x1024.png)](/mini-curso-construindo-seu-jogo-em-javascript/)

Criando jogo com javascript

## Curso Grátis

Você Vai aprender:

- Manipulação da DOM;
- Crianção de Elementos com JavaScript;
- Animação de Personagem;
- Inserção de elementos externos;
- Criação de Layout com CSS3;
- E muito mais...

[

Quero me Inscrever agora!

](/mini-curso-construindo-seu-jogo-em-javascript/)

Como o JavaScript é, para todos os efeitos práticos, a única linguagem de script real usada na Web, e como todos os navegadores assumem que você está usando JavaScript, mesmo quando não declara explicitamente esse fato, o atributo type é desnecessário nos documentos HTML5:

```
<script src="js/scripts.js"></script>
```

Colocamos o script na parte inferior da página para estar em conformidade com as práticas recomendadas para incorporar JavaScript. Isso tem a ver com a velocidade de carregamento da página; quando um navegador encontra um script, ele pausa o download e a renderização do restante da página enquanto analisa o script. Isso faz com que a página pareça carregar muito mais lentamente quando scripts grandes são incluídos na parte superior da página antes de qualquer conteúdo. É por isso que a maioria dos scripts deve ser colocada na parte inferior da página, para que eles sejam analisados ​​somente após o carregamento da restante página.

Em alguns casos, no entanto, (como no shiv HTML5), o script pode precisar ser colocado no cabeçalho do documento, porque você deseja que ele entre em vigor antes que o navegador comece a renderizar a página.

## Nível um pouco mais avançado

Uma maneira de levar seu HTML5 para o próximo nível é experimentar o Boilerplate HTML5. Esse recurso atualizado regularmente fornece um ponto de partida útil para seus projetos, contendo todas as melhores práticas mais recentes estabelecidas por centenas dos melhores programadores do mundo. Vale a pena fazer o download e o check-out, mesmo que você queira apenas escolher o código e ver como certos elementos estão sendo usados ​​atualmente, como os vários meta-elementos encontrados no cabeçalho do documento.

### Recomendações

#### Artigos

- [Como Criar Formulário HTML Parte 01](/criar-formulario-html5-parte-1/)
- [CSS Grid - Tudo o que você não aprendeu Parte 01](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/)
- [Como usar o ForEach JavaScript](/foreach-javascript/)
- [Arquitetura Limpa O seu projeto no caminho certo](/arquitetura-limpa-seu-projeto-no-caminho-certo/)

#### Programador JavaScript FullStack

[![html](/uploads/2020/04/banner-de-divulgação-dos-artigos-1024x1024.png)](/programador-fullstack-8-semanas)

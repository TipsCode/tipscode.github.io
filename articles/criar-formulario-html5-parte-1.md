---
title: "Como Criar Formulário HTML: Parte 01"
date: "2020-02-08"
tags: 
  - "como-criar-formulario-html-parte-01"
  - "form"
  - "formulario"
  - "formulario-con-html"
  - "formulario-con-html-y-css"
  - "formulario-de-contacto-html"
  - "formulario-de-contacto-responsive-con-html-y-css"
  - "formulario-de-registro"
  - "formulario-html"
  - "formulario-html-y-css"
  - "formulario-registro"
  - "formularios"
  - "formularios-html"
  - "formularios-html5"
  - "formularios-html5-y-css3"
  - "html"
  - "html-formulario-de-contacto"
  - "html-formularios"
  - "html-y-css-formulario"
  - "html5"
  - "html5-creando-un-formulario"
  - "tutorial"
description: Opa dev tudo bem com você? Neste artigo iremos da inicio nossos estudos sobre HTML5 e aprender como Criar Formulário bem feitos e com a semântica certa do HTML5.
---

Opa dev tudo bem com você? Neste artigo iremos da inicio nossos estudos sobre HTML5 e aprender como **Criar Formulário** bem feitos e com a semântica certa do HTML5.

### Código Base - Criar Formulário

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <form action="" method="POST">
        <input type="text" name="nmae" />
        <input type="password" name="senha" />
        <button>Enviar</button>
    </form>
    
</body>
</html>
```

![Figura 01 - Código Base Criar formulário](/uploads/2020/02/Figura-01-Código-Base-Criar-formulário.jpg)

**Figura 01 - Código Base Criar formulário**

Como podemos observa em nosso código base, para criar formulário usamos a essa possuir algumas atributos como por exemplo action e method, o atributo action se trata-se da ação que queremos que o nosso formulário tenha já o atributo method trata-se qual tipo de requisição esse formulário terá, se é POST, GET, PUT ou DELETE. Iniciamos nosso formulário criando dois campos com as um para o nome e a outra para senha, as possuir vários atributos, em nosso código estamos usando type que serve para dizer o tipo de dado neste campo e o atributo name, que é através desse atributo que o back-end identifica e capturar o dado vinda do front-end.

### Textarea e Radio - Criar Formulário

```
<form action="" method="POST">
        <input type="text" name="nmae" />
        <input type="password" name="senha" />

        <textarea name="descricao" cols="30" rows="10"></textarea>

        <div>
            <input type="radio" name="tipo" value="admin" /> Admin
            <input type="radio" name="tipo" value="Regular"/> Regular
        </div>
        <button>Enviar</button>
</form>
```

A tag cria um campo para descrições, essa tag tem três atributos, name, cols e rows, cols e rows é onde definimos o tamanho do campo em linhas e colunas. Temos também duas tags <input> com o atributo radio, o atributo radio coloca um campo de marcação, veja na figura 02:

![](/uploads/2020/02/Figura-02-Criar-formulário.jpg)

**Figura 02 - Criar formulário**

Note que os <input> radio, só lhe permite marcar um dos dois campos, esse comportamento se dá porque nesse caso eles compartilha o mesmo nome, além disso temos que usa o atributo "value" pois é o conteúdo que está neste atributo que será enviando para o nosso back-end

### Checkbox - Criar Formulário

```
<div>
   <input type="checkbox" name="ativo" id="" /> Ativo
</div
```

O elementos do tipo checkbox são renderizados por padrão como caixas quadradas que são marcadas (com uma marca de verificação) quando ativadas, como você pode ver na figura 03.

![](/uploads/2020/02/Figura-03-Criar-formulário.jpg)

**Figura 03 - Criar Formulário**

### Select- Criar Formulário

O elemento HTML select () representa um controle que apresenta um menu de opções. As opções dentro do menu são representadas pelo elemento , que podem ser agrupados por elementos. As opções podem ser pré-selecionadas para o usuário.

```
 <select name="cidades">
       <option value="jua">Juazeiro do Norte</option>
       <option value="crato">Crato</option>
       <option value="bar">Barbalha</option>
       <option value="mv">Missão Velha</option>
</select>
```

![](/uploads/2020/02/Figura-04-Criar-Formulário.jpg)

**Figura 04 - Criar Formulário**

### Se torne um programador full stack em apenas 8 semanas

Método de ensino 100% comprovado, acesso vitalicio, suba para o próximo nível

[![banner Curso programador full stack javascript em 8 semanas](/uploads/2020/01/banner-Curso-programador-full-stack-javascript-em-8-semanas.png)](/programador-fullstack-8-semanas)

Programador full stack javascript em 8 semanas

Existe também o de múltiplas opções, escrevemos o atributo “multiple” e o atributo “size” definimos o tamanho que queremos que seja exibido.

```
 <select name="interesses" multiple size="10">
       <option value="JavaScript"> JavaScript </option>
       <option value="Java"> Java </option>
       <option value="php">PHP</option>
       <option value="python">Python</option>
</select>
```

![](/uploads/2020/02/Figura-05-Criar-Formulário.jpg)

**Figura 05 - Criar Formulário**

### Conclusão

Chegamos ao fim de mais um artigo com bastante conteúdo, essa primeira parte foi apenas com o básico, na parte 2 vamos fazer algumas estilizações, aprender mais e atributos e também a parte semântica do formulário, vamos aprender também a enviar esses dados para um back-end real, vamos construir do zero e fazer essa comunicação entre cliente e servidor. Breve sairá também uma versão desse artigo em formato de vídeo, então não perca tempo visite nosso canal no Youtube e faça sua inscrição lá..

### Canal Youtube

Estamos também com um canal no Youtube, está saindo vídeos com dicas tutoriais e muito mais regulamente. Se inscreve no canal e compartilha para o maior número de pessoas possível, isso vai me ajuda muito.

[Ir para o canal](https://www.youtube.com/channel/UCZKLK7o6IVayeEjkkoWLwbQ?view_as=subscriber)

[Clique aqui para ver outros artigos](/instalando-nodejs-no-manjaro/)

Artigo recomendado: [O que é HTML](https://vidafullstack.com.br/html/o-que-e-html/)

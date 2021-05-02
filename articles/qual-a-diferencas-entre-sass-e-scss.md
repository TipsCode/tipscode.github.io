---
title: "Qual é a diferenças entre Sass e SCSS?"
date: "2020-05-12"
tags: 
  - "diferencas-entre-sass-e-scss"
description: Quando falamos sobre Sass , geralmente nos referimos ao pré-processador e à linguagem como um todo. Diremos, por exemplo, "estamos usando o Sass" ou "aqui está um mix do Sass". Enquanto isso, o Sass (o pré-processador) permite duas sintaxes diferentes.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Quando falamos sobre Sass , geralmente nos referimos ao pré-processador e à linguagem como um todo. Diremos, por exemplo, "estamos usando o Sass" ou "aqui está um mix do Sass". Enquanto isso, o Sass (o pré-processador) permite duas sintaxes diferentes:

- Sass: É conhecida como uma sintaxe recuada;
- SCSS: Tem uma sintaxe semelhante ao CSS

### O que é Sass?

diferenças entre Sass e SCSS?

![diferenças entre Sass e SCSS?](/uploads/2020/04/perguntas-png-2.png)

Inicialmente, Sass fazia parte de outro pré-processador chamado Haml , projetado e escrito por desenvolvedores Ruby. Por isso, as folhas de estilo Sass estavam usando uma sintaxe semelhante a Ruby sem chaves, sem ponto e vírgula e um recuo estrito, como este:

### Que tal criarmos um game irado usando apenas JavaScript?

Meu MiniCurso vou te ensinar a criar do absoluto zero e (Passo a passo) um Jogo completo usando apenas JavaScript. Um conteúdo assim eu poderia cobra facilmente R$200,00 Reais, mas resolvi te oferece totalmente GRÁTIS, basta você clicar nesse botão aqui em baixo QUERO ME INSCREVER que vou te enviar as aulas no seu e-mail

[Inscrever-se](https://bit.ly/mini-curso-criando-game-js)

```
// variável
!primary-color= hotpink

// Mixin
=border-radius(!radius)
  -webkit-border-radius= !radius
  -moz-border-radius= !radius
  border-radius= !radius

.meu-elemento
  color= !primary-color
  width= 100%
  overflow= hidden

.meu-outro-elemento
  +border-radius(5px)
```

Como você pode ver, isso é uma grande mudança em comparação com o CSS normal! Mesmo se você é um usuário do Sass (o pré-processador), pode ver que isso é bem diferente do que estamos acostumados. O sinal variável é **!** e não **$**, o sinal de atribuição é **\=** e não **:** . Bem estranho.

Mas era assim que o Sass era até a versão 3.0 chegar em maio de 2010, introduzindo uma nova sintaxe chamada SCSS para o Sassy CSS . Essa sintaxe visava preencher a lacuna entre Sass e CSS, trazendo uma sintaxe compatível com CSS.

```
// Variável
$primary-color: hotpink;

// Mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.meu-elemento {
  color: $primary-color;
  width: 100%;
  overflow: hidden;
}

.meu-outro-elemento {
  @include border-radius(5px);
}
```

O SCSS é definitivamente mais próximo do CSS do que o Sass. Dito isto, os mantenedores do Sass também trabalharam para tornar as duas sintaxas mais próximas, movendo-se **!** (sinal variável) e **\=** (sinal de atribuição) da sintaxe recuada para **$** e **:** do SCSS.

Agora, ao iniciar um novo projeto, você pode se perguntar qual sintaxe deve ser usada. Deixe-me esclarecer o caminho e explicar os desvantagens de cada um.

### Desvantagens Sass

diferenças entre Sass e SCSS

Embora essa sintaxe possa parecer estranha, ela tem alguns pontos interessantes. Primeiro de tudo, _**é mais curta e fácil de digitar**_. Não há mais ponto e vírgula, você não precisa de todas essas coisas. Melhor ainda! Não é necessário **@mixin** ou **@include**, quando um único caractere é suficiente: **_\=_** e **_+_**.

Além disso, a sintaxe Sass **_impõe padrões de codificação limpa_**, confiando no recuo. Como é provável que um recuo errado interrompa toda a .sass a folha de estilo, ele garante que o código esteja sempre limpo e bem formatado. Há uma maneira de escrever código Sass.

Mas cuidado! Recuar significa algo no Sass. Ao recuar um seletor, significa que ele está aninhado no seletor anterior. Por exemplo:

```
.elemento-a
  color: hotpink

    .elemento-b
      float: left
```

Produzirá o seguinte CSS

```
.elemento-a {
  color: hotpink;
}

.elemento-a .element-b {
  float: left;
}
```

O simples fato de empurrar **_.elemento-b_** um nível para a direita significa que ele é filho de **_.elemento-a_**, alterando o CSS resultante. Tenha muito cuidado com o seu recuo!

Como um aparte, sinto que a sintaxe baseada em indentação provavelmente se adequará a uma equipe de Ruby / Python mais que a uma equipe de PHP / Java (embora isso seja discutível e eu adoraria ouvir opiniões em contrário).

### Crie seu próprio Evernote e leve seu portfólio para outro nível

O treinamento Full Stack Javascript é para você que quer dominar a programação web, entender teoria e prática, ser capaz de criar um projeto real e ainda saber se posicionar no mercado de trabalho o/

[Inscrever-se](/programador-fullstack-8-semanas)

### Desvantagens SCSS

diferenças entre Sass e SCSS

Para iniciantes, é totalmente compatível com CSS . Isso significa que você pode renomear um arquivo CSS .scsse ele simplesmente funcionará . Tornar o SCSS totalmente compatível com CSS sempre foi uma prioridade para os mantenedores do Sass desde que o SCSS foi lançado, e isso é muito importante na minha opinião. Além disso, eles tentam ficar o mais próximo possível do que poderia se tornar uma sintaxe válida do CSS no futuro (daí @directives).

Como o SCSS é compatível com CSS, significa que há pouca ou nenhuma curva de aprendizado . A sintaxe já é conhecida: afinal, é apenas CSS com alguns extras. Isso é importante ao trabalhar com desenvolvedores inexperientes: eles poderão começar a codificar rapidamente sem saber a primeira coisa sobre o Sass.

Além disso, é mais fácil de ler, porque na verdade faz sentido. Quando você lê @mixin, você sabe que é uma declaração mixin; quando você vê @include, está chamando um mixin. Não cria nenhum atalho e tudo faz sentido quando lido em voz alta.

Além disso, a maioria das ferramentas, plugins e demos existentes para o Sass são desenvolvidos usando a sintaxe SCSS. Com o passar do tempo, essa sintaxe está se tornando preeminente e a opção padrão, principalmente pelas razões acima.

### Conclusões finais

diferenças entre Sass e SCSS

A escolha é sua, mas, a menos que você tenha realmente boas razões para codificar usando a sintaxe recuada, sugiro fortemente o uso de SCSS sobre Sass. Não só é mais simples, mas também é mais conveniente.

Uma vez eu tentei a sintaxe recuada e gostei. Eu gostei do quão curto e fácil foi. Eu estava prestes a mudar uma base de código inteira para Sass no trabalho antes de mudar de ideia no último minuto. Agradeço ao meu passado por interromper essa mudança, porque teria sido muito difícil trabalhar com várias de nossas ferramentas se tivéssemos usado a sintaxe recuada.

Além disso, observe que o Sass nunca está em maiúsculas, não importa se você está falando sobre o idioma ou a sintaxe. Enquanto isso, o SCSS está sempre em maiúsculas. Precisa de um lembrete? SassnotSASS.com para o resgate!

#### Recomendações de mais conteúdo

- [React Router um guia completo passo a passo](/react-router-versao-5-guia-completo/)
- [5 Projetos para você dominar o CSS3](/5-projetos-para-voce-dominar-css3/)
- [20 projetos criados com React](/conheca-20-sites-criados-com-react/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/OWluumQ_XbE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

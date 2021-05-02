---
title: "React para iniciantes 10 dica de como escrever código altamente legível"
date: "2020-09-20"
categories: 
  - "react"
description: O React para iniciantes a primeira vista pode parece muito confuso, pois a tecnologia quebra alguns conceitos pregado desde sempre no mundo da programação, portanto esse artigo tem o objetivo de trazer 10 dicas de como escrever um bom e legível usando o React.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

**_O React para iniciantes a primeira vista pode parece muito confuso, pois a tecnologia quebra alguns conceitos pregado desde sempre no mundo da programação, portanto esse artigo tem o objetivo de trazer 10 dicas de como escrever um bom e legível usando o React._**

Ao fazer revisões de código, os desenvolvedores raramente têm tempo suficiente para entender verdadeiramente cada linha de código que estamos revisando. Em vez disso, temos que ponderar rapidamente as diferentes situações em que esse código pode falhar.

Portanto, sempre que reviso o código, procuro certos pontos para me ajudar a compreender rapidamente.

Observe que me limitei principalmente ao ReactJS aqui, mas alguns desses pontos podem se aplicar ao uso de outras bibliotecas JavaScript também.

## 01 - Sempre utilize o prop-types para definir todos os componentes

O **[prop-types](https://github.com/facebook/prop-types)** é a verificação de tipo de tempo de execução para props em React e objetos semelhantes.

Os prop-types irão ajudá-lo a verificar se o tipo de prop desejado está sendo passado para o seu componente ou não.

Se o tipo apropriado de um prop específico não for passado para o seu componente, o pacote irá lançar um aviso no console do seu navegador.

Na caneta acima, você pode verificar o console e ele irá lançar o seguinte aviso:

**"Warning: Failed prop type: Invalid prop `message` of type `string` supplied to `Hello`, expected `array`. in Hello"**

A partir da mensagem de aviso acima, está bem claro que estamos passando uma string para o componente Hello, mas o componente espera que a mensagem prop seja do tipo array.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

## 02 - Use displayName para definir um nome específico para seu componente

A string displayName é usada em mensagens de depuração.

Se você não usa [displayName](https://reactjs.org/docs/react-component.html#displayname) em seus componentes, recomendo a utilizar de agora em diante.

Normalmente, se você depurar seu componente usando as [ferramentas de desenvolvedor React](/9-ferramentas-uteis-para-trabalhar-com-react/), verá os componentes porque são inferidos a partir do nome da função ou classe que define o componente.

No entanto, se houver uma situação em que haja dois componentes com o mesmo nome (botão, lista suspensa etc.), talvez seja necessário renomear seus componentes. Caso contrário, você não conseguirá distingui-los.

Você pode resolver o problema acima usando displayName.

Você simplesmente renomeia um dos componentes usando displayName.

No exemplo acima, você pode ver que, embora o nome da classe seja Component, você verá o nome “Hello” na ferramenta de desenvolvedor React porque tem Hello como seu displayName.

Isso é muito útil para fins de depuração e geralmente é negligenciado.

## 03 - User o linter para tornar seu código mais fácil de revisar

Se você se preocupa com sua sanidade, você deve usar um linter em sua base de código.

Linters irá ajudá-lo a tornar seu código semelhante ao de outros desenvolvedores de sua empresa. Seguindo um conjunto estrito de regras, você pode ter certeza de que toda a base de código será consistente.

Por exemplo, você pode forçar outros desenvolvedores a usar ponto-e-vírgula no final de uma linha. Caso contrário, o linter emitirá um erro ou um aviso com base nas suas configurações.

O linter que sigo principalmente é [ESLint](https://eslint.org/), mas você pode escolher qualquer um que se adapte às suas necessidades.

## 04 - Crie o hábito de revisar seu próprio código

Esteja você corrigindo um bug ou desenvolvendo um novo recurso, é provável que você force suas alterações e crie uma solicitação pull rapidamente quando estiver com pressa.

O problema com isso é que você nem consegue revisar suas próprias alterações. Como resultado, você pode perder alguns lugares que pode refatorar e torná-lo melhor.

Pela minha experiência, depois de revisar minhas próprias alterações, às vezes, eu poderia torná-lo mais eficiente, dividir funções maiores em várias menores e tornar o código mais modularizado.

**Recomendo muito essa [leitura.](https://amzn.to/3j17Yq9)**

Antes, eu nunca revisava meu próprio código. Mas praticar este hábito, sinto que melhora minha codificação e pode ajudar você também.

## 05 - Tenha paciência, seus primeiros códigos não serão bons

**O _React para iniciantes_** pode parecer muito complicado a primeira vista, mas co um tempo você vai pegando o jeito. Os primeiros códigos nem sempre vão ser bons, então tenha paciência e continua estudando.

Recomendo dá uma olhada neste [treinamento aqui](/programador-fullstack-8-semanas).

Você deve olhar para sua primeira iteração de codificação e pensar sobre os recursos que pode ter perdido.

Uma maneira de corrigir isso poderia ser fazendo um [Test Driven Development (TDD)](/react-guia-completo-para-testes/), que é uma ótima prática, mas raramente é seguida. Se você seguir uma abordagem TDD, sua primeira iteração pode ser a melhor.

Pense bem sobre como você deseja proceder antes mesmo de escrever uma única linha de código e quando terminar de implementar um recurso ou corrigir um bug, observe suas alterações e pense em como você pode melhorá-lo.

## 06 - Divida seu código em várias funções menores

![Código Legível](/uploads/2020/09/codigo-legivel-1.jpg)

Código Legível

Dividir suas funções maiores em várias funções menores tornará as funções menores mais reutilizáveis. Eles também se tornarão muito mais fáceis de testar.

Você também pode criar muitos arquivos de utilitário que podem ajudá-lo a remover código duplicado de vários arquivos.

Depois de criar vários arquivos, examine-os e verá que há muitas linhas de código duplicadas, principalmente react para iniciantes. Você pode pegar essas linhas para criar um arquivo de utilitário. Você pode então reutilizar o mesmo arquivo de utilitário em vários arquivos.

## 07 - Crie vários arquivos em vez de escrever um arquivo grande

Rever um arquivo grande é sempre mais difícil do que revisar vários arquivos menores.

Se você dividir seu código em vários arquivos menores e cada arquivo contiver apenas uma lógica, será muito fácil para o revisor revisar esse arquivo. Principalmente o React para iniciantes, então presta bem atenção nesta dica.

## 08 - Tenha muito atenção ao nomear seus arquivos

Outra coisa que você deve lembrar aqui é que, se nomear seus arquivos de acordo com o trabalho que eles executam, isso também o ajudará no futuro, assim como outros desenvolvedores, a entender o que o arquivo realmente faz.

Depois de examinar o nome do arquivo, outros desenvolvedores devem entender o que o arquivo deve fazer.

Por exemplo, dropdown.js é um bom nome, mas é muito genérico e se você usá-lo em vários lugares no mesmo diretório, você pode nomeá-lo como topDropdown.js, bottomDropdown.js, o que é ruim. Novamente recomendo a [leitura desse livro](https://amzn.to/3j17Yq9)

A melhor maneira será prefixá-los com o trabalho que devem realizar. Por exemplo, userDropdown.js, fileDropdown.js, etc.

## 09- Sempre escreva testes

Não consigo enfatizar o suficiente a importância desse ponto. Os testes completam seu código. [E tão importante que aqui no blog tem um artigo falando justamente sobre isso.](/react-guia-completo-para-testes/)

Depois de desenvolver um recurso, você pode sentir que ele funciona. Mas pode haver (e provavelmente haverá) casos extremos em que isso pode não funcionar. Os testes o ajudarão a identificar esses casos.

É óbvio que escrever casos de teste aumentará o tempo que você precisa para escrever seu código. Porém, sempre ajudará a eliminar possíveis bugs que possam surgir no futuro.

Você deve reservar um tempo para escrever testes se se preocupa com sua aplicação.

## 10 - Não use muito o ciclo de vida de tratamento de erro

O React 16 introduziu uma maneira melhor de [lidar com erros](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) usando um recurso chamado Limites de erro.

Essencialmente, os limites de erro são componentes React que detectam erros de JavaScript em qualquer lugar em sua árvore de componentes filhos, registram esses erros e exibem uma UI de fallback em vez da árvore de componentes que travou.

Se a lógica para a IU de fallback estiver presente em seu componente ErrorBoundary, você pode encapsular seu componente dentro desse componente ErrorBoundary.

```
<ErrorBoundary>  <SeuComponente /></ErrorBoundary>
```

Esta é uma boa maneira de mostrar uma IU substituta para seus erros. Mas você não precisa envolver todos os seus componentes com um componente ErrorBoundary.

Você pode colocar seu componente ErrorBoundary apenas em alguns lugares estratégicos onde você precisa deles.

## Conclusão

Espero que esses pontos ajudem você a escrever um código ReactJS melhor e um código JavaScript em geral. Deixa aqui em baixo um comentário falando se você já usava alguma dessas dicas, ou se teve alguma dica que você não conhecia.

### Recomendação

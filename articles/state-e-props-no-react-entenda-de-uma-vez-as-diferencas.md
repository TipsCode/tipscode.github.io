---
title: "State e Props no React entenda de uma vez as diferenças"
date: "2020-10-11"
categories: 
  - "react"
description: Como você usa state e props no React, e o que cada um deles é?
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

**_Como você usa state e props no React, e o que cada um deles é_**?

Uma das coisas mais incríveis sobre o react é sua capacidade de gerenciar seus dados e renderizar adequadamente sua aplicação. Quando seus dados mudam, mas há duas maneiras principais que o React lida com os dados, são os recursos de state e props no react. Pode ser um pouco confuso entender quando você deve usar props e quando deve usar o state. Foi essa a motivação de escrever esse artigo.

  
Vou detalhar precisamente o que são state e props no react, e por que você deve fazer uso desses dois recurso.

## O que é Props?

Então, primeiro vamos começar com os adereços ou Props (na linguagem técnica). Suportes que você pode pensar como argumentos para uma função, quando você cria um componente dentro de react e quer renderizá-lo, você vai passá-lo nos parâmetros que deseja dar a ele.

  
Por exemplo, digamos que temos uma aplicação de contador, a coisa que você provavelmente passará para esse contador será a contagem inicial essencialmente em que sua contagem deve começar. Então, você vai dar ao seu contador componente sua contagem inicial dentro dos props.

```
function contador(props) {
  return <h1>Contagem inicial, {props.cont}</h1>;
}
```

É como uma função, como você deseja inicializar seu componente ou o que deseja que seu componente renderize? Assim, neste exemplo de aplicação de contador, queremos que nossa contagem inicial seja zero, então, vamos passar isso pelos props.

[link da documentação sobre o props](https://pt-br.reactjs.org/docs/components-and-props.html)

### Exemplo

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

Outra coisa em que você pode pensar onde pode precisar de props é, digamos que você deseja exibir algo para o usuário que tenha um título e um subtítulo.

  
No nosso caso, um componente está armazenando um título e um subtítulo. Então, estamos passando estes pelos props, e então nossa aplicação sabe se esses props mudam em algum ponto, por exemplo, alguma outra coisa em nosso aplicação muda, esses props, ele irá renderizar novamente aquele componente para nós porque nossos adereços agora são diferentes.

## O que é State?

Por outro lado, está um pouco em estado diferente é algo dentro de um componente. A grande diferença entre props e state é que adereços que você passa para um componente e o state é tratado dentro desse componente. Os props são tratados fora do componente no exemplo de nossa aplicação de contador. A contagem de atualizações é controlada dentro do estado. Assim, enquanto passamos a contagem inicial em nossos props, estamos apenas configurando nosso estado para essa contagem inicial. Então, dentro de nosso componente que está lidando com nosso contador.

  
Conseguimos atualizar nosso contador para aumentá-lo ou diminuí-lo dependendo do que o usuário faz, e estamos usando o state para isso.  

É uma grande diferença entre state e props. O state é controlado no componente e você pode atualizá-lo dentro do componente. Em comparação, os state são tratados fora do componente e também devem ser atualizados fora do componente.

[link da documentação](https://pt-br.reactjs.org/docs/faq-state.html)

## Diferenças entre state e props no React

Outra coisa sobre state e props é que, quando você altera o estado dentro de sua aplicação, ele irá renderizar novamente aquela seção da sua aplicação, mas props você não pode mudá-los, você precisa mudar o exterior do componente.

Como falei, provavelmente será o estado armazenado em outro lugar em sua aplicação que está sendo passado como parâmetro.

Voltando ao nosso exemplo de subtítulo e componente intitulado, muito provavelmente este componente não terá nenhum estado porque tudo o que ele faz é renderizar algum texto e esse texto nunca vai mudar.

Não há nada naquele componente que possa ser alterado, então, ele não precisa de nenhum estado, ele apenas pegará esses dois acessórios e os exibirá, e isso é tudo que o componente faz.  

O que é ótimo, é super simples. Ainda assim, com o exemplo da aplicação de contador, estamos atualizando a contagem, então precisamos do estado para armazenar aquilo que iremos atualizar, e é aí que o estado é útil, o estado está lá para quando você precisa renderizar novamente e atualizar sua aplicação.

Com base em algo que o usuário fez, se você quiser mudar algo em sua aplicação, você precisa armazenar isso em um estado para que ele renderize adequadamente aquele que mudou.

Os adereços (Props), por outro lado, são úteis quando você deseja exibir algumas informações dentro de um componente sem codificá-lo. Essencialmente, é uma variável para uma função.

Você também pode pensar sobre isso ao criar uma classe com um construtor, as coisas que você passa para o construtor dessa classe serão as coisas que são seus adereços para um componente em React.

Caso você queira um treinamento em vídeo prático veja meus [treinamentos bônus](/meus-bonus)

### Exemplo

Então, por exemplo, vamos passar esse título e descrição para baixo porque queremos renderizá-los e não queremos apenas um componente que renderize o mesmo título e descrição.

Queremos que o título e a descrição sejam diferentes, então usaremos **props** para torná-los dinâmicos. Com base no que passamos para esse componente, mas com nosso aplicativo de contador, temos algumas contas que precisamos atualizar dentro de nosso estado, então usaremos o estado para garantir que possamos atualizar continuamente com base na entrada do usuário.

Outro exemplo do estado é beneficio.

  
É, dentro de um formulário se você tiver um elemento de entrada como caixa de seleção, selecione uma caixa de tudo o que precisa ser atualizado pelo usuário.

Então, vamos usar o estado para armazenar para que eles estão atualizando esse valor e para o que eles estão mudando esse valor e assim por diante.

  
O lugar onde muitas pessoas ficam confusas, se perguntando quando eles deveriam usar o estado versus os adereços é que eles não pensam corretamente sobre qual deles será manipulado pelo componente.

![State e Props no React - principais diferenças
](/uploads/2020/10/diferencas-entre-state-e-props-no-react-1024x576.jpg)

State e Props no React - Diferenças

## Principais diferenças

Essas são as principais diferenças entre o state e os props.

1 . Se você estiver lidando com essa informação dentro do componente e dentro desse componente apenas em nenhum lugar fora dele, como um pai, por exemplo, então você vai usar o state.

2 . Se você está lidando com essa informação fora do componente como um pai, por exemplo, você precisa passá-la via props

3 . Além disso, se suas informações são estáticas e não vão mudar, por exemplo, dentro do componente, você nunca precisa atualizar o título dessa seção de exibição. Então você devera usar props porque adereços(props) são para coisas que serão transmitidas do pai e não mudam dentro do componente.

## Conclusões

Espero que você aprenda algo novo com isso. Você também pode ler meus outros artigos também. Forte abraço e que o senhor Jesus Cristo lhe abençoes de forma incrível.

### Recomendado

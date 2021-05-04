---
title: "Começando Com React 6 Lições importantes que vão deixar você a frente"
date: "2020-09-27"
categories: 
  - "react"
description: Começar com uma nova tecnologia pode ser bastante difícil. Você geralmente se encontra em um mar de tutoriais e artigos, seguidos por milhões de opiniões pessoais. E cada um afirma que encontrou o “caminho certo e perfeito”. Não é diferente para aqueles que estão começando com React.
imgArticle: /thumbnail-article/começando-com-react-6-licoes-importantes-que-vao-deixar-voce-a-frente.png
imgHome: /thumbnail-home/começando-com-react-6-licoes-importantes-que-vao-deixar-voce-a-frente.png
---

**_Começar com uma nova tecnologia pode ser bastante difícil. Você geralmente se encontra em um mar de tutoriais e artigos, seguidos por milhões de opiniões pessoais. E cada um afirma que encontrou o “caminho certo e perfeito”. Não é diferente para aqueles que estão começando com React._**

Isso nos deixa debatendo se nosso tutorial escolhido será uma perda de tempo ou não.

Antes de mergulhar no oceano, devemos entender os conceitos básicos de uma tecnologia. Então, precisamos desenvolver uma mentalidade baseada em tecnologia. Se estamos começando a aprender React, primeiro temos que pensar em React. Só mais tarde podemos começar a misturar várias mentalidades em uma.

Neste artigo, cobrirei algumas lições que aprendi com relação a essa mentalidade em algumas experiências pessoais com o React.

Então vamos!

## 01 - Mantenha-se sempre atualizado em relação ao React

Na data da criação desse artigo o react está na [versão 16.13.0](https://pt-br.reactjs.org/versions/), então lhe recomendo sempre estar de olho nas novas atualizações e quais impactos essas versões podem causar na sua aplicação.

Aqui estão algumas das mudanças e melhorias dessa versão:

- Modo Simultâneo: Ajuste _SuspenseLista heurística_ de limite de CPU
- Melhorias no React Core: Avisa quando uma _string ref_ é usada de uma maneira que não seja receptiva a um codemod futuro
- Melhorias no React DOM: Correção de bug no modo Suspense legado, onde as funções de limpeza de efeito não são acionadas. Isso afeta apenas os usuários que usam Suspense para obtenção de dados no modo legado, que não é tecnicamente suportado.
- API de Contexto Oficial;
- API _createRef_.
- Modo estrito.

A equipe React Core e todos os colaboradores estão fazendo um ótimo trabalho ao tentar melhorar a tecnologia que todos nós adoramos. E na versão 16.4.0 recebemos [Pointer Events](https://reactjs.org/blog/2018/05/23/react-v-16-4.html).

Outras mudanças certamente virão, e é apenas uma questão de tempo: Async Rendering, Caching, versão 17.0.0 e muitas outras ainda não conhecidas.

Portanto, se você deseja estar no topo, precisa estar atualizado sobre o que está acontecendo na comunidade.

Saiba como as coisas funcionam e por que estão sendo desenvolvidas. Aprenda quais problemas estão sendo resolvidos e como o desenvolvimento está sendo facilitado. Isso realmente vai te ajudar.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

## 02 - Sempre divida seu código em partes menos

O React é baseado em componentes. Portanto, você deve aproveitar esse conceito e não ter medo de dividir pedaços maiores em pedaços menores.

Às vezes, um componente simples pode ser feito de 4 a 5 linhas de código e, em alguns casos, é totalmente adequado, mas temos esse medo quando estamos **_começando com react_**, mas não fique dividir sempre será algo bom.

Faça com que, se uma nova pessoa ler ao seu código, ela não precise de dias para entender como tudo funciona.

```
// Não está fácil de entender?

return (  [   <ChangeButton    onClick={this.changeUserApprovalStatus}    text="Mudando isso"   />,   <UserInformation status={status}/>   ]);
```

Você não precisa fazer componentes que tenham uma lógica complexa embutida, principalmente se você está **começando com react**. Eles podem ser apenas visuais. Se isso melhorar a legibilidade e os testes do código, e reduzir ainda mais a complexidade do código, será uma grande vitória para todos na equipe.

_**Simples lembre-se dassa frase "O simples sempre será mais Poderoso" já dizia um dos meus mentores o @jonathanmouraoficial**_

```
import ErrorMessage from './ErrorMessage';

const NotFound = () => (  <ErrorMessage    title="Oops! Página não encontrada."    message="A página que você está procurando não existe!"    className="test_404-page"  />);
```

No exemplo acima, as propriedades são estáticas. Assim, podemos ter um componente puro que é responsável pela mensagem de erro do site **_Not Founde_** nada mais.

Além disso, se você não gosta de ter classes CSS como nomes de classe em todos os lugares, eu recomendaria usar componentes estilizados. Isso pode melhorar muito a legibilidade.

```
const Number = styled.h1`  font-size: 36px;  line-height: 40px;  margin-right: 5px;  padding: 0px;`;//..

<Container>  <Number>{skipRatePre}</Number>  <InfoName>Pular texto</InfoName></Container>
```

Se você tem medo de criar mais componentes por causa da poluição de suas pastas com arquivos, repense como você estrutura seu código. Tenho usado dessa forma e é incrível. Recomendo a leitura desse [artigo Será mesmo complicado aprender React?](/react-e-dificil-mesmo-aprender/)

## 03 - Não se limite ao básico, sempre busque mais e mais

Você pode pensar às vezes que não entende algo o suficiente para avançar para as coisas avançadas. Mas muitas vezes você não deve se preocupar muito com isso - aceite o desafio e prove que está errado, principalmente se você está **começando com React**.

Pegando os tópicos avançados e se esforçando, você pode entender mais os princípios básicos e como eles são usados ​​para coisas maiores.

Se você está começando com react neste momento ou já trabalha a algum tempo e se senti sem evolução, [recomendo esse super treinamento.](/programador-fullstack-8-semanas)

Existem muitos padrões que você pode explorar:

- Componentes Compostos;
- Componentes de alta ordem;
- Render Props;
- Componentes Inteligentes / Burros;
- E muitos outros..

Explore todos eles e você saberá por que e onde são usados. Você ficará mais confortável com o React.

```

render() {  const children = React.Children.map(this.props.children,   (child, index) => {      return React.cloneElement(child, {        onSelect: () => this.props.onTabSelect(index)    });     });   return children;}
```

Além disso, não tenha medo de tentar algo novo em seu trabalho - dentro de certos limites, é claro! Não experimente apenas em projetos pessoais.

As pessoas farão perguntas e isso é normal. Sua tarefa é defender seu trabalho e suas decisões com argumentos fortes.

Seu objetivo deve ser resolver um problema existente, tornar o desenvolvimento mais fácil ou apenas limpar um pouco o código. Mesmo que suas sugestões sejam rejeitadas, você irá para casa sabendo mais do que simplesmente sentado em silêncio.

## 04 - Não complique demais as coisas

![começando com react](/uploads/2020/09/react-1024x576.jpg)

Isso pode soar como um contra-argumento, mas é diferente. Na vida e em todos os lugares, devemos ter equilíbrio. Não devemos exagerar na engenharia para nos exibir. Devemos ser práticos. Escreva um código que seja fácil de entender e cumpra seu propósito.

**_Se você não precisa do Redux, mas quer usá-lo porque todo mundo usa sem saber seu verdadeiro propósito, não faça. Tenha uma opinião e não tenha medo de se defender se os outros o pressionarem._**

Às vezes, você pode pensar que, ao alavancar as tecnologias mais recentes e escrever códigos complexos, está dizendo ao mundo:  
“Não sou um júnior, estou me tornando um meio / sênior. Olha o que posso fazer! ”

Para ser honesto, essa era minha mentalidade no início da minha jornada de desenvolvedor. Mas com o tempo você entende que o código que foi escrito sem se exibir ou porque “funciona” é mais fácil de se conviver.

- Os colegas de trabalho podem trabalhar em seus projetos e você não é a única pessoa responsável por desenvolver / corrigir / testar & lt; inserir tarefas >
- A equipe pode entender o que os outros fizeram sem se sentar durante uma longa reunião. Alguns minutos são suficientes para discutir.
- Quando seu colega sai de férias de duas semanas, você pode assumir a tarefa dele. E você não terá que trabalhar nisso por 8 horas, porque pode ser feito em uma hora.

As pessoas respeitam as pessoas que tornam a vida das outras pessoas mais fácil. Assim, se o seu objetivo é ganhar respeito, subir na hierarquia e melhorar, procure codificar para a equipe e não para você.

Você se tornará o jogador favorito de todos.

## 05 - Refatorar Sempre é muito normal

Você mudará de ideia dezenas de vezes, embora o gerente de projeto mude de ideia com mais frequência. Outros irão criticar seu trabalho e você irá criticá-lo. Como resultado, você terá que alterar seu código muitas e muitas vezes.

Mas não se preocupe, é um processo natural de aprendizagem. Sem falhas e erros não podemos melhorar.

Quanto mais caímos, mais fácil se torna voltar a subir.

Mas aqui vai uma dica: certifique-se de testar seu software atual. Fumaça, unidade, integração, instantâneo - não tenha vergonha deles.

Todos enfrentaram ou enfrentarão um cenário em que um teste poderia ter economizado um tempo precioso.

E se você, como muitas pessoas, acha que eles são uma perda de tempo, tente pensar um pouco diferente.

- Você não terá que se sentar com seu colega explicando como as coisas funcionam.
- Você não terá que se sentar com seu colega explicando por que as coisas quebraram.
- Você não terá que consertar bugs para seu colega.
- Você não terá que corrigir os bugs encontrados após 3 semanas.
- Você terá tempo para fazer o que quiser.

E esses são benefícios muito grandes.

## 06 - Se você ama o que faz, co certeza vai ser prospero

Durante o período deste ano, fiquei mais forte e mais confortável com o React - os vários padrões, paradigmas e funcionamentos internos. Posso ter discussões avançadas e ensinar outras pessoas sobre tópicos que tinha medo de tocar.

E hoje ainda sinto a mesma empolgação e alegria de um ano atrás.

Portanto, eu recomendaria a todos que se perguntassem: "Você gosta do que faz?"

Se não, continue procurando aquela peça especial da qual você pode falar por horas, aprender sobre todas as noites e ser feliz.

Porque temos que encontrar algo que esteja mais próximo de nossos corações. O sucesso não pode ser forçado, deve ser alcançado.

Se eu pudesse voltar um ano no tempo, isso é o que eu diria a mim mesmo para me preparar antes da grande jornada que temos pela frente.

Obrigado por ler!

Se você achou este artigo útil, deixa um comentario ai rsrs.

Que o senhor Deus abençoe grandemente sua carreira.

### Recomendação

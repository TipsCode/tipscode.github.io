---
title: "7 dicas para você otimizar seu CSS e obter um carregamento de página mais rápido"
date: "2020-07-05"
categories: 
  - "css"
tags: 
  - "7-dicas"
  - "7-dicas-para-carregamento"
  - "alisson-suassuna"
  - "css"
  - "rapido"
  - "site"
  - "tipscode"
description: Na web de hoje, o tempo de carregamento da página é uma das métricas mais importantes do site. Mesmo milissegundos podem ter um enorme impacto nos seus resultados financeiros, e o carregamento lento da página pode sabotar facilmente suas taxas de conversão. Existem muitas ferramentas e técnicas que você pode adotar para acelerar seu site. Neste artigo, lhe mostro 7 dicas para você fazer a otimização de CSS que você pode usar para melhorar o desempenho do front-end do seu projeto.
imgArticle: /thumbnail-article/otimizacao-do-css.png
imgHome: /thumbnail-home/otimizacao-do-css.png
---

Na web de hoje, o tempo de carregamento da página é uma das métricas mais importantes do site. Mesmo milissegundos podem ter um enorme impacto nos seus resultados financeiros, e o carregamento lento da página pode sabotar facilmente suas taxas de conversão. Existem muitas ferramentas e técnicas que você pode adotar para acelerar seu site. Neste artigo, lhe mostro 7 dicas para você fazer a otimização de CSS que você pode usar para melhorar o desempenho do front-end do seu projeto.

## 01 - Encontre os Gargalos de Desempenho

A coisa mais importante para você fazer uma otimização CSS é começar com uma auditoria completa. Felizmente, existem muitas ferramentas de diagnóstico CSS que podem ajudá-lo a encontrar os gargalos de desempenho que você possui. Em primeiro lugar, você pode usar o _**DevTools**_ do seu navegador da web para verificar a rapidez com que seus ativos são carregados. Na maioria dos navegadores, você pode abrir o **DevTools** pressionando o botão F12 .

Por exemplo, no Firefox DevTools, você pode verificar o tamanho e o tempo de carregamento de todos os arquivos CSS carregados pela sua página, usando a guia Rede. Você também pode testar a velocidade com que o CSS é carregado com e sem cache. Como o DevTools também mostra CSS externos, como arquivos de fontes do Google e recursos de CSS extraídos de CDNs de terceiros, é possível encontrar muitas fontes que você nem conhecia antes.

![css](/uploads/2020/06/gargalos-1-1024x338.png)

Figura 01: Gargalos - Firefox

[Pingdom Tools](https://tools.pingdom.com/) e [Lighthouse by Google](https://developers.google.com/web/tools/lighthouse/) são outras duas ferramentas gratuitas que os desenvolvedores costumam usar para analisar a velocidade do site e o desempenho do front-end. O Pingdom Tools, por exemplo, fornece várias dicas úteis de otimização de CSS se você executar um teste simples de velocidade do site.

![](/uploads/2020/06/PingDom-Tools-1024x479.png)

## 02 - Minimize e Comprima arquivos CSS

A maioria dos sites depende de vários arquivos CSS. Embora na maioria dos casos, o CSS modular seja considerado uma prática recomendada, o carregamento de todos os arquivos pode demorar um pouco. Mas, essa é exatamente a razão pela qual existem ferramentas de compactação e minificação CSS. Se você usá-los de maneira inteligente, poderá melhorar significativamente o tempo de carregamento da página.

Existem ferramentas on-line, como o [CSS Minify](https://www.cleancss.com/css-minify/), que permitem que você reduza o tamanho do arquivo CSS, copiando-o em um formato simples. Esse tipo de ferramenta pode funcionar bem com projetos menores. No entanto, usá-los pode se tornar complicado e demorado no caso de projetos maiores que vêm com vários arquivos CSS. Nesses casos, é melhor optar por uma solução automatizada.

Atualmente, a maioria das ferramentas de compilação permite executar automaticamente a compactação em sua base de código. Por exemplo, o Webpack retorna todos os seus arquivos como um pacote compactado por padrão. O PostCSS também possui plugins inteligentes, como o [CSS Nano](https://cssnano.co/), que não apenas minimizam seus arquivos, mas também o executam por meio de muitas otimizações focadas. Se você quiser aprender as melhores práticas para trabalhar com Webpack [clique aqui](/programador-fullstack-8-semanas)

![css](/uploads/2020/06/css-nano.png)

## 03 - Use Flexbox e CSS Grid

Se você ainda depende exclusivamente do modelo tradicional de Grid ao escrever CSS e alinhar itens na tela usando margens, preenchimentos e flutuadores, considere adotar módulos de layout mais modernos, como flexbox e [CSS Grid](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/). Esses novos modelos permitem implementar layouts complexos com muito menos código.

Com técnicas mais antigas, você precisa usar muitos truques e ajustes, mesmo para coisas mais simples, como centralizar itens verticalmente. No entanto, esse não é o caso do flexbox e da [CSS Grid](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/). Embora possa levar algum tempo para você [aprender a usa-los](/programador-fullstack-8-semanas), vale a pena o investimento, pois seus arquivos CSS serão muito menores. Isso é especialmente verdade no caso do flexbox, que, atualmente, possui um suporte muito bom ao navegador (atualmente, 98,48% no mundo, na data deste artigo).

![](/uploads/2020/06/uso-de-flexbox-1-1024x442.png)

Embora o suporte ao navegador para CSS Grid seja menos perfeito (atualmente, 95,23% em todo o mundo), você ainda pode usá-lo se não precisar dar suporte a navegadores mais antigos ou se estiver disposto a fornecer fallback.

![](/uploads/2020/06/uso-css-grid-1024x426.png)

## 04 - Use a tag em vez das regras @import

Existem duas técnicas principais que você pode usar para fazer uma página da Web carregar arquivos CSS:

- adicionando-os à seção da página HTML usando a tag;
- importando-as de outras folhas de estilo usando a regra geral @import CSS.

Você precisa adicionar a regra @import à parte superior do arquivo CSS principal. Na maioria dos casos, é usado para carregar ativos menores, como fontes e outros elementos de design. No início, isso pode parecer uma boa solução, no entanto, leva muito mais tempo para o navegador carregar as folhas de estilo extras do que quando a página HTML as carrega diretamente usando as tags .

Ao adicionar mais de um arquivo CSS à sua página HTML, sempre preste atenção à **[especificidade do CSS.](/especificidade-css-5-coisas-que-voce-precisa/)** Adicione a folha de estilo mais genérica primeiro e depois vá para as mais específicas. Você precisa fazer isso porque as folhas de estilo adicionadas posteriormente substituem as regras dos arquivos CSS anteriores. Por exemplo, aqui está um exemplo quando os arquivos CSS são adicionados na ordem correta:

```
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="page.css">
<link rel="stylesheet" href="component.css">
```

## 05 - Use Gradientes e SVGs em vez de Imagens

Pode levar muito tempo para carregar todas as imagens em uma página da web. Os desenvolvedores usam muitas técnicas de otimização de imagem para atenuar o efeito, como carregar imagens de uma CDN externa ou usar ferramentas de compactação de imagem como o [TinyJPG](https://tinyjpg.com/). Essas soluções podem ajudar bastante, no entanto, muitas vezes, você pode substituir imagens JPG e PNG com muitos recursos por efeitos CSS nativos.

Por exemplo, você pode usar gradientes em vez de grandes imagens de fundo que podem desacelerar bastante o navegador do usuário. Você pode usar as funções de gradiente do CSS para criar gradientes lineares, radiais e repetitivos. Com essas funções nativas do CSS, você não pode apenas definir as cores, mas também o ângulo do gradiente.

A regra a seguir, por exemplo, cria um bom plano de fundo gradiente que carrega muito mais rápido do que qualquer imagem:

```
div {
    background: linear-gradient(45deg, lightgreen, royalblue);
}
```

Para gradientes e texturas mais complexos, você também pode usar geradores como [ColorZilla](https://www.colorzilla.com/gradient-editor/).

![](/uploads/2020/06/colorzilla-1.png)

Além dos gradientes, você também pode substituir imagens JPG e PNG tradicionais por Scalable Vector Graphics (SVG). Eles não carregam apenas mais rapidamente, mas você precisa incluir apenas uma versão da imagem. Isso ocorre porque o SVG pode ser dimensionado para qualquer tamanho sem perda de qualidade devido à sua natureza vetorial. Além disso, você também pode estilizar SVG com CSS, como se fosse um arquivo HTML comum.

## 06 - Evite a regra Important

Embora a regra **_important_** possa ser uma maravilha em alguns casos, você deve usá-la apenas como último recurso. Esta regra cria uma exceção no CSS. Portanto, quando você adiciona **_!Important_** a uma declaração CSS, ela substitui quaisquer outras declarações, mesmo aquelas com maior especificidade. É assim que sua sintaxe se parece:

```
h2 {
   margin-bottom: 20px !important;
}
```

Se houver muitas regras important em seu CSS, o navegador do usuário terá que executar verificações extras no código, o que pode tornar a página mais lenta. Como regra geral, nunca use ! Important para CSS em todo o site ou ao criar um tema ou plugin. Se possível, use-o apenas quando desejar substituir o CSS proveniente de uma biblioteca de terceiros.

## 07 - Considere fazer uma refatoração no CSS do seu Projeto

Embora a refatoração de CSS raramente seja uma tarefa fácil, há muitos casos em que isso pode melhorar significativamente o desempenho do site. Por exemplo, quando seus arquivos CSS são muito grandes, ou você herdou uma base de código herdada ou possui tempos de carregamento de página muito baixos, o que prejudica seriamente suas taxas de conversão. O objetivo da refatoração de CSS é tornar seu código mais elegante, mais sustentável e mais rápido de carregar.

A refatoração de CSS é um processo de várias etapas durante o qual você precisa analisar todos os aspectos da sua base de código CSS. Você precisa verificar várias coisas diferentes, como:

- se você possui regras ou recursos CSS não utilizados ou duplicados;
- se você pode usar técnicas mais modernas, como flexbox e grade CSS;
- se você usa muita especificidade (você pode calculá-la com esta calculadora de especificidade visual );
- se a estrutura dos seus arquivos CSS é razoável (por exemplo, é mais fácil manter arquivos menores do que um arquivo grande);
- se vale a pena usar uma ferramenta de criação automatizada;
- e muito mais

Antes de começar a refatoração, configure também metas mensuráveis ​​e escolha os benchmarks que você usará, como o tempo de carregamento da página ou a primeira pintura significativa para poder comparar os valores anteriores e posteriores.

Também não se esqueça de usar uma ferramenta de controle de versão como o [Git](/10-tecnicas-do-git-que-vocce-precisa-conhecer/). Dessa forma, se algo der errado, você poderá voltar para uma versão anterior do seu código.

### Empacotando

Existem muitas dicas de otimização de CSS que você pode usar para melhorar o desempenho do seu site. A maioria deles é fácil de implementar, mas pode ter um efeito significativo nos tempos de carregamento da página. Páginas de carregamento mais rápido não apenas aprimoram a experiência do usuário, mas também ajudam a obter melhores classificações no Google e em outros mecanismos de pesquisa.

## Conclusões

É isso ai, espero ter lhe ajudado com esse artigo, muitas dessas práticas citadas aqui eu uso muito em meus projetos pessoas, vale a pena investir um pouco do seu tempo de desenvolvimento para dá atenção há esses "pequenos" detalhes que no final fazem toda diferença.

### Recomendações

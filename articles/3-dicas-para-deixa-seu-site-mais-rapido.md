---
title: "3 dicas Poderosas para deixar seu site mais rápido"
date: "2020-08-09"
categories: 
  - "desenvolvimento-web"
tags: 
  - "3-dicas"
  - "seu-site-mais-rapido"
  - "site"
description: A otimização de sites é um conjunto de técnicas, tanto do lado do servidor quanto do lado do cliente, que visam acelerar o tempo de carregamento dos sites e renderizar no navegador para uma melhor experiência do usuário.
---

A otimização de sites é um conjunto de técnicas, tanto do lado do servidor quanto do lado do cliente, que visam acelerar o tempo de carregamento dos sites e renderizar no navegador para uma melhor experiência do usuário.

Hoje, os visitantes estão acostumados ao imediatismo e à reatividade típicos de aplicativos nativos. Eles esperam que uma página da web seja carregada em 1000ms . Se demorar muito mais do que isso, é provável que eles deixem o site.

Os mecanismos de pesquisa certamente alcançaram essa tendência e, de várias maneiras, contribuíram para ela. De fato, o Google usa a velocidade da página como um fator de classificação para sites em pesquisas em computadores há um tempo. [O Google anunciou](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html) que, a partir de julho de 2018, as pesquisas para dispositivos móveis também serão super importantes para alcançar as primeiras posições em sua lista de resultados.

Muitas vezes, o [Bulma](/bulma-css-guia-basico-para-iniciante/) é criticado por adicionar inchaços desnecessários aos sites. Portanto, se você usar essa popular biblioteca de interface do usuário de front-end em seu projeto, preste atenção extra ao peso e velocidade da página.

Neste artigo, vou seguir três etapas de otimização de front-end que você pode seguir para garantir que seu site baseado no Bootstrap seja renderizado rapidamente e otimizado.

![site
](/uploads/2020/08/1455318-1.png)

site

## 01 - Faça o Download apenas do necessário

Se você decidir trabalhar com o pacote de download pré - compilado do Bootstrap, deve realmente pensar seriamente em quais partes da biblioteca realmente precisa.

A pasta de download contém a biblioteca CSS completa ( bootstrap.csse bootstrap.min.css) e a biblioteca de componentes JavaScript com todas as suas dependências, exceto jQuery ( bootstrap.bundle.jse bootstrap.bundle.min.js), além de vários arquivos CSS independentes que contêm o código necessário para partes específicas desse popular kit de interface do usuário.

Se você só precisa de uma boa redefinição de CSS para o seu projeto, basta usar bootstrap-reboot.min.css. Se você só precisa de um sistema de grade flexível e fácil de usar, escolha bootstrap-grid.min.css. Não é necessário fazer o download de toda a estrutura. Se, por outro lado, você sabe que vai usar tudo na biblioteca, pelo menos, certifique-se de incluir a versão reduzida.

Da mesma forma com o código JavaScript. Se você sabe que não terá menus suspensos, popovers e dicas de ferramentas em seu projeto, use-o em bootstrap.min.jsvez de bootstrap.bundle.min.jsnão precisar incluir o Popper.js .

## 02 - Opte pela origem e não pacotes de download pré-compilado

Tanto quanto a versão mais recente do Bootstrap permite selecionar partes dele para incluir no seu projeto, os arquivos pré-compilados ainda podem conter itens que você realmente não precisa.

Os navegadores ainda precisam fazer o download e processar o código não utilizado, o que pode afetar o desempenho do site, especialmente em conexões de rede lentas.

Uma idéia melhor seria fazer o download do código fonte do Bootstrap , porque:

- você poderá incluir exatamente os componentes necessários no seu projeto;
- personalizar qualquer parte da biblioteca se torna mais limpo e eficiente, sem necessidade de substituir estilos repetidamente;
- a folha de estilo que acaba em produção geralmente é mais enxuta.

## 03 - Use técnicas comprovadas

Além dos pontos acima, a otimização de um site construído sobre o Bootstrap para desempenho ainda precisa incorporar técnicas de desempenho de front-end, como qualquer outro site.

Abaixo estão apenas alguns dos fatores críticos que você deve prestar atenção para otimizar o front-end do seu site.

### CSS e JavaScript

Cada caractere no seu código soma o peso final da página da web. Escrever códigos CSS e [JavaScript](/programador-fullstack-8-semanas) limpos e concisos, mantendo-os legíveis nem sempre é fácil. No entanto, deve ser algo a ser buscado em todos os projetos.

Boas práticas de CSS incluem livrar-se de seletores não utilizados, código duplicado e regras excessivamente aninhadas. É bom manter seu código bem organizado no início de um projeto. Por exemplo, o uso de guias de estilo pode realmente beneficiar seu processo de desenvolvimento e a qualidade do seu código.

Além disso, existem ótimas ferramentas disponíveis para ajudá-lo a limpar seu código. Um linter como CSS Lint e JSLint pode verificar seu documento quanto a erros de sintaxe, padrões de codificação ineficientes, código não utilizado, etc.

### Minimize e concatene o código

Uma importante etapa de otimização é limitar o número de solicitações HTTP que um site precisa fazer para renderizar seu conteúdo. Cada ida e volta ao servidor e de volta para buscar recursos leva tempo, impactando negativamente a experiência do usuário.

Minimizar (ou seja, remover comentários e espaços em branco do documento) e concatenar arquivos CSS e JavaScript agora se tornaram uma prática consolidada que visa manter o tamanho do arquivo pequeno e diminuir o número de solicitações HTTP.

Se você deseja aprofundar, como otimizar CSS e JS para sites mais rápidos, de Gary Stevens, é uma ótima leitura.

### Cuidado com o tamanho dos arquivos de imagens

A parte mais pesada de uma página da web geralmente é representada por arquivos de imagem, mas também os arquivos de áudio e vídeo fazem sua parte. A otimização de recursos visuais é, portanto, crucial para o desempenho do site.

Fazer isso envolve dois aspectos:

- Certifique-se de usar o formato de imagem correto para o trabalho em questão;
- Espremer o excesso de bytes de seus ativos antes de enviá-los para produção. Existem ótimas ferramentas por aí que podem ajudá-lo. Confira ferramentas on-line como o TinyPNG para imagens rasterizadas (PNG, JPG, etc.) e o SSVGOMG de Jake Archibald para otimização SVG. Além disso, considere as ferramentas que você pode instalar localmente como o seu executor de tarefas favorito (Grunt, Gulp, etc.).

## Conclusões

Um site de renderização rápida é um fator essencial para determinar a ótima experiência do usuário nos sites. Isso se torna ainda mais crucial quando se trata de avaliar a experiência do usuário da Web em dispositivos móveis.

Neste artigo, listei uma série de técnicas que desempenham um papel na otimização de um site Bootstrap para desempenho do ponto de vista do desenvolvimento front-end.

Quais são as suas técnicas de otimização de front-end para um site Bootstrap de carregamento rápido? Deixe-me saber nos comentários!

### Recomendações

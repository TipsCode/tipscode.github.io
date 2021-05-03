---
title: "Acessibilidade Web Seja um Programador Diferente"
date: "2020-06-14"
tags: 
  - "acessibilidade"
  - "acessibilidade-de-sites"
  - "acessibilidade-na-web"
  - "acessibilidade-web"
  - "alisson-suassuna"
  - "deficiencia"
  - "deficiente"
  - "mobilidade"
  - "site-acessivel"
  - "tipscode"
  - "usabilidade"
  - "web"
  - "web-accesibility"
description: Compare isso com a perspectiva que muitos de nós adotamos na criação de aplicações a acessibilidade Web é tratada como uma reflexão tardia, uma coleção confusa de regras que a equipe pode procurar pela internet ou não. Se isso lhe parece familiar (e você é desenvolvedor, designer ou gerente de produto), este artigo é para você.
imgArticle: /thumbnail-article/acessibilidade-na-web.png
imgHome: /thumbnail-home/acessibilidade-na-web.png
---

Compare isso com a perspectiva que muitos de nós adotamos na criação de aplicações: a acessibilidade Web é tratada como uma reflexão tardia, uma coleção confusa de regras que a equipe pode procurar pela internet ou não. Se isso lhe parece familiar (e você é desenvolvedor, designer ou gerente de produto), este artigo é para você.

Espero mudar sua perspectiva sobre o tema, mostrando como a acessibilidade Web se encaixa nas áreas mais amplas de tecnologia, deficiência e design. Veremos como o design de diferentes conjuntos de habilidades leva a insights e inovações. Também mostrarei como o histórico de navegadores e HTML está entrelaçado com o histórico da tecnologia assistida. Esse tema eu particularmente gosto muito pois sou um desenvolvedor com uma deficiência motora e as vezes fico chocado que tal tema não seja discutido mais amplamente pela comunidade, então resolvi escrever esse artigo para discutirmos mais a respeito.

## Tecnologia Assistida

acessibilidade web

![acessibilidade web](/uploads/2020/06/tecnologia-assistida.jpg)

**Figura 01: Tecnologia Assistida**

Um produto acessível é aquele que pode ser usado por todos, e tecnologia assistida é um termo geral para dispositivos ou técnicas que podem ajudar no acesso, normalmente quando uma deficiência o impediria. Por exemplo, as legendas dão às pessoas surdas e com deficiência auditiva acesso ao vídeo, mas as coisas ficam mais interessantes quando perguntamos o que conta como deficiência.

Na definição de deficiência do 'modelo social' adotada pela Organização Mundial da Saúde, uma deficiência não é uma propriedade intrínseca de um indivíduo, mas uma incompatibilidade entre as habilidades e o ambiente do indivíduo. Se algo conta como uma 'deficiência' ou uma 'tecnologia assistencial', não tem um limite tão claro e é contextual.

Abordar incompatibilidades entre capacidade e ambiente levou não apenas a inovações tecnológicas, mas também a novos entendimentos de como os seres humanos percebem e interagem com o mundo.

![acessibilidade web](/uploads/2020/06/inclusao-menino-cadeira-de-rodas-icones.jpeg)

Figura 02: Acessibilidade web

O projeto [Soundshirt](http://cutecircuit.com/soundshirt/) por exemplo trás uma inovação bem bacana onde ele traduz entradas tipicamente percebidas por um sentido em entradas que podem ser percebidas por outro. Essa tecnologia vestível é uma camisa com variados sensores de som e vibrações sutis, correspondentes a diferentes instrumentos de uma orquestra, permitindo um prazer tátil.

Projetar para diferentes conjuntos de habilidades geralmente leva a inovações que acabam sendo úteis para pessoas e ambientes além do uso pretendido. Os cortes no meio-fio, e agora conhecidas como mini rampas nos cantos das calçadas, úteis para qualquer pessoa que carrega algo pela calçada, [originaram-se do ativismo dos direitos das pessoas com deficiência nos anos 70](https://99percentinvisible.org/episode/curb-cuts/) para tornar as calçadas acessíveis para cadeiras de rodas, infelizmente o Brasil está muito atrás nisso, falo isso por experiencia própria. Pellegrino Turri inventou a máquina de escrever antiga no início de 1800 para ajudar seu amigo cego a escrever de maneira legível, e a primeira máquina de escrever comercialmente disponível, a Hansen Writing Ball, foi criada pelo diretor do Instituto Real de Surdos-Mudos de Copenhague.

Vint Cerf [cita sua perda auditiva](https://www.blog.google/inside-google/googlers/vint-cerf-accessibility-cello-and-noisy-hearing-aids/) como forma de interesse em correio eletrônico em rede e no protocolo TCP/IP que ele co-inventou. As configurações de contraste de cores do smartphone para pessoas daltônicas são úteis para quem tenta ler uma tela sob luz solar intensa e até descobriram um uso inesperado para ajudar as pessoas a se tornarem menos viciadas em seus telefones

Portanto, projetar para diferentes conjuntos de habilidades nos dá novas idéias sobre como percebemos e interagimos com o ambiente, e leva a inovações que criam uma fronteira embaçada entre a tecnologia assistiva e a tecnologia em geral.

Com isso em mente, vamos voltar para a web.

## Tecnologia Assistida e a Web

acessibilidade web

A web foi concebida como acessível a todos desde o início. Uma cotação que você encontrará muito se começar a ler sobre acessibilidade na Web é:

> “O poder da Web está em sua universalidade. O acesso de todos, independentemente da deficiência, é um aspecto essencial. ”
> 
> Tim Berners-Lee, diretor do W3C e inventor da World Wide Web

Que tipo de tecnologias assistivas estão disponíveis para perceber e interagir com a web? Você pode ter ouvido falar ou usado um leitor de tela que lê o que está na tela. Também há telas em braille para páginas da Web e dispositivos de entrada alternativos.

É fascinante saber que as páginas da web são exibidas em braille; as páginas da web que criamos podem ser representadas em 3D! As telas em braille geralmente são feitas de pinos que são levantados e abaixados à medida que “traduzem” cada pequena parte da página, assim como o dispositivo pessoas com deficiência visual usar para ler.

As pessoas com proficiência no uso de leitores de tela de áudio se acostumam a uma fala mais rápida e podem ajustar a reprodução a uma taxa impressionante (além de economizar a bateria ao desligar a tela). Isso faz com que o leitor de tela pareça um modo alternativo igualmente útil de interação com sites e, de fato, muitas pessoas aproveitam os recursos de áudio da web para ditar ou ouvir o conteúdo. Uma interface destinada a alguns se torna mais amplamente usada.

**A acessibilidade Web é muito mais do que leitores de tela**, no entanto, vamos nos concentrar neles porque, como veremos, os leitores de tela são fundamentais para os desafios técnicos de uma Web acessível.

## Desafios Técnicos e Abordagens Iniciais

acessibilidade web

Imagine que você teve que projetar um leitor de tela. Se você é como eu antes de eu aprender mais sobre tecnologia assistida, pode começar imaginando uma versão de audiolivro de uma página da web, pensando que sua tarefa é automatizar a leitura das palavras na página. Mas veja esta página. Observe o quanto você usa pistas visuais do layout e do design para dizer quais são suas partes para como interagir com elas.

Como seu leitor de tela saberia quando o texto desta página pertence a links ou botões clicáveis?;

Como o leitor de tela determinaria qual ordem de leitura do texto na página?

Como ele pode permitir que o usuário "percorra" esta página para determinar os títulos das seções principais deste artigo?

Os primeiros leitores de tela eram tão simples quanto o audiolivro que eu imaginava, pois tratavam apenas de interfaces baseadas em texto. Esses " terminais falantes ", desenvolvidos em meados dos anos 80, traduziram caracteres ASCII no buffer de exibição do terminal para uma saída de áudio. Porém, interfaces gráficas de usuário (ou GUI) logo se tornaram comuns. “ [Making the GUI Talk](https://developer.paciellogroup.com/blog/2015/01/making-the-gui-talk-1991-by-rich-schwerdtfeger/) ”, um artigo da revista BYTE de 1991, mostra de relance o estado dos leitores de tela em um momento em que a nova prevalência de telas com conteúdo essencialmente visual fez dos leitores de tela um desafio técnico, enquanto a Lei dos Americanos com Deficiência, aprovada recentemente. destacou sua necessidade.

### Estude JavaScript criando um Jogo Irado!

Neste minicurso **GRATUITO** vou te ensinar muito JavaScript desenvolvendo do ZERO um jogo, neste curso você vai aprender lógica de programação, funções (Arrow), ForEach, criar elementos dinâmicos com javascript, muito CSS3 e mais..

[INSCREVER-SE](/mini-curso-construindo-seu-jogo-em-javascript/)

O OutSpoken, discutido no artigo BYTE, foi um dos primeiros leitores de tela disponíveis comercialmente para as GUIs. O OutSpoken trabalhou interceptando comandos gráficos no nível do sistema operacional para criar um modelo fora da tela, uma representação do banco de dados do que está em cada parte da tela. Utilizou heurísticas para interpretar comandos gráficos, por exemplo, para adivinhar que um botão é desenhado ou que um ícone está associado a um texto próximo. À medida que o usuário move o ponteiro do mouse na tela, o leitor de tela lê as informações do modelo fora da tela sobre a parte da tela correspondente à localização do cursor.

![](/uploads/2020/06/desafios-tecnicos.png)

Figura 03: Implementação do problema!

Essa abordagem inicial foi difícil: a interceptação de comandos gráficos de baixo nível é complexa e depende do sistema operacional, e confiar nas heurísticas para interpretar esses comandos é passível de erros.

## As APIs de Web e Acessibilidade Semântica

acessibilidade web

Uma nova abordagem para os leitores de tela surgiu no final dos anos 90, com base na ideia da web semântica . Berners-Lee escreveu sobre seu sonho para uma web semântica em seu livro de 1999 Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web :

> Eu sonho com a Web \[na qual os computadores\] se tornam capazes de analisar todos os dados na Web - o conteúdo, links e transações entre pessoas e computadores. Uma "Web Semântica", que torna isso possível, ainda não surgiu, mas, quando isso acontecer, os mecanismos diários de comércio, burocracia e nossa vida cotidiana serão tratados por máquinas que conversam com máquinas. Os "agentes inteligentes" que as pessoas divulgam há séculos finalmente se materializarão.
> 
> Tim Berners-Lee, diretor do W3C e inventor da World Wide Web

Berners-Lee definiu a rede semântica como "uma rede de dados que pode ser processada direta e indiretamente por máquinas". É discutível o quanto esse sonho foi realizado, e muitos agora o consideram irrealista. No entanto, podemos ver como as tecnologias assistivas para a web funcionam hoje como parte desse sonho que deu certo.

Berners-Lee enfatizou a acessibilidade para a web desde o início ao fundar o W3C, o grupo de padrões internacionais da web, em 1994. Em um boletim de notícias de 1996 da Web Accessibility Initiative do W3C , ele escreveu:

> O surgimento da World Wide Web tornou possível para indivíduos com equipamentos apropriados de computador e telecomunicações interagirem como nunca antes. Apresenta novos desafios e novas esperanças para as pessoas com deficiência.
> 
> Tim Berners-Lee, diretor do W3C e inventor da World Wide Web

O HTML4, desenvolvido no final dos anos 90 e lançado em 1998, enfatizou a separação da estrutura e do significado dos documentos das preocupações de apresentação ou estilísticas. Isso foi baseado em princípios semânticos da Web e parcialmente motivado pela melhoria do suporte à acessibilidade. O HTML5 que usamos atualmente se baseia nessas idéias e, portanto, o suporte à tecnologia assistiva é fundamental para seu design.

Então, como exatamente os navegadores e HTML suportam os leitores de tela hoje?

Muitos desenvolvedores de front-end não sabem que o navegador [analisa o DOM para criar uma estrutura de dados](https://youtu.be/1OwMFNwOzPI), especialmente para tecnologias de assistência. Essa é uma estrutura em árvore conhecida como árvore de acessibilidade que forma a API para leitores de tela, o que significa que não confiamos mais na interceptação do processo de renderização, como a abordagem do modelo fora da tela. O HTML produz uma representação que o navegador pode usar para renderizar na tela e também fornecer para dispositivos de áudio ou braille.

![acessibilidade web](/uploads/2020/06/arvores-dom.png)

Figura 04: Redenrização

Vejamos a API de acessibilidade com mais detalhes para ver como ela lida com os desafios que consideramos acima. Os nós da árvore de acessibilidade, chamados de "objetos acessíveis", correspondem a um subconjunto de nós [DOM](https://youtu.be/1OwMFNwOzPI) e têm atributos que incluem funções (como button), nome (como o texto no botão) e estado (como **_focused_**) inferido no HTML. Os leitores de tela usam essa representação da página.

É assim que um usuário de leitor de tela pode saber que um elemento é um botão sem usar as dicas de estilo visual das quais um usuário com visão depende. Como um usuário de leitor de tela poderia encontrar informações relevantes em uma página sem precisar ler todas elas? Em uma [pesquisa recente](https://webaim.org/projects/screenreadersurvey7/#finding), os usuários de leitores de tela relataram que a maneira mais comum de localizar as informações que estão procurando em uma página é através dos cabeçalhos da página. Se um elemento é marcado com uma **tag h1** \- **h6**, um nó na árvore de acessibilidade é criado com a função **_heading_**. Os leitores de tela têm a funcionalidade de "pular para o próximo título", permitindo assim que uma página seja scrollada.

Alguns atributos HTML são especificamente para a árvore de acessibilidade. Os atributos "**ARIA**" (_**Aplicativos Acessíveis da Internet Rich**_) podem ser adicionados às tags HTML para especificar o nome ou a função do nó correspondente. Por exemplo, imagine que nosso botão acima tenha um ícone em vez de texto. A adição **_aria-label="inscrever-se"_** ao elemento **_button_** garantiria que o botão tivesse um rótulo para os leitores de tela representarem para seus usuários. Da mesma forma, podemos adicionar atributos **_alt_** às tags de imagem, fornecendo um nome ao nó acessível correspondente e fornecendo texto alternativo que permite aos usuários do leitor de tela saber o que está na página.

A desvantagem da abordagem semântica é que ela exige que os **_desenvolvedores_** usem tags HTML e atributos de "**_aria"_** de maneira a corresponder à intenção de seu código. Por sua vez, isso requer conscientização entre os desenvolvedores e priorização da acessibilidade por suas equipes. Atualmente, a falta de conscientização e priorização, e não qualquer limitação técnica, é a principal barreira para uma web acessível, e caso você não esteja no mercado de trabalho saiba que são uma parcela muito pequena de equipes e empresas de desenvolvimento que se preocupa e tem como prioridade o tema acessibilidade infelizmente, mas cabe a nós desenvolvedores e desenvolvedoras busca esse tipo de conhecimento e implementar em projetos.

Portanto, a abordagem atual da tecnologia assistiva para a Web é baseada em princípios semânticos da Web e inserida no design de navegadores e HTML. Os desenvolvedores e suas equipes precisam estar cientes dos recursos de acessibilidade incorporados ao HTML para poder tirar proveito deles.

## Inteligencia Artificial

acessibilidade web

![](/uploads/2020/06/ia-removebg-preview.png)

O aprendizado de máquina (ML) e a inteligência artificial (IA) vêm à mente quando lemos os comentários de Berners-Lee sobre o sonho da web semântica hoje. Quando pensamos nos computadores como agentes inteligentes que analisam dados, podemos pensar nisso como sendo feito por meio de abordagens de aprendizado de máquina. A abordagem inicial do modelo fora da tela que examinamos heurísticas usadas para classificar informações visuais. Isso também parece remanescente das abordagens de aprendizado de máquina, exceto que, no aprendizado de máquina, as heurísticas para classificar entradas são baseadas em uma análise automatizada de entradas vistas anteriormente, em vez de codificadas manualmente.

E se nos primeiros dias de descobrir como tornar a Web acessível estivéssemos pensando em usar o aprendizado de máquina? Essas tecnologias poderiam ser úteis agora?

O aprendizado de máquina tem sido usado em algumas tecnologias assistivas recentes. O SeeingAI da Microsoft e o Lookout do Google usam o aprendizado de máquina para classificar e narrar objetos vistos através de uma câmera de smartphone. O CTRL Labs está trabalhando em uma tecnologia que detecta movimentos micromusculares interpretados com técnicas de aprendizado de máquina. Dessa maneira, parece que você pensa em intenções de movimento e pode ter aplicações para ajudar com algumas deficiências motoras. A IA também pode ser usada para reconhecimento de caracteres para ler texto e até mesmo traduzir a linguagem de sinais para texto . Os recentes avanços do Android usando o aprendizado de máquina permitem que os usuários aumentem e amplifiquem sons ao seu redor e vivenciem automaticamente o discurso de transcrição.

A IA também pode ser usada para ajudar a melhorar os dados que chegam à árvore de acessibilidade. O Facebook introduziu texto alternativo gerado automaticamente para fornecer às imagens do usuário descrições dos leitores de tela. Os resultados são imperfeitos, mas apontam para uma direção interessante. Dando um passo adiante, o Google anunciou recentemente que o Chrome poderá fornecer em breve texto alternativo gerado automaticamente para imagens que o navegador exibir.

## Qual é o Próximo Passo?

acessibilidade web

Até que (ou a menos que) as abordagens de aprendizado de máquina se tornem mais maduras, uma Web acessível depende da API com base na árvore de acessibilidade. Essa é uma solução robusta, mas tirar proveito da tecnologia assistida incorporada nos navegadores exige que as pessoas que estão construindo sites estejam cientes delas. Atualmente, a falta de conhecimento, e não qualquer dificuldade técnica, é o principal desafio para a acessibilidade na web.

### Estude JavaScript criando um Jogo Irado!

Neste minicurso **GRATUITO** vou te ensinar muito JavaScript desenvolvendo do ZERO um jogo, neste curso você vai aprender lógica de programação, funções (Arrow), ForEach, criar elementos dinâmicos com javascript, muito CSS3 e mais..

[INSCREVER-SE](/mini-curso-construindo-seu-jogo-em-javascript/)

## Conclusões

acessibilidade web

Bom espero te deixando você mais informado sobre esse tema tão pouco discutido na comunidade de desenvolvimento web, e saiba que sim hoje saber dessas técnicas vão lhe da um conhecimento "extra" e vai com certeza te diferencia dos demais. Deixa aqui nos comentários alguma experiência que você teve com acessibilidade web, vou adora ler e lhe responder.

#### Recomendações

[](/5-geradores-css-grid/)

5 Geradores de CSS Grid Tenha Layout Prontos para seu projeto

[](/30-ferramentas-para-um-desenvolvedor-front-end/)

30 Ferramentas Para Um Desenvolvedor Front-End

[](/promise-javascript-guia-completo/)

Promise JavaScript (Guia Completo) Passo a Passo

##### Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/IR9azXeWs2s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### Treinamento Programador FullStack JavaScript

[![](/uploads/2020/03/Banner-de-promoção-programador-full-stack-1024x1024.jpeg)](/programador-fullstack-8-semanas)

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.

DEPOIMENTOS DE QUEM JÁ MERGULHOU NESTA EXPERIÊNCIA

![](/uploads/2020/06/depoimento-programador-fullstack.png)

José Luiz Abreu

[Saber Mais !](/programador-fullstack-8-semanas)

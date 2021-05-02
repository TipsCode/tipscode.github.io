---
title: "O que é Docker Um Guia básico Passo a Passo para Iniciantes"
date: "2020-08-26"
categories: 
  - "devops"
tags: 
  - "docker"
  - "o-que-e-docker"
description: Para aquelas situações em que os contêineres brilham, você pode estar se perguntando como essa tecnologia é implementada na prática. Então, vamos ver como o Docker cumpre todas essas promessas.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Para aquelas situações em que os contêineres brilham, você pode estar se perguntando como essa tecnologia é implementada na prática. Então, vamos ver como o Docker cumpre todas essas promessas.

![o que é docker](/uploads/2020/08/o-que-e-docker-1024x683.png)

O que é Docker

Docker é um projeto de código aberto - bem como uma empresa, com sede em San Francisco, que apoia esse projeto. O docker foi lançado em 2013 e, mesmo assim, em tão pouco tempo e ainda parcialmente em versão beta, [está sendo amplamente adotado em vários setores.](https://www.datadoghq.com/docker-adoption/)

Mas o que é? Docker é um software executado na linha de comando e que permite automatizar a implantação de aplicações dentro de contêineres de software. [No site do Docker](https://www.docker.com/why-docker):

> Os contêineres do Docker envolvem um pedaço de software em um sistema de arquivos completo que contém tudo o que é necessário para executar: código, tempo de execução, ferramentas do sistema, bibliotecas do sistema - qualquer coisa que possa ser instalada em um servidor. Isso garante que o software sempre funcionará da mesma forma, independentemente de seu ambiente.

Como isso ainda pode ser um pouco abstrato, vamos ver como é executar um contêiner com docker.

## Criando Contêiner Docker

É assim que você executa um contêiner “hello-world”:

```
$ docker run hello-world
```

E aqui está a saída, gerada de dentro do contêiner, com uma pequena descrição dos componentes internos do Docker:

```
Hello from Docker.
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker Engine CLI client contacted the Docker Engine daemon.
2. The Docker Engine daemon pulled the "hello-world" image from the Docker Hub.
3. The Docker Engine daemon created a new container from that image which runs the
   executable that produces the output you are currently reading.
4. The Docker Engine daemon streamed that output to the Docker Engine CLI client, which sent it
   to your terminal.

Caso queira algo mais avançado, você pode executar com o o Ubuntu ou qualquer outra distro:
$ docker run -it ubuntu bash

Compartilhe imagens, automatize fluxos de trabalho e muito mais com uma conta Docker Hub gratuita:
https://hub.docker.com

Para mais exemplos veja o site:
https://docs.docker.com/userguide/
```

Esperançosamente, isso foi simples o suficiente, mas não há muito mais que possamos fazer com o contêiner “hello-world”, então vamos além e executamos um shell interativo em um Ubuntu Linux:

```
$ docker run -i -t ubuntu bash

# cat /etc/issue
Ubuntu 16.04 LTS \n \l
```

O primeiro comando inicia o -i TTY interativo ( ) ou o console ( -t) no ubuntu contêiner com o bash shell. O segundo comando ( cat /etc/issue) já está dentro do contêiner (e poderíamos ter continuado a executar os comandos, é claro). Para ser claro: não importa se você está no Windows, Mac ou Debian, para esse contêiner você está em uma máquina Ubuntu. E para que conste, o console estava pronto e funcionando em um segundo !

Além disso, como os contêineres são ambientes completamente isolados e descartáveis, você pode fazer coisas malucas neles, como:

```
# rm -rf /etc
# cat /etc/issue
cat: /etc/issue: No such file or directory
```

E quando você sai ou finaliza esse contêiner, tudo que você precisa fazer é reiniciá-lo, e você obterá um novo exatamente no mesmo estado inicial:

```
# exit
$ docker run -i -t ubuntu bash
# cat /etc/issue
Ubuntu 16.04 LTS \n \l
```

E é simples assim, espero que tenha consigo compreender melhor o que é docker.

## Como Funciona o Doker

### A arquitetura

Se você está familiarizado com máquinas virtuais (VM), como um hipervisor, pode já ter começado a notar algumas diferenças. Embora permitam que você execute diferentes sistemas operacionais (SO), as VMs ocupam muito espaço na memória da máquina host, já que cada novo SO é carregado do zero na memória principal. E uma vez que cada SO requer todos os seus próprios binários e bibliotecas para todo o sistema, isso geralmente é responsável por vários GBs extras de espaço em disco. Por último, mas não menos importante, assim como ao iniciar um SO real, o sistema leva vários minutos para carregar antes de estar operacional.

![](/uploads/2020/08/arquitetura-docker.png)

Fonte: [https://www.docker.com/sites/default/files/WhatIsDocker\_2\_VMs\_0.png](https://www.docker.com/sites/default/files/WhatIsDocker_2_VMs_0.png)

### Imagens e Containers

Você ouvirá muito sobre “imagens” e “contêineres” ao trabalhar com o Docker, então vamos esclarecer o que são.

Uma imagem (às vezes chamada de “construção”) é um arquivo, um recurso somente de leitura que você baixa ou cria, embalado com tudo o que é necessário para um ambiente operacional. Construir imagens é muito fácil, porque você pode usar imagens já disponíveis como base (por exemplo, uma distribuição Debian) e dizer ao Docker o que você quer em cima dela, como certas ferramentas de desenvolvimento, bibliotecas e até mesmo colocar seu próprio aplicativo dentro.

Um contêiner, por outro lado, é o ambiente isolado que você obtém quando executa uma imagem e é lido e gravado, para que você possa fazer o que quiser com ele. Este ambiente vai estar no estado preciso que foi definido ao construir a imagem. E como as imagens são somente leitura, ao executar um novo contêiner, você tem um novo ambiente perfeito, não importa o que você fez nos outros contêineres. Você pode executar tantos contêineres simultâneos quanto seu sistema puder controlar.

Portanto, você executa contêineres a partir de imagens. Uma analogia que pode ser útil - se você trabalhar com programação orientada a objetos, como C ou [JavaScript](/programador-fullstack-8-semanas) - é que uma imagem é como uma classe, enquanto um contêiner seria uma instância dessa classe.

### Fluxo de trabalho com docker

Como este é um artigo introdutório, não entrarei em detalhes completos agora, mas para que você tenha uma ideia de como é um fluxo de trabalho típico com o Docker, aqui estão as três etapas principais:

- **Construa uma imagem** usando o Dockerfile, um arquivo de texto simples no qual você define as instruções para o que deseja agrupar na construção - como sistema operacional de base, bibliotecas, aplicativos, variáveis ​​de ambiente e arquivos locais. (Consulte a [referência](https://docs.docker.com/reference/builder/) do [Dockerfile](https://docs.docker.com/reference/builder/) para mais informações.);
- **Envie a imagem** por meio do Docker Hub ou de seu repositório privado. Agora você pode distribuir facilmente esse aplicativo ou ambiente de desenvolvimento com o Docker - e, de fato, existem dezenas de imagens oficiais pré-construídas oferecidas por desenvolvedores de software, prontas para usar. (Explore o Docker Hub para mais informações.);
- **Execute um contêiner** em uma máquina host. Tudo que você precisa é ter o Docker instalado para poder executar contêineres, implantar microsserviços (ou seja, iniciar diferentes contêineres executando diferentes serviços) e ter o ambiente de que você precisa para desenvolvimento ou implantação.

Dica de artigo: [Curso Programador Full Stack JavaScript](/curso-programador-full-stack-em-8-semanas/)

## Próximo passo - docker

As possibilidades com containers de software são imensas e eles fornecem, em muitos casos, soluções definitivas para o que costumava ser problemas em aberto na área de desenvolvimento e operações (DevOps). Forneceremos aqui uma lista de recursos para ajudá-lo a começar a trabalhar com **Docker** e contêineres de software.

Os requisitos para instalar o **Docker** são um pouco altos:

- Windows : sistema operacional de 64 bits, Windows 7 ou superior;
- Mac : OS X 10.8 “Mountain Lion” ou mais recente, com suporte de hardware da Intel para virtualização de unidade de gerenciamento de memória (MMU) e pelo menos 4 GB de RAM;
- Gnu/Linux : instalação de 64 bits (independentemente da distribuição e versão do Linux), com kernel 3.10 ou superior. (Kernels mais antigos não possuem alguns recursos necessários para executar contêineres Docker.)

Como o Docker é uma tecnologia baseada em Linux, para Windows e Mac você primeiro precisa instalar o Docker Toolbox que configurará facilmente um ambiente Docker em seu computador, incluindo uma máquina virtual executando Linux e o Docker Engine. Para obter instruções sobre a instalação e configuração, você pode consultar os guias específicos do sistema operacional:

- [Introdução ao Docker para Windows](https://docs.docker.com/docker-for-windows/).
- [Introdução ao Docker para Mac](https://docs.docker.com/docker-for-mac/).
- [Para o Linux em diversas distros](https://docs.docker.com/engine/installation/linux/).

Depois de instalar o Docker, você pode seguir este passo a passo para executar e construir suas próprias imagens, criar um repositório no Docker Hub e muito mais:

- [Comece a usar o Docker](https://docs.docker.com/engine/getstarted/)

Esse tutorial do docker é muito legal para você dá seus primeiros passos no uso do docker

## Conclusões

Por fim, lembre-se de que essa tecnologia consiste em muito mais do que uma ferramenta de comando para executar contêineres. O Docker é um ecossistema de produtos e serviços orientado para centralizar tudo o que você pode fazer com contêineres - da criação à distribuição, da execução em uma única máquina à orquestração em centenas ou até milhares de servidores. Vale muito a pena você dá uma chance aoo docker, por que o docker ele via lhe auxliar muito no seu desenvolvimento, o docker veio para fica e ele já é o presente e futuro do Devps, então está na hora de você aprender docker

### Recomendações

---
title: "Instalando o NodeJS e o Yarn no Manjaro Linux"
date: "2020-01-01"
tags: 
  - "linux"
  - "manjaro"
  - "nodejs"
description: O artigo de hoje, vou está ensinando como instalar o NodeJS e o gerenciador de pacotes Yarn na distribuição Manjaro Linux, sou usuário dessa distro há mais de quatro anos e sou apaixonado por ela, esse artigo foi um pedido de um membro da nossa comunidade oficial do manjaro no telegram, caso queira participar clique aqui.
imgArticle: /thumbnail-article/node-manjaro.png
imgHome: /thumbnail-home/node-manjaro.png
---

O artigo de hoje, vou está ensinando como instalar o NodeJS e o gerenciador de pacotes Yarn na distribuição **Manjaro Linux**, sou usuário dessa distro há mais de quatro anos e sou apaixonado por ela, esse artigo foi um pedido de um membro da nossa comunidade oficial do manjaro no telegram, caso queira participar clique aqui.

## Instalando o NodeJS no Manjaro

Primeiro passo é acessar o site oficial do [NodeJs](https://nodejs.org/en/).

![NodeJS](/uploads/2019/12/Site-nodejs-1024x614.png)

No momento da criação desse artigo a versão 12.14.0 LTS é a mais recente, uma dica sempre procure instalar as versões LTS elas possuir um nível de confiabilidade maior. Aqui poderiamos instalar o Node clicando em Other Downloads e seguir os passos, ou abrir o pamac e instalar ou até mesmo abrindo o terminal e instalando por lá, mas isso poderia trazer algumas dores de cabeça quando quisemos atualizar ou até mesmo remover o NodeJs, então iremos fazer a instalação usando o [NVM - Node Version Manager](https://github.com/nvm-sh/nvm) realizar a instalação com essa ferramente nos da alguns benefícios tais como:

- Instalar versões diferentes dentro da nossa máquina;
- Instalar versões mais atualizadas;
- Podemos mudar de versões do Node de acordo com o projeto que está sendo desenvolvido no momento.

A instalação é bastante simples abra o site do NVM e role o scroll do mouse para a seção de installation and Update.

![](/uploads/2019/12/instalação-nvm.png)

Aqui você pode instalar de duas formas, primeira usando o curl e segunda o wget, vou está usando o curl neste artigo, então vamos abrir o terminal do manjaro e copiar esse link

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

O seu terminal deverá fica assim:

![](/uploads/2019/12/instalando-nvm-vias-terminal-1024x437.jpg)

Agora precisamos configurar algumas variáveis na nossa variável PATH que é nossa variável de ambiente, por padrão o manjaro vem com o bash, caso você use outro, da uma rápida pesquisada onde o arquivo se encontra, o bash está localizado no diretório /home normalmete ele vem oculto, para você visualizar ele abra seu diretório /home e pressione ctrl + H veja a imagem:

![](/uploads/2019/12/variavel-bash-1024x544.png)

Copie o código que está no site:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Seu arquivo .bashrc deverá ficar assim:

![](/uploads/2019/12/bashrc-1024x484.png)

Para testar se realmente o nvm foi devidamente instalado, entre como superusuário e digite no terminal o seguinte código:

```
nvm -h
```

A saída do terminal deverá ser essa:

![](/uploads/2019/12/nvm-rodando-1024x594.jpg)

Agora que já estamos com o nvm rodando em nossa máquina, vamos a instalação do NodeJS, abra seu terminal novamente entre como administrador, digite o código:

```
nvm alias default 12.14.0
```

![](/uploads/2019/12/nodejs-instalado-1024x595.jpg)

Note que o npm já vem instalado por padrão, caso você se sinta mais aventado utilizando ele, fique a vontade, vamos agora instalar o YARN.

## Instalando o YARN no Manjaro Linux

O Yarn trás consigo um leg de ferramentas bem mais avançadas, na hora de criar projetos NodeJs, React e React Native. Então vamos lá para instalação, primeiro vamos acessar o site oficial [www.yarnpkg.com](https://yarnpkg.com/lang/en/) depois que abrir o site clique no botão INSTALL YARN e escolha o sistema operacional Arch Linux, veja a imagem:

![](/uploads/2019/12/escolha-arth.png)

Abra o terminal e digite o seguinte código:

```
sudo pacman -S yarn
```

Depois temos que configurar mais uma variável de ambiente, então abra seu diretório /home e edite o arquivo .bashrc com o seguinte código:

```
export PATH="$PATH:/opt/yarn-[version]/bin"
```

![](/uploads/2019/12/variavel-de-yarn-1024x485.png)

Por fim, vamos verificar se o yarn está funcionando corretamente, abra novamente o terminal e digite o seguinte código:

```
yarn -version
```

A saída no terminal deverá ser o número da versão do yarn.

## Conclusão

E isso galera, espero ter ajudado vocês com esse tutorial como instalar o NodeJS e o gerenciador de pacotes Yarn em seu manjaro linux, por favor deixar seu comentário aqui em baixo com seu feedback ele é muito importante para a melhoria dos artigos, ate mais abraço !!

## Venha Participar da nossa comunidade no Facebook

Ambiente saudável, onde tiramos dúvidas e teremos um contato mais direto!

![](/uploads/2020/01/Facebook-150x150.png)

[Entrar](https://web.facebook.com/groups/469979653689791/?ref=bookmarks)

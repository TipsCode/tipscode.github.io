---
title: "Android Studio está difícil instalar o emulator? Alternativa para Preparando ambiente para criar aplicativos com React Native"
date: "2020-08-13"
categories: 
  - "react-native"
tags: 
  - "android-studio"
  - "erro"
  - "react"
  - "react-native"
description: Você fez toda a instalação necessária para rodar o android studio emulator e não está funcionando? Está com dando tela preta? Não inicia? Sua placa mãe não suporta emuladores? Então você está no artigo certo, vou lhe mostra uma solução alternativa e com ZERO configurações. Esse artigo vai lhe ensinar a preparar o ambiente de desenvolvimento para criar suas aplicação com React Native.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Você fez toda a instalação necessária para rodar o **android studio emulator** e não está funcionando? Está com dando tela preta? Não inicia? Sua placa mãe não suporta **emuladores**? Então você está no artigo certo, vou lhe mostra uma solução **alternativa** e com ZERO configurações. Esse artigo vai lhe ensinar a preparar o ambiente de desenvolvimento para criar suas aplicação com React Native.

## O que é Android Studio?

![Android Studio](/uploads/2020/08/Android-studio2-1.png)

[Android Studio](https://developer.android.com/studio) é um ambiente de desenvolvimento integrado para desenvolver para a plataforma Android. Foi anunciado em 16 de Maio de 2013 na conferência Google I/O. Android Studio é disponibilizado gratuitamente sob a Licença Apache 2.0

## O que é React Native?

![android studio](/uploads/2020/08/React-native-300x185.png)

[React Native](https://reactnative.dev/) é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa

## Android Emlator

O [Android Emulator](https://developer.android.com/studio/run/emulator?hl=en) simula dispositivos Android no seu computador. Assim, você pode testar o aplicativo em diversos dispositivos e níveis de API do Android, sem precisar ter cada dispositivo físico.

O emulador oferece quase todos os recursos de um dispositivo Android real. É possível simular o recebimento de chamadas telefônicas e mensagens de texto, especificar o local do dispositivo, simular diferentes velocidades de rede, simular rotação e outros sensores de hardware, acessar a Google Play Store e muito mais.

O teste do app no emulador é, de certa forma, mais rápido e mais fácil do que fazer isso em um dispositivo físico. Por exemplo, você pode transferir dados mais rapidamente para o emulador do que para um dispositivo conectado via USB.

## Preparando Ambiente sem o Android Emulator

A própria [documentação do React Native](https://reactnative.dev/docs/environment-setup) tem um guia ensinando como você deve fazer, mas sentir falta de alguns detalhes que tiver que seguir por si só, por isso estou escrevendo esse artigo.

**Passo 01**: Faça o download do NodeJS na Versão LTS 12 (quando esse artigo está sendo escrito é a versão 12, isso poderá mudar conforme o tempo). Caso não saiba instalar o node, aqui no blog tenho um artigo ensinando, [clique aqui para ver](/instalando-nodejs-no-manjaro/)

**Passo 02**: Instale o pacote Expo com o seguinte comando

```
npm install -g expo-cli
```

**Passo 03**: Acessa o site da plataforma [expo](https://expo.io) e crie sua conta

![android studio](/uploads/2020/08/criando-conta-expo-1024x550.png)

**Passo 04**: Faça o Download do Emulador [NoxPlayer](https://pt.bignox.com/) a instalação é muito simples, faça o download e é só next, next (No Windows, caso você use Linus, procura qualquer emulador para android que não afetará em nada esse tutorial)

![android studio](/uploads/2020/08/NoxPlayer-1024x524.jpg)

**Passo 05**: Agora abra o terminal (Linux, Windows ou Mac) e digite o seguinte comando

```
expo init testeProjeto // criando o projeto
cd testeProjeto  // Aqui você coloca o nome do projeto que você criou ok.
yarn start // esse comando vai executar o projeto
```

![](/uploads/2020/08/criando-projeto-1024x561.png)

Quando você executar o **yarn start**, caso você não tenha confirmado a sua conta criada no expo ele vai lhe mostrar a opção de enviar o link de confirmação do cadastro do expo.

**Passo 06**: Abra o NoxPlayer e faça todo o procedimento de abrir a loja de aplicativo, baixe o app do expo e faça o login no app.

**Passo 07**: Agora veja as imagens para você conseguir finalizar tudo.

![](/uploads/2020/08/passos123-1024x548.png)

![](/uploads/2020/08/passos-4444-1024x482.png)

Agora você tem um emulador que está rodando o seu projeto com React Native sem precisa instalar o Java, Python e Android Studio, veja que é muito simples, pois o emulador do android studio em vários casos não funciona.

**Nota: O emulador deve está rodando na mesma rede ou caso você queira utilizar no seu celular a rede tem que ser a mesma.**

### Recomendações

---
title: "NullStack: Conhecendo o framework Brasileiro"
date: "2021-05-27"
tags: 
  - "nullstack"
  - "framework"
  - "desenvolvimento web"
  - "fullstack"
  - "tipscode"
  - "Alisson Suassuna"
  - "Javascript"
description: Nullstack é um framework fullstack para a construção de aplicaçõess web progressivos. Ele conecta uma camada de IU (interface gráfica) com monitoração de estado a microsserviços especializados no mesmo componente usando o JavaScript puro (vanila).
imgArticle: /thumbnail-article/framework-nullstack.png
imgHome: /thumbnail-home/framework-nullstack.png
---

# Introdução ao NullStack

Nullstack é um framework fullstack para a construção de aplicações web progressivas. Ele conecta uma camada de IU (interface do usuário) com gestão de estado a microsserviços especializados no mesmo componente usando o JavaScript puro (vanilla).

Os componentes Nullstack são classes JavaScript normais com o front-end e back-end juntos. O objetivo é que o desenvolvedor tenha uma aplicação full-stack por padrão, sem lidar com tantas as decisões.

O Nullstack permite que você faça sua aplicação sair funcionando o mais rápido possível, mas também é flexível o suficiente para que você possa refatorá-la a hora que achar necessário.

Considere o exemplo abaixo, onde um componente com estado usa uma função de servidor para ler dados do banco e retornar para o cliente:

```
import Nullstack from "nullstack";

class BookPage extends Nullstack {
  title = "";
  description = "";

  static async findBookBySlug({ database, slug }) {
    return await database
      .collection("books")
      .findOne({ slug });
  }

  async initiate({ page, params }) {
    const book = await this.findBookBySlug({
      slug: params.slug,
    });

    if (book) {
      page.title = book.title;

      Object.assign(this, book);
    } else {
      page.status = 404;
    }
  }

  render() {
    return (
      <section>
        <h1>{this.title}</h1>
        <div>{this.description}</div>
      </section>
    );
  }
}

export default BookPage;
```

No exemplo acima, o Nullstack do lado do servidor renderiza e retorna o HTML pronto, isso ajuda a questão do SEO (Search Engine Optimization) quando o usuário entra na aplicação por esta rota. Quando o usuário navega para esta página, uma chamada de API é feita para um microsserviço onde é gerado automaticamente retornando um JSON e atualizando o DOM.

## Como funciona o Nullstack?

O Nullstack gera dois pacotes: um para o servidor e outro para o cliente com o mínimo de dependências possíveis. O framework é responsável por decidir quando usar uma chamada de API ou usar uma função local; o programador só precisa pensar no comportamento de suas funções.

Cada ambiente tem seu contexto, que é um proxy passado para cada função. O recurso torna o Nullstack um framework horizontal em vez de uma árvore, o que é muito importante se você trabalha em um projeto dinâmico, onde as alterações precisam ser feitas constatemente.

No exemplo abaixo, estamos analisando o parâmetro "README" e quando a aplicação é iniciada, salvamos o seu valor no contexto do nosso servidor:

```
import Nullstack from "nullstack";
import { readFileSync } from "fs";
import { Remarkable } from "remarkable";

class About extends Nullstack {
  static async start(context) {
    const text = readFileSync("README.md", "utf-8");
    const md = new Remarkable();

    context.readme = md.render(text);
  }

  static async getReadme({ readme }) {
    return readme;
  }

  async initiate(context) {
    if (!context.readme) {
      context.readme = await this.getReadme();
    }
  }

  render({ readme }) {
    return <article html={readme || ""} />;
  }
}

export default About;
```

O cliente chama uma função de servidor e salva o conteúdo README no context do cliente que está disponível offline em outras visualizações. Ambos readFileSynce remarkablesão excluídos do pacote do cliente. Existem muitas otimizações neste código, mas o componente parece quase tão simples quanto uma versão mais básica.

## Diferenças do Nullstack para outros frameworks?

O framework Nullstack, desde o início, foi pensado como uma solução completa que usa o mesmo conceito para resolver todos os problemas. Essa abordagem torna o Nullstack muito fácil de aprender, já que pegar os primeiras conceitos é o suficiente para permitir que você codifique com a stack.

A stack tenta juntar todas as boas coisas de frameworks como React, Vue, Next entre outros em um único, porém não perdendo a essência da linguagem JavaScript.

Atualmente, o mercado está tentando usar uma única abordagem "tamanho único", onde React ou agora o mais novo queridinho NextJS é a solução para tudo. Se você pensar em frameworks como sapatos, o Nullstack é apenas um sapato que se ajusta ao tamanho do problema em questão e busca deixar o desenvolvedor mais confortável.

## Um convite especial

Convido a todos que vem acompanhando o TipsCode a contribuir com esse projeto tão legal e criado por um Brasileiro, a TipsCode hoje é uma grande parceira do projeto Nullstack, hoje o site da Tips é criado com Nullstack e foi um desafio que me trouxe muito aprendizado e lhe convido a fazer o mesmo. 

Acesse [o github do framework](https://github.com/nullstack/nullstack) e deixa uma estrelinha para ajudar o projeto a ganhar visibilidade!

## Conclusão

Sem dúvidas tenho certeza que ainda vamos ver falar muito desse framework, então de uma chance a ele, da uma olhadinha com mais detalhes, no canal da TipsCode tem alguns vídeos bem legais, vou linkar aqui para você da uma olhada.

[Como criar um app com nullstack](https://youtu.be/jwEUGTy2RKs)

## Créditos

Este artigo traduz com algumas alterações uma [Entrevista com o Autor do Framework](https://survivejs.com/blog/nullstack-interview/) para o site SurviveJS
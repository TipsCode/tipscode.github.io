---
title: "Deno VS Node.JS: Veja as Vantagens e Desvantagens"
date: "2020-07-15"
categories: 
  - "nodejs"
tags: 
  - "backend"
  - "deno"
  - "desvantagens"
  - "javascript"
  - "modulos"
  - "node"
  - "nodejs"
  - "npm"
  - "programador"
  - "seguranca"
  - "vantagens"
description: Quando o [Deno](https//youtu.be/Z-mGgOz5NEA) foi anunciado gerou bastante interesse na comunidade JavaScript, fiz até um vídeo lá no meu canal do Youtube explicando o que era esse tal de [Deno](https//youtu.be/Z-mGgOz5NEA). Existe muitas semelhanças entre as duas plataformas. No entanto, também existem diferenças importantes, o que significa que você não pode simplesmente substituir um pelo outro.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Quando o [Deno](https://youtu.be/Z-mGgOz5NEA) foi anunciado gerou bastante interesse na comunidade JavaScript, fiz até um vídeo lá no meu canal do Youtube explicando o que era esse tal de [Deno](https://youtu.be/Z-mGgOz5NEA). Existe muitas semelhanças entre as duas plataformas. No entanto, também existem diferenças **importantes**, o que significa que você não pode simplesmente substituir um pelo outro.

Neste artigo vou analisar o Deno em relação ao seu “primo mais velho” o NodeJS para ajudar a entender o que eles têm em comum e o que os diferencia. ([Se você quiser conhecer Deno primeiro, confira o vídeo que fiz lá em nosso canal do Youtube](https://youtu.be/Z-mGgOz5NEA))

![Deno](/uploads/2020/07/diferenças.jpg)

Figura 01: Diferenças

## Suporte de Linguagem

Ambos os projetos tem como objetivo de leva a linguagem JavaScript para o backend, permitindo que o código JavaScript seja executado em um computador fora de um navegador da web. Vamos ver como eles se comparam em termos de suporte linguagem.

### Node.js

![Deno](/uploads/2020/07/nodejs.png)

A versão atual do LTS do Node (v12.18.1 até a data de escrita deste artigo) ele suporta a sintaxe e os recursos modernos do JavaScript. Ele também suporta cerca de **77% das especificações do ES2020**. Os módulos **ECMAScript** também são suportados, mas atualmente são classificados apenas como **experimentais**: você precisa usar a extensão **`.mjs`** do arquivo ou adicionar a propriedade "**type**": "**module**"ao **package.json** arquivo do seu projeto .

Para executar o **TypeScript** (ou qualquer outra linguagem) no Node, o código precisa ser compilado no JavaScript que o mecanismo V8 pode executar. Existem várias maneiras diferentes de fazer isso, com diferentes prós e contras, portanto, começar a funcionar significa escolher um deles e seguir o processo de configuração necessário.

### Deno

![](/uploads/2020/07/deno-300x300.png)

Não consegui encontrar nenhuma menção à especificação de JavaScript suportada pelo Deno, mas como ele também usa o V8 sob o capô, eu assumi um nível de suporte semelhante ao do Node. Meus próprios testes mostram que o Deno suporta recursos do ES2020 como **Promise.allSettled()** e a palavra-chave **globalThis**. Os módulos **ECMAScript** são o padrão, com os módulos **CommonJS** não suportados, a menos que você use a biblioteca de compatibilidade.

O TypeScript é suportado como uma linguagem de primeira classe no Deno, o que significa que funciona imediatamente: não é necessário instalar ferramentas adicionais para transpilar para o JavaScript primeiro. Obviamente, o mecanismo V8 não oferece suporte nativo ao TypeScript, por isso o Deno ainda está transpilando o código, mas tudo isso é transparente para você como desenvolvedor.

Também não consegui encontrar menção de qual versão do TypeScript Deno v1.0.1 usa, mas suporta encadeamento opcional e coalescência nula (mas não campos de classe privada) que o chamariam de TS 3.7.

### APIs

Deno e Node expõem suas próprias APIs aos desenvolvedores, permitindo-nos escrever programas que podem realmente fazer coisas úteis, como ler e gravar arquivos, e enviar e receber solicitações de rede.

### NodeJS

Quando o Node foi lançado pela primeira vez, não havia suporte interno para [Promises](/promise-javascript-guia-completo/). Como resultado disso, a maioria das APIs para operações assíncronas foi gravada para receber um retorno de chamada:

```
const fs = require('fs');
fs.readFile('leia.txt', (err, data) => {
  if (err) {
    // Tratamento do erro
  }
  // Casso contrário, trate os dados..
});
```

Embora os desenvolvedores do Node agora tenham acesso ás [Promises](/promise-javascript-guia-completo/) e à sintaxe assíncrona as APIs ainda esperam retornos de chamada para manter a compatibilidade com versões anteriores.

### Deno

A API do [Deno](https://youtu.be/Z-mGgOz5NEA) foi projetada para aproveitar os recursos modernos do JavaScript. Todos os métodos assíncronos retornam promessas. O Deno também suporta e aguarda scripts de nível superior, o que significa que você pode usar e aguardar em seu script principal sem precisar envolvê-lo em uma função assíncrona.

```
try {
  const data = await Deno.readFile('leia.txt');
  // manipular os dados
} catch (e) {
  // trate os erros
}
```

A equipe de desenvolvimento também tomou a decisão de usar os padrões da Web sempre que possível, o que significa que eles implementaram APIs do navegador onde é prático fazê-lo. Deno fornece o objeto global **window** e APIs como **addEventListener** e **fetch**. Ter acesso a **fetch** é particularmente bom, pois no Node você teria que preencher isso ou usar uma biblioteca de terceiros.

### Módulo de Compatibilidade

O Deno fornece uma camada de compatibilidade com o objetivo de permitir a reutilização de pacotes existentes. Ainda não está completo, mas atualmente suporta o carregamento de módulos CommonJS via **require()**, entre outras coisas.

### Gerenciamento de Pacotes

O gerenciamento de pacotes é uma área em que Deno representa um afastamento radical da maneira de fazer as coisas como o Node. Como ainda é cedo para Deno, resta saber se sua abordagem será vantajosa.

### NodeJS

Como você deve saber, o Node vem com seu próprio gerenciador de pacotes chamado **npm**, que é usado para instalar e gerenciar pacotes de terceiros. O npm é usado principalmente com o registro on-line do npm , onde a maioria dos pacotes de terceiros disponíveis estão listados.

Quando você usa o npm para instalar um pacote em seu projeto, um arquivo chamado **package.json** e é usado para especificar o nome do pacote e o intervalo de versão aceitável. O pacote em si (mais todos os pacotes dos quais depende) são baixados para pasta **node\_modules** dentro do seu projeto.

### Deno

Deno acaba com a necessidade de um gerenciador de pacotes. Em vez disso, os pacotes são vinculados diretamente por meio de uma URL:

```
import { Response } from "https://deno.land/std@0.53.0/http/servidor.ts";
```

Na primeira execução do seu código, o Deno busca e compila todas as dependências. Eles são armazenados em cache no sistema de arquivos, separadamente do seu projeto, para que as execuções subsequentes sejam muito mais rápidas.

Semelhante ao arquivo **package-lock.json** do npm , o Deno permite especificar um arquivo de bloqueio que será usado para garantir que apenas as dependências que correspondem à versão exata que você importou originalmente serão usadas

### Pacotes de Terceiros

Uma linguagem pode prosperar ou morrer dependendo muito do seu ecossistema, pois a produtividade depende de não ter que reinventar a roda! Aqui, parece que o Node atualmente tem vantagem.

### NodeJS

O Node possui um amplo e variado ecossistema de bibliotecas e pacotes disponíveis. Nos 11 anos desde seu lançamento, mais de um milhão de pacotes foram registrados no registro npm. Obviamente, a qualidade pode variar muito e muitos não são mais mantidos ativamente, mas ainda é uma grande vantagem para os desenvolvedores do Node.

### Deno

Como vimos na seção anterior, Deno está tentando ativamente evitar a necessidade de um gerenciador de pacotes ou registro, permitindo que os scripts importem módulos diretamente de qualquer URL pública. Obviamente, é difícil importar pacotes se você não souber o que há por aí; portanto, o site da Deno mantém uma lista de módulos de terceiros compatíveis . Até o momento, existem mais de 642 **módulos** na lista.

### Biblioteca Padrão do Deno

Uma maneira pela qual Deno tenta melhorar a experiência do desenvolvedor é fornecendo uma biblioteca padrão de auxiliares e utilitários para tarefas comuns. Todos os módulos são auditados pelos desenvolvedores principais para garantir código confiável e de alta qualidade. Existem módulos para processar argumentos da linha de comando e colorir a saída do terminal - ambos disponíveis apenas como pacotes de terceiros para o Node.

## Segurança

![](/uploads/2020/07/segurança-300x300.png)

Talvez uma das melhorias mais elogiadas de Deno sobre o Node seja o sistema de permissões. Vamos ver o porquê.

### NodeJS

O tempo de execução do Node é muito permissivo, permitindo o acesso total do código à rede e ao sistema de arquivos do computador. Existe o potencial de código de terceiros causar estragos em seu sistema, se desmarcado.

### Deno

Melhorar o modelo de segurança é algo que Ryan Dahl especificamente se propôs a fazer ao projetar o Deno. Por padrão, todo o código é executado em um ambiente seguro de sandbox. Isso impede que o código tenha acesso a coisas como sistema de arquivos, rede e variáveis ​​de ambiente, a menos que o acesso seja concedido especificamente com um argumento da linha de comando.

```
# Allow script to make network requests
deno run --allow-net servidor.ts
```

Melhor ainda, ao permitir acesso de leitura ou gravação ao sistema de arquivos ou à rede, você pode fornecer uma lista de permissões. Isso significa que você pode restringir o acesso de leitura / gravação de um programa Deno à datapasta do projeto , por exemplo, limitando qualquer dano malicioso em potencial.

### Deno: Pilhas Incluídas

Antes de terminarmos, eu só queria falar sobre mais uma coisa. Se você der uma olhada na seção de ferramentas do manual , notará que o Deno nos fornece alguns recursos interessantes de bônus! A seguir, são apresentadas ferramentas integradas para tornar a experiência do desenvolvedor um pouco mais agradável:

- **bundler**: agrupa um script especificado e suas dependências em um único arquivo;
- **debugger**: permite depurar seus programas Deno com o Chrome Devtools, o VS Code e outras ferramentas (nota: o Node também vem com um depurador);
- **inspetor de dependência**: executar isso em um módulo ES listará todas as dependências em uma árvore;
- **gerador de documentação**: analisa anotações JSDoc em um determinado arquivo e gera documentação;
- **formatador**: formata automaticamente os códigos JavaScript e TypeScript;
- **test runner**: você pode usá-lo para testar seu código JS e TS, em conjunto com o módulo de asserções na biblioteca padrão;
- **linter**: um linter de código (atualmente instável) para ajudar a detectar possíveis problemas em seus programas.

## Conclusões

O objetivo deste artigo não é defender Node ou Deno, mas comparar e contrastar os dois. Agora você deve entender as semelhanças entre os dois tempos de execução e, talvez mais importante, as diferenças.

Deno apresenta algumas vantagens particulares aos desenvolvedores, incluindo um sistema robusto de permissões e suporte TypeScript de primeira classe. As decisões de projeto e as ferramentas internas adicionais visam fornecer um ambiente produtivo e uma boa experiência para o desenvolvedor.

O Node, por outro lado, tem um ecossistema maciço e bem estabelecido ao seu redor, que já faz mais de uma década. Isso, junto com a infinidade de documentação e tutoriais disponíveis, provavelmente torna o Node.js uma aposta segura por algum tempo.

Eu se fosse você não largaria tudo para se dedicar 100% ao Deno, ainda é muito mais muito cedo para ter essa atitude, claro isso pode mudar, mas prossiga seus estudos com NodeJS vale muito a pena.

### Recomendações

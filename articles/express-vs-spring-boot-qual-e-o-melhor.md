---
title: "Express Vs Spring Boot - Qual é o melhor?"
date: "2020-02-12"
description: O objetivo deste artigo é uma comparação não tão técnica. do Express Vs Spring Boot Vamos apenas descrever como é o desenvolvimento de aplicativos usando o Node.js (Temos um artigo sobre o Nodejs caso você não conheça nada sobre, [clique aqui](https//www.tipscode.com.br/conhecendo-nodejs/)) e usando o Spring Boot. Então lembre-se, este artigo não tem como objetivo afirmar que X ou Y é melhor, apenas comparar as duas tecnologia e deixar você escolhe qual delas se encaixa melhor em seu projeto.
imgArticle: /thumbnail-article/express-spring-boot.png
imgHome: /thumbnail-home/express-spring-boot.png
---

O objetivo deste artigo é uma comparação não tão técnica. do Express Vs Spring Boot Vamos apenas descrever como é o desenvolvimento de aplicativos usando o Node.js (Temos um artigo sobre o Nodejs caso você não conheça nada sobre, [clique aqui](/conhecendo-nodejs/)) e usando o Spring Boot. Então lembre-se, este artigo não tem como objetivo afirmar que X ou Y é melhor, apenas comparar as duas tecnologia e deixar você escolhe qual delas se encaixa melhor em seu projeto.

## Comparação

Express Vs Spring Boot

![Express Vs Spring Boot ](/uploads/2020/02/Comparação-300x262.png)

**Express Vs Spring Boot**

Gostaria de destacar algumas das diferenças que são percebidas ao desenvolver uma aplicação em Node / Express em relação ao Java / Spring Boot.

### Linguagem

Express Vs Spring Boot

![Express Vs Spring Boot ](/uploads/2020/02/Qual-a-Linguagem-de-Programação-mais-usada-no-mercado.png)

**Express Vs Spring Boot**

Se você é um desenvolvedor Java, verá que o JavaScript não é tão difícil de aprender. Você certamente ficará um pouco espantado com os retornos de chamada, mas nada de mais. Você descobrirá as Promises e, no final do dia, usará o async-await para mensagens assíncrona e tudo voltará ao normal, o JavaScript parecerá um pouco estranho, mas o JavaScript de hoje está definitivamente muito bom (como eu disse antes, não é o JavaScript de 2015). É simples, bastante poderoso e conciso.

### Nodejs é Single-Threaded

Express Vs Spring Boot

Essa é uma das coisas mais "chocantes" para um desenvolvedor Java. Mas o choque desaparece após alguns instantes. Você deve considerar que tudo é executado em uma única thread (com Java qualquer aplicação Web, ele utilizar múltiplas threads) e que funções de retorno de chamada (funções assíncronas) são enfileiradas e executadas quando é melhor executá-las, mas todo o código é executado em uma única thread (a chave para a velocidade do Node.js. e baixo consumo de memória). Do ponto de vista de um desenvolvedor Java, isso significa:

- Não execute código intensivo em tempo de CPU, pois tudo aguardará a liberação da CPU antes de executar uma nova função na fila;
- Se algo der errado e o Node.js travar, tudo travará: no caso de um aplicativo Web que atenda a várias solicitações simultâneas, todas as solicitações travarão. Você não tem o isolamento que possui com um aplicativo da web Java.

## O JS equivalente ao ecossistema de inicialização Spring: Express.js, Passport.js, Sequelize

Express Vs Spring Boot

Se limitarmos a comparação apenas à aplicação Web MVC, o Spring Boot é definitivamente fantástico: leve e rápido, completo e extremamente configurável. Deste ponto de vista, um desenvolvedor Java não sente grandes falhas em comparação com o que o Express.js oferece.

O Express.js também oferece o mesmo potencial. Uma coisa que, dependendo do gosto pessoal, pode ser mais apreciada ou não é o roteamento: em vez de ser definido no nível da anotação Java, é definido no nível dos arquivos de roteamento.

De maneira geral, o Spring Boot indica uma maneira muito precisa de organizar o código em pacotes (modelos, serviços, controladores), enquanto em um contexto Express.js. não existem essas diretrizes. No entanto, é possível reaplicar uma estrutura de código semelhante e geralmente há projetos em que o código é estruturado de maneira semelhante a um projeto de Inicialização em Spring.

Para a parte da autenticação, o Spring Security é a “melhor ferramenta” … mas também é uma “muito trabalhoso” se usada em alguns casos particularmente complexos. O equivalente em JavaScript é o Passport.js , que é muito poderoso, mas menos estruturado e maduro. No entanto, você tem a sensação de que é capaz de lidar com os mesmos casos e condições que o Spring Security. De qualquer forma, o desenvolvimento de mecanismos de autenticação comuns, como autenticação por JWTs ou outros mecanismos de autenticação comuns, também é amplamente suportado por essa estrutura. A maturidade do Spring Security ainda não foi correspondida pelo Passport.js, mas a percepção que temos é que 80% dos recursos oferecidos pelo Spring Security também foram implementados no Passport.js, de uma maneira que às vezes é mais simples.

### Aprenda o Node.js do zero de forma fácil e prática.

\- Curso 100% em vídeo aulas interativas. Matricule-se agora e aproveite mais esta oportunidade.  
\- Curso com certificado de conclusão.  
\- Fórum de dúvidas.  
\- Aulas práticas do Node.js básico ao avançado.  
\- 5 anos de acesso incluído atualizações

[Saiba mais](http://bit.ly/tipscode-curso-nodejs)

O ORM em Java sempre foi, do ponto de vista de muitos desenvolvedores, o calcanhar de Aquiles dos aplicativos Java. O padrão Java é aproximadamente o Hibernate (apesar das várias alternativas, embora difundidas, como Jooq e MyBatis), enquanto, para o mundo JS relacionado aos bancos de dados relacionais, a biblioteca mais popular é Sequelize.

## Hibernate Vs Sequelize

**Express Vs Spring Boot**

![Express Vs Spring Boot ](/uploads/2020/02/sequelize-vs-hibernate.jpg)

**Express Vs Spring Boot**

O Hibernate ainda é a solução mais completa, madura e versátil, mas a um custo muito alto! Sequelize pode cobrir 90% dos seus casos de uso. Não é o caso de odiar o Hibernate, mas certamente não é o caso de amor perfeito. É superprojetado, lento e complicado. É como um elefante. No entanto, ele pode fazer qualquer coisa com qualquer banco de dados suportado. Pelo contrário, Sequelize é pequeno e simples, mas não pode gerenciar todos os casos de uso. Algumas das coisas que descobri com o uso do Sequelize:

- Você terá um tempo não tão difícil, mas definitivamente não tão fácil. Você pode especificá-los manualmente um por um (mas isso é ultrajante) ou pode usar algum truque para converter nomes em maiúsculas e minúsculas. Essa é uma solução simples, mas tem a desvantagem de que ele quebrará a ferramenta de linha de comando da migração. De qualquer forma, é inaceitável que todos os pedidos usados ​​para introduzir flexibilidade nas definições de convenção de nomenclatura tenham sido descartados e ignorados.
- Ele não suporta totalmente chaves compostas. Como claramente indicado aqui , “Embora seja possível criar chaves primárias compostas no Sequelize \[…\] o Sequelize atualmente não suporta chaves estrangeiras compostas, não há como referenciar um modelo / tabela que possua chaves primárias compostas.” Novamente, do meu ponto de vista, isso é imaturidade.
- Você precisará fazer alguns truques legais para gerenciar campos de datas devido a interpretações de fuso horário (isso foi realmente inesperado).
- Ao adicionar instâncias aos campos relacionados entre duas entidades (como Livro e Autor, por exemplo), as entidades são salvas imediatamente. Isso não é grande coisa, mas mostra que o Sequelize é muito menos sofisticado que o Hibernate, que possui mecanismos internos para decidir quando liberar os dados.

Também há algumas coisas que o Sequelize faz muito bem obrigado, como a facilidade de criar consultas em tempo de execução (isso é fácil, você pode compor um objeto JSON em tempo de execução e passá-lo ao mecanismo de consulta). Tente fazer isso ao criar uma consulta JPQL ou considere o quão complicado é o processo com determinados critérios. Honestamente, usar o Hibernate e o Spring Data JPA ao tentar filtrar dinamicamente uma consulta em tempo de execução por alguns campos é uma chatice, enquanto é realmente fácil (como deve ser com qualquer estrutura / linguagem) fazer no Sequelize.

Outro aspecto em que Sequelize brilha em relação ao Hibernate é quando você encontra alguns casos difíceis e precisa fazer uma consulta nativa: os dois permitem executar consultas nativas, mas, honestamente, é muito mais simples converter os resultados em seus modelos em Seqüelize do que no Spring Data JPA / Hibernate.

E não estou falando sobre o tempo de inicialização: a introdução do Hibernate adiciona segundos ao tempo de inicialização, enquanto o Sequelize é bastante imediato. Como consideração final, é bastante óbvio que:

- Sequenciar é muito menos maduro que o Hibernate;
- O Hibernate é capaz de fazer qualquer coisa, enquanto o Sequelize cobre apenas 90% dos casos de uso;
- Sequelizar é muito menos abstrato e definitivamente mais fácil de trabalhar.
    - Isso pode ser uma grande vantagem, especialmente quando você possui o esquema do banco de dados, não precisa se adaptar aos bancos de dados herdados e não planeja migrar o mecanismo de banco de dados um dia (para ser sincero, vi apenas um caso de migração de banco de dados em toda a minha vida e foi quando dois bancos decidiram se unir e, por isso, decidiu manter apenas um sistema de TI e reescrever o código do abandonado na outra plataforma.Existem milhares de procedimentos de loja a serem reescritos, então a portabilidade de código, na minha opinião, ao falar sobre ORMs, é um recurso inútil.)

## Conclusão

Express Vs Spring Boot

Atualmente, estou usando muito o JavaScript é estou muito feliz com isso. Trabalhar com JavaScript oferece um maior nível de simplicidade. É ideal para scripts e desenvolvimento padrão da Web, mas eu não o usaria para projetos complexos (exceto para pequenos microsserviços dedicados e isolados) nem para aplicativos numéricos ou aplicativos em que os números contam (como uma troca criptográfica em que Java e sua BigDecimal classe é perfeita para esse escopo). Por fim, a sensação geral que tenho ao desenvolver o JavaScript do servidor é que tudo é um pouco mais simples e menos complicado do que um aplicativo baseado em Java equivalente, embora eu tenha uma forte percepção de que há falta de estabilidade e maturidade em relação ao aplicativo. bibliotecas oferecidas em Java (uma falta real apenas se determinadas bibliotecas forem necessárias para o projeto específico, caso contrário, não fará diferença).

Outra percepção é que o ciclo de desenvolvimento do JavaScript é cerca de 20% mais rápido. Com isso, quero dizer que, devido ao código mais detalhado e à estrutura excessivamente projetada dos aplicativos Java que aderem às diretrizes clássicas e ao tempo gasto na reconstrução do código, você passa muito mais tempo desenvolvendo os mesmos recursos em Java do que em JavaScript. Portanto, quando o aplicativo não fornece cálculos ou processamento de bloqueio e se preocupa com o desenvolvimento de um aplicativo da Web pequeno e clássico, eu quase certamente optaria pelo desenvolvimento com a pilha JavaScript descrita, enquanto em outros casos baseava o aplicativo em a pilha Spring Boot que, a longo prazo, na minha opinião, oferece maior facilidade de manutenção.

### Aprenda o Node.js do zero de forma fácil e prática.

\- Curso 100% em vídeo aulas interativas. Matricule-se agora e aproveite mais esta oportunidade.  
\- Curso com certificado de conclusão.  
\- Fórum de dúvidas.  
\- Aulas práticas do Node.js básico ao avançado.  
\- 5 anos de acesso incluído atualizações

[Saiba mais](http://bit.ly/tipscode-curso-nodejs)

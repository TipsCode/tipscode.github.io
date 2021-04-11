---
title: "10 Práticas Recomendadas em NodeJS: Guia para Iniciante"
date: "2020-10-26"
categories: 
  - "nodejs"
description: Conheça ás 10 práticas recomendadas em NodeJS, estas práticas são bem vistas por toda a comunidade de back-end e são de extrema importância você como estudando do Node conheça-las, foi por esse motivo da publicação desse artigo aqui no TipsCode, vejo poucos matérias nesse sentido em nossa comunidade.
---

Conheça ás 10 **_práticas recomendadas em NodeJS_**, estas práticas são bem vistas por toda a comunidade de back-end e são de extrema importância você como estudando do Node conheça-las, foi por esse motivo da publicação desse artigo aqui no TipsCode, vejo poucos matérias nesse sentido em nossa comunidade.

Vou lista um resumo de cada uma logo no inicio, para facilita sua leitura:

1 . **Use scripts npm**. Pare de escrever scripts bash quando puder organizá-los melhor com scripts npm e Node. Por exemplo, **_npm run_** **_build_**, **_start_** e **_test_**. Os scripts do **npm** são fonte confiáveis para nós desenvolvedores do Node em nossos projeto.

2 . Use env vars. Utilize **_process.env.NODE\_ENV_** definindo como **_development_**, ou **_production_**. Alguns frameworks usarão essa variável também, portanto, siga a convenção.

3 . **_[Entenda bem Event Loop](/event-loop-em-node-guia-completo/)_**: Veja bem as funções **_setImmediate()_** e **_nextTick()_**. Use sempre a função **_setImmediate()_** ou **_setTimeout()_** para descarregar tarefas intensivas de CPU para o próximo ciclo de loop de evento.

4 . **_Use a herança funcional_**: Evite entrar em debate e na armadilha exagerada de depuração e compreensão da herança prototípica ou classes apenas usando a herança funcional como fazem alguns dos contribuidores do Node.

5 . **_Nomeie as coisas apropriadamente_**: Dê nomes significativos que servirão como documentação. Além disso, sem nomes de arquivo com letras maiúsculas, procure sempre usa o ( - ) travessão se necessário. Letras maiúsculas em nomes de arquivo não apenas parecem estranhas, mas podem causar problemas de plataforma cruzada.

6 . **_Forneça código nativo_**: Ao usar transpiladores, acaba comprometendo um pouco o código JS nativo (resultado das compilações) para que seus projetos possam ser executados sem as compilações.

7 . Use gzip: **_npm i compression -S_** e registro lógico, nem muito nem pouco, dependendo do ambiente. **_npm i morgan -S_**.

8 . **_Expanda_.** Comece a pensar em armazenamento em cluster e em serviços sem estado desde o primeiro dia de desenvolvimento do Node. Use **_pm2_** ou controle de cluster do **_Strongloop_**

9 . **_Solicitações de cache_** - Obtenha o máximo dos seus servidores Node, ocultando-os atrás de um servidor de arquivo estático, como **_nginx_** e / ou cache de nível de solicitação, como **_Varnish_** Cache e cache CDN.

Visto esse resumo, agora vamos percorrer por cada um desses itens de forma mais detalhadas.

[![Ebook HTML](/uploads/2020/09/ebook-guia-completo-html.png)](/ebook-gratuito-html)

Ebook HTML

## 1 . Use scripts NPM

A primeira práticas recomendadas em NodeJS é quase um padrão agora criar scripts npm para compilações, testes e, o mais importante, para iniciar uma aplicação. Este é o primeiro lugar que os desenvolvedores do Node olham quando encontram um novo projeto. Algumas pessoas ( 1 , 2 , 3 , 4 ) até trocaram Grunt, Gulp e outros pelo script npm de nível mais baixo, mas mais confiável. Eu posso entender totalmente o argumento deles. Considerando que os scripts npm têm ganchos pré e pós, você pode chegar a um nível muito sofisticado de automação:

```
"scripts": {
  "preinstall": "node prepare.js",
  "postintall": "node clean.js",
  "build": "webpack",
  "postbuild": "node index.js",
  "postversion": "npm publish"
}
```

Muitas vezes, ao desenvolver para o front-end, você deseja executar dois ou mais processos de observação para reconstruir seu código. Por exemplo, um para **_webpack_** e outro para **_nodemon_**. Você pode fazer isso com **_&&_** uma vez que o primeiro comando não libera o **_prompt_**. No entanto, há um módulo útil chamado [concurrently](https://www.npmjs.com/package/concurrently) que pode gerar vários processos e executá-los ao mesmo tempo.

Além disso, instale ferramentas de linha de comando dev, como **_webpack_**, **_nodemon_**, **_gulp_**, etc. localmente para evitar conflitos. Você pode apontar, **_./node\_modules/.bin/gulp_** por exemplo, ou adicionar esta linha ao seu perfil **_bash / zsh (PATH!)_**:

```
export PATH="./node_modules/.bin:$PATH"
```

## 2 . Use Env Vars - Variáveis de Ambientes

Utilize variáveis ​​de ambiente até mesmo para os estágios iniciais de um projeto para garantir que não haja vazamento de informações confidenciais e apenas para construir o código corretamente desde o início. Além disso, algumas bibliotecas e estruturas (eu sei que o Express faz isso com certeza) irão obter informações sobre como **_NODE\_ENV_** modificar seu comportamento. Defina como **_production_**. Defina seus valores **_MONGO\_URI_** e **_API\_KEYtambém_**. Você pode criar um arquivo shell (por exemplo **_start.sh_**) e adicioná-lo a **_.gitignore:_**

```
NODE_ENV=production MONGO_URL=mongo://localhost:3000/accounts API_KEY=lolz nodemon index.js
```

O Nodemon também tem um arquivo de configuração onde você pode colocar seus env vars ( exemplo ):

```
{
  "env": {
    "NODE_ENV": "production",
    "MONGO_URL": "mongo://localhost:3000/accounts"
  }
}
```

## 3 . Entenda o Event Loop

Outras Práticas Recomendadas em NodeJS. É entender bem o poderoso e inteligente ciclo de eventos é o que torna o Node tão rápido e brilhante, utilizando todo o tempo que seria perdido esperando a conclusão das tarefas de entrada e saída. Portanto, o Node é ótimo para otimizar sistemas vinculados a E / S.

Se você precisa realizar algo que consome muita CPU (por exemplo, computação, hashing de senhas ou compactação), então, além de gerar novos processos para essas tarefas de CPU, você pode querer explorar o adiamento da tarefa com **_setImmediate()_** ou **_setTimeout()_** - o código em seus callbacks continuarão no próximo ciclo de loop de evento. **_nextTick()_** funciona no mesmo ciclo ao contrário do nome. Argh!

Aqui está um diagrama de Bert Belder, que trabalhou no loop de eventos. Ele sabe claramente como funciona o loop de eventos!

## 4 . Use Herança Funcional

[JavaScript suporta herança prototípica](/orientacao-objetos-javascript-um-guia-para-iniciante/) que ocorre quando os objetos herdam de outros objetos. O operador **_class_** foi adicionado à linguagem com na [versão ES6](https://youtu.be/PlFlKxZbVqs). No entanto, é abertamente complexo em comparação com a herança funcional. A maioria dos gurus do Node prefere a simplicidade do último. É implementado por um padrão de fábrica de função simples e NÃO requer o uso de **prototype**, **new** ou **this**. Não há efeitos implícitos quando você atualiza o protótipo (fazendo com que todas as instâncias sejam alteradas também), pois na herança funcional cada objeto usa sua própria cópia de métodos.

Essas Práticas Recomendadas em NodeJS, vão com certeza fazer total diferença em seus projetos.

Veja esse código criado por **_TJ Holowaychuk_**, um dev muito experiência que está envolvido com o projeto, Express, Mocha, Connect, Superagent e dezenas de outros módulos do Node. O Express usa herança funcional ( [código-fonte completo](https://github.com/expressjs/express/blob/master/lib/express.js) ):

```
exports = module.exports = createApplication;
// ...
function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  app.request = { __proto__: req, app: app };
  app.response = { __proto__: res, app: app };
  app.init();
  return app;
}
```

Para ser objetivo, os módulos principais do Node usam muito a herança prototípica. Se você seguir esse padrão, certifique-se de saber como funciona.

## 5 . Tenha cuidado com os nomes das coisas

Este é óbvio. Bons nomes servem de documentação. Qual você prefere?

```
const dexter = require('morgan')

app.use(dexter('dev')
```

Não tenho ideia do que **dexter** está fazendo quando apenas olho **app.use()**. Que tal um nome diferente e mais significativo:

```
const logger = require('morgan')
.
app.use(logger('dev')) 
```

Da mesma forma, os nomes dos arquivos devem refletir corretamente qual é o propósito do código interno. Se você der uma olhada na lib pasta do Node ( [link do GitHub](https://github.com/nodejs/node/tree/master/lib) ) que tem todos os módulos principais empacotados com a plataforma, você verá uma nomenclatura clara dos arquivos / módulos (mesmo se você não estiver muito familiarizado com todos os módulos principais) :

```
events.js
fs.js
http.js
https.js
module.js
net.js
os.js
path.js
process.js
punycode.js
querystring.js
```

Os módulos internos são marcados com um sublinhado ( **_\_debugger.js_**, **_\_http\_agent.js_**, **_\_http\_client.js_**), assim como métodos e variável no código. Isso ajuda a alertar os desenvolvedores de que esta é uma interface interna e, se você a estiver usando, estará por conta própria - não reclame se ela for refeita ou mesmo removida.

## 7 .Conheça bem o Express

![Práticas Recomendadas em NodeJS - Express JS](/uploads/2020/10/expressjs-1024x568.jpg)

Express é um framework excelente e muito maduro. Assim, você precisa saber o middleware mais usado e como usá-lo. [Veja esse conteúdo que está lá em nosso canal do Youtube](https://youtu.be/t4y9AFY9mmI). Tenho os principais módulos de middleware listados lá. Por exemplo, **_npm i compression -S_** irá reduzir a velocidade de download, esvaziando as respostas. **logger('tiny')** ou **logger('common')** fornecerá menos (dev) ou mais (prod) logs, respectivamente.

## 8 . Aumentar a Escalabilidade

O Node é ótimo em assíncrono devido a sua E / S sem bloqueio e mantém essa forma assíncrona de codificação simples porque há apenas um thread. Esta é uma oportunidade para começar a dimensionar logo no início, talvez até com as primeiras linhas de código. Existe o **módulo cluster** principal que permitirá que você dimensione verticalmente sem muitos problemas. No entanto, uma maneira ainda melhor seria usar uma ferramenta como o [pm2](http://pm2.keymetrics.io/).

Sem dúvida essas Práticas Recomendadas em NodeJS, a escalabilidade é uma das mais impotantes.

Por exemplo, é assim que você pode começar com pm2:

```
npm i -g pm2
```

Então você pode iniciar quatro instâncias do mesmo servidor:

```
pm2 start server.js -i 4
```

Para Docker, o pm2 versão 2+ possui pm2-docker. Portanto, seu Dockerfile pode ter a seguinte aparência:

```
# ...

RUN npm install pm2 -g

CMD ["pm2-docker", "app.js"]
```

A imagem oficial do Alpine Linux pm2 está no [Docker Hub](https://hub.docker.com/r/keymetrics/pm2-docker-alpine/).

## 9 . Solicitações de cache

Esta é uma prática recomendada de DevOps que permitirá que você obtenha mais energia de suas instâncias de Node (você obtém mais de uma com pm2 ou algo semelhante, veja acima). O caminho a seguir é permitir que os servidores Node façam coisas de aplicativos como fazer solicitações, processar dados e executar lógica de negócios e descarregar o tráfego para arquivos estáticos em outro servidor web, como Apache httpd ou Nginx. Novamente, você provavelmente deve usar o Docker para a configuração:

```
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
```

Eu gosto de usar o Docker Compose para fazer vários contêineres (nginx, Node, Redis, MongoDB) funcionarem entre si. Por exemplo:

```
web:
  build: ./app
  volumes:
    - "./app:/src/app"
  ports:
    - "3030:3000"
  links:
    - "db:redis"
  command: pm2-docker app/server.js

nginx:
  restart: always
  build: ./nginx/
  ports:
    - "80:80"
  volumes:
    - /www/public
  volumes_from:
    - web
  links:
    - web:web

db:
  image: redis
```

## Conclusões

Hoje em dia e na era do software de código aberto, não há desculpas para não aprender com o código testado e confiável que está disponível. Você não precisa estar no círculo interno para entrar. O aprendizado nunca para e tenho certeza que em breve teremos diferentes práticas recomendadas com base nos fracassos e sucessos que experimentaremos. Eles são garantidos.

Vejo como mais e mais pessoas perseguem a próxima nova estrutura ou linguagem. É a síndrome do objeto brilhante. Eles aprendem uma nova biblioteca a cada semana e uma nova estrutura a cada mês. Eles verificam compulsivamente o Twitter, Reddit, Hacker News e JS Weekly. Eles usam o nível esmagador de atividade do mundo JavaScript para procrastinar. Eles têm históricos GitHub públicos vazios.

Aprender coisas novas é bom, mas não confunda com realmente construir coisas. O que importa e o que paga seu salário é, na verdade, construir coisas. Pare de engenharia . Você não está construindo o próximo Facebook.

A melhor prática final é usar as melhores práticas e o melhor dos melhores é dominar os fundamentos.

### Recomendação de Treinamento FullStack JavaScript

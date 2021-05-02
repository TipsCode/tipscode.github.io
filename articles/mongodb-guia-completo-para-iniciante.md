---
title: "MongoDB – Guia para Iniciantes Passo a Passo"
date: "2020-06-18"
tags: 
  - "alisson-suassuna"
  - "aprender-a-programar"
  - "guia-para-iniciante"
  - "iniciante"
  - "introducao-mongodb"
  - "javascript"
  - "json"
  - "mongo"
  - "mongodb"
  - "mongodb-compass"
  - "mongodb-tutorial"
  - "nodejs"
  - "nosql"
  - "tipscode"
description: Eeste artigo é para iniciantes, vou demonstrar como instalar o Mongodb e começar a usá-lo para armazenar e consultar dados. Também mostro como interagir com um banco de dados Mongo de dentro de um programa Node e também destacarei algumas das diferenças entre o Mongo e um banco de dados relacional tradicional (como o MySQL) ao longo do artigo.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Eeste artigo é para **iniciantes**, vou demonstrar como instalar o _**Mongodb**_ e começar a usá-lo para armazenar e consultar dados. Também mostro como interagir com um banco de dados Mongo de dentro de um programa Node e também destacarei algumas das diferenças entre o Mongo e um banco de dados relacional tradicional (como o **_MySQL_**) ao longo do artigo.

## O que é MongoDB?

![mongodb](/uploads/2020/05/problematica-png-1.png)

Figura 01: o que é mongodb

O MongoDB é um banco de dados orientado a documentos. Isso significa que ele não usa tabelas e linhas para armazenar seus dados, mas coleções de documentos semelhantes ao **_JSON_**. Esses documentos suportam campos incorporados, para que os dados relacionados possam ser armazenados dentro deles.

O **_MongoDB_** também é um banco de dados sem esquema, portanto, não precisamos especificar o número ou o tipo de coluna antes de inserir nossos dados.

Aqui está um exemplo de como pode ser um documento do MongoDB:

```
{
  _id: ObjectId(3da252d3902a),
  type: "Artigo-blog",
  title: "MongoDB - Guia para Iniciantes Passo a Passo",
  author: "Alisson Suassuna",
  tags: [ "mongodb", "javascript", "node" ],
  categories: [
    {
      name: "javascript",
      description: "Artigo focando em iniciantes "
    },
    {
      name: "databases",
      description: "Tutorial para aqueles que querem aprender"
    },
  ],
  content: "O MongoDB é um banco de dados NoSQL multiplataforma, de código aberto"
}
```

Como você pode ver, o documento possui vários campos ( **_type, title_** etc.), que armazenam valores (“**_MongoDB_** – Guia para Iniciantes Passo a Passo” etc.). Esses valores podem conter cadeias, números, matrizes, matrizes de sub-documentos (por exemplo, o **_categories_** campo), coordenadas geográficas e muito mais.

O **\_id** nome do campo está reservado para uso como chave primária. Seu valor deve ser único na coleção, e é imutável e pode ser de qualquer tipo que não seja uma matriz.

Dica: para aqueles que querem saber o que significa “**_JSON_**”, o Mongodb usa internamente algo chamado **_BSON_** (abreviação de **_JSON binário_**). Na prática, você realmente não precisa saber muito sobre o **_BSON_** ao trabalhar com o **_MongoDB_**.

Como você pode imaginar, um documento em um banco de dados **_NoSQL_** corresponde a uma linha em um banco de dados **_SQL_**. Um grupo de documentos juntos é conhecido como uma coleção, que é aproximadamente sinônimo de uma tabela em um banco de dados relacional.

Aqui está uma tabela que resume os diferentes termos:

![mongodb](/uploads/2020/06/diferenças-sql-mongodb.png)

Se você está iniciando um novo projeto e está buscando aprender mais sobre o **_mongodb_**, te recomendo esse [treinamento completo](/programador-fullstack-8-semanas) nele você vai aprender toda a base sobre todo o ecossistema JavaScript. [Clique aqui para ver](/programador-fullstack-8-semanas)

## Instalando o MongoDB

![](/uploads/2020/06/instalando-no-pc-1.jpg)

Nota: se você não quiser instalar nada no seu pc neste momento não tem problema, existem alguns serviços online que você pode usar. O Mongo playground, por exemplo, é um **_sandbox_** simples para testar e compartilhar consultas do **_MongoDB_** online.

O **_MongoDB_** vem em várias edições. O que nos interessa é a **_MongoDB Community Edition._**

A página inicial do projeto possui excelente documentação sobre a instalação do Mongo, e não tentarei replicá-la aqui. Em vez disso, vou mostrar os links para instruções para cada um dos principais sistemas operacionais:

- [Instalar no Windows.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Instalar no MacOS.](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Instalar no Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

Se você usa uma versão do Linux não baseada no Ubuntu, pode verificar [esta página](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials) para obter instruções de instalação para outras distribuições. O MongoDB também está normalmente disponível nos canais oficiais de software Linux, mas às vezes isso gera uma versão desatualizada.

### Configurações pós-instalação

Depois de instalar o MongoDB para o seu sistema, você poderá encontrar este erro:

```
dbpath (/data/db) does not exist.
 Create this directory or give existing directory in --dbpath.
 See http://dochub.mongodb.org/core/startingandstoppingmongo
```

Isso significa que o Mongodb não pode encontrar (ou acessar) o diretório usado para armazenar seus bancos de dados. Para resolve esse pequeno problema faça o seguinte:

```
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

[![Criando Jogo](/uploads/2020/06/MiniCurso-CTA-blog.png)](/mini-curso-construindo-seu-jogo-em-javascript/)

Curso Grátis

O primeiro comando cria o diretório data/db O segundo define permissões para que o Mongodb possa gravar nesse diretório.

### Instalando a Interface Gráfica

Usaremos a linha de comando neste artigo, mas o MongoDB também oferece uma ferramenta chamada Compass para conectar e gerenciar seus bancos de dados usando uma GUI.

Se você estiver no Windows, o Compass pode ser instalado como parte da instalação principal do Mongo (basta selecionar a opção apropriada no assistente). [Caso contrário, você pode baixar o Compass para o seu respectivo sistema operacional aqui.](https://docs.mongodb.com/compass/master/install/)

Veja como ele é:

![mongodb](/uploads/2020/06/Connections-tvttrij9h5-1024x706.png)

### Mongodb - Shell

Para fazer o teste da instalação, abra abrindo o terminal. Você pode fazer isso abrindo uma janela do terminal e digitando o comando mongo.

Nota: assumindo que o mongodb está instalado no diretório /bin. Se, por algum motivo, não for esse o caso, mude para o diretório /bin e execute o comando novamente.

Se você receber um Error: couldn’t connect to server erro, você vai precisar parar e iniciar o servidor Mongo (em uma segunda janela de terminal) com o mesmo comando mongod.

Quando estiver no terminal, digite db.version() para ver a versão do MongoDB em execução.

Observe que você pode sair do terminal executando quit() o daemon Mongo pressionando Ctrl+ C a qualquer momento.

Agora vamos nos familiarizar com alguns conceitos básicos do MongoDB.

### Operações básicas

Digite no terminal se você ainda não o fez (digitando mongo em um terminal):

```
[mj@localhost ~]$ mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("08a624a0-b330-4233-b56b-1d5b15a48fea") }
MongoDB server version: 4.2.2
```

Vamos começar criando um banco de dados para trabalhar. Para criar um banco de dados, o MongoDB possui comando use DATABASE\_NAME

```
> use exampledb
switched to db exampledb
```

Para exibir todos os bancos de dados existentes, use o comando show dbs:

```
> show dbs

admin          0.000GB
config         0.000GB
local          0.000GB
```

O exampledb não está na lista porque precisamos inserir pelo menos um documento no banco de dados. Para inserir um documento, você pode usar o comando db.COLLECTION\_NAME.insertOne({“key”:”value”}). Aqui está um exemplo:

```
> db.users.insertOne({name: "Suassuma"})
{
   "acknowledged" : true,
   "insertedId" : ObjectId("5a53Ds43b223034Ds238daaec")
}
```

O MongoDB cria automaticamente uma nova coleção users e insere um documento com o par chave-valor ‘name’:’Suassuna’. O ObjectId retornado é o ID do documento inserido. O MongoDB cria um Object Id exclusivo para cada documento na criação e se torna o valor padrão do campo \_id.

Agora poderemos ver nosso banco de dados:

```
>show dbs
admin          0.000GB
config         0.000GB
exampledb      0.000GB
local          0.000GB
```

Da mesma forma, você pode confirmar que a coleção foi criada usando o comando show collections:

```
> show collections
users
```

Criamos um banco de dados, adicionamos uma coleção com o nome user se inserimos um documento nele. Agora vamos apagar. Para descartar um banco de dados existente, use o comando dropDatabase(), como exemplificado abaixo:

```
>db.dropDatabase()
{ "dropped" : "exampledb", "ok" : 1 }
```

**_show dbs_** confirma que o banco de dados foi realmente deletado use o comando **_show dbs_**

```
> show dbs
admin          0.000GB
config         0.000GB
local          0.000GB
```

Para mais operações de banco de dados, consulte a página da documentação do MongoDB nos comandos do banco de dados. E caso você queira fazer um treinamento completo com bem mais detalhes clique aqui

## Gerenciamento de Usuários

Até agora você já deve ter notado que o MongoDB não vem com nenhum tipo de controle de acesso ativado.

Embora não seja necessário fornecer um nome de usuário e senha para o desenvolvimento, é algo que você deve alterar ao usar o Mongodb na produção.

Aqui estão as etapas para criar um usuário de banco de dados com privilégios completos de leitura / gravação:

- Verifique se você iniciou o servidor Mongo sem nenhum tipo de controle de acesso (geralmente digitando mongod);
- Abra um shell digitando mongo.
- No shell, adicione um usuário com a readWritefunção ao exampledbbanco de dados. Isso solicitará que você digite uma senha. Obviamente, substitua “manjunath” pelo seu nome de usuário desejado:

```
use exampledb
   db.createUser(
    {
      user: "alissonsuassuna",
      pwd: passwordPrompt(),
      roles: [ { role: "readWrite" ]
    }
)
```

- Saia do shell Mongo.
- Desligue o servidor Mongo e reinicie-o usando mongod –auth. Os clientes que se conectam a esta instância agora devem se autenticar.
- Reabra o shel e rode o comando: mongo –authenticationDatabase “exampledb” -u “manjunath” -p. Agora você será solicitado a fornecer sua senha.

Para mais informações, consulte a [documentação](https://docs.mongodb.com/manual/tutorial/enable-authentication/).

## MongoDB - CRUD

Como você já deve saber, a sigla **_CRUD_** significa a letra C é Create(criar), R read(Leitura), U update(Atualizar), e D delete(apagar). Estas são as quatro operações básicas do banco de dados que você não pode evitar ao criar qualquer aplicação. Por exemplo, qualquer aplicação moderno terá a capacidade de criar um novo usuário, ler os dados do usuário, atualizar as informações do usuário e, se necessário, excluir a conta do usuário. Vamos fazer isso no nível do banco de dados usando o MongoDB.

### Criar

Criação é o mesmo que inserir um documento em uma coleção. Na seção anterior, inserimos um único documento usando a comando db.collection.insertOne(). Existe outro comando chamado db.collection.insertMany() que permite inserir vários documentos ao mesmo tempo. Veja o exemplo:

```
> db.collection.insertMany([ <document 1> , <document 2>, ... ])
```

Vamos criar uma coleção users e preenchê-la com alguns usuários reais:

```
> use exampledb
> db.users.insertMany([
   { name: "Alisson",age:23, email: "alisson@example.com" },
   { name: "Ana", age:20, email:"ana@example.com" },
   { name: "Dani", age: 27, email: "dani@example.com" },
   { name: "Hecto", age:14, email:"hecto@example.com"}
])

{
   "acknowledged" : true,
   "insertedIds" : [
      ObjectId("5e25bb58ba0cf16476aa56ff"),
    ObjectId("5e25bb58ba0cf16476aa5700"),
    ObjectId("5e25bb58ba0cf16476aa5701"),
    ObjectId("5e25bb58ba0cf16476aa5702")
   ]
}
```

O método insertMany aceita um array de objetos e, em troca, obtemos um array de ObjectId s.

### Leitura

Uma operação de leitura é usada para recuperar um documento ou vários documentos de uma coleção. A sintaxe para a operação de leitura é a seguinte:

```
> db.collection.find(query, projection)
```

Para recuperar todos os documentos do usuário, você pode fazer o seguinte:

```
> db.users.find().pretty()
{
  "_id" : ObjectId("5e25bb58ba0cf16476aa56ff"),
  "name" : "Alisson",
  "age" : 20,
  "email" : "alisson@example.com"
}
{
  "_id" : ObjectId("5e25bb58ba0cf16476aa5700"),
  "name" : "Ana",
  "age" : 20,
  "email" : "ana@example.com"
}
{
  "_id" : ObjectId("5e25bb58ba0cf16476aa5701"),
  "name" : "Dani",
  "age" : 27,
  "email" : "dani@example.com"
}
{
  "_id" : ObjectId("5e25bb58ba0cf16476aa5702"),
  "name" : "Hecto",
  "age" : 14,
  "email" : "hecto@example.com"
}
```

Isso corresponde à um SELECT \* FROM USERS consulta para um banco de dados SQL.

O método pretty é um método de cursor, e existem muitos outros também. Você pode encadear esses métodos para modificar sua consulta e os documentos retornados pela consulta.

Talvez você precise filtrar consultas para retornar um subconjunto da coleção – como encontrar todos os usuários abaixo de 30. Você pode modificar a consulta desta forma:

```
> db.users.find({ age: { $lt: 30 } })
{ "_id" : ObjectId("5e25bb58ba0cf16476aa56ff"), "name" : "Alisson", "age" : 23, "email" : "alisson@example.com" }
{ "_id" : ObjectId("5e25bb58ba0cf16476aa5701"), "name" : "Ana", "age" : 27, "email" : "ana@example.com" }
```

Neste exemplo, $lt é um operador de filtro de consulta que seleciona documentos cujo o valor age do campo é menor que 30. Existem muitos filtros de comparação e de consulta lógica disponíveis. Você pode ver a lista inteira na documentação do seletor de consultas .

Nota: No Mongo, você pode replicar o comando like muito usado no SQL usando um regex. Por exemplo, SELECT \* FROM users WHERE name LIKE ‘Ana%’ traduz para db.users.find({ name: /Ana.\*/ }). Caso não saiba o que são regex, temos um artigo completo

### Atualizar

Uma operação de atualização modifica documentos em uma coleção. Semelhante à operação de criação, o MongoDB oferece vários métodos para atualizar um documento. Por exemplo:

- db.collection.updateOne(,<filter>, <update>, <options> )
- db.collection.updateMany(,<filter>, <update>, <options> )

Se você precisar adicionar um campo extra – por exemplo registration – a todos os documentos existentes em uma coleção, poderá fazer algo assim:

```
> db.users.updateMany({}, {$set: { registration: "incomplete"}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
```

O primeiro argumento é um objeto vazio, porque queremos atualizar todos os documentos da coleção. O $set é um operador de atualização que define o valor de um campo com o valor especificado. Você pode verificar se o campo extra foi adicionado usando db.users.find().

Para atualizar o valor dos documentos que correspondem a determinados critérios, o comando updateMany() aceita um objeto de filtro como seu primeiro argumento. Por exemplo, você pode querer substituir o valor registration para complete para todos os usuários que são 18+ idade. Aqui está o que você pode fazer:

```
> db.users.updateMany(
  {age:{ $gt: 18} },
  {$set: { registration: "complete"}
})

{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
```

Para atualizar os detalhes do registro de um único usuário, você pode fazer o seguinte:

```
> db.users.updateOne(
 {email: "tom@example.com" },
 {$set: { registration: "complete"}
})

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
```

### Deletar

Para excluir um documento, você pode usar o método db.collection.deleteOne(, ) e, para excluir vários documentos, você pode usar o método db.collection.deleteMany(, ).

Para excluir documentos com base em determinados critérios, você pode usar os operadores de filtro que usamos para a operação de leitura e atualização:

```
> db.users.updateOne(
 {email: "alisson@example.com" },
 {$set: { status: "dormant"}
})

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

> db.users.deleteMany( { status: { $in: [ "dormant", "inactive" ] } } )

{ "acknowledged" : true, "deletedCount" : 1 }
```

```
Isso exclui todos os documentos com status “inativo” ou “inativo”.
```

## Validação

No início deste artigo, quando eu disse que o Mongo é um banco de dados sem esquema, eu estava simplificando um pouco.

Ele é sem esquema, na medida em que não é necessário especificar o número ou tipo de colunas antes de inserir os nossos dados. No entanto, também é possível definir um esquema JSON e usá-lo para impor regras de validação para nossos dados.

Vamos criar uma coleção validatedUsers, onde podemos usar a validator construção para especificar que a name é obrigatório e que um email campo corresponde a um determinado padrão:

```
> db.createCollection("validatedUsers", {
  validator: {
    $jsonSchema: {
      required: [ "name", "email" ],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        email: {
          bsonType: "string",
          pattern: "^.+\@.+$",
          description: "must be a valid email and is required"
        }
      }
    }
  }
})

{ "ok" : 1 }
```

Agora, se tentarmos inserir dados incorretos, receberemos um erro de validação:

```
> db.validatedUsers.insertOne({ name: "duce", email: "not-an-email" })

2020-01-22T09:56:56.918+0100 E  QUERY    &lsqb;js] uncaught exception: WriteError({
  "index" : 0,
  "code" : 121,
  "errmsg" : "Document failed validation",
  "op" : {
    "_id" : ObjectId("5e280e5847eb18010666530c"),
    "name" : "Jim",
    "email" : "not-an-email"
  }
}) :
WriteError({
  "index" : 0,
  "code" : 121,
  "errmsg" : "Document failed validation",
  "op" : {
    "_id" : ObjectId("5e280e5847eb18010666530c"),
    "name" : "Jim",
    "email" : "not-an-email"
  }
})
WriteError@src/mongo/shell/bulk_api.js:458:48
mergeBatchResults@src/mongo/shell/bulk_api.js:855:49
executeBatch@src/mongo/shell/bulk_api.js:919:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1163:21
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:264:9
@(shell):1:1
```

Você pode ler mais sobre a validação de esquema na [documentação](https://docs.mongodb.com/manual/core/schema-validation/) do projeto.

Nota de recomendação: As vezes a documentação é confussa para qualquer iniciante, eu mesmo no inicio não entendia nada rsrs, por esse motivo e outros vou te recomenda um treinamento completo programador fullStack nele você vai aprender MondoDB e muito mais, [clique aqui para da uma olha nos detalhes](/programador-fullstack-8-semanas)

## Drivers MongoDB

![](/uploads/2020/06/instalando-no-pc-1.jpg)

Para que uma aplicação se comunique com o servidor MongoDB, é necessário usar uma biblioteca do lado do cliente chamada driver. O driver fica em cima do servidor de banco de dados e permite que você interaja com o banco de dados usando a API do driver. O MongoDB possui drivers oficiais e de terceiros para todas as linguagens ambientes populares.

Os drivers mais populares para o Node.js incluem o [driver nativo do MongoDB](https://docs.mongodb.com/ecosystem/drivers/node/) e o Mongoose. Vamos ver um pouco sobre.

### Driver MongoDB Node.js

Este é o driver oficial MongoDB para Node.js . O driver pode interagir com o banco de dados usando retornos de chamada, promessas ou async … await.

Você pode instalá-lo assim:

```
npm install mongod
```

O exemplo abaixo demonstra como conectar o driver ao servidor e listar todos os documentos da coleção users.

Nota: se você se conectou ao servidor Mongo usando um nome e uma senha, precisará especificar esses detalhes no seu código.

[![criando jogo](/uploads/2020/06/MiniCurso-CTA-blog.png)](/mini-curso-construindo-seu-jogo-em-javascript/)

```
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/exampledb';

// Com autenticação:
// const url = 'mongodb://<userName>:<passWord>@localhost:27017/exampledb';
// Further reading: https://docs.mongodb.com/manual/reference/connection-string/

(async () => {
  let client;

  try {
    client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = client.db('exampledb');
    const collection = db.collection('users');
    const users = await collection.find().toArray();
    console.log(users);
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
})();
```

O MongoClient.connect retorno é uma [promise](/promise-javascript-guia-completo/). Qualquer erro é capturado pelo blocl catch e qualquer ação do banco de dados entra no bloco try. Se você examinar a [documentação](https://mongodb.github.io/node-mongodb-native/3.5/) do driver Mong, verá que a API é bastante semelhante à que estamos usando no shell.

### Driver Mongoose

Outro driver Node.js popular para o MongoDB é o [Mongoose](http://mongoosejs.com/docs/index.html). O Mongoose é construído sobre o driver oficial do MongoDB. Quando o Mongoose foi lançado, havia muitos recursos que o driver nativo do MongoDB não possuía. Um recurso importante foi a capacidade de definir uma estrutura de esquema que seria mapeada na coleção do banco de dados. No entanto, as versões mais recentes do MongoDB adotaram alguns desses recursos na forma de esquema JSON e validação de esquema.

Além do esquema, outros recursos sofisticados do Mongoose incluem [modelos](https://mongoosejs.com/docs/models.html), [validadores](https://mongoosejs.com/docs/validation.html) e [middlewar](https://mongoosejs.com/docs/middleware.html), o [método populate](https://mongoosejs.com/docs/populate.html), [plugins](https://mongoosejs.com/docs/plugins.html) e assim por diante. Você pode ler mais sobre isso nos documentos do Mongoose.

Você pode instalar o Mongoose assim:

```
npm install mongoose
```

Código usando o Mongoose:

```
const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb://localhost:27017/exampledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const userSchema = new mongoose.Schema({ name: String, age: String, email: String });
  const User = mongoose.model('User', userSchema);

  const users = await User.find();
  console.log(users);
  mongoose.connection.close();
}

run().catch(error => console.log(error.stack));
```

## Conclusão

O MongoDB é uma solução popular de banco de dados NoSQL que se adapta aos requisitos modernos de desenvolvimento. Neste artigo, abordamos o básico do MongoDB, o shell Mongo e alguns dos drivers populares disponíveis. Também exploramos as operações comuns do banco de dados e as ações CRUD no shell Mongo. Agora é hora de você sair e experimentar o que abordamos aqui e muito mais. Se você quiser saber mais, recomendo criar uma API REST com MongoDB e Node para se familiarizar com as operações e métodos comuns do banco de dados clique aqui para ver um [treinamento completo onde você vera tudo criará uma API REST e muito mais](/programador-fullstack-8-semanas).

### Recomendações

#### Artigos

- [Acessibilidade Web: Seja um Programador Diferente](/acessibilidade-web-um-programador-diferente/)
- [5 Geradores de CSS Grid Tenha Layout Prontos para seu projeto](/5-geradores-css-grid/)
- [Promise JavaScript: Guia completo Passo a Passo](/promise-javascript-guia-completo/)

#### Canal Youtube

<iframe width="560" height="315" src="https://www.youtube.com/embed/cBZn4dDcMrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Programador FullStack JavaScript - Esse eu recomendo

[![](/uploads/2020/06/just-start-red-OFD-FB-1024x536.jpg)](/programador-fullstack-8-semanas)

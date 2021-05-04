---
title: "10 Técnicas do Git que Você precisa conhecer"
date: "2020-03-28"
tags: 
  - "brasil"
  - "ciencias-da-computacao"
  - "e-so-tecnica"
  - "git"
  - "gitup-g3-duo"
  - "gitup-git2"
  - "palestra-tecnica-do-cisl"
  - "programar-do-zero"
  - "software"
  - "tecnicas"
  - "tecnicas-de-programacao"
  - "tecnicas-do-git"
  - "tecnicas-operacionais"
description: Neste artigo vamos falar sobre as técnicas básicas do Git com as quais você deve estar familiarizado para trabalhar com versionamento em seu projeto. Listei em uma ordem que você seguiria logicamente para contribuir com um repositório, pois a importância de cada etapa é fundamental. Vamos agora a lista.
imgArticle: /thumbnail-article/10-tecnicas-git.png
imgHome: /thumbnail-home/10-tecnicas-git.png
---

Neste artigo vamos falar sobre as técnicas básicas do Git com as quais você deve estar familiarizado para trabalhar com versionamento em seu projeto. Listei em uma ordem que você seguiria logicamente para contribuir com um repositório, pois a importância de cada etapa é fundamental. Vamos agora a lista.

### 1 - Clonagem

Técnicas do Git

Se você usou o **_Git_** para projetos pessoais, pode ter inicializado um projeto do zero e adicionado a ele com o tempo. Quando você está trabalhando em uma base de código existente, a primeira etapa é clonar a base de código no sistema local. Isso permite que você trabalhe na sua cópia do repositório sem qualquer interferência de outras alterações.

Para clonar um repositório, execute o **_git clone_** comando, seguido pelo caminho para o repositório:

```
git clone /path/to/repo
```

Se sua fonte não residir no mesmo sistema, você pode fazer o SSH para um sistema remoto e clonar também:

```
git clone username@remote_system_ip:/path/to/repo/on/remote
```

Se você estiver clonando de uma fonte na Internet, basta adicionar o URL:

```
git clone https://github.com/sdaityari/my_git_project.git
```

Sempre que você estiver clonando um repositório, poderá [escolher vários protocolos](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols) para se conectar à fonte. No exemplo do GitHub acima, usei o https protocolo.

### 2 - Gerenciando controles remotos no Git

Técnicas do Git

Depois de clonar seu repositório, ele ainda mantém um ponteiro para a fonte. Este ponteiro é um exemplo de controle remoto do Git. Um controle remoto é um ponteiro para outra cópia do mesmo repositório. Quando você clona um repositório, origin é automaticamente criado um ponteiro que aponta para a fonte.

Você pode verificar uma lista de controles remotos em um repositório executando o seguinte comando:

```
git remove -v
```

Para adicionar um controle remoto, você pode usar o comando **_git remote add_** exemplo:

```
git remote add remote_name remote_address
```

Você pode remover um controle remoto usando o comando **_git remote remove_** exemplo:

```
git remote remove remote_name
```

Se você deseja alterar o endereço de um controle remoto, pode usar comando **_set-urlcomando_** exemplo:

```
git remote set-url remote_name new_remote_address
```

### 3 - Ramificações do Git

Técnicas do Git

A maior vantagem do Git sobre outros sistemas de controle de versão é o poder de suas ramificações. Antes de abordar o essencial da ramificação, você deve estar se perguntando o que é uma ramificação. Uma ramificação é um ponteiro para uma consolidação no seu repositório, que por sua vez aponta para seu predecessor. Portanto, um ramo representa uma lista de confirmações em ordem cronológica. Ao criar uma ramificação, você efetivamente cria apenas um novo ponteiro para uma confirmação. No entanto, em essência, representa um novo caminho independente de desenvolvimento.

Se você está trabalhando em seu próprio projeto, talvez nunca tenha usado ramificações conscientemente. Por padrão, o Git usa a master ramificação para desenvolvimento. Quaisquer novas confirmações são adicionadas a essa ramificação.  
A ramificação é necessária para o Git bifurcar linhas de trabalho em um projeto. Ao mesmo tempo, pode haver muitos desenvolvedores trabalhando em uma variedade de problemas diferentes. Idealmente, esses problemas são trabalhados em diferentes ramificações para garantir a separação lógica do novo código até a revisão e mesclagem.

Para verificar uma lista de ramificações e a ramificação ativa atual, execute o seguinte comando:

```
git branch
```

Para criar uma nova ramificação, execute o seguinte comando:

```
git branch new_branch
```

Mesmo que o Git crie uma nova ramificação, observe que sua ramificação ativa ainda é a antiga. Para iniciar o desenvolvimento em uma nova ramificação, execute o seguinte:

```
git checkuot new_branch
```

Para criar uma nova ramificação e alterar essa ramificação ativa, execute o seguinte comando:

```
git checkout -b new_branch
```

Para renomear a ramificação atual, execute o seguinte comando:

```
git branch -m new_renamed_branch
```

Use a opção -D para remover uma ramificação:

```
git branch -D new_renamed_branch
```

Caso você queira se aprofunda no assunto acesse [ramificações do Git](https://git-scm.com/docs/git-branch/pt_BR)

### 4 - Atualize seu repositório local: mesclando

Técnicas do Git

Enquanto verificamos o básico da ramificação no Git, a próxima etapa lógica é mesclar uma ramificação em sua ramificação base quando você terminar de trabalhar em um problema. Para mesclar uma ramificação, execute o seguinte comando:

```
git checkout base_branch
git merge new_branch
```

Embora possa parecer um processo fácil, a mesclagem é o processo que consome mais tempo no Git, pois pode gerar conflitos. Isso pode lhe trazer certas dores de cabeça.

### 5 - Lidar com Conflitos

Técnicas do Git

Imagine que você está trabalhando em um arquivo em uma nova ramificação. Depois de confirmar as alterações, você solicita que o Git mescle seu novo ramo com o ramo base. No entanto, a mesma parte do mesmo arquivo na ramificação base foi atualizada desde que você criou a nova ramificação. Como o Git decide quais mudanças manter e quais descartar?

O Git sempre tenta não perder nenhum dado no processo de mesclagem. Se as alterações no mesmo arquivo foram feitas em diferentes partes do arquivo, você pode fugir mantendo os dois conjuntos de alterações. No entanto, se o Git não conseguir decidir quais alterações manter, isso gera um conflito.

Quando um conflito é gerado, a execução git status no seu repositório mostra uma lista de arquivos que foram modificados nos dois ramos que estão sendo mesclados. Se você abrir qualquer arquivo com um conflito, perceberá o seguinte conjunto de linhas:

```
<<<<<<<< HEAD
...
...
========
...
...
>>>>>>>> new_branch
```

A parte do arquivo entre **_<<<<<<<< HEAD_** e **_\========_** contém o código presente na ramificação base. As linhas de código entre **_\========_** e **_\>>>>>>>> new\_branch_** estão presentes na **_new\_branch_** ramificação. O desenvolvedor que está mesclando o código tem a responsabilidade de decidir qual parte do código (ou uma mistura de ambas as partes) deve ser incluída na mesclagem. Depois de editado, remova os três conjuntos de linhas mostrados, salve o arquivo e confirme as alterações.

### Do ZERO a PROGRAMADOR  
FULL STACK JAVASCRIPT (React + NodeJS)

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.  
  
Está rolando um super DESCONTO DE 40% por tempo limitado!

[Saiba Mais!](/programador-fullstack-8-semanas)

### 6 - Sincronize as alterações com o Controle Remoto

Técnicas do Git

Embora tenhamos discutido como confirmar o código em novas ramificações e mesclá-lo com a ramificação base, agora vamos ver como você pode sincronizar o código com o controle remoto. Antes de poder publicar suas alterações no controle remoto, é necessário atualizar sua cópia local do repositório para dar conta de quaisquer alterações que possam ter ocorrido desde sua última atualização. Para atualizar as alterações do controle remoto, execute o seguinte comando:

```
git pull remote remote_branch:local_branch
```

O comando **_git pull_** primeiro baixa os dados do controle remoto e depois se funde com a ramificação local, conforme especificado no comando. Também podem surgir conflitos ao extrair alterações de um controle remoto. Nesse caso, a última linha em um arquivo de conflito conteria, em **_\>>>>>>>> commit\_hash_** vez de **_\>>>>>>>> new\_branch_**, onde **_commit\_hash_** estaria o hash de identificação para o commit sendo adicionado à sua ramificação.

Para publicar alterações no controle remoto após mesclar com o código mais recente do controle remoto, use o comando **_git push_**:

```
git push remote local_branch:remote_branch
```

### 7 - Git na nuvem: bifurcação

Técnicas do Git

Se você vai está em equipe que trabalha na nuvem ou vai trabalhar, você precisará entender um conceito adicional chamado fork. Uma bifurcação é uma cópia do repositório central da nuvem sob seu nome de usuário. Você tem acesso de gravação ao seu fork, que é um local seguro para fazer alterações sem afetar o repositório original.

Isso afeta a própria etapa técnica que cobri acima. Você clona seu fork, para que o origin repositório local aponte para o fork na nuvem. Como você obtém as atualizações do repositório mais recente? Você precisa adicionar manualmente um controle remoto upstream, que aponte para o repositório original.

Embora você possa publicar facilmente alterações no seu fork, como você aceita o novo código no repositório original? Isso nos leva ao próximo passo.

### 8 - Revisões de código por meio de solicitações pull

Técnicas do Git

Uma solicitação pull é uma solicitação para mesclar código de uma ramificação para outra. É um conceito desenvolvido desde que os serviços em nuvem para o Git se tornaram populares. Uma solicitação de recebimento resume a comparação entre as duas ramificações em questão e inicia uma discussão entre o desenvolvedor e os administradores da organização.

![Técnicas do Git](/uploads/2020/03/github-tipscode.png)

**_Figura 01 - Técnicas do Git_**

Uma revisão de código pode culminar em mais alterações antes de poder ser mesclada. Quando os administradores estão satisfeitos com as alterações, eles podem ser mesclados com o repositório.

### 9 - Conheça os fluxos de trabalho do Git

Técnicas do Git

Quando você está trabalhando sozinho em um único projeto, provavelmente está usando apenas uma única ramificação. Sem saber, você está aderindo ao fluxo de trabalho centralizado, onde todas as alterações são feitas em uma única ramificação.

O próximo fluxo de trabalho mais complexo é o fluxo de trabalho de ramificação de recursos, em que uma única ramificação é atribuída a cada recurso ou correção de bug. Nenhum desenvolvimento acontece diretamente nas filiais **_master_** ou **_development_**.

Um fluxo de trabalho Git que abrange uma ampla variedade de situações é o fluxo de trabalho Gitflow. Possui ramificações separadas para desenvolvimento, recursos, lançamentos e hotfixes.

### 10 - Manipule arquivos grandes: Git LFS

Técnicas do Git

Embora o Git faça um ótimo trabalho no manuseio de arquivos de texto, ele não consegue rastrear alterações nos arquivos binários e executáveis. Embora você possa adicionar esses arquivos ao Git, isso pode levar a um tamanho de repositório grande, com um aumento no número de confirmações.

### Do ZERO a PROGRAMADOR  
FULL STACK JAVASCRIPT (React + NodeJS)

Nesse super treinamento você vai aprender de forma totalmente prática através de aulas, exercícios e projetos a programação web Javascript focada no mercado de trabalho.  
  
Está rolando um super DESCONTO DE 40% por tempo limitado!

[Saiba Mais!](/programador-fullstack-8-semanas)

A solução é usar o [Git Large File Storage](https://git-lfs.github.com/), que lida com arquivos binários grandes por meio do Git. Essa ferramenta armazena esses arquivos na nuvem e os substitui por ponteiros de texto.

### Conclusão

Técnicas do Git

Bom galera, espero que esse conteúdo ajudo vocês a entender bem essa ferramenta fantástica que você como programador tem a OBRIGAÇÃO aprender, pois qualquer empresa por menor que seja irá utilizar.

#### Recomendação de mais conteúdos

Técnicas do Git

[6 Ferramentas primordiais para Desenvolvedores](/6-ferramentas-primordiais-para-desenvolvedores/)

[3 Atualizações JavaScript que você precisa conhecer para mudar de nível](/6-ferramentas-primordiais-para-desenvolvedores/)

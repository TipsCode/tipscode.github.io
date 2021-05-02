---
title: "Variáveis CSS: Como Criar as Propriedades Personalizadas"
date: "2020-08-16"
categories: 
  - "css"
tags: 
  - "como-criar"
  - "css"
  - "variaveis"
description: Durante anos, as variáveis ​​foram um dos recursos do CSS mais comumente solicitados. As variáveis ​​facilitam o gerenciamento de cores, fontes, tamanho e valores de animação e garantem sua consistência em uma base de código.
imgArticle: /thumbnail-article/como-conseguir-seu-primeiro-emprego-como-programador.png
imgHome: /thumbnail-home/como-conseguir-seu-primeiro-emprego-como-programador.png
---

Durante anos, as variáveis ​​foram um dos recursos do CSS mais comumente solicitados. As variáveis ​​facilitam o gerenciamento de cores, fontes, tamanho e valores de animação e garantem sua consistência em uma base de código.

Ás variáveis ​​se encaixariam nas regras existentes que governam o CSS e a herança. Agora eles estão disponíveis para desenvolvedores na forma de “propriedades personalizadas” CSS. Caso você queira aprender na prática em formato de video, tenho um super bônus onde te ensino a criar um projeto do zero usando React e neste projeto faço uso na prática de criação de variáveis [clique aqui para ver](/bonus1-calculadora).

Neste artigo, discutiremos a sintaxe das propriedades personalizadas do CSS. Veremos:

- Como definir propriedades e definir valores padrão para essas propriedades;
- Como as regras de cascata e herança funcionam com propriedades personalizadas
- Como usar propriedades personalizadas com consultas de mídia

No final, você deve ter uma boa noção de como usar propriedades personalizadas em seus projetos. E se você quiser se aprofunda ainda mais no CSS da uma [olhadinha aqui](/programador-fullstack-8-semanas)

Nota: [O suporte do navegador](https://caniuse.com/) para variáveis ​​personalizadas é robusto, existindo nas versões mais recentes de todos os principais navegadores. No entanto, o suporte não está disponível em versões de navegador mais antigas, mas lançadas recentemente, que ainda podem ser amplamente utilizadas pelo público do seu site. As versões do Microsoft Edge anteriores a 15 e do Safari anteriores à versão 9.1 carecem totalmente de suporte. O mesmo é válido para qualquer versão do Internet Explorer. O Microsoft Edge 15 tem suporte, mas também tem alguns bugs documentados.

![css](/uploads/2020/08/css.jpeg)

700

## Definindo Propriedade Personalizadas

Para definir uma propriedade customizada, selecione um nome e prefixe-o com dois hifens. Qualquer caractere alfanumérico pode fazer parte do nome. Os caracteres hífen **( -)** e sublinhado **( \_)** também são permitidos. Uma ampla gama de caracteres Unicode pode fazer parte de um nome de propriedade personalizada, incluindo emojis. Por razões de clareza e legibilidade, use nomes alfanuméricos.

Aqui está um exemplo:

```
--primarycolor: #0ad0f9ff;/ * Usando a notação de cores #rrggbbaa * /
```

O **\--indica** ao analisador CSS que esta é uma propriedade customizada. O valor da propriedade substituirá a propriedade sempre que for usado como uma variável.

Os nomes das propriedades personalizadas diferenciam maiúsculas de minúsculas . Em outras palavras, -**\-primaryColore** -**\-primarycolor** são considerados dois nomes de propriedade distintos. Isso é um desvio do CSS tradicional, no qual o caso de propriedade e valor não importa. No entanto, é consistente com a maneira como o [ECMAScript](/6-recursos-do-ecmascript6/) trata as variáveis.

Assim como outras propriedades, como **display** ou **font**, as propriedades personalizadas CSS devem ser definidas em um bloco de declaração. Um padrão comum é definir propriedades personalizadas dentro de um conjunto de regras que usa o elemento psuedo **:root** como um seletor:

```
:root {
    --primarycolor: #0ad0f9ff;
}
```

**:root** é um **pseudoelemento** que se refere ao elemento raiz do documento. Para documentos HTML, esse é o elemento **html**. Para documentos **SVG**, é o elemento **svg**. Ao usar **:root**, as propriedades ficam imediatamente disponíveis em todo o documento.

## Usando Propriedades Personalizadas no CSS

Para usar um valor de propriedade personalizada como variável, precisamos usar a função **[var()](https://developer.mozilla.org/pt-BR/docs/Web/CSS/var)** Por exemplo, se quiséssemos usar nossa **\--primarycolor** como uma propriedade personalizada como cor de fundo, usaríamos o seguinte:

```
body {
    background-color: var(--primarycolor);
}
```

O valor da nossa propriedade personalizada se tornará o valor calculado da propriedade. background-color

Até o momento, as propriedades personalizadas só podem ser usadas como variáveis ​​para definir valores para propriedades CSS padrão. Você não pode, por exemplo, armazenar um nome de propriedade como uma variável e então reutilizá-lo. O seguinte CSS não funcionará:

```
:root {
    --top-border: border-top; /* Can't set a property as custom property's value */
    var(--top-border): 10px solid #bc84d8 /* Can't use a variable as a property */
}
```

Você também não pode armazenar um par propriedade-valor como uma variável e reutilizá-lo. O exemplo a seguir também é inválido:

```
:root {
   --text-color: 'color: orange'; /* Invalid property value */
}
body {
  var(--text-color); /* Invalid use of a property */
}
```

Por último, você também não pode concatenar uma variável como parte de uma string de valor:

```
:root {
    --base-font-size: 10;
}
body {
    font: var(--base-font-size)px / 1.25 sans-serif; /* Invalid CSS syntax. */
}
```

As propriedades personalizadas foram projetadas para serem usadas como propriedades que são analisadas de acordo com a especificação CSS. Caso a especificação de extensões CSS seja adotada por fornecedores de navegadores, poderíamos algum dia usar propriedades personalizadas para criar grupos de seletores personalizados ou at-rules personalizados. Por enquanto, no entanto, estamos limitados a usá-los como variáveis ​​para definir valores de propriedade padrão.'

## Valor Substituto

A função **var()** realmente aceita até dois argumentos. O primeiro argumento deve ser um nome de propriedade customizada. O segundo argumento é opcional, mas deve ser um valor de declaração. Este valor de declaração funciona como uma espécie de valor de fallback se o valor da propriedade customizada não tiver sido definido.

Vamos pegar o seguinte CSS:

```
.btn__call-to-action {
    background: var(--accent-color, salmon);
}
```

Se -**\-accent-color** for definido - digamos que seu valor seja **#f30-**, a cor de preenchimento de qualquer caminho com um atributo de classe **.btn\_\_call-to-action** terá um preenchimento vermelho-laranja. Se não estiver definido, o preenchimento será salmão.

Os valores da declaração também podem ser aninhados. Em outras palavras, você pode usar uma variável como valor substituto para a função **var**:

```
body {
    background-color: var(--books-bg, var(--arts-bg));
}
```

No CSS acima, se -**\-books-bg** definido, a cor de fundo será configurada com o valor da propriedade **\--books-bg**. Caso contrário, a cor de fundo será, em vez disso, qualquer valor atribuído --arts-bg. Se nenhum deles for definido, a cor de fundo será o valor inicial da propriedade - neste caso transparent.

Algo semelhante acontece quando uma propriedade customizada recebe um valor inválido para a propriedade com a qual é usada. Considere o seguinte CSS:

```
:root {
    --footer-link-hover: #0cg;
}
a:link {
     color: blue;
}
a:hover {
    color: red;
}
footer a:hover {
    color: var(--footer-link-hover);
}
```

Neste caso, o valor do --footer-link-hoverimóvel não é uma cor válida. No Microsoft Edge, a cor do estado de foco para links de rodapé será herdada do a:hoverseletor. Na maioria dos outros navegadores, a cor do estado de foco será herdada da cor do texto do bodyelemento.

## Propriedades Personalizadas

As propriedades personalizadas também obedecem às regras da cascata. Seus valores podem ser substituídos por regras subsequentes:

```
:root {
    --text-color: #190736; /* navy */
}
body {
   --text-color: #333;  /* Dark gray */
}
body {
  color: var(--text-color);
}
```

No exemplo acima, nosso corpo de texto seria cinza escuro. Também podemos redefinir os valores por seletor. Vamos adicionar mais algumas regras a este CSS:

```
:root {
    --text-color: #190736; /* navy */
}
body {
   --text-color: #333;  /* Dark gray */
}
p {
  --text-color: #f60; /* Orange */
}
body {
  color: var(--text-color);
}
p {
  color: var(--text-color)
}
```

Nesse caso, qualquer texto envolto a tags **<p>** será da cor laranja. Mas o texto dentro da **<div>** ou em outros elementos ainda seria cinza escuro.

Também é possível definir o valor de uma propriedade personalizada usando o atributo **style** - por exemplo, **style="--brand-color: #9a09af"**\- que pode ser útil em uma arquitetura de front-end baseada em componente.

## Recomendados

---
title: "Especificidade CSS - 5 coisas que você deve saber"
date: "2020-02-15"
description: Especificidade CSS é um tipo de “poder de escolha”, que ajuda os navegadores a decidir qual valor da propriedade CSS terá precedência e será aplicado aos elementos. Geralmente, a especificidade é o culpado por você bater cabeça quando pensa que o valor das propriedades CSS deve se aplicar a um elemento, mas não. A razão é que em algum lugar você esqueceu a Especificidade CSS.
---

**Especificidade CSS** é um tipo de “poder de escolha”, que ajuda os navegadores a decidir qual valor da propriedade CSS terá precedência e será aplicado aos elementos. Geralmente, a especificidade é o culpado por você bater cabeça quando pensa que o valor das propriedades CSS deve se aplicar a um elemento, mas não. A razão é que em algum lugar você esqueceu a Especificidade CSS.

A especificidade do CSS geralmente é negligenciada e recebe menos importância pelos desenvolvedores, mas se não for levada a serio, pode ser o pior pesadelo para a depuração do CSS .

## 1 - Id é maior que classe

Bem, todos sabemos que o ID pode ser usado uma vez em uma estrutura de documento. No entanto, o ID em CSS é um exército de um homem que pode derrotar 1000 classes. Quando você tem ID (s) no seu seletor, o número de classes se torna irrelevante.

```
<p id="idTeste" class="barra1 barra 2 barra3 barra4">Um ID contra quatro classes</p>
 
#idTeste{
  color: red;
}
.barra1.barra2.barra3.barra4 {
  color: steelblue;
}
```

Resultado: A cor do parágrafo é "red" (vermelho).

Embora tenhamos quatro classes em um parágrafo, mas um único ID o precedeu. O navegador não respeitará a posição do seletor, seja ela mais recente ou em algum lugar entre as linhas superiores quando for ID.

## 2 - Quem será o vencedor?

E se dois seletores se aplicarem ao mesmo elemento? Vamos dar um exemplo e depois prosseguir.

```
<p class="barra1 barra2 barra3 barr4">Temos quatro classess</p>
 
.barra1.barra2.barra3.barr4 {
  color: green;
}
 
p.barra3.barra4 {
    color: #2e8dcd;
}
```

A cor do parágrafo é "green" (Verde)

O vencedor é aquele com especificidade sempre maior. Neste código, a especificidade do primeiro seletor é 0-4-0, enquanto a última regra tem especificidade 0-2-1. Não se preocupe com esse valor de especificidade; já já explicou com mais detalhes. Neste ponto, lembre-se de que a esquerda está sempre certa.

Vamos verificar a primeira posição esquerda, ambos têm 0s. Como a primeira posição esquerda é igual, vamos comparar a próxima posição. Aqui, são 4 e 0. Claramente 4 é maior que 2. Então, 0-4-0 é o vencedor. Portanto, o parágrafo é da cor 'green'.

## 3 - CSS Inline - especificidade CSS

### Já bateu muito cabeça com CSS?

Recomendo você assistir o vídeo do Leonardo, ele desenvolveu um método incrível, onde você sai do ZERO a um programador full stack em 8 semanas, no vídeo ele conta também sua jornada como desenvolvedor full stack e o melhor, ele pode lhe ajuda ! E só clicar no botão VER VÍDEO.

[VER VÍDEO](/programador-fullstack-8-semanas)

Se você gosta de Guerra nas Estrelas, entenderá melhor. CSS inline tem mais poder do que IDs, classes, atributos e pseudo classes etc. É sempre aconselhável não misturar CSS inline com CSS baseado em seletor, a menos que você queira substituir regras de CSS ou casos específicos que incluem o desenvolvimento de plug-ins, widgets etc.

## 4 - O poderoso !important

Sempre que você anexar um valor com o !important, esse seletor será automaticamente declarado como de máxima prioridade em seu navegador. Para provar isso, vamos usar o mesmo código do primeiro exemplo com uma pequena alteração.

```
<p id="idTeste" class="barra1 barra2 barra3 barra4">Um ID contra quatro classes</p>
 
#idTeste{
  color: red;
}
.barra1.barra2.barra3.barra4 {
  color: steelblue !important; /*Added !important value*/
}
```

No primeiro código, a cor do parágrafo era 'red', mas depois de anexar !important value, agora o parágrafo é de cor 'steelblue' (azul metálico)

## 5 - Calculo da Especificidade

![especificidade CSS](/uploads/2020/02/CSS-Especificidade-1024x617.jpg)

Figura 1: CSS Especificiidade

![especificidade CSS](/uploads/2020/02/Tabela-de-especificidade.jpg)

Figura 2: CSS Especificidade

### Já bateu muito cabeça com CSS?

Recomendo você assistir o vídeo do Leonardo, ele desenvolveu um método incrível, onde você sai do ZERO a um programador full stack em 8 semanas, no vídeo ele conta também sua jornada como desenvolvedor full stack e o melhor, ele pode lhe ajuda ! E só clicar no botão VER VÍDEO.

[VER VÍDEO](/programador-fullstack-8-semanas)

Para calcular a especificidade do CSS, primeiro escolhemos o seletor e depois calculamos quantas Ids e classes (incluindo pseudo-classes e atributo) e vários elementos existem. Depois de conhecê-los, escrevemos na ordem: abc

Nós os comparamos movendo da esquerda para a direita. Assim que encontramos um ponto (a / b / c) maior que o outro, paramos por aí. Assim sabemos quem se tornou o vencedor com mais poderes, ou seja, com maior ordem de precedência.

Com relação à tabela acima, o vencedor é o segundo seletor, ie p#idTeste. O motivo é que o ponto 'a' p#idTeste é maior que qualquer outro seletor a.

## Conclusão

Espero que este pequeno artigo tenha lhe dado uma ideia sobre a especificidade do CSS e por que é tão importante considerar isso. Se você quiser se livrar dos problemas da Especificidade CSS. Caso tenha esquecido algo deixa nos comentários, deixa seu like caso esse artigo tenha lhe ajudado e compartilha com seus colegas.

Artigo Recomendado: [Saiba tudo sobre CSS Gri](/css-grid-tudo-que-voce-nao-aprendeu-parte-1/)d

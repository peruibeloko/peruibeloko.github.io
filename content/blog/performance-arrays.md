---
summary: Uma análise sobre a performance dos métodos do Array no JS e alternativas
date: 2023-11-13
draft: true
---

# Listas performáticas usando canos e transdutores

Não se assuste com o título, ainda não enlouqueci. Depois de matutar bastante sobre o assunto, achei que valeria a pena tornar público minhas "descobertas" sobre a performance de diferentes maneiras de manipular listas no JavaScript.

Enquanto escrevia o post me dei conta de alguns buracos na minha metodologia, o que me levou a revisar várias coisas, incluindo (obviamente) os resultados. Se alguma coisa estiver errada, sinta-se a vontade para abrir uma issue no GitHub.

## O cenário

Começamos nossa jornada com um fato muito útil sobre vários métodos do protótipo Array do JavaScript: Eles retornam um novo array, o que nos permite encadear operações

```js
const arr = [1,2,3];

const result = arr
  .map(x => x * 3) // [3, 6, 9]
  .filter(x => x % 2 !== 0) // [3, 9]
  .reduce((acc, cur) => acc + cur); // 12
```

Por que eu considero isso útil? Porque é uma construção que eu uso muito frequentemente.

Quando me deparo com um problema normalmente penso primeiro sobre quais informações são relevantes para sua solução, e depois sobre qual sua melhor disposição, e isso costuma envolver Estruturas de Dados, Algoritmos e Tipagem[^1].

[^1]: TypeScript é fenomenal, mas isso é tópico pra outro dia

Mas esse não é o motivo desse post, o que vou abordar hoje é a **performance** dessas operações encadeadas. Importante lembrar que, por bem ou por mal, a maior parte do que eu faço hoje em dia está inserido na web e não necessariamente na parte que lida com quantidades massivas de dados. Isso torna a performance dessas operações não tão relevante, mas não totalmente obsoleta. Estamos falando de no máximo centenas de itens em uma lista no pior dos casos, não alguns milhões!

Então a menos que você esteja fazendo algo de uma forma muito “inocente”, ou lidando com quantidades absurdas de informações direto no frontend, performance não deve ser um problema. Mas como todo bom programador hobbista, meu trabalho é resolver problemas que eu mesmo crio!

## Não tem almoço de graça: O custo da pureza

Não é segredo que funções puras são mais fáceis de depurar e racionalizar em uma sequencia complexa de operações do que sua contraparte impura[^2], mas isso normalmente vem com um custo atrelado. No caso dessas operações encadeadas, cada novo método na cadeia **aumenta linearmente o tempo de processamento**, já que cada método precisa passar por todos os `n` elementos da lista.

[^2]: [Citação necessária](https://xkcd.com/285/)

Claro que esse número pode mudar dependendo de filtros ou reduções aplicadas ao longo do processamento, mas estamos falando dos piores casos aqui (*Big-O*, por assim dizer). Importante notar que parece intuitivo assumir que o uso de memória também aumenta linearmente — cada método cria uma nova cópia do array — !verificar isso em novo teste!

Será então que está tudo perdido para os cientistas de dados que não se renderam ao Pandas?

## Um gole da poção, um novo encanador

Acredito que se tornar programador no Brasil e não ouvir falar do Elixir ou Lua ao menos uma vez em sua carreira seja praticamente impossível. E eu, como todo bom programador brasileiro, não fui diferente.

Eu já havia ouvido falar de Pipes em outros contextos, mas foi só quando eu parei durante algumas semanas[^3] para me acostumar com os fundamentos da linguagem e a sintaxe do Elixir que eu me dei conta do quão *foda* pipes podem ser!

[^3]: Linguagens novas e TDAH não se misturam, ok?

E eu, como um bom artista, não pude me esquecer dos ensinamentos do Austin Kleon. Roubei a ideia do pipe do Elixir e transformei ela em algo novo:

> E se tivesse um pipe que fosse a composição de diversas operações aplicadas sequencialmente em uma \*única\* passagem pelo array?

Estava feito o estrago. Alguns dias depois saí da minha caverna com alguns neurônios a menos e algumas linhas a mais.

### Primeiros passos com Engenharia Hidráulica
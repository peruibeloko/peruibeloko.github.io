---
summary: Uma análise sobre a performance de operações com array no JS e como melhorar
date: 2023-11-13
draft: true
---

# Analisando a performance de um encanamento

Há um tempo atrás eu encasquetei com a performance de operações encadeadas num array. Pra refrescar a memória, estou falando de operações nesse formato:

```js
const arr = [1,2,3];

const result = arr
  .map(x => x * 3)
  .filter(x => x % 2 !== 0)
  .reduce((acc, cur) => acc + cur);
```
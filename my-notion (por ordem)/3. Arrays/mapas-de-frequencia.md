## Mapas de frequência

é um técnica muito utilizada em strings que é basicamente inicializar um hashmap e contar quantas vezes apareceu X coisas nesse hashmap

```python
{
	"a" -> 4
	"b" -> 2
}
```

esse tipo de mapa de frequência funciona para vários tipos de leetcode

anagramas

palíndromos

compressão

ctypto

sliding window

```python
def frequency_map(s: str) -> dict:
	freq = {}
	for ch in s:
		if ch in freq:
			freq[ch] += 1
		else:
			freq[ch] = 1
	return freq

freq = frequency_map("VAI TOMAR NO CU")
print(freq)
		
"ABCA"

{"A": 2, "B": 1, "C":1 }
```

esse algoritmo na prática percorre uma string e conta quantas vezes um elemento apareceu (assim como no exemplo do “ABCA”) 

## Resumão

mapa de frequência é um algoritmo que nos permite saber quantos elementos uma string possui

```tsx
// Em typescript ficaria assim:

function frequencyMap(s: string): { [key: string]: number } {
  const freq: { [key: string]: number } = {};

  for (const ch of s) {
    if (freq[ch]) {
      freq[ch] += 1;
    } else {
      freq[ch] = 1;
    }
  }

  return freq;
}

const result = frequencyMap("VAI TOMAR NO CU");
console.log(result);
```

https://playcode.io/typescript-template
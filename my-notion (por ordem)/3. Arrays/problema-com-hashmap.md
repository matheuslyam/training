## Problema com hashmap

**Hashmap** é uma ferramenta extremamente versátil para resolver problema em leetcode.

As vezes, o próprio hashmap é a solução, mas as vezes ele é uma ferramenta fundamental para se resolver o problema ou as vezes ele é só uma otimização para um problema.

```tsx
export const s = "cubomagico"
function firstUniqChar(s: string): number {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (map.get(char) === 1) {
            return i
        }
    }
    return -1
} console.log(firstUniqChar(s))
```
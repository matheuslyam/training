export const n = 19
function nextNumber(n: number): number {

    const explited = n.toString().split("")

    const strNum = explited.map(Number)

    const squared = strNum.map(num => num ** 2)

    const final = squared.reduce((a, b) => a + b)
    return final
}

function isHappy(n: number): {
    happy: boolean
    history: Map<number, number>
} {
    const history = new Map<number, number> ()

    while (n !== 1) {
        const next = nextNumber(n)

        if (history.has(n)) {
            return {
                happy: false,
                history
            }
        }

        history.set(n, next)
        console.log(history)

        n = next

    }

    return {
        happy: true,
        history
    }
}

const result = isHappy(19)

console.log(result)
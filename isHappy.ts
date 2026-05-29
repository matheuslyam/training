/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

// function isHappy(n: number): boolean {
    
// };


const n = 19
function nextNumber(n: number): number {

    const explited = n.toString().split("")

    const strNum = explited.map(Number)

    const squared = strNum.map(num => num ** 2)

    const final = squared.reduce((a, b) => a + b)
    return final

} console.log(nextNumber(n))

function isHappy(n: number): boolean {

    const seen = new Set<number> ()

    while (n !== 1) {
        if (seen.has(n)) {
            return false
        } else {
            seen.add(n)           
        }

        n = nextNumber(n)

    } return true

} console.log(`O número é feliz?: ${isHappy(n)}`)

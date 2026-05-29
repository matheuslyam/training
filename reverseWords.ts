export const arr: string = "Let's take LeetCode contest"

function reverseSingleWords(arr: string) {

    const charArr = arr.split("")

    let l = 0
    let r = charArr.length - 1
    while (l < r) {
        const temp = charArr[l]
        charArr[l] = charArr[r]
        charArr[r] = temp
        l++
        r--
    } return charArr.join("")
}

console.log(reverseSingleWords(arr))

function reverseWords(arr: string): string {
    
    const charArr = arr.split(" ")

    const reversedWords = charArr.map(w => reverseSingleWords(w))

    return reversedWords.join(" ")
}

console.log(reverseWords(arr))



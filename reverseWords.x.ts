const s: string = "Let's take LeetCode contest"

function reverseWords(s: string): string {
    const words = s.split(" ")

    const reversedWords = words.map(word => {
        return word.split("").reverse().join("")
    })
    return reversedWords.join(" ")
} console.log(reverseWords(s))
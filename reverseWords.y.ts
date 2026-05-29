export const s: string = "  hello world  "


function reverseWords(s: string): string {
    return s.split(" ").filter(word => word !== "").reverse().join(" ")
} console.log(reverseWords(s))
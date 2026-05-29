const nums: number[] = [1, 2, 2, 3, 1, 4]

function maxFrequencyElements(nums: number[]) {
    const frequency: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (frequency[num]) {
            frequency[num]++
        } else {
            frequency[num] = 1
        }
    }
    let maxFrequency = 0
    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key]
        }
    }
    let sum = 0
    for (const key in frequency) {
        if (frequency[key] == maxFrequency) {
            sum += frequency[key]
        }
    } return [frequency, maxFrequency, sum]
}
console.log(maxFrequencyElements(nums))
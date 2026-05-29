```tsx
function subarraySum(nums: number[], k: number): number {
    let count = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum === k) count++
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) count++
        }
    }
    return count
} console.log(subarraySum([1, 1, 1], 2))
```
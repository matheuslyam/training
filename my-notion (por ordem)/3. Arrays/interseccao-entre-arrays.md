```tsx
const nums1 = [1, 2, 2, 1, 3]
const nums2 = [2, 2]

function intersection(nums1: number[], nums2: number[]): number[] {
    return [...new Set(nums1)].filter(x => new Set(nums2).has(x))
}
```
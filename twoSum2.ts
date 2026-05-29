const arr: number[] = [2, 7, 11, 15]
const tar = 9

function twoSum(arr: number[], tar: number) {
   const seen: { [key: number]: number } = {}
   for (let i = 0; i < arr.length; i++) {
      const current = arr[i]
      const complement = tar - current
      if (seen[complement] !== undefined) {
         return [seen[complement], i]
      } else {
         seen[current] = i
      }
   }
} console.log(twoSum(arr, tar))

export default twoSum
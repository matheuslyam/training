const arr: number[] = [2, 7, 11, 15, 10]
const tar = 12

function twoSum(arr: number[], tar: number) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == tar) {
                return [i, j]
            }
        }
    }
} console.log(twoSum(arr, tar))
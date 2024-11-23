function quick(arr) {

    if(arr.length < 2) {
        return arr
    }

    let x = arr[arr.length-1];
    let left = []
    let right = []

    for(let i=0; i<arr.length-1; i++) {

        if(arr[i] < x) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quick(left), x, ...quick(right)]
}
const arr = [1,6,9,2,7,3,8]

console.log(quick(arr));
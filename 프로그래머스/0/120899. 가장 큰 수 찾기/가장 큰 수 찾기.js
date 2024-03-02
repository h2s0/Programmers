function solution(array) {
    let big = Math.max(...array)
    return [big, array.indexOf(big)]
}
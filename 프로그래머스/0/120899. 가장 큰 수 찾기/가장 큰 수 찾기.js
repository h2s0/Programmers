function solution(array) {
    let big = Math.max(...array)
    return [big, array.indexOf(big)]
    
    // 짧게하기
    // return [Math.max(...array), array.indexOf(Math.max(...array))]
}
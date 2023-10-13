function solution(array, height) {
    let tall = array.filter((item) => item > height)
    return tall.length;
}
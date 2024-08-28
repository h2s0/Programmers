function solution(n) {
    return [...(n.toString())].length === 1 ? n : [...(n.toString())].reduce((acc, cur) => acc*1 + cur*1);
}
function solution(n) {
    console.log([...n])
    return [...toString(n)].reduce((acc, cur) => acc + cur);
}
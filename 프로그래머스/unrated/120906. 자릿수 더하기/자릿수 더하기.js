function solution(n) {
    let str = n.toString();
    let numbers = [...str];
    let answer = 0;
    numbers.forEach((number) => answer += Number(number));
    return answer;
}
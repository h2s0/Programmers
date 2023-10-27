function solution(my_string, n) {
    let str = [...my_string];
    return answer = str.map((item) => item.repeat(n)).join("");
}
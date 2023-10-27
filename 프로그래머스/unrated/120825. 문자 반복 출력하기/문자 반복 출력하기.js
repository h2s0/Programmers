function solution(my_string, n) {
    let str = [...my_string];
    let str2 = [];
    str.forEach((item) => str2.push(item.repeat(n)));
    return answer = str2.join("");
}
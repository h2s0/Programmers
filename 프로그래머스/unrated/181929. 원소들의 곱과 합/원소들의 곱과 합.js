function solution(num_list) {
    let multi = 1;
    let plus = 0;
    num_list.forEach((num) => {
        multi *= num
        plus += num
    })
    let plus2 = plus * plus
    return multi < plus2 ? 1 : 0
}
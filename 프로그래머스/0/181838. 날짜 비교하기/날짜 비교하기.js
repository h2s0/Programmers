function solution(date1, date2) {
    const date11 = new Date(date1);
    const date22 = new Date(date2);
    return date11 < date22 ? 1 : 0
}
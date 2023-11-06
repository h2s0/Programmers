function solution(number, n, m) {
    if ( (number / n) % 1 === 0 && (number / m) % 1 === 0) {
        return 1;
    } else {
        return 0;
    }
}
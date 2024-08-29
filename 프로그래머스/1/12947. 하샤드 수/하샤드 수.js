function solution(x) {
    return x % [...x.toString()].reduce((acc, cur) => cur*1 + acc*1) !== 0 ? false : true;
}
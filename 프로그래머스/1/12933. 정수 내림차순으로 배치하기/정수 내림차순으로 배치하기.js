function solution(n) {
    let numArr = [...n.toString()].sort(function (a, b) {
      return b - a;
    });
    return numArr.join('') * 1;
}
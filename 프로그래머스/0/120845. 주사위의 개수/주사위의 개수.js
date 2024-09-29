function solution(box, n) {
    let arr = [];
    box.map((i) => {
        arr.push(Math.floor(i / n));
    })
    return arr.reduce((acc, cur) => acc * cur)
}
function solution(box, n) {
    // let arr = [];
    // box.map((i) => {
    //     arr.push(Math.floor(i / n));
    // })
    // return arr.reduce((acc, cur) => acc * cur)
    
    // 구조분해할당
    let [width, length, height] = box;
    return Math.floor(width/n) * Math.floor(length/n) * Math.floor(height/n);
}
function solution(arr) {
    var X = [];
    arr.map((a) => {
        for( let i = 0; i < a; i++ ) {
            X.push(a)
        }
    })
    return X;
}
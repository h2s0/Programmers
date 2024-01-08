function solution(a, b) {
    let ab = Number(String(a)+String(b));
    let eab = 2 * a * b;
    if ( ab > eab ) {
        return ab
    } else if ( ab == eab ) {
        ab
    } else {
        return eab
    }
}
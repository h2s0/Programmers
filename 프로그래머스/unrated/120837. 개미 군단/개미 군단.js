function solution(hp) {
    let ant = 0;
    ant += Math.floor(hp / 5);
    if ( hp % 5 == 4 ) {
        ant += 2
    } else if ( hp % 5 == 3 ) {
        ant += 1
    } else {
        ant += hp % 5
    }
    return ant
}
function solution(n_str) {
    while( n_str[0] == 0 ) {
        n_str = n_str.replace(n_str[0], '')
    }
    return n_str
}
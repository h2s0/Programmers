function solution(n_str) {
    for ( let i = 0; i < n_str; i++ ) {
        while( n_str[i] == 0 ) {
            n_str = n_str.replace(n_str[i], '')
        }
        break;
    }
    return n_str
}
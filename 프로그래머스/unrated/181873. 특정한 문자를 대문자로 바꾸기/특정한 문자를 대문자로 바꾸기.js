function solution(my_string, alp) {
    for ( let i = 0; i < my_string.length; i++ ) {
        if ( my_string[i] === alp ) {
            my_string = my_string.replace(my_string[i],my_string[i].toUpperCase());
        }
    }
    return my_string
}
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// num_list_len은 배열 num_list의 길이입니다.
int solution(int num_list[], size_t num_list_len) {
    int allOdd = 0;
    int allEven = 0;
    for ( int i = 0; i < num_list_len; i++ ) {
        if ( i % 2 == 0 ) {
            allEven += num_list[i];
        } else {
            allOdd += num_list[i];
        }
    }
    return allOdd > allEven ? allOdd : allEven;
}
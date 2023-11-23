function solution(arr1, arr2) {
    let answer = 0;
    // 배열의 길이가 같을 때
    if ( arr1.length === arr2.length ) {
        let arr1Total = 0;
        let arr2Total = 0;
        arr1.forEach((num)=>arr1Total+=num)
        arr2.forEach((num)=>arr2Total+=num)
        // arr1의 총 합이 크면 1, arr2의 총 합이 크면 -1
        if (arr1Total > arr2Total){
            answer = 1
        } else if (arr1Total < arr2Total) {
            answer = -1
        }
    // 배열의 길이가 다를 때
    } else {
        // arr1 이 길면 1, arr2 가 길면 -1 출력
        if(arr1.length > arr2.length){
            answer = 1
        } else if (arr1.length < arr2.length){
            answer = -1
        }
    }
    return answer
}
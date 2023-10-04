function solution(n, k) {
    let price = 0;
    let discount = 0;
    price = n * 12000 + k * 2000;
    if ( n >= 10 && k > 1 ) {
        discount = Math.floor(n/10) * 2000;
        price = price - discount;
    }
    return price;
}
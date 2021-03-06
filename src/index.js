module.exports = function reverse (n) {
    let reverseN = 0;
        if (n < 0) {
            n = n * (-1);
            }
        while (n % 10 === 0) {
            n = n / 10;
            }
            reverseN = n.toString().split('').reverse().join('');
    return reverseN;
}
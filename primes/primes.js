function generatePrimes(numberOfPrimes) {
    var arr = [2], num = 2, total = 0;
    while (arr.length < numberOfPrimes) {
        if ( isPrime(++num) ) arr.push(num);
    }
    return arr;
}

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if ( num % i < 1 ) return false;
    }
    return true;
}

onmessage = function (event) {
    var numberOfPrimes = event.data;
    var arr = generatePrimes(numberOfPrimes);
    postMessage(arr);
};
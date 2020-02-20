module.exports = function reverse(n) {
    n = String(n);
    return +(Math.abs(n)).split('').reverse().join());
}


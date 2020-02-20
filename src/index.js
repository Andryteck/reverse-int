module.exports = function reverse(n) {
    n = String(n);
    return n.split('').reverse().join();
}


function sum(num) {
    let sum = num;

    function add(n) {
        sum += n
        return add
    }
    add.toString = () => {
        return sum;
    }
    return add
}

console.log(add(1)(6)(-3))
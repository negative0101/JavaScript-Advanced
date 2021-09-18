function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((el, orderNumber) => {
        console.log(`${orderNumber + 1}.${el}`);
        orderNumber++
    })
}
solve(["John", "Bob", "Christina", "Ema", 'em'])
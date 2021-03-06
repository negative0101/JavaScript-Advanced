function createSortedList() {
    let arr = [];
    return {
        add(num) {
            arr.push(num);
            this.size += 1;
            arr.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError('NO!')
            }
            arr.splice(index, 1);
            this.size -= 1;
        },
        get(index) {
            if (index < 0 || index > arr.length) {
                throw new RangeError('NO!')
            }
            return arr[index]

        },
        size: 0
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
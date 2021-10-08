class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if (length > this.innerLength) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length
        }
    }
    toString() {
        if (this.innerLength === 0) {
            return '...'
        } else if (this.innerString.length >= this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`
        } else {
            return this.innerString
        }
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.toString())

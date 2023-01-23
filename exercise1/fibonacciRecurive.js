function fibs(number) {
    let result = [];
    for (let i = 0; i < number; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}

console.log(fibs(10));
function fibsRec(number) {
    if (number < 1) {
        throw new Error("Can't compute a series of length less than 1");
    } else if (number === 1) {
        return [0];
    } else if (number === 2) {
        return [0, 1];
    }
    else {
        var result = fibsRec(number - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
        return result;
    }
};

console.log(fibsRec(10));
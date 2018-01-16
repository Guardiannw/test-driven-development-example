
function fib(nth) {
    if(nth < 1)
        throw new Error('nth must be greater than 0');
    if(!Number.isInteger(nth))
        throw new Error('nth must be an integer');

    if(nth === 1)
        return 0;
    if(nth === 2)
        return 1;

    let prevPrevNum = 0;
    let prevNum = 1;

    for(let i = 2; i < nth; i++) {
        const newNum = prevPrevNum + prevNum;
        prevPrevNum = prevNum;
        prevNum = newNum;
    }

    return prevNum;
}

module.exports = {
    fib
};
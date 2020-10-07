/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;

    while(num != 0) {
        let isEven = num % 2 === 0;

        if(isEven) num /= 2;
        else num--;

        count ++;
    }

    return count;
};

console.log(numberOfSteps(14));

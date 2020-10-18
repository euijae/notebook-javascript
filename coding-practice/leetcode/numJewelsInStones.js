/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
    let set = new Set();

    for(let j of J) set.add(j)

    let count = 0;

    for(let s of S) if(set.has(s)) count ++;

    return count;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))
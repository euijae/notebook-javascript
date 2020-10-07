/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * @description
 *    Input: s = "aiohn", indices = [3,1,4,2,0]
 *    Output: "nihao"
 */
var restoreString = function(s, indices) {
    let result = [];

    indices.forEach((value, index) => {
        result[value] = s[index];
    });

    return result.join("");
};

console.log(restoreString("aiohn", [3,1,4,2,0]));

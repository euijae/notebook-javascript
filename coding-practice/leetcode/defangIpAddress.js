/**
 * @param {string} address
 * @return {string}
 * @description A defanged IP address replaces every period "." with "[.]".
 */
module.exports = function(address) {
    let result = "";

    for(let i = 0; i < address.length; i++) {
        const char = address[i];
        result = result.concat(char === '.' ? '[.]' : char);
    }

    return result; // or address.split(".").join("[.]");
};
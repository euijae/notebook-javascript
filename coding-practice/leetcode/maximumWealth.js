/**
 * Input: accounts = [[1,5],[7,3],[3,5]]
 * Output: 10
 * Explanation:
 *  1st customer has wealth = 6
 *  2nd customer has wealth = 10
 *  3rd customer has wealth = 8
 * The 2nd customer is the richest with a wealth of 10.
 *
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const eachWealth = accounts.map(account => {
        return account.reduce((acc, item) => acc + item, 0);
    });

    return Math.max(...eachWealth);
};

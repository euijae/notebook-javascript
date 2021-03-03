/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
 *        ruleKey = "color", 
 *        ruleValue = "silver"
 * Output: 1
 * Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    return items.reduce((acc, item) => {
        const [type, color, name] = item;
        const isFound = ((ruleKey === 'type' && ruleValue === type) ||
            (ruleKey === 'color' && ruleValue === color) ||
            (ruleKey === 'name' && ruleValue === name));
        
        return acc + (isFound ? 1 : 0);
    }, 0);

};

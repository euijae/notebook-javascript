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
    let res = [];
    
    items.forEach(item => {
        const [type, color, name] = item;
        
        if(ruleKey === 'type') {
            if(ruleValue === type) {
                res.push(item);
            }
        } else if(ruleKey === 'color') {
            if(ruleValue === color) {
                res.push(item);
            }
        } else if(ruleKey === 'name') {
            if(ruleValue === name) {
                res.push(item);
            }
        }
    });
    
    return res.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {

  let count = 0;
  let candidate = null;

  nums.forEach(x => {
    if(count === 0) {
    candidate = x
  }
  count += (x === candidate) ? 1 : -1;
});

  return candidate;
};

module.exports= {
  majorityElement:majorityElement
}

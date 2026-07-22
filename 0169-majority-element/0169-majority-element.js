/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//count the frequency of each element
let map=new Map()
for(let num of nums)
{
    map.set(num,(map.get(num)||0)+1)
}

//find the major element whose frequency is higher
for(let [key,val] of map)
{
  if(val>Math.floor(nums.length/2))
  {
    return key
  }
}

};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //find the frequency of each numbers from the array
    let map=new Map();
    for(let num of nums)
    {
        map.set(num,(map.get(num)||0)+1);
    }

   //find the duplicate if found then return true
   for(let [key,val] of map)
   {
    if(val>1)
    {
        return true;
    }
   }
   return false;//if there is no duplicate

};//time comp=O(n) space comp=O(n)
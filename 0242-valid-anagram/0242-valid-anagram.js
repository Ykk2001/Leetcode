/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //check the length of two string
    if(s.length!==t.length)
    {
        return false;
    }

    //calculate the frequency of each character from the two string
    let Smap=new Map();
    let Tmap=new Map();
    for(let ch of s)
    {
        Smap.set(ch,(Smap.get(ch)||0)+1)
    }
    for(let ch of t)
    {
        Tmap.set(ch,(Tmap.get(ch)||0)+1)
    }
    // console.log(Smap,Tmap)

    for(let ch of s)
    {
        if(Smap.get(ch)!=Tmap.get(ch))
        {
            return false
        }
    }
    return true;
};
module.exports = function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }

    let cache = {};
    for(let i of str1){
        if(cache[i]){
            cache+=1;
        }else {
            cache[i] = 1;
        }
    }

    for(let i = 0; i < str2.length; i++){
        if(cache[str1[i]]){
            cache[str1[i]] -= 1;
        } else {
            return false;
        }
    }
    return true;
}
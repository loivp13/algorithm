module.exports = function same(arr1, arr2){
    let cache = {}
    if(arr1.length !== arr2.length){
        return false;
    }
    arr1.forEach((e) => {
        if(cache[e**2]){
            cache+=1
        }else{
            cache[e**2] = 1;
        }
    })

    for(let i = 0; i < arr2.length; i++){
        if(cache[arr2[i]]){
            cache[arr2[i]]-=1;
        } else{
          return false;  
        } 
    }

    return true;


    
}
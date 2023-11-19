var canPlaceFlowers = function(flowerbed, n) {

    let newArr = [0, ...flowerbed, 0]
    for (let i=1; i<newArr.length; i++){
        if(newArr[i]===0 && newArr[i-1] === 0 && newArr[i+1]===0){
            newArr[i]=1; 
            n-=1;
        }
    }
    return n<=0 ? true : false
};
//https://leetcode.com/problems/can-place-flowers/ 


function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

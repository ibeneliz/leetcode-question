/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p1=0,p2=nums.length-1,cur=0;
    while(p1<p2 && cur < nums.length && cur <= p2){
        if(nums[cur] === 0 && cur !== p1){
            let temp = nums[cur];
            nums[cur]=nums[p1];
            nums[p1]=temp;
            p1++;
        }else if(nums[cur] === 2 && cur !== p2){
            let temp = nums[cur];
            nums[cur]=nums[p2];
            nums[p2]=temp;
            p2--;
        }else{
            cur++;
        }
    }
    console.log("nums=",nums);
    return nums;
};
sortColors([2,0,1])
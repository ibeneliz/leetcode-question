function combinationSum(candidates, target) {
    let result = [];
    function dfs(index,currentValue,arr){
        if(currentValue < 0){ return; }
        if(currentValue === 0){ result.push([...arr]); }

        for(let i=index; i<candidates.length; i++){
            arr.push(candidates[i]);
            dfs(i,currentValue-candidates[i],arr);
            arr.pop();
        }
    }

    dfs(0,target,[]);
    return result;
}

let nums =[3,4,5];
let target = 8;
combinationSum(nums,target);
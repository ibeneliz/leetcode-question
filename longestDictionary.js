function longestDictionary(arr, dic){
    let longDictArray =""; // apple | apply if(a-b) => longDictArray=b;
    for(let i=0;i<dic.length;i++){
        let start=0,end=0;
        while(start<=dic[i].length && end <= arr.length && dic[i].length !== start){
           if(dic[i][start] !== arr[end]){
               end++;
           } else if(dic[i][start] === arr[end]){
               start++;
               end++;
           }
        }
        if(start === dic[i].length){
            if(longDictArray.length < dic[i].length){
                    longDictArray = dic[i];
            }else if(longDictArray.length == dic[i].length){
                print("Compare " + longDictArray.localeCompare(dic[i]));
                if(longDictArray.localeCompare(dic[i]) > 0){
                    longDictArray = dic[i];
                }
            }
        }
    }
    return longDictArray;
}
const arr = "abpcpleay"; 
const dic = ["ale","apple","monkey","plea","appla"];

/* const arr = "abpcdplea"; 
const dic = ["d","b","c"]; */

print(longestDictionary(arr,dic));
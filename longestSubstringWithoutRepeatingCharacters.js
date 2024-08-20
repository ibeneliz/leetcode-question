var lengthOfLongestSubstring = function(str) {
    let s=0, e=0,longestString=0, longest=0;
    let letterMap = {};
        while(s <= e && e <=str.length-1){
            if(letterMap[str[e]] === undefined){
                letterMap[str[e]] = 1;
                longestString++;
                e++;
            }else{
                delete letterMap[str[s]];
                s++;
                longestString--;
            }
            
            if(longest < longestString) longest = longestString;
        }
    return longest;
};


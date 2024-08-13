function groupAnagrams(str){
    const hashmap = {};
    str.forEach(s => {
        const sortedWord = s.split('').sort().join('');
        if(!hashmap[sortedWord]){
            hashmap[sortedWord] = [];
        }
        hashmap[sortedWord].push(s);
    });
    return JSON.stringify(hashmap);
}
const str = ["eat","tea","tan","ate","nat","bat"]; 
print(groupAnagrams(str));
function allSubsequence (input, output, i){
    if (i >= input. length) {
        if (output.length === 0){
            console.log ("EMPTY");
        }
        console.log(output);
         return;
    }
    allSubsequence(input, output, i + 1);
    allSubsequence(input, output + input [i], i + 1);
}
allSubsequence("Goku","",0);
//ask for a string
process.stdout.write("Enter a word to check if its palindrome: ")
process.stdin.on("data", function(userInput){
    //save as variable
    let word = userInput.toString().trim();
    //divide the lenght by 2 and check if both sides are equal(reverse the 2nd half)
    let half = Math.round(word.length / 2);
    let letters = word.length-1;
    //check both sides if the letters are equal
    let checker=0;
    for(i=0;i<half;i++){
        let charFront=word.charAt(i);
        let charBack=word.charAt(letters-i);
        if (charFront==charBack){
            checker++;
        };
    };
    //if yes print that it is, if no print that it isnt a palindrome
    if (checker==half){
        process.stdout.write("Word "+word+" is a palindrome")
    }else{
        process.stdout.write("Word "+word+" is NOT a palindrome")
    };
    process.exit();
});



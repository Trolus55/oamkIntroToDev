process.stdout.write("Enter a string: ");
process.stdin.on("data", function(userInput){
    let word = userInput.toString().trim();
    let len = word.length;
    let char;
    for (i=0;i<len;i++){
        if (i%2==0){
            char = word.charAt(i).toLowerCase();
        }else{
            char = word.charAt(i).toUpperCase();
        };
        process.stdout.write(char);
    };
    process.exit();
});
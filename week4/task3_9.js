process.stdout.write("Enter a string: ");
process.stdin.on("data", function(userInput){
    let word = userInput.toString().trim();
    let len = word.length;
    for (i=len;i>=0;i--){
        process.stdout.write(word.charAt(i));
    };
    process.exit();
});
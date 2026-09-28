//ask for string
process.stdout.write("Enter a string: ");
process.stdin.on("data", function(userInput){
    //pass string to variable
    //trim the string
    let str = userInput.toString().trim();
    //loop runing for the lenght of string
    for (i=0;i<str.length;i++){
        //use char at to iterate using the counter as index
        process.stdout.write(i+". character is "+str.charAt(i)+"\n");
    };
    process.exit();
});
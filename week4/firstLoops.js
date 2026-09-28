//ask name
process.stdout.write("Name:");
//read input
process.stdin.on("data", function( inputFromUser){
    let userInput = inputFromUser;
    let counter = 0;
    //Repeat 5 times
    while (counter < 5){
        //Print out name
        process.stdout.write(userInput);
        counter++;
    };
    process.exit();
});
 
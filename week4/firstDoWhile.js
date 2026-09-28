//ask name
process.stdout.write("Name:");
//read input
process.stdin.on("data", function( inputFromUser){
    let userInput = inputFromUser;
    let counter = 0;
    //Repeat 5 times
    do {
        //Print out name
        process.stdout.write(userInput);
        counter++;
    } while (counter < 5);
    process.exit();
});
 
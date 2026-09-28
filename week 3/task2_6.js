//ask for number option and print out the options
process.stdout.write("Select options:\n 1-Print out hello\n 2-Print out current date and time\n 0-Exit\n");
//option selection logic
process.stdin.on("data", function(input){
    let a = Number(input);
    switch(a){
        case 1:
            process.stdout.write("Hello");
            process.exit()
            break;
        case 2:
            process.stdout.write(Date());
            process.exit()
            break;
        case 0:
            process.exit()
            break;
        default:
            process.stdout.write("Invalid input")
            process.exit()
            break;  
    };
});
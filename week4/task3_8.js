process.stdout.write("Enter size of triangle: ");
process.stdin.on("data", function(userInput){
    let size = userInput;
    for (i=0;i<size;i++){
        for(j=0;j<=i;j++){
            process.stdout.write("*");
        };
        process.stdout.write("\n");
    };
    process.exit();
});
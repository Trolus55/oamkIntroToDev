const util = require('node:util');
//ask for number
process.stdout.write("Enter a number: ");
process.stdin.on("data", function(userInput){
    //assign to a variable
    let multiplier = userInput.toString().trim();
    process.stdout.write("Multiplication table for: "+multiplier+"\n");
    //do the multipiction from 1 to 10 and save the output
    for(i=1;i<=10;i++){
        let output = i*multiplier;
        //print out the equation
        process.stdout.write(util.format('%s%s%s%s%s%s%s%s', '*', String(i).padStart(6," "), ' * ', String(multiplier), ' = ', String(output).padEnd(6," "),'*', '\n'));
    };
    process.exit();
});
    
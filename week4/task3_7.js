const util = require('node:util');

//do the multipiction from 1 to 10 and save the output
for(i=1;i<=10;i++){
    process.stdout.write("Multiplication table for: "+i+"\n");
    for(j=1;j<=10;j++){
    let output = j*i;
    //print out the equation
    process.stdout.write(util.format('%s%s%s%s%s%s%s%s', '*', String(j).padStart(6," "), ' * ', String(i), ' = ', String(output).padEnd(6," "),'*', '\n'));
    };
};

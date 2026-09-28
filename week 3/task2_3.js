//ask for number
process.stdout.write("Number to check if its odd or not: ");
process.stdin.on("data", function(number){
    let num = Number(number);
    if (num % 2 == 0){
        process.stdout.write(num+" is even.");
    }else{
        process.stdout.write(num+" is odd.");
    };
    process.exit();
});
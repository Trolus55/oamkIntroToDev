//ask for number
process.stdout.write("Provide 2 numbers separate with space to see wich is larger: ");
process.stdin.on("data", function(numbers){
    let [number1, number2] = String(numbers).split(" ").map(Number);
    console.log(number1);
    console.log(number2);
    if (number1 > number2){
        process.stdout.write(number1+" is the largest.");
    }else{
        process.stdout.write(number2+" is the largest.");
    };
    process.exit();
});
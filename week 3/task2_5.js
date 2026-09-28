process.stdout.write("Provide 3 numbers separate with space to see wich is larger: "); //ask for numbers
process.stdin.on("data", function(numbers){
    let [number1, number2, number3] = String(numbers).split(" ").map(Number);
    console.log(number1);
    console.log(number2);
    console.log(number3);
    //check the conditions for the sequence and print anwser
    if (number1 == number2 && number1 == number3){
        process.stdout.write("You entered three matching numbers\n");
    }else if (number1 !== number2 && number1 !== number3){
        process.stdout.write("You entered three different numbers\n");
    }else if(number1 == number2 && number1 !== number3){
       process.stdout.write("Third one doesn’t fit\n"); 
    }if(number1==2 || number2==2 || number3 ==3){
        process.stdout.write("You entered the magic number 2!");
    };
    process.exit();
});
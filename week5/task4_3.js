process.stdout.write("Enter numbers, entering 0 displays numbers.\n");
let array = new Array();
let counter = 0;
let sum = 0;

process.stdout.write(counter+" Enter a number: ");

process.stdin.on("data", function(usrInput){
    let number = Number(usrInput);
    if (!isNaN(number)){
        array.push(number);
        counter++;
        process.stdout.write(counter+" Enter a number: ");
    }else{
        for (i=0; i < array.length; i++){
            sum = sum + array[i];
        };
        let avg = sum / array.length;
        process.stdout.write("The average is: "+avg);
        process.exit();
    };
});
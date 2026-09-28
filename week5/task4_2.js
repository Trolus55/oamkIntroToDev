process.stdout.write("Enter numbers, entering 0 displays numbers.\n");
let array = new Array();
let counter = 0;

process.stdout.write(counter+" Enter a number: ");

process.stdin.on("data", function(usrInput){
    let number = usrInput.toString().trim();
    if (number != 0){
        array.push(number);
        counter++;
        process.stdout.write(counter+" Enter a number: ");
    }else{
        array.push(number);
        process.stdout.write("Reverse order: ");
        for (i=array.length; i > 0; i--){
            process.stdout.write(array[i-1]+" ");
        };
        process.exit();
    };
});
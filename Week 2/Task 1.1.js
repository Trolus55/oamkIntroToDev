//ask user for number
process.stdout.write("Type in a number to guess:");
process.stdin.on("data", function(input)
{
    let givenInput = input;
    process.stdout.write("You typed in "+ givenInput);
    let secret = Number(givenInput) + 1;
    process.stdout.write("Correct guess was: " + secret + "\n");
    process.stdout.write("You lost and I won");
    process.exit();
});

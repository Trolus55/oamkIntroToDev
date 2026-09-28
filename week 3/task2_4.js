//ask yes or no
process.stdout.write("Are you over 18?: ");
process.stdin.on("data", function(anwser){
    let ans=anwser.toString().trim();
    //check yes or no and handle invalid input
    if (ans==="yes"){
        process.stdout.write("You are an adult.");
    }else if (ans==="no"){
        process.stdout.write("You are NOT an adult.");
    }else{
        process.stdout.write(ans+" is an invalid input.");
    }
    process.exit();
});
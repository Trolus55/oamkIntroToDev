let array =[55, 23, 6456, 324, 21, 234, 72, 21];
let fndInd = new Array();
//ask the user abaout search
process.stdout.write("Search for number: ");
process.stdin.on("data", function(usrInput){
    let number = Number(usrInput);
    //loop through every value in array and comapre it to the number using if in for loop
    for(let i=0; i <array.length;i++){
        //if it is equal add index to index list
        if(array[i] == number){
            fndInd.push(i);
        };  
    };
    //Print out the indexes
    if (fndInd.length>0){
        process.stdout.write(number+" was found in index "+String(fndInd));
    }else{
        process.stdout.write(number+" was found not found");
    };
    //if didnt found any index then print out it was not found
    process.exit();
});


const util = require( "util" ) ;

//ask user for input
process.stdout.write("This tool converts miles to kilometers. \n Put in your number of miles to be converted: ");
//take the input
process.stdin.on("data", function(milesNo)
{
    let miles = Number(milesNo);
    let kilometers = miles*1.60934;
    process.stdout.write(miles+" miles is "+kilometers+" kilometers.\n");
    process.stdout.write(util.format("%d miles is %d kilometers", miles, kilometers.toFixed(4)));
    process.exit();
});
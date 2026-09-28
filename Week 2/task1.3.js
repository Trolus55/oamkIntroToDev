process.stdout.write("This program will convert the number of meters to other units \n Please input the number of meters: ") //ask user for number
//grab the number convert to number type and calculte and display the units
process.stdin.on("data", function(nmeters)
{
    let meters = Number(nmeters);
    let kilometers = meters / 1000;
    let miles      = meters / 1609.344;
    let yards      = meters / 0.9144;
    let feet       = meters / 0.3048;
    let inches     = meters / 0.0254;
    let lightYears = meters / 9.461e15;
    process.stdout.write(meters+" meters in following units is: \n");

    process.stdout.write(kilometers.toFixed(3) + " kilometers\n".padStart(5));
    process.stdout.write(miles.toFixed(3) + " miles\n".padStart(5));
    process.stdout.write(yards.toFixed(3) + " yards\n".padStart(5));
    process.stdout.write(feet.toFixed(3) + " feet\n".padStart(5));
    process.stdout.write(inches.toFixed(3) + " inches\n".padStart(5));
    process.stdout.write(lightYears.toFixed(3) + " light years\n".padStart(5));

    process.exit();

});
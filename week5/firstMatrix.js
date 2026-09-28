let fruitsalad = [
    ["banana", 3, "yellow", 444],
    ["orange", 1, "orange", 555],
    ["apple", 5, "green", 666]
];
process.stdout.write("\nBest salad recipe\n");

for (let i = 0; i < fruitsalad.length; i++) {
    process.stdout.write("\n");
    for (let j = 0; j < fruitsalad[i].length; j++) {
        process.stdout.write(" "+fruitsalad[i][j]);
    };
};
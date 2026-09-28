let array = ["bannana", "apple", "kiwi", "orange"];
process.stdout.write("First item in the array is "+array[1] + "\n");
for (let i=array.length;i>0;i--){
    process.stdout.write(array[i-1] + "\n");
};
array.unshift("grapefruit");
array.push("watermelon");
console.log(array);
console.log(array.sort().reverse());
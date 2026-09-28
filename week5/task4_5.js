//make the array with loop 0 - 100 i pushing random number everytime
let array = new Array();
for(i=0; i < 100; i++){
    array.push(Math.floor(Math.random()*1001));
};
console.log("Random numbers: "+String(array));
let lar = 0;
//for loop that compares if  number at index i is larger than next number, if it is save the larger and combare next i
for(i=0; i < array.length;i++){
    if (array[i]>lar) lar = array[i];
};
let sml = array[0];
//same but smaller than next and save the smaller
for(i=0; i < array.length;i++){
    if (array[i]<sml) sml = array[i];
};
//print out the largest and samllest found value
console.log("Largest number is "+lar);
console.log("Smallest number is "+sml);

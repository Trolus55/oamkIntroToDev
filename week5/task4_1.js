let array1=[5, 7, 32, 31, 8];
let array2=[12.4, -13.55, 67.44];
let array3=["Helsinki", "Lissabon", "New York", "Shanghai"];
console.log("The value in the index number 3 is " +array3[3]);
console.log("The fourth item in the int array is: " +array1[3]);
console.log("In the array2 there are " +array2.length+ " items" );
console.log("Int array")
for (let i=0;i<array1.length;i++){
    console.log(array1[i]);
};
console.log("Double array")
for (let i=array2.length;i>0;i--){
    console.log(array2[i-1]);
};
for (let i=0;i<array3.length;i++){
    array3[i] = "empty"
};
console.log("New string array: "+String(array3));

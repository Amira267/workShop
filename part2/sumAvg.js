var n = Number(prompt("Enter how many number you wants to get the sum and averge? "))
var arr1 = [];
var sum = 0;

for(var i =0; i<n; i++){
    
    var data = Number(prompt("Enter the number " +i))
   arr1.push(data);
   sum +=arr1[i];
    
}
console.log(arr1)
console.log(sum)

var avg = sum/n;
alert("the sum of numbers : "+sum+" and the averge: "+ avg);


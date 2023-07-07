function sumDigits(x){

    let number = ''+ x;
    let sum = 0;
    for( i=0;i< number.length; i++){
        sum += +number[i];
    }
        return sum;
    
}

console.log(sumDigits(12345));

function luckyNumber(x){
    let number = '' + x;
    let sum1 = 0;
    let sum2 = 0;
for (i= 0 ; i< number.length/2 ;i++){
    sum1+= + number[i];
}
for(i = number.length/2; i<number.length; i++){
 sum2+= +number[i];
}
 return (sum1==sum2)? 'lucky': 'unlucky';
 
}
console.log(luckyNumber(123321));

function banana(){
    let a = 'a';
    let b= 'b';
    let n = String.fromCharCode(110);
    console.log(b+a+n+a+n+a);
}
banana();


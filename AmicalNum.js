let num1=34;
let num2=11;
sum1=0;
sum2=0;
for(let i=1; i<=num1; i++){
    if(num1[i]%i==0){
        sum1+=i
    }
}
for(let j=1;j<=num2; j++){
    if(num2[j]%j==0){
        sum2+=j
    }
}

if(sum1==num2 && sum2==num1){
    console.log("Amicable number")
}else{
    console.log("not amicable number")
}

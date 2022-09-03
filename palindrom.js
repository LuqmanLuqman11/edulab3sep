const str = "luqmanl";
let convertArray=Array.from(str)
let firstElement=convertArray[0];
let lastElement=convertArray[convertArray.length-1];
if(firstElement==lastElement){
    console.log(`${str} is palindrom`)
}else{
    console.log(`${str} is not palindrom`)
}
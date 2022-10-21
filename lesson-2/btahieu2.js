function maxDigit(n){
    let a = n.toString();
    let b = a.split('');
    console.log(b)
    console.log(Math.max.apply(null,b));
}
maxDigit(09213081289467326);
const arr = [1,1,1,3,3,3]
function findMostDuplicate(arr){
    arr.sort();
    let max =[0, 0];
    let count = 1;
    for(let i = arr.length-1; i > 0 ; --i){
        if(arr[i] === arr[i-1]){
            ++count;
            console.log(count)
            console.log(max[1])
        }
        else {
            count = 1;
        } 
        if(max[1] < count){
            max[0] = arr[i];
            max[1] = count;
        }
    }
    
    console.log( 'value: ' + max[0] + '  counted: '+ max[1]);
}
findMostDuplicate(arr);
const arr = [5,1 ,5 ,12 ,21 ,12 , 33, 75]
function countDuplicate(input){
    let counts = {}
        for (let i = 0; i < input.length; i++ ){
            if(counts[input[i]]){
                counts[input[i]] += 1
            } else {counts[input[i]] = 1
            }
        }
        let i = 0;
        for (let prop in counts){
            let output =  'number ' + prop + ' counted ' + counts[prop] ;
            console.log(output);
            ++i
    }
    console.log('Số lượng số: ' , i )
}
 countDuplicate(arr)
const arr = [1,2,3,5,4,2,6,4];
function deleteDuplicate(input){
    let uniqueArr = input.filter(
function(item,index,self){
    // console.log(index)
    // console.log(self.indexOf(item));
        return self.indexOf(item) == index;
    }
    )
    console.log(uniqueArr)
}
deleteDuplicate(arr)
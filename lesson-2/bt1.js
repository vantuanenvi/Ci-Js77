function reverseString(str){
	let arrayOfChart = str.split('');
	let strToArray = arrayOfChart.reverse();
	let newString = strToArray.join('')
	console.log(newString);
}
reverseString('abcdef')
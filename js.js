// 如果我们不用原生的 Number 和 parseInt
// 用 JS 代码实现 String 到 Number 的转换
function stringToNum(str) {
	const sign = str[0] ==='-'?-1:1;
	let resultInterg = 0;
	let resultFloat = 0;
	const transobj = {
		'0':0,
		'1':1,
		'2':2,
		'3':3,
		'4':4,
		'5':5,
		'6':6,
		'7':7,
		'8':8,
		'9':9,
	}
	if(str[0] === '-') {
		str = str.slice(1);
	}
	
	// destinguish float
	const strArr = str.split('.');


	for(let i = 0; i< strArr[0].length;i++) {
      resultInterg *= 10;
      resultInterg += transobj[strArr[0][i]];
	}

	if(strArr[1]){
		for(let i = strArr[1].length-1; i>=0;i--) {
			resultFloat += transobj[strArr[1][i]];
			resultFloat /= 10;
			}
	}

	return sign*(resultInterg + resultFloat);
}

console.log(stringToNum('123'));
console.log(stringToNum('1.123'));
console.log(stringToNum('-123'));
console.log(stringToNum('-1.123'));

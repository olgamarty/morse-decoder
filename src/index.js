const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let lettersArr = [];
	let morzeArr = [];
	for (let i = 0; i < expr.length; i += 10) {
		lettersArr.push(String(+expr.slice(i, i + 10)));
	}
	lettersArr.map(item => {
		if (item === 'NaN') {
			morzeArr.push(' ');
		} else {
			let sign = [];
			for (let i = 0; i < item.length; i += 2) {
				if (item[i] + item[i + 1] === '10') sign.push('.');
				if (item[i] + item[i + 1] === '11') sign.push('-');
			}
			morzeArr.push(sign.join(''));
		}
	})
	let words = [];
	for (let i = 0; i < morzeArr.length; i++) {
		morzeArr[i] === ' ' ? words.push(' ') : words.push(MORSE_TABLE[morzeArr[i]]);
	}

	return words.join('');
}

module.exports = {
	decode
}
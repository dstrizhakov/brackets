
/*
Ссылка на задачу:
https://github.com/rolling-scopes-school/brackets
Задача: 
Implement function check(str, bracketsConfig), that for given brackets sequence will 
return true if it is correct and false otherwise
In the second param there is bracketsConfig - the array of pairs open-closed brackets. 
Each subarray includes only 2 elements - opening and closing bracket
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

Special case: opening and closing bracket can be the same :)
check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

Мое решение:
Будем заменять пары скобок на "" str.length / 2 кол-во раз
если в на выходе получаем строку с символами значит последовательность скобок нарушена
для скорости можно сразу возвращать false если str.length не четное значение
Также такой способ обрабатывает только чистые(без посторонних символов) строки.
Можно конечно предварительно заменить все ненужные символы на ''.
*/
module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) return false;
	//создаем массив строк с парами скобок для поиска и замены
	const bracketsPairs = bracketsConfig.map(brackets => brackets.join(''))
	let result = str;
	//максимальное количество итераций str.length / 2 тк пар скобок в два раза меньше
	//итерируемся по bracketsPairs и заменяем пары скобок на ''
	for (let i = 0; i < str.length / 2; i++) {
		bracketsPairs.forEach(element => {
			result = result.replace(element, '')
		});
	}
	return result.length === 0
}

/*
Если решать классическим способом через стек:
 */

// module.exports = function check(str, bracketsConfig) {
// 	//создаем массив открывающих скобок
// 	const OPEN_BRACKETS = bracketsConfig.map(bracket => {
// 		return bracket[0];
// 	})
// 	//создаем массив исключений, когда открывающая и закрывающая скобки одинаковые
// 	const SAME_BRACKETS = bracketsConfig.map(bracket => {
// 		if (bracket[0] === bracket[1]) {
// 			return bracket[0]
// 		}
// 	})
// 	//создаем обьект соответствия скобок
// 	let BRACKETS_PAIR = {};
// 	bracketsConfig.forEach(pair => {
// 		BRACKETS_PAIR[pair[1]] = pair[0]
// 	});

// 	let stack = [];
// 	for (let i = 0; i < str.length; i++) {
// 		let currentSymbol = str[i];
// 		if (OPEN_BRACKETS.includes(currentSymbol)) {
// 			// судя по тестам одинаковые открывающие и закрывающие элементы могут быть |, 7, 8
// 			// если эти символы могут быть произвольными можно в самом начале сделать массив таких 
// 			// символов и тут сравнивать элементы этого массива с текущим символом
// 			// для обработки тиких исключений
// 			if (SAME_BRACKETS.includes(currentSymbol)) {
// 				let top = stack[stack.length - 1];
// 				if (top === currentSymbol) {
// 					stack.pop()
// 					continue;
// 				}
// 			}
// 			stack.push(currentSymbol);
// 		} else {
// 			if (stack.length === 0) {
// 				return false;
// 			}
// 			let topElement = stack[stack.length - 1];
// 			if (BRACKETS_PAIR[currentSymbol] === topElement) {
// 				stack.pop()
// 			} else {
// 				return false;
// 			}
// 		}
// 	}
// 	return stack.length === 0;
// }

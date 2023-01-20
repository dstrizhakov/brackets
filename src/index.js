//будем заменять пары скобок на "" str.length / 2 кол-во раз
//если в на выходе получаем строку с символами значит последовательность скобок нарушена
//для скорости можно сразу возвращать false если str.length не четное значение
module.exports = function check(str, bracketsConfig) {
	if (str.length % 2 !== 0) return false;
	//создаем массив строк с парами скобок для поиска и замены
	const bracketsPairs = bracketsConfig.map(brackets => brackets.join(''))
	let result = str;
	//максимальное количество итераций str.length / 2 тк пар скобок в два раза меньше
	//итерируемся по bracketsPairs и заменяем пары скобок на ""
	for (let i = 0; i < str.length / 2; i++) {
		bracketsPairs.forEach(element => {
			result = result.replace(element, '')
		});
	}
	return result.length === 0
}

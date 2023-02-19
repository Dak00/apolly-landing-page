const a = Number(prompt('1 число:'))
const b = Number(prompt('2 число:'))

const results = {
	sum: {
		title: 'The sum is ',
		result: a + b,
	},
	minus: {
		title: 'The sum is ',
		result: a - b,
	},
	multiply: {
		title: 'The sum is ',
		result: a * b,
	},
	divide: {
		title: 'The sum is ',
		result: a / b,
	},
}

console.log(
	`${results.sum.title} ${results.sum.result}`,
	`${results.minus.title} ${results.minus.result}`,
	`${results.multiply.title} ${results.multiply.result}`,
	`${results.divide.title} ${results.divide.result}`
)

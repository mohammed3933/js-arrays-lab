const foods = []

console.log('Exercise 1 result', foods)

foods.push('pizza', 'cheeseburger')

console.log('exercise 2 result', foods)

foods.unshift('taco')

console.log('Exercise 3 result:', foods)

const favFood = foods[1]

console.log('Exercise 4 result:', favFood)

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
splice(start, deleteCount, item0, item1, /* …, */ itemN)

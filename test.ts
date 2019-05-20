import {Pokemon} from './src/models/pokemon'

let pk1: Pokemon = new Pokemon('Pikachu', 90)
let pk2: Pokemon = new Pokemon('Miaouss', 130)

describe('faster pokemon', () => {
	it('should pokemon faster', () => {
		expect(pk1.isFirst(pk2)).toBe(true)
	})

	it('should pokemon slower', () => {
		expect(pk2.isFirst(pk1)).toBe(false)
	})
})

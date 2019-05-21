import {Pokemon} from './src/models/pokemon'

let pk1: Pokemon = new Pokemon('Raichu')
let pk2: Pokemon = new Pokemon('Pikachu')

describe('faster pokemon', () => {
	it('should pokemon faster', () => {
		expect(pk1.isFaster(pk2)).toBe(true)
	})

	it('should pokemon slower', () => {
		expect(pk2.isFaster(pk1)).toBe(false)
	})
})

import { TestCases, TestMetaData, TestExpectation } from 'jest-simple-template'
import CognitoPassword from '../src/index'

/**
 * Test Case Definition
 *
 * [0]: test description
 * [1]: request(input)
 * [2]: expect(output)
 */
const testCase: TestCases = [
	[
		{
			name: 'Generate',
			description: 'Generate password by default'
		},
		{},
		// @ts-ignore
		(result) => {
			expect(result.length).toBe(16)
		},
	],
	[
		{
			name: 'GenerateMinimumLength',
			description: 'Generate password by default'
		},
		{
			length: 6
		},
		// @ts-ignore
		(result) => {
			expect(result.length).toBe(6)
		},
	],
	[
		{
			name: 'GenerateDefaultIfLessThanMinimum',
			description: 'Generate password by default'
		},
		{
			length: 4 
		},
		// @ts-ignore
		(result) => {
			expect(result.length).toBe(16)
		},
	]
]

describe.each(testCase)('Passoword Generation', (d, r, e) => {
	beforeEach(() => {
		jest.restoreAllMocks()
	})
	const testMeta = d as TestMetaData
	it(`${testMeta.name}:${testMeta.description}`, async () => {

		const request = (typeof r === 'function') ? r() : r
		const gen = new CognitoPassword()
		const result = gen.generate(request)
		console.log(result)
		const expected = e as TestExpectation
		// @ts-ignore
		expected(result)
	})
})



describe('Tes in the App', () => {
    test('should be true', () => {

        //1. arrange
        const num1 = 10
        const num2 = 20

        //2. act
        const result = num1 + num2 + 5

        //3. assert

        expect(result).toBe(35)

        //expect(true).toBe(true)
    })
})
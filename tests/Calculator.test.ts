import Calculator from '../src/Calculator'

let calculator: Calculator

beforeEach(() => {
  calculator = new Calculator()
})

test(`Given a = 10 and b 10
    When call method calculator.sum(a, b)
    Then return 20`, () => {
  const a = 10
  const b = 10
  expect(calculator.sum(a, b)).toBe(20)
})

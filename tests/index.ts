import { capitalizeEveryWord, sanitizePhoneNumber, shallowEqualObject } from '../../src/Helper/Function'


test('capitalizeEveryWord return correctly', () => {
  expect(capitalizeEveryWord('batu ampar condet')).toBe('Batu Ampar Condet')
  expect(capitalizeEveryWord(' hellooo ')).toBe('Hellooo')
  expect(capitalizeEveryWord(' haha - hehe ')).toBe('Haha Hehe')
})

test('sanitizePhoneNumber return correctly', () => {
  expect(sanitizePhoneNumber('123 12 3123')).toBe('123123123')
  expect(sanitizePhoneNumber(123456)).toBe('123456')
  expect(sanitizePhoneNumber(' asdaas--- __ d !@#%!@# 123 !@#!@ sad')).toBe('123')
  expect(sanitizePhoneNumber(true)).toBe(false)
  expect(sanitizePhoneNumber({})).toBe(false)
  expect(sanitizePhoneNumber([])).toBe(false)
  expect(sanitizePhoneNumber(null)).toBe(false)
  expect(sanitizePhoneNumber(undefined)).toBe(false)
  expect(sanitizePhoneNumber(() => { })).toBe(false)
})

test('shallowEqualObject return correctly', () => {
  expect(shallowEqualObject({ asd: 1 }, { asd: 1 })).toBe(true)
  expect(shallowEqualObject({ asd: 1 }, { asd: 2 })).toBe(false)
})
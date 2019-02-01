import test from 'ava' // tslint:disable-line:no-implicit-dependencies
import { ElementSymbol, isElementSymbol } from '.'

test('H is an ElementSymbol', t => {
  t.true(isElementSymbol('H'))
})
test('X is not an ElementSymbol', t => {
  t.false(isElementSymbol('X'))
})
test('0 is not an ElementSymbol', t => {
  t.false(isElementSymbol(0))
})

test('es: ElementSymbol = ElementSymbol.H', t => {
  const es: ElementSymbol = ElementSymbol.H
  t.pass()
})

test('es: ElementSymbol = H', t => {
  // Does not compile
  // const es: ElementSymbol = 'H'
  t.pass()
})

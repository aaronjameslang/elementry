import test from 'ava' // tslint:disable-line:no-implicit-dependencies
import { ElementName, isElementName } from '.'

test('Hydrogen is an ElementName', t => {
  t.true(isElementName('Hydrogen'))
})
test('Neutronium is not an ElementName', t => {
  t.false(isElementName('Neutronium'))
})
test('0 is not an ElementName', t => {
  t.false(isElementName(0))
})
test('null is not an ElementName', t => {
  t.false(isElementName(null)) // tslint:disable-line:no-null-keyword
})
test('undefined is not an ElementName', t => {
  t.false(isElementName(undefined))
})
test('{} is not an ElementName', t => {
  t.false(isElementName({}))
})

test('en: ElementName = ElementName.Hydrogen', t => {
  const en: ElementName = ElementName.Hydrogen
  t.pass()
})

test('en: ElementName = Hydrogen', t => {
  // Does not compile
  // const en: ElementName = 'Hydrogen'
  t.pass()
})

import test from 'ava' // tslint:disable-line:no-implicit-dependencies
import { ElementGroup, isElementGroup } from '.'

// tslint:disable:no-magic-numbers
test('1 is an ElementGroup', t => {
  t.true(isElementGroup(1))
})
test('18 is an ElementGroup', t => {
  t.true(isElementGroup(18))
})
test('Lanthanide is an ElementGroup', t => {
  t.true(isElementGroup('La'))
})
test('Actinide is an ElementGroup', t => {
  t.true(isElementGroup('Ac'))
})

test('0 is not an ElementGroup', t => {
  t.false(isElementGroup(0))
})
test('_ is not an ElementGroup', t => {
  t.false(isElementGroup('_'))
})

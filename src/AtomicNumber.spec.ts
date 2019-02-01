import test from 'ava' // tslint:disable-line:no-implicit-dependencies
import { AtomicNumber, isAtomicNumber } from '.'

test('1 is an AtomicNumber', t => {
  t.true(isAtomicNumber(1))
})
test('0 is not an AtomicNumber', t => {
  t.false(isAtomicNumber(0))
})
test('_ is not an AtomicNumber', t => {
  t.false(isAtomicNumber('_'))
})

test('an: AtomicNumber = 1', t => {
  const an: AtomicNumber = 1
  t.pass()
})

test('an: AtomicNumber = 0', t => {
  // Does not compile
  // const an: AtomicNumber = 0
  t.pass()
})

import test from 'ava' // tslint:disable-line:no-implicit-dependencies
import {
  Element,
  ElementName,
  ElementSymbol,
  isElement,
} from '.'

test('Hydrogen is an Element', t => {
  t.true(isElement(Element.HYDROGEN))
})
test('Hydrogen{} is not an Element', t => {
  t.false(isElement({
    name: ElementName.Hydrogen,
    number: 1,
    symbol: ElementSymbol.H,
  }))
})

test('e: Element = Element.Hydrogen', t => {
  const e: Element = Element.HYDROGEN
  t.pass()
})

test('e: Element = {}', t => {
  // Does not compile
  // const e: Element = {
  //     number: 1,
  //     symbol: ElementSymbol.H,
  //     name:  ElementName.Hydrogen
  // }
  t.pass()
})

test('Element.getAll()', t => {
  // tslint:disable: no-magic-numbers
  const elements = Element.getAll()
  t.is(elements.length, 118)
  t.is(elements[0], Element.HYDROGEN)
  t.is(elements[1], Element.HELIUM)
  t.is(elements[79], Element.MERCURY)
  t.is(elements[93], Element.PLUTONIUM)
})

test('Element.findByGroup(3)', t => {
  // tslint:disable-next-line: no-magic-numbers
  t.deepEqual(Element.findByGroup(3), [Element.SCANDIUM, Element.YTTRIUM])
})

test('Invalid Element.findByGroup()', t => {
  // tslint:disable-next-line: no-magic-numbers
  t.deepEqual(Element.findByGroup(42), [])
  t.deepEqual(Element.findByGroup('DieAntwort'), [])
})

test('Element.findByNumber(1)', t => {
  t.is(Element.findByNumber(1), Element.HYDROGEN)
})
test('Element.findByNumber(0)', t => {
  t.is(Element.findByNumber(0), undefined)
})

test('Element.findBySymbol(H)', t => {
  t.is(Element.findBySymbol('H'), Element.HYDROGEN)
})
test('Element.findBySymbol(h)', t => {
  t.is(Element.findBySymbol('h'), Element.HYDROGEN)
})
test('Element.findBySymbol(X)', t => {
  t.is(Element.findBySymbol('X'), undefined)
})

test('Element.findByName(Hydrogen)', t => {
  t.is(Element.findByName('Hydrogen'), Element.HYDROGEN)
})
test('Element.findByName(hydrogen)', t => {
  t.is(Element.findByName('hydrogen'), Element.HYDROGEN)
})
test('Element.findByName(Deuterium)', t => {
  t.is(Element.findByName('Deuterium'), undefined)
})

# ⚛ elementry [![Typed](https://img.shields.io/npm/types/elementry.svg)]() 

[![Build Status](https://travis-ci.org/aaronjameslang/elementry.svg?branch=master)](https://travis-ci.org/aaronjameslang/elementry)
[![Maintainability](http://api.codeclimate.com/v1/badges/385885de70c88e7a1699/maintainability)](//codeclimate.com/github/aaronjameslang/elementry/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/385885de70c88e7a1699/test_coverage)](//aaronjameslang.com/claudia-api-jwt-authenticator/coverage)
[![Known Vulnerabilities](http://snyk.io/test/github/aaronjameslang/elementry/badge.svg)](//snyk.io/test/github/aaronjameslang/elementry)

A type-safe library of chemical elements

## Installation [![npm version](https://badge.fury.io/js/elementry.svg)](//npmjs.com/package/elementry)

```shell
npm i elementry
```

## Usage

```js
import {
  AtomicNumber,
  Element,
  ElementName,
  ElementSymbol,
  isAtomicNumber,
  isElement,
  isElementName,
  isElementSymbol,
} from 'elementry'

let element: Element
element = Element.HYDROGEN // { number: 1, symbol: 'H', name: 'Hydrogen'}
element = { number: 1, symbol: 'He', name: 'Lithium'} // type error
isElement(Element.HYDROGEN) // true
isElement({ number: 1, symbol: 'He', name: 'Lithium'}) // false

let elementMaybe: Element | undefined
elementMaybe = Element.findByNumber(2) // Helium
elementMaybe = Element.findByNumber(200) // undefined
elementMaybe = Element.findBySymbol('He') // Helium
elementMaybe = Element.findBySymbol('he') // Helium
elementMaybe = Element.findBySymbol('X') // undefined
elementMaybe = Element.findByName('Lithium') // Lithium
elementMaybe = Element.findByName('Unobtanium') // undefined

let number: AtomicNumber
number = 20
number = 0 // type error
isAtomicNumber(20) // true 
isAtomicNumber(0) // false

let symbol: ElementSymbol
symbol = ElementSymbol.H // 'H'
symbol = 'X' // type error
isElementSymbol(ElementSymbol.H) // true
isElementSymbol('H') // true
isElementSymbol('X') // false

let name: ElementName
name = ElementName.Hydrogen // 'Hydrogen'
name = 'X' // type error
isElementName(ElementName.Hydrogen) // true
isElementName('Hydrogen') // true
isElementName('Adamantium') // false
```
See the tests for more examples of what you can and shouldn't do

## Contribution & Feedback [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg)](https://conventionalcommits.org)

Question? Bug? Feature request? Not sure? [Open an issue!](//github.com/aaronjameslang/elementry/issues/new)

If this is *almost* what you were looking for, let me know and I can probably help!

Pull requests welcome, but please get in touch first. I don't want to waste your time 😁

See the code on [GitHub](//github.com/aaronjameslang/elementry)

### Element*a*ry

I know it's spelt wrong, someone's taken [`elemetary`](https://www.npmjs.com/package/elementary)

// tslint:disable:no-magic-numbers
export const isElementGroup = (x: any): x is ElementGroup =>
  typeof x === 'number' && x > 0 && x <= 18 ||
  x === 'La' || x === 'Ac'

// tslint:disable:no-multi-spaces
export type ElementGroup =
   1 |   2 |   3 |   4 |   5 |   6 |   7 |   8 |   9 |
  10 |  11 |  12 |  13 |  14 |  15 |  16 |  17 |  18 |
  'La' | // Lanthanide
  'Ac'   // Actinide

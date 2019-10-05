import { AtomicNumber } from './AtomicNumber'
import { ElementGroup } from './ElementGroup'
import { ElementName } from './ElementName'
import { ElementSymbol } from './ElementSymbol'

const IS_ELEMENT = Symbol()

export const isElement = (x: any): x is Element =>
  x instanceof Element

export class Element {
  public static findByGroup (group: number | string): Element[] {
    return Element.ALL.filter(e => e.group === group)
  }

  public static findByName (name: string): Element | undefined {
    return Element.ALL.find(e => e.name.toLowerCase() === name.toLowerCase())
  }

  public static findByNumber (n: number): Element | undefined {
    return Element.ALL.find(e => e.number === n)
  }

  public static findBySymbol (symbol: string): Element | undefined {
    return Element.ALL.find(e => e.symbol.toLowerCase() === symbol.toLowerCase())
  }

  public static getAll () {
    return Element.ALL.slice(0)
  }

  public readonly [IS_ELEMENT] = true
  public readonly group: ElementGroup
  public readonly name: ElementName
  public readonly number: AtomicNumber
  public readonly symbol: ElementSymbol

  private constructor (n: AtomicNumber, group: ElementGroup, symbol: ElementSymbol, name: ElementName) {
    this.number = n
    this.group = group
    this.symbol = symbol
    this.name = name
    Object.freeze(this)
  }

  // tslint:disable:member-ordering
  // tslint:disable:no-magic-numbers
  // tslint:disable:no-multi-spaces
  // tslint:disable:space-within-parens
  public static readonly      HYDROGEN = new Element(  1, 1, ElementSymbol.H , ElementName.Hydrogen     )
  public static readonly        HELIUM = new Element(  2, 18, ElementSymbol.He, ElementName.Helium       )
  public static readonly       LITHIUM = new Element(  3, 1, ElementSymbol.Li, ElementName.Lithium      )
  public static readonly     BERYLLIUM = new Element(  4, 2, ElementSymbol.Be, ElementName.Beryllium    )
  public static readonly         BORON = new Element(  5, 13, ElementSymbol.B , ElementName.Boron        )
  public static readonly        CARBON = new Element(  6, 14, ElementSymbol.C , ElementName.Carbon       )
  public static readonly      NITROGEN = new Element(  7, 15, ElementSymbol.N , ElementName.Nitrogen     )
  public static readonly        OXYGEN = new Element(  8, 16, ElementSymbol.O , ElementName.Oxygen       )
  public static readonly      FLUORINE = new Element(  9, 17, ElementSymbol.F , ElementName.Fluorine     )
  public static readonly          NEON = new Element( 10, 18, ElementSymbol.Ne, ElementName.Neon         )
  public static readonly        SODIUM = new Element( 11, 1, ElementSymbol.Na, ElementName.Sodium       )
  public static readonly     MAGNESIUM = new Element( 12, 2, ElementSymbol.Mg, ElementName.Magnesium    )
  public static readonly     ALUMINIUM = new Element( 13, 13, ElementSymbol.Al, ElementName.Aluminium    )
  public static readonly       SILICON = new Element( 14, 14, ElementSymbol.Si, ElementName.Silicon      )
  public static readonly    PHOSPHORUS = new Element( 15, 15, ElementSymbol.P , ElementName.Phosphorus   )
  public static readonly        SULFUR = new Element( 16, 16, ElementSymbol.S , ElementName.Sulfur       )
  public static readonly      CHLORINE = new Element( 17, 17, ElementSymbol.Cl, ElementName.Chlorine     )
  public static readonly         ARGON = new Element( 18, 18, ElementSymbol.Ar, ElementName.Argon        )
  public static readonly     POTASSIUM = new Element( 19, 1, ElementSymbol.K , ElementName.Potassium    )
  public static readonly       CALCIUM = new Element( 20, 2, ElementSymbol.Ca, ElementName.Calcium      )
  public static readonly      SCANDIUM = new Element( 21, 3, ElementSymbol.Sc, ElementName.Scandium     )
  public static readonly      TITANIUM = new Element( 22, 4, ElementSymbol.Ti, ElementName.Titanium     )
  public static readonly      VANADIUM = new Element( 23, 5, ElementSymbol.V , ElementName.Vanadium     )
  public static readonly      CHROMIUM = new Element( 24, 6, ElementSymbol.Cr, ElementName.Chromium     )
  public static readonly     MANGANESE = new Element( 25, 7, ElementSymbol.Mn, ElementName.Manganese    )
  public static readonly          IRON = new Element( 26, 8, ElementSymbol.Fe, ElementName.Iron         )
  public static readonly        COBALT = new Element( 27, 9, ElementSymbol.Co, ElementName.Cobalt       )
  public static readonly        NICKEL = new Element( 28, 10, ElementSymbol.Ni, ElementName.Nickel       )
  public static readonly        COPPER = new Element( 29, 11, ElementSymbol.Cu, ElementName.Copper       )
  public static readonly          ZINC = new Element( 30, 12, ElementSymbol.Zn, ElementName.Zinc         )
  public static readonly       GALLIUM = new Element( 31, 13, ElementSymbol.Ga, ElementName.Gallium      )
  public static readonly     GERMANIUM = new Element( 32, 14, ElementSymbol.Ge, ElementName.Germanium    )
  public static readonly       ARSENIC = new Element( 33, 15, ElementSymbol.As, ElementName.Arsenic      )
  public static readonly      SELENIUM = new Element( 34, 16, ElementSymbol.Se, ElementName.Selenium     )
  public static readonly       BROMINE = new Element( 35, 17, ElementSymbol.Br, ElementName.Bromine      )
  public static readonly       KRYPTON = new Element( 36, 18, ElementSymbol.Kr, ElementName.Krypton      )
  public static readonly      RUBIDIUM = new Element( 37, 1, ElementSymbol.Rb, ElementName.Rubidium     )
  public static readonly     STRONTIUM = new Element( 38, 2, ElementSymbol.Sr, ElementName.Strontium    )
  public static readonly       YTTRIUM = new Element( 39, 3, ElementSymbol.Y , ElementName.Yttrium      )
  public static readonly     ZIRCONIUM = new Element( 40, 4, ElementSymbol.Zr, ElementName.Zirconium    )
  public static readonly       NIOBIUM = new Element( 41, 5, ElementSymbol.Nb, ElementName.Niobium      )
  public static readonly    MOLYBDENUM = new Element( 42, 6, ElementSymbol.Mo, ElementName.Molybdenum   )
  public static readonly    TECHNETIUM = new Element( 43, 7, ElementSymbol.Tc, ElementName.Technetium   )
  public static readonly     RUTHENIUM = new Element( 44, 8, ElementSymbol.Ru, ElementName.Ruthenium    )
  public static readonly       RHODIUM = new Element( 45, 9, ElementSymbol.Rh, ElementName.Rhodium      )
  public static readonly     PALLADIUM = new Element( 46, 10, ElementSymbol.Pd, ElementName.Palladium    )
  public static readonly        SILVER = new Element( 47, 11, ElementSymbol.Ag, ElementName.Silver       )
  public static readonly       CADMIUM = new Element( 48, 12, ElementSymbol.Cd, ElementName.Cadmium      )
  public static readonly        INDIUM = new Element( 49, 13, ElementSymbol.In, ElementName.Indium       )
  public static readonly           TIN = new Element( 50, 14, ElementSymbol.Sn, ElementName.Tin          )
  public static readonly      ANTIMONY = new Element( 51, 15, ElementSymbol.Sb, ElementName.Antimony     )
  public static readonly     TELLURIUM = new Element( 52, 16, ElementSymbol.Te, ElementName.Tellurium    )
  public static readonly        IODINE = new Element( 53, 17, ElementSymbol.I , ElementName.Iodine       )
  public static readonly         XENON = new Element( 54, 18, ElementSymbol.Xe, ElementName.Xenon        )
  public static readonly        CESIUM = new Element( 55, 1, ElementSymbol.Cs, ElementName.Cesium       )
  public static readonly        BARIUM = new Element( 56, 2, ElementSymbol.Ba, ElementName.Barium       )
  public static readonly     LANTHANUM = new Element( 57, 'La', ElementSymbol.La, ElementName.Lanthanum    )
  public static readonly        CERIUM = new Element( 58, 'La', ElementSymbol.Ce, ElementName.Cerium       )
  public static readonly  PRASEODYMIUM = new Element( 59, 'La', ElementSymbol.Pr, ElementName.Praseodymium )
  public static readonly     NEODYMIUM = new Element( 60, 'La', ElementSymbol.Nd, ElementName.Neodymium    )
  public static readonly    PROMETHIUM = new Element( 61, 'La', ElementSymbol.Pm, ElementName.Promethium   )
  public static readonly      SAMARIUM = new Element( 62, 'La', ElementSymbol.Sm, ElementName.Samarium     )
  public static readonly      EUROPIUM = new Element( 63, 'La', ElementSymbol.Eu, ElementName.Europium     )
  public static readonly    GADOLINIUM = new Element( 64, 'La', ElementSymbol.Gd, ElementName.Gadolinium   )
  public static readonly       TERBIUM = new Element( 65, 'La', ElementSymbol.Tb, ElementName.Terbium      )
  public static readonly    DYSPROSIUM = new Element( 66, 'La', ElementSymbol.Dy, ElementName.Dysprosium   )
  public static readonly       HOLMIUM = new Element( 67, 'La', ElementSymbol.Ho, ElementName.Holmium      )
  public static readonly        ERBIUM = new Element( 68, 'La', ElementSymbol.Er, ElementName.Erbium       )
  public static readonly       THULIUM = new Element( 69, 'La', ElementSymbol.Tm, ElementName.Thulium      )
  public static readonly     YTTERBIUM = new Element( 70, 'La', ElementSymbol.Yb, ElementName.Ytterbium    )
  public static readonly      LUTETIUM = new Element( 71, 'La', ElementSymbol.Lu, ElementName.Lutetium     )
  public static readonly       HAFNIUM = new Element( 72, 4, ElementSymbol.Hf, ElementName.Hafnium      )
  public static readonly      TANTALUM = new Element( 73, 5, ElementSymbol.Ta, ElementName.Tantalum     )
  public static readonly      TUNGSTEN = new Element( 74, 6, ElementSymbol.W , ElementName.Tungsten     )
  public static readonly       RHENIUM = new Element( 75, 7, ElementSymbol.Re, ElementName.Rhenium      )
  public static readonly        OSMIUM = new Element( 76, 8, ElementSymbol.Os, ElementName.Osmium       )
  public static readonly       IRIDIUM = new Element( 77, 9, ElementSymbol.Ir, ElementName.Iridium      )
  public static readonly      PLATINUM = new Element( 78, 10, ElementSymbol.Pt, ElementName.Platinum     )
  public static readonly          GOLD = new Element( 79, 11, ElementSymbol.Au, ElementName.Gold         )
  public static readonly       MERCURY = new Element( 80, 12, ElementSymbol.Hg, ElementName.Mercury      )
  public static readonly      THALLIUM = new Element( 81, 13, ElementSymbol.Tl, ElementName.Thallium     )
  public static readonly          LEAD = new Element( 82, 14, ElementSymbol.Pb, ElementName.Lead         )
  public static readonly       BISMUTH = new Element( 83, 15, ElementSymbol.Bi, ElementName.Bismuth      )
  public static readonly      POLONIUM = new Element( 84, 16, ElementSymbol.Po, ElementName.Polonium     )
  public static readonly      ASTATINE = new Element( 85, 17, ElementSymbol.At, ElementName.Astatine     )
  public static readonly         RADON = new Element( 86, 18, ElementSymbol.Rn, ElementName.Radon        )
  public static readonly      FRANCIUM = new Element( 87, 1, ElementSymbol.Fr, ElementName.Francium     )
  public static readonly        RADIUM = new Element( 88, 2, ElementSymbol.Ra, ElementName.Radium       )
  public static readonly      ACTINIUM = new Element( 89, 'Ac', ElementSymbol.Ac, ElementName.Actinium     )
  public static readonly       THORIUM = new Element( 90, 'Ac', ElementSymbol.Th, ElementName.Thorium      )
  public static readonly  PROTACTINIUM = new Element( 91, 'Ac', ElementSymbol.Pa, ElementName.Protactinium )
  public static readonly       URANIUM = new Element( 92, 'Ac', ElementSymbol.U , ElementName.Uranium      )
  public static readonly     NEPTUNIUM = new Element( 93, 'Ac', ElementSymbol.Np, ElementName.Neptunium    )
  public static readonly     PLUTONIUM = new Element( 94, 'Ac', ElementSymbol.Pu, ElementName.Plutonium    )
  public static readonly     AMERICIUM = new Element( 95, 'Ac', ElementSymbol.Am, ElementName.Americium    )
  public static readonly        CURIUM = new Element( 96, 'Ac', ElementSymbol.Cm, ElementName.Curium       )
  public static readonly     BERKELIUM = new Element( 97, 'Ac', ElementSymbol.Bk, ElementName.Berkelium    )
  public static readonly   CALIFORNIUM = new Element( 98, 'Ac', ElementSymbol.Cf, ElementName.Californium  )
  public static readonly   EINSTEINIUM = new Element( 99, 'Ac', ElementSymbol.Es, ElementName.Einsteinium  )
  public static readonly       FERMIUM = new Element(100, 'Ac', ElementSymbol.Fm, ElementName.Fermium      )
  public static readonly   MENDELEVIUM = new Element(101, 'Ac', ElementSymbol.Md, ElementName.Mendelevium  )
  public static readonly      NOBELIUM = new Element(102, 'Ac', ElementSymbol.No, ElementName.Nobelium     )
  public static readonly    LAWRENCIUM = new Element(103, 'Ac', ElementSymbol.Lr, ElementName.Lawrencium   )
  public static readonly RUTHERFORDIUM = new Element(104, 4, ElementSymbol.Rf, ElementName.Rutherfordium)
  public static readonly       DUBNIUM = new Element(105, 5, ElementSymbol.Db, ElementName.Dubnium      )
  public static readonly    SEABORGIUM = new Element(106, 6, ElementSymbol.Sg, ElementName.Seaborgium   )
  public static readonly       BOHRIUM = new Element(107, 7, ElementSymbol.Bh, ElementName.Bohrium      )
  public static readonly       HASSIUM = new Element(108, 8, ElementSymbol.Hs, ElementName.Hassium      )
  public static readonly    MEITNERIUM = new Element(109, 9, ElementSymbol.Mt, ElementName.Meitnerium   )
  public static readonly  DARMSTADTIUM = new Element(110, 10, ElementSymbol.Ds, ElementName.Darmstadtium )
  public static readonly   ROENTGENIUM = new Element(111, 11, ElementSymbol.Rg, ElementName.Roentgenium  )
  public static readonly   COPERNICIUM = new Element(112, 12, ElementSymbol.Cb, ElementName.Copernicium  )
  public static readonly      NIHONIUM = new Element(113, 13, ElementSymbol.Nh, ElementName.Nihonium     )
  public static readonly     FLEROVIUM = new Element(114, 14, ElementSymbol.Fl, ElementName.Flerovium    )
  public static readonly     MOSCOVIUM = new Element(115, 15, ElementSymbol.Mc, ElementName.Moscovium    )
  public static readonly   LIVERMORIUM = new Element(116, 16, ElementSymbol.Lv, ElementName.Livermorium  )
  public static readonly    TENNESSINE = new Element(117, 17, ElementSymbol.Ts, ElementName.Tennessine   )
  public static readonly     OGANESSON = new Element(118, 18, ElementSymbol.Og, ElementName.Oganesson    )

  private static readonly ALL = [
    Element.HYDROGEN,
    Element.HELIUM,
    Element.LITHIUM,
    Element.BERYLLIUM,
    Element.BORON,
    Element.CARBON,
    Element.NITROGEN,
    Element.OXYGEN,
    Element.FLUORINE,
    Element.NEON,
    Element.SODIUM,
    Element.MAGNESIUM,
    Element.ALUMINIUM,
    Element.SILICON,
    Element.PHOSPHORUS,
    Element.SULFUR,
    Element.CHLORINE,
    Element.ARGON,
    Element.POTASSIUM,
    Element.CALCIUM,
    Element.SCANDIUM,
    Element.TITANIUM,
    Element.VANADIUM,
    Element.CHROMIUM,
    Element.MANGANESE,
    Element.IRON,
    Element.COBALT,
    Element.NICKEL,
    Element.COPPER,
    Element.ZINC,
    Element.GALLIUM,
    Element.GERMANIUM,
    Element.ARSENIC,
    Element.SELENIUM,
    Element.BROMINE,
    Element.KRYPTON,
    Element.RUBIDIUM,
    Element.STRONTIUM,
    Element.YTTRIUM,
    Element.ZIRCONIUM,
    Element.NIOBIUM,
    Element.MOLYBDENUM,
    Element.TECHNETIUM,
    Element.RUTHENIUM,
    Element.RHODIUM,
    Element.PALLADIUM,
    Element.SILVER,
    Element.CADMIUM,
    Element.INDIUM,
    Element.TIN,
    Element.ANTIMONY,
    Element.TELLURIUM,
    Element.IODINE,
    Element.XENON,
    Element.CESIUM,
    Element.BARIUM,
    Element.LANTHANUM,
    Element.CERIUM,
    Element.PRASEODYMIUM,
    Element.NEODYMIUM,
    Element.PROMETHIUM,
    Element.SAMARIUM,
    Element.EUROPIUM,
    Element.GADOLINIUM,
    Element.TERBIUM,
    Element.DYSPROSIUM,
    Element.HOLMIUM,
    Element.ERBIUM,
    Element.THULIUM,
    Element.YTTERBIUM,
    Element.LUTETIUM,
    Element.HAFNIUM,
    Element.TANTALUM,
    Element.TUNGSTEN,
    Element.RHENIUM,
    Element.OSMIUM,
    Element.IRIDIUM,
    Element.PLATINUM,
    Element.GOLD,
    Element.MERCURY,
    Element.THALLIUM,
    Element.LEAD,
    Element.BISMUTH,
    Element.POLONIUM,
    Element.ASTATINE,
    Element.RADON,
    Element.FRANCIUM,
    Element.RADIUM,
    Element.ACTINIUM,
    Element.THORIUM,
    Element.PROTACTINIUM,
    Element.URANIUM,
    Element.NEPTUNIUM,
    Element.PLUTONIUM,
    Element.AMERICIUM,
    Element.CURIUM,
    Element.BERKELIUM,
    Element.CALIFORNIUM,
    Element.EINSTEINIUM,
    Element.FERMIUM,
    Element.MENDELEVIUM,
    Element.NOBELIUM,
    Element.LAWRENCIUM,
    Element.RUTHERFORDIUM,
    Element.DUBNIUM,
    Element.SEABORGIUM,
    Element.BOHRIUM,
    Element.HASSIUM,
    Element.MEITNERIUM,
    Element.DARMSTADTIUM,
    Element.ROENTGENIUM,
    Element.COPERNICIUM,
    Element.NIHONIUM,
    Element.FLEROVIUM,
    Element.MOSCOVIUM,
    Element.LIVERMORIUM,
    Element.TENNESSINE,
    Element.OGANESSON,
  ]
}

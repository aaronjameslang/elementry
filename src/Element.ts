import { AtomicNumber } from './AtomicNumber'
import { ElementName } from './ElementName'
import { ElementSymbol } from './ElementSymbol'

const IS_ELEMENT = Symbol()

export const isElement = (x: any): x is Element =>
  x instanceof Element

export class Element {
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
  public readonly name: ElementName
  public readonly number: AtomicNumber
  public readonly symbol: ElementSymbol

  private constructor (n: AtomicNumber, symbol: ElementSymbol, name: ElementName) {
    this.number = n
    this.symbol = symbol
    this.name = name
    Object.freeze(this)
  }

  // tslint:disable:member-ordering
  // tslint:disable:no-magic-numbers
  // tslint:disable:no-multi-spaces
  // tslint:disable:space-within-parens
  public static readonly      HYDROGEN = new Element(  1, ElementSymbol.H , ElementName.Hydrogen     )
  public static readonly        HELIUM = new Element(  2, ElementSymbol.He, ElementName.Helium       )
  public static readonly       LITHIUM = new Element(  3, ElementSymbol.Li, ElementName.Lithium      )
  public static readonly     BERYLLIUM = new Element(  4, ElementSymbol.Be, ElementName.Beryllium    )
  public static readonly         BORON = new Element(  5, ElementSymbol.B , ElementName.Boron        )
  public static readonly        CARBON = new Element(  6, ElementSymbol.C , ElementName.Carbon       )
  public static readonly      NITROGEN = new Element(  7, ElementSymbol.N , ElementName.Nitrogen     )
  public static readonly        OXYGEN = new Element(  8, ElementSymbol.O , ElementName.Oxygen       )
  public static readonly      FLUORINE = new Element(  9, ElementSymbol.F , ElementName.Fluorine     )
  public static readonly          NEON = new Element( 10, ElementSymbol.Ne, ElementName.Neon         )
  public static readonly        SODIUM = new Element( 11, ElementSymbol.Na, ElementName.Sodium       )
  public static readonly     MAGNESIUM = new Element( 12, ElementSymbol.Mg, ElementName.Magnesium    )
  public static readonly     ALUMINIUM = new Element( 13, ElementSymbol.Al, ElementName.Aluminium    )
  public static readonly       SILICON = new Element( 14, ElementSymbol.Si, ElementName.Silicon      )
  public static readonly    PHOSPHORUS = new Element( 15, ElementSymbol.P , ElementName.Phosphorus   )
  public static readonly        SULFUR = new Element( 16, ElementSymbol.S , ElementName.Sulfur       )
  public static readonly      CHLORINE = new Element( 17, ElementSymbol.Cl, ElementName.Chlorine     )
  public static readonly         ARGON = new Element( 18, ElementSymbol.Ar, ElementName.Argon        )
  public static readonly     POTASSIUM = new Element( 19, ElementSymbol.K , ElementName.Potassium    )
  public static readonly       CALCIUM = new Element( 20, ElementSymbol.Ca, ElementName.Calcium      )
  public static readonly      SCANDIUM = new Element( 21, ElementSymbol.Sc, ElementName.Scandium     )
  public static readonly      TITANIUM = new Element( 22, ElementSymbol.Ti, ElementName.Titanium     )
  public static readonly      VANADIUM = new Element( 23, ElementSymbol.V , ElementName.Vanadium     )
  public static readonly      CHROMIUM = new Element( 24, ElementSymbol.Cr, ElementName.Chromium     )
  public static readonly     MANGANESE = new Element( 25, ElementSymbol.Mn, ElementName.Manganese    )
  public static readonly          IRON = new Element( 26, ElementSymbol.Fe, ElementName.Iron         )
  public static readonly        COBALT = new Element( 27, ElementSymbol.Co, ElementName.Cobalt       )
  public static readonly        NICKEL = new Element( 28, ElementSymbol.Ni, ElementName.Nickel       )
  public static readonly        COPPER = new Element( 29, ElementSymbol.Cu, ElementName.Copper       )
  public static readonly          ZINC = new Element( 30, ElementSymbol.Zn, ElementName.Zinc         )
  public static readonly       GALLIUM = new Element( 31, ElementSymbol.Ga, ElementName.Gallium      )
  public static readonly     GERMANIUM = new Element( 32, ElementSymbol.Ge, ElementName.Germanium    )
  public static readonly       ARSENIC = new Element( 33, ElementSymbol.As, ElementName.Arsenic      )
  public static readonly      SELENIUM = new Element( 34, ElementSymbol.Se, ElementName.Selenium     )
  public static readonly       BROMINE = new Element( 35, ElementSymbol.Br, ElementName.Bromine      )
  public static readonly       KRYPTON = new Element( 36, ElementSymbol.Kr, ElementName.Krypton      )
  public static readonly      RUBIDIUM = new Element( 37, ElementSymbol.Rb, ElementName.Rubidium     )
  public static readonly     STRONTIUM = new Element( 38, ElementSymbol.Sr, ElementName.Strontium    )
  public static readonly       YTTRIUM = new Element( 39, ElementSymbol.Y , ElementName.Yttrium      )
  public static readonly     ZIRCONIUM = new Element( 40, ElementSymbol.Zr, ElementName.Zirconium    )
  public static readonly       NIOBIUM = new Element( 41, ElementSymbol.Nb, ElementName.Niobium      )
  public static readonly    MOLYBDENUM = new Element( 42, ElementSymbol.Mo, ElementName.Molybdenum   )
  public static readonly    TECHNETIUM = new Element( 43, ElementSymbol.Tc, ElementName.Technetium   )
  public static readonly     RUTHENIUM = new Element( 44, ElementSymbol.Ru, ElementName.Ruthenium    )
  public static readonly       RHODIUM = new Element( 45, ElementSymbol.Rh, ElementName.Rhodium      )
  public static readonly     PALLADIUM = new Element( 46, ElementSymbol.Pd, ElementName.Palladium    )
  public static readonly        SILVER = new Element( 47, ElementSymbol.Ag, ElementName.Silver       )
  public static readonly       CADMIUM = new Element( 48, ElementSymbol.Cd, ElementName.Cadmium      )
  public static readonly        INDIUM = new Element( 49, ElementSymbol.In, ElementName.Indium       )
  public static readonly           TIN = new Element( 50, ElementSymbol.Sn, ElementName.Tin          )
  public static readonly      ANTIMONY = new Element( 51, ElementSymbol.Sb, ElementName.Antimony     )
  public static readonly     TELLURIUM = new Element( 52, ElementSymbol.Te, ElementName.Tellurium    )
  public static readonly        IODINE = new Element( 53, ElementSymbol.I , ElementName.Iodine       )
  public static readonly         XENON = new Element( 54, ElementSymbol.Xe, ElementName.Xenon        )
  public static readonly        CESIUM = new Element( 55, ElementSymbol.Cs, ElementName.Cesium       )
  public static readonly        BARIUM = new Element( 56, ElementSymbol.Ba, ElementName.Barium       )
  public static readonly     LANTHANUM = new Element( 57, ElementSymbol.La, ElementName.Lanthanum    )
  public static readonly        CERIUM = new Element( 58, ElementSymbol.Ce, ElementName.Cerium       )
  public static readonly  PRASEODYMIUM = new Element( 59, ElementSymbol.Pr, ElementName.Praseodymium )
  public static readonly     NEODYMIUM = new Element( 60, ElementSymbol.Nd, ElementName.Neodymium    )
  public static readonly    PROMETHIUM = new Element( 61, ElementSymbol.Pm, ElementName.Promethium   )
  public static readonly      SAMARIUM = new Element( 62, ElementSymbol.Sm, ElementName.Samarium     )
  public static readonly      EUROPIUM = new Element( 63, ElementSymbol.Eu, ElementName.Europium     )
  public static readonly    GADOLINIUM = new Element( 64, ElementSymbol.Gd, ElementName.Gadolinium   )
  public static readonly       TERBIUM = new Element( 65, ElementSymbol.Tb, ElementName.Terbium      )
  public static readonly    DYSPROSIUM = new Element( 66, ElementSymbol.Dy, ElementName.Dysprosium   )
  public static readonly       HOLMIUM = new Element( 67, ElementSymbol.Ho, ElementName.Holmium      )
  public static readonly        ERBIUM = new Element( 68, ElementSymbol.Er, ElementName.Erbium       )
  public static readonly       THULIUM = new Element( 69, ElementSymbol.Tm, ElementName.Thulium      )
  public static readonly     YTTERBIUM = new Element( 70, ElementSymbol.Yb, ElementName.Ytterbium    )
  public static readonly      LUTETIUM = new Element( 71, ElementSymbol.Lu, ElementName.Lutetium     )
  public static readonly       HAFNIUM = new Element( 72, ElementSymbol.Hf, ElementName.Hafnium      )
  public static readonly      TANTALUM = new Element( 73, ElementSymbol.Ta, ElementName.Tantalum     )
  public static readonly      TUNGSTEN = new Element( 74, ElementSymbol.W , ElementName.Tungsten     )
  public static readonly       RHENIUM = new Element( 75, ElementSymbol.Re, ElementName.Rhenium      )
  public static readonly        OSMIUM = new Element( 76, ElementSymbol.Os, ElementName.Osmium       )
  public static readonly       IRIDIUM = new Element( 77, ElementSymbol.Ir, ElementName.Iridium      )
  public static readonly      PLATINUM = new Element( 78, ElementSymbol.Pt, ElementName.Platinum     )
  public static readonly          GOLD = new Element( 79, ElementSymbol.Au, ElementName.Gold         )
  public static readonly       MERCURY = new Element( 80, ElementSymbol.Hg, ElementName.Mercury      )
  public static readonly      THALLIUM = new Element( 81, ElementSymbol.Tl, ElementName.Thallium     )
  public static readonly          LEAD = new Element( 82, ElementSymbol.Pb, ElementName.Lead         )
  public static readonly       BISMUTH = new Element( 83, ElementSymbol.Bi, ElementName.Bismuth      )
  public static readonly      POLONIUM = new Element( 84, ElementSymbol.Po, ElementName.Polonium     )
  public static readonly      ASTATINE = new Element( 85, ElementSymbol.At, ElementName.Astatine     )
  public static readonly         RADON = new Element( 86, ElementSymbol.Rn, ElementName.Radon        )
  public static readonly      FRANCIUM = new Element( 87, ElementSymbol.Fr, ElementName.Francium     )
  public static readonly        RADIUM = new Element( 88, ElementSymbol.Ra, ElementName.Radium       )
  public static readonly      ACTINIUM = new Element( 89, ElementSymbol.Ac, ElementName.Actinium     )
  public static readonly       THORIUM = new Element( 90, ElementSymbol.Th, ElementName.Thorium      )
  public static readonly  PROTACTINIUM = new Element( 91, ElementSymbol.Pa, ElementName.Protactinium )
  public static readonly       URANIUM = new Element( 92, ElementSymbol.U , ElementName.Uranium      )
  public static readonly     NEPTUNIUM = new Element( 93, ElementSymbol.Np, ElementName.Neptunium    )
  public static readonly     PLUTONIUM = new Element( 94, ElementSymbol.Pu, ElementName.Plutonium    )
  public static readonly     AMERICIUM = new Element( 95, ElementSymbol.Am, ElementName.Americium    )
  public static readonly        CURIUM = new Element( 96, ElementSymbol.Cm, ElementName.Curium       )
  public static readonly     BERKELIUM = new Element( 97, ElementSymbol.Bk, ElementName.Berkelium    )
  public static readonly   CALIFORNIUM = new Element( 98, ElementSymbol.Cf, ElementName.Californium  )
  public static readonly   EINSTEINIUM = new Element( 99, ElementSymbol.Es, ElementName.Einsteinium  )
  public static readonly       FERMIUM = new Element(100, ElementSymbol.Fm, ElementName.Fermium      )
  public static readonly   MENDELEVIUM = new Element(101, ElementSymbol.Md, ElementName.Mendelevium  )
  public static readonly      NOBELIUM = new Element(102, ElementSymbol.No, ElementName.Nobelium     )
  public static readonly    LAWRENCIUM = new Element(103, ElementSymbol.Lr, ElementName.Lawrencium   )
  public static readonly RUTHERFORDIUM = new Element(104, ElementSymbol.Rf, ElementName.Rutherfordium)
  public static readonly       DUBNIUM = new Element(105, ElementSymbol.Db, ElementName.Dubnium      )
  public static readonly    SEABORGIUM = new Element(106, ElementSymbol.Sg, ElementName.Seaborgium   )
  public static readonly       BOHRIUM = new Element(107, ElementSymbol.Bh, ElementName.Bohrium      )
  public static readonly       HASSIUM = new Element(108, ElementSymbol.Hs, ElementName.Hassium      )
  public static readonly    MEITNERIUM = new Element(109, ElementSymbol.Mt, ElementName.Meitnerium   )
  public static readonly  DARMSTADTIUM = new Element(110, ElementSymbol.Ds, ElementName.Darmstadtium )
  public static readonly   ROENTGENIUM = new Element(111, ElementSymbol.Rg, ElementName.Roentgenium  )
  public static readonly   COPERNICIUM = new Element(112, ElementSymbol.Cb, ElementName.Copernicium  )
  public static readonly      NIHONIUM = new Element(113, ElementSymbol.Nh, ElementName.Nihonium     )
  public static readonly     FLEROVIUM = new Element(114, ElementSymbol.Fl, ElementName.Flerovium    )
  public static readonly     MOSCOVIUM = new Element(115, ElementSymbol.Mc, ElementName.Moscovium    )
  public static readonly   LIVERMORIUM = new Element(116, ElementSymbol.Lv, ElementName.Livermorium  )
  public static readonly    TENNESSINE = new Element(117, ElementSymbol.Ts, ElementName.Tennessine   )
  public static readonly     OGANESSON = new Element(118, ElementSymbol.Og, ElementName.Oganesson    )

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

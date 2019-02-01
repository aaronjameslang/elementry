export const isElementSymbol = (x: any): x is ElementSymbol =>
  x in ElementSymbol // tslint:disable-line:no-unsafe-any // this is safe

// tslint:disable:max-line-length
// tslint:disable:no-multi-spaces
// tslint:disable:whitespace
export enum ElementSymbol {
H ='H' ,                                                                                                                                                 He='He',
Li='Li', Be='Be',                                                                                           B ='B' , C ='C' , N ='N' , O ='O' , F ='F' , Ne='Ne',
Na='Na', Mg='Mg',                                                                                           Al='Al', Si='Si', P ='P' , S ='S' , Cl='Cl', Ar='Ar',
K ='K' , Ca='Ca', Sc='Sc', Ti='Ti', V ='V' , Cr='Cr', Mn='Mn', Fe='Fe', Co='Co', Ni='Ni', Cu='Cu', Zn='Zn', Ga='Ga', Ge='Ge', As='As', Se='Se', Br='Br', Kr='Kr',
Rb='Rb', Sr='Sr', Y ='Y' , Zr='Zr', Nb='Nb', Mo='Mo', Tc='Tc', Ru='Ru', Rh='Rh', Pd='Pd', Ag='Ag', Cd='Cd', In='In', Sn='Sn', Sb='Sb', Te='Te', I ='I' , Xe='Xe',
Cs='Cs', Ba='Ba',          Hf='Hf', Ta='Ta', W ='W' , Re='Re', Os='Os', Ir='Ir', Pt='Pt', Au='Au', Hg='Hg', Tl='Tl', Pb='Pb', Bi='Bi', Po='Po', At='At', Rn='Rn',
Fr='Fr', Ra='Ra',          Rf='Rf', Db='Db', Sg='Sg', Bh='Bh', Hs='Hs', Mt='Mt', Ds='Ds', Rg='Rg', Cb='Cb',

                  La='La', Ce='Ce', Pr='Pr', Nd='Nd', Pm='Pm', Sm='Sm', Eu='Eu', Gd='Gd', Tb='Tb', Dy='Dy', Ho='Ho', Er='Er', Tm='Tm', Yb='Yb', Lu='Lu',
                  Ac='Ac', Th='Th', Pa='Pa', U ='U' , Np='Np', Pu='Pu', Am='Am', Cm='Cm', Bk='Bk', Cf='Cf', Es='Es', Fm='Fm', Md='Md', No='No', Lr='Lr',
}

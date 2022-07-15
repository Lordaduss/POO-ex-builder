import Sanduiche from "./Products/Sanduiche"
import SanduicheBuilder from "./Builders/SanduicheBuilder"
import Director from "./Directors/director"

const builder : SanduicheBuilder = new SanduicheBuilder()
const director : Director = new Director(builder)

builder.reset()

director.constructHotDog()
let hotdog : Sanduiche = builder.getSanduiche()
console.log("Criando um sanduiche do tipo: "+ hotdog.sanduicheType)
console.log("Pao: "+ hotdog.bread)
console.log("Proteina: "+ hotdog.protein)
console.log("Salada: "+ hotdog.salad)
console.log("Molho"+ hotdog.sauce)

builder.reset()

director.constructXSalada()
let xsalada : Sanduiche = builder.getSanduiche()
console.log("Criando um sanduiche do tipo: "+ xsalada.sanduicheType)
console.log("Pao: "+ xsalada.bread)
console.log("Proteina: "+ xsalada.protein)
console.log("Salada: "+ xsalada.salad)
console.log("Molho"+ xsalada.sauce)

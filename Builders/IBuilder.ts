import Bread from "../Ingredients/Bread";
import Protein from "../Ingredients/Protein";
import Salad from "../Ingredients/Salad";
import SanduicheType from "../Ingredients/SanduicheType";
import Sauce from "../Ingredients/Sauce";
import Sanduiche from "../Products/Sanduiche";


export default interface IBuilder{
    reset() : void
    getSanduiche() : Sanduiche
    addSauce(sauce : Sauce)
    setSanduicheType(value : SanduicheType)
    setBread(bread : Bread)
    setProtein(protein : Protein)
    setSalad(salad : Salad)
}
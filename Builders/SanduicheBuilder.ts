
import Bread from "../Ingredients/Bread"
import Protein from "../Ingredients/Protein"
import Salad from "../Ingredients/Salad"
import SanduicheType from "../Ingredients/SanduicheType"
import Sauce from "../Ingredients/Sauce"
import Sanduiche from "../Products/Sanduiche"
import IBuilder from "./IBuilder"

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche = new Sanduiche()

    reset(): void {
        this._sanduiche = new Sanduiche()
    }
    getSanduiche(): Sanduiche {
        return this._sanduiche
    }
    addSauce(Sauce: Sauce) {
        this._sanduiche.sauce.push(Sauce)
    }
    setSanduicheType(value: SanduicheType) {
        this._sanduiche.sanduicheType = value
    }
    setSalad(salad: Salad) {
        this._sanduiche.salad = salad
    }
    setProtein(protein: Protein) {
        this._sanduiche.protein = protein
    }
    setBread(bread: Bread) {
        this._sanduiche.bread = bread
    }


}
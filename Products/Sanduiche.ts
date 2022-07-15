import Bread from "../Ingredients/Bread"
import Protein from "../Ingredients/Protein"
import Salad from "../Ingredients/Salad"
import SanduicheType from "../Ingredients/SanduicheType"
import Sauce from "../Ingredients/Sauce"

export default class Sanduiche{
    private _sanduicheType : SanduicheType
    private _bread : Bread
    private _protein : Protein
    private _salad : Salad
    private _sauce : Sauce[] = []

    get sanduicheType() : SanduicheType{
        return this._sanduicheType
    }
    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value
    }

    get bread () : Bread{
        return this._bread
    }
    set bread(value : Bread){
        this._bread = value
    }

    get protein() : Protein{
        return this._protein
    }
    set protein(value : Protein){
        this._protein = value
    }

    get salad() : Salad{
        return this._salad
    }
    set salad(value : Salad){
        this._salad = value
    }

    addSauce (sauce: Sauce){
        this._sauce.push(sauce)
    }

    get sauce() : Sauce[]{
        return this._sauce
    }
}

import SanduicheType from "../Ingredients/SanduicheType"
import Bread from "../Ingredients/Bread"
import Protein from "../Ingredients/Protein"
import Salad from "../Ingredients/Salad"
import Sauce from "../Ingredients/Sauce"
import IBuilder from "../Builders/IBuilder"
export default class Director{

    constructor (private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG)
        this.builder.setBread(Bread.FRENCH)
        this.builder.setProtein(Protein.MEAT)
        this.builder.setSalad(Salad.NONE)
        this.builder.addSauce(new Sauce("Ketchup"))
        this.builder.addSauce(new Sauce("Mustard"))
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.HAMBURGER)
        this.builder.setBread(Bread.FRENCH)
        this.builder.setProtein(Protein.MEAT)
        this.builder.setSalad(Salad.TOMATOES)
        this.builder.addSauce(new Sauce("Mayo"))
    }
}
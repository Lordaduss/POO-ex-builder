import { isGeneratorFunction } from "util/types";
import Tree from "./Tree/Tree";
import TreeNode from "./Tree/TreeNode";


// Função responsável por mapear todas os estados possíveis do mundo dos blocos, e então colocar 
// todas estas possibilidades em uma árvore
function mapPossibilities(): void{
    var possibilitiesLeft: boolean = true;
    while(possibilitiesLeft){
        var i: number = 1;

        if(p1[2]>0){
            Tree.insert() //p2[0] = p1[2]
            new TreeNode() //p3[0] = p1[2]
        }else if(p1[1]>0){
            new TreeNode() //
            new TreeNode()
        }else if(p1[0]>0){
            new TreeNode()
            new TreeNode()
        }
    }
}

// Função responsável por buscar a possibilidade alvo na árvore
function bfsSearch(goalPile1,goalPile2,goalPile3): String{

}

const initialPile1: number[] = [3,2,1]
const InitialPile2: number[] = [0,0,0]
const initialPile3: number[] = [0,0,0]

// Inicialização da árvore. O primeiro nó é o estado inicial do problema 
const tree1: Tree = new Tree(1,initialPile1,InitialPile2,initialPile3)

// Estado final desejado. Cada array representa uma pilha, cada número representa uma letra do bloco: 
// A=1, B=2, C=3. Neste caso, o estado final desejado é com a pilha do meio contendo os blocos CBA, de cima para baixo
const goalPile1: number[] = [0,0,0]
const goalPile2: number[] = [3,2,1]
const goalPile3: number[] = [0,0,0]
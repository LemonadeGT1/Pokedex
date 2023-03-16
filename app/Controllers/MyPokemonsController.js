import { myPokemonsService } from "../Services/MyPokemonsService.js"
import { Pokemon } from "../Models/Pokemon.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"
import { Pop } from "../Utils/Pop.js"

function _drawMyPokemonList() {
  console.log('_drawMyPokemonList')
  let myPokemons = appState.myPokemons
  let template = ''
  myPokemons.forEach(p => template += Pokemon.myDisplayTemplate(p))
  setHTML('myList', template)
}


export class MyPokemonsController {
  constructor() {
    console.log('MyPokemonsController')
    this.getAllMyPokemon()
    appState.on('myPokemons', _drawMyPokemonList)
  }

  async catchPokemon(pokemon) {
    console.log('catchPokemon', pokemon)
    await this.addPokemon()
    await myPokemonsService.getAllMyPokemon()
  }

  async addPokemon() {
    try {
      await myPokemonsService.addPokemon()
      Pop.toast('You successfully caught a Pokemon!', 'success')
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getAllMyPokemon() {
    console.log('getAllMyPokemon Controller')
    try {
      await myPokemonsService.getAllMyPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}
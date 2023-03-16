import { Pop } from "../Utils/Pop.js"
import { masterPokemonsService } from "../Services/MasterPokemonsService.js"
import { MyPokemonsController } from "./MyPokemonsController.js"
import { Pokemon } from "../Models/Pokemon.js"
import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"


function _drawMasterPokemonsList() {
  console.log('_drawMasterPokemonsList')
  let masterPokemons = appState.masterPokemons
  let template = ''
  masterPokemons.forEach(p => template += Pokemon.masterDisplayTemplate(p))
  setHTML('masterList', template)
}

function _drawActivePokemon() {
  console.log('draw active pokemon')
  setHTML('activePokemon', Pokemon.activeDisplayTemplate(appState.activePokemon))
}



export class MasterPokemonsController {
  constructor() {
    console.log('MasterPokemonsController')
    this.getAllPokemon()
    appState.on('masterPokemons', _drawMasterPokemonsList)
    appState.on('activePokemon', _drawActivePokemon)
    appState.on('offset', this.getAllPokemon())
  }

  async getAllPokemon() {
    try {
      await masterPokemonsService.getAllPokemon()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  activatePokemon(pokemon) {
    console.log('activatePokemon ', pokemon)
    masterPokemonsService.getOnePokemon(pokemon)
  }

  changeMasterList(num) {
    console.log('changeMasterList ', num)
    masterPokemonsService.changeMasterList(num)
  }

}

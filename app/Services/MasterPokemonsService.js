import { appState } from "../AppState.js"


const masterApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})


class MasterPokemonsService {
  async getAllPokemon() {
    const res = await masterApi.get('pokemon?limit=10&offset=0')
    console.log('getAllPokemon res.data', res.data)
    appState.masterPokemons = res.data.results
    console.log('getAllPokemon appState.masterPokemons: ', appState.masterPokemons)
  }

  async getOnePokemon(pokemon) {
    const res = await masterApi.get('pokemon/' + pokemon)
    console.log('getOnePokemon: ', res.data)
    appState.activePokemon = res.data
    console.log(appState.activePokemon)
  }

}



export const masterPokemonsService = new MasterPokemonsService()
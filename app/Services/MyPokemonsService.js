import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";


const myApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/Michael/',
  timeout: 8000
})


class MyPokemonsService {
  async getAllMyPokemon() {
    const res = await myApi.get('pokemon')
    console.log('getAllMyPokemon res.data', res.data)
    appState.myPokemons = res.data
    console.log('getAllMyPokemon appState.myPokemons: ', appState.myPokemons)
    appState.emit('myPokemons')
  }

  async addPokemon() {
    const pokemon = appState.activePokemon
    const res = await myApi.post('pokemon', new Pokemon(pokemon))
    console.log('[Added Pokemon to myApi]', res.data)
    appState.myPokemons.push(new Pokemon(res.data))
    appState.emit('myPokemons')
  }


}

export const myPokemonsService = new MyPokemonsService()
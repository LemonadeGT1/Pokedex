


export class Pokemon {
  constructor(data) {
    this.masterId = data.id
    this.name = data.name
    this.nicname = data.nicname
    this.img = data.img | `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.base_experience = data.base_experience
  }

  static masterDisplayTemplate(pokemon) {
    return `
    <div class="bg-light text-dark card my-1 px-1 selectable" onClick="app.masterPokemonsController.activatePokemon('${pokemon.name}')">${pokemon.name}</div>
  `
  }

  static activeDisplayTemplate(pokemon) {
    return `
    <div class="col-10 text-center">
      <h3>${pokemon.name}</h3>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
        alt="${pokemon.name}" class="img-fluid">
    </div>
    <div class="col-6 text-start">
      <p>Height: <span>${pokemon.height}</span> / Weight: <span>${pokemon.weight}</span></p>
    </div>
    <div class="col-6 text-end">
      <p>Base Experience: ${pokemon.base_experience}</p>
    </div>
    <div class="col-10 text-center">
      <button class="btn btn-warning selectable pokeBG border-2" onClick="app.myPokemonsController.catchPokemon('${pokemon.name}')">
        <h1 class="text-warning">Catch!</h1>
      </button>
    </div>
    `
  }

  static myDisplayTemplate(pokemon) {
    return `
    <div class="bg-light text-dark card my-1 px-1 selectable" onClick="app.masterPokemonsController.activatePokemon('${pokemon.name}')">${pokemon.name}</div>
  `
  }

}
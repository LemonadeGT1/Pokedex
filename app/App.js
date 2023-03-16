import { ValuesController } from "./Controllers/ValuesController.js";
import { MasterPokemonsController } from "./Controllers/MasterPokemonsController.js";
import { MyPokemonsController } from "./Controllers/MyPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  masterPokemonsController = new MasterPokemonsController();
  myPokemonsController = new MyPokemonsController();
}

window["app"] = new App();

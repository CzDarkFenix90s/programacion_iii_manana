import { Veterinario, CirujanoVeterinario } from "./11_herencia_mp";

const vetGeneral = new Veterinario("Laura", "medicina general");
console.log(vetGeneral.nombre);
console.log(vetGeneral.especialidad);
vetGeneral.atender();

const vetCirujano = new CirujanoVeterinario("Andrés", "traumatología");
console.log(vetCirujano.nombre);
console.log(vetCirujano.especialidad);
vetCirujano.atender();

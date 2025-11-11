import { Veterinario, CirujanoVeterinario } from "./11_herencia_mp";

export class VeterinarioEmergencia extends Veterinario {
  constructor(nombre: string, especialidad: string) {
    super(nombre, especialidad);
  }

  atender(): void {
    console.log(`🚨 ${this.nombre} atiende EMERGENCIA de ${this.especialidad} ⚡`);
  }

  getTipoAtencion(): void {
    console.log("🆘 Atención inmediata a pacientes críticos");
  }
}

const vetGeneral = new Veterinario("Laura", "medicina general");
const vetCirujano = new CirujanoVeterinario("Andrés", "traumatología");
const vetEmergencia = new VeterinarioEmergencia("Ramírez", "urgencias");

console.log(vetEmergencia.nombre);
console.log(vetEmergencia.especialidad);
vetEmergencia.atender();
vetEmergencia.getTipoAtencion();

// Polimorfismo
const equipo: Veterinario[] = [vetGeneral, vetCirujano, vetEmergencia];
for (const v of equipo) v.atender();

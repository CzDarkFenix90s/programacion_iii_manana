export class Veterinario {
  public nombre: string;
  public especialidad: string;

  constructor(nombre: string, especialidad: string) {
    this.nombre = nombre;
    this.especialidad = especialidad;
  }

  atender(): void {
    console.log(`👨‍⚕️ ${this.nombre} atiende consulta de ${this.especialidad} 🐾`);
  }
}

export class CirujanoVeterinario extends Veterinario {
  constructor(nombre: string, especialidad: string) {
    super(nombre, especialidad);
  }

  atender(): void {
    console.log(`🔪 ${this.nombre} realiza cirugía de ${this.especialidad} 🏥`);
  }
}

// 👇 Estas líneas hacen que se muestre algo en consola
const vet1 = new Veterinario("Dr. Gómez", "perros");
const vet2 = new CirujanoVeterinario("Dra. Ramírez", "fracturas");

vet1.atender();
vet2.atender();

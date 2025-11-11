export class Paciente {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarInfo(): void {
    console.log(`🐾 Paciente: ${this.nombre}, Edad: ${this.edad} años`);
  }
}

const paciente1 = new Paciente("Luna", 3);
paciente1.mostrarInfo();

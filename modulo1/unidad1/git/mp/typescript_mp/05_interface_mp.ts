export interface Paciente {
  id: number;
  nombre: string;
  especie?: string;
}

const paciente1: Paciente = {
  id: 1,
  nombre: "Luna",
  especie: "Gato"
};

console.log("Datos del paciente:", paciente1);

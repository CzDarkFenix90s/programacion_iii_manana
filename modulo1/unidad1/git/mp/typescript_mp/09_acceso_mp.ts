export class Libro {
  public titulo: string;
  private cota: any;
  protected idGeneric: string = "991828982988";

  constructor(titulo: string) {
    this.titulo = titulo;
    this.generarCota();
  }

  private generarCota(): void {
    this.cota = new Date().toDateString();
  }

  getCota(): any {
    return this.cota;
  }

  getAtributes(): any {
    return {
      titulo: this.titulo,
      cota: this.cota,
      id: this.idGeneric
    };
  }
}

const libro1 = new Libro("El Principito");
console.log("Cota:", libro1.getCota());
console.log("Atributos:", libro1.getAtributes());

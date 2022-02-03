export class Tarea {
  constructor(
    public titulo: string,
    public completada: boolean = false,
    public id: string | null = null) {}
}

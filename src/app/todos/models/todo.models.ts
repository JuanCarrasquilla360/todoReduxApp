export class Todo {
    public id: number
    public texto: string
    public completed: boolean
    constructor(texto: string){
        this.texto = texto
        this.id = new Date().getTime()
        this.completed = false
    }
}
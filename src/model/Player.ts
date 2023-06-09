export default interface PlayerType{
    id: number,
    name: string,
    ia: boolean,
    color: string
}

export class Player {
    public id: number;
    public name: string;
    public ia: boolean;
    
    constructor(data:Player) {
        let {id, name, ia} = data
        this.id = id,
        this.name = name
        this.ia = ia
    }
}


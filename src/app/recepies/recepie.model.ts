export class Recepie{
    public name: String;
    public description: String;
    public image: String;

    constructor(name: string,desc: string, image:string)
    {
        this.name=name;
        this.description=desc;
        this.image=image;
    }
}
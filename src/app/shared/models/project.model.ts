export class Project {
    public name: string;
    public date: string;
    public description: string;
    public image: string;

    constructor(project: any = null){
        this.name = project ? project.name : null;
        this.date = project ? project.date : null;
        this.description = project ? project.description : null;
        this.image = project ? project.image : null;
    }
}
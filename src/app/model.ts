export class Model {
    user;
    items;
    constructor(){
        this.user="Emin";
        this.items = [
            new TodoItem("Spor",false),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Kitap",false),
            new TodoItem("Sinema",false),
          ];
    }
}

export class TodoItem{
    description;
    action;
    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}

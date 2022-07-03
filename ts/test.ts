class User{
  constructor(name: string) {
    this._name = name
  }
  private _name: string
  public get name(): string {
    return this._name
  }
  public set name(name: string){
      this._name = name
  }
}

const Tom = new User("Tom");
Tom.name = 'Bom';
console.log('Tom',Tom)
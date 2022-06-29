class Person {
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
  protected name:string;
  public age:number;
  private showPerson(){
    return `名字：${this.name} ; 年龄：${this.age}`
  }
  protected getPerson(){
    console.log('showPerson()',this.showPerson())
  }
};

class User extends Person{
  constructor(name:string,age:number){
    super(name,age);
    this.name = name;
  };
  //降级处理，允许类外部使用name变量
  public name:string;
  public show(){
    //方法在实例原型链上继承，属性由类继承
    this.getPerson()
  }
}

const Dency = new User('Dency',23);

Dency.show()

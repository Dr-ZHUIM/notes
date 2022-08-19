const propDecorator: PropertyDecorator = (...args: any[]) => {
  console.log('args', args)
}
const paramDecorator: ParameterDecorator = (...args: any[]) => {
  console.log('args', args)
}
class User {
  @propDecorator
  public name: string | undefined
  @propDecorator
  public static age: number = 20
  public show(see:string,go:number,@paramDecorator talk:string){
    
  }
}


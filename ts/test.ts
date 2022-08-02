const showDecorator:MethodDecorator = (...args:any[]) => {
  console.log(args);
}

class User{
  @showDecorator
  public show(...args:any[]){}
}

const Tom = new User();

Tom.show('tom-show-arg1','tom-show-arg2')
const ErrorDecorator = (title: string): MethodDecorator => {
  return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = () => {
      try{
        method()
      }catch(err:any){
        console.log(`%c${title}`,'color:green;font-size:20px');
        console.log(`%c${err.message}`,'color:red;font-size:16px');
      }
    }
  }
}

class User{
  @ErrorDecorator('查找用户报错！')
  find(){
    throw new Error('您查找的用户不存在！')
  }
  @ErrorDecorator('创建用户报错！')
  create(){
    throw new Error('创建用户数据不完整！')
  }
}

new User().find();
new User().create();
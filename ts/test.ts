type MyType = 'login' | 'store' | null

//声明一个装饰器工厂
const MessageDecoratorFactory = (type:MyType):ClassDecorator => {
   switch(type){
    case 'login' :{
      return (target: Function) => {
        target.prototype.message = (): void => {
          console.log('login ---- show message')
        }
      }
    };
    case 'store' :{
      return (target: Function) => {
        target.prototype.message = (): void => {
          console.log('store ---- show message')
        }
      }
    };
    default :{
      return (target: Function) => {
        target.prototype.message = (): void => {
          console.log('null ---- show message')
        }
      }
    }
  }
}

@MessageDecoratorFactory('login')
class LoginController {
  public message() { }
  public login() {
    this.message()
  }
}

@MessageDecoratorFactory('store')
class Store {
  public message() { }
  public getStore() {
    this.message()
  }
}

new LoginController().login()
new Store().getStore()
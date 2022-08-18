const UserDecorator:MethodDecorator = (...args:any[]) => {
  const [,,descriptor] = args;
  const method = descriptor.value;
  descriptor.value = () => {
    if(User.identity === Identity.admin){
      console.log("admin");
    }else if (User.identity === Identity.user){
      console.log("user");
    }else if (User.identity === Identity.unlogin){
      console.log("unlogin");
    }else{
      method()
    }
  }
}

enum Identity {
  user,admin,unlogin
}

class UserInterface {
  name : string
  identity ?: Identity
  constructor(name:string,identity?: Identity){
    this.name = name;
    this.identity = identity;
  };
  @UserDecorator
  showIdentity(){
    console.log("no identity")
  }
  @UserDecorator
  showMe(){
    console.log("show me ");
  }
}

const User = new UserInterface("Tom",Identity.unlogin);

const user = {
  name : 'Tom',
  isLogin : true
};

const AccessDecorator:MethodDecorator = (...args:any[]) => {
  const [,,descriptor] = args;
  const method = descriptor.value;
  descriptor.value = () => {
    if(user.isLogin){
      return method()
    };
    console.log('未登录');
    return;
  }
}
class Article {
  show(){
    console.log('显示文章')
  }
  @AccessDecorator
  store(){
    console.log('保存文章');
    
  }
}

new Article().store()
namespace User{
  export let name:string = 'Tom'
  export namespace Member{
    export let name:string = 'Bom'
  }
}

console.log(User.Member.name);  //Bom

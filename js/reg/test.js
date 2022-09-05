let str = "tomisbetter";
let reg = /\w/g;
while(res = reg.exec(str)){
  console.log('res',res)
}

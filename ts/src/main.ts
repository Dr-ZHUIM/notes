import {User} from './test'
const main:Function = (a:string)=>{
  const arr = [1,2,3,4,5];
  arr.map(ele=>{
    console.log('ele',ele)
  });
  console.log(a);
}

const a = User.name;

main(a);
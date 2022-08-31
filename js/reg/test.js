let str = `
 #1 aaa,go #
 #2 bbb,gogo #
 #3 ccc,gogogo # asd
 #4 ddd,gogogogo #
`;
const list = str.match(/^\s*#\d+\s+.+\s+#$/gm);
console.log(list); //[ '\n #1 aaa,go #', ' #2 bbb,gogo #', ' #4 ddd,gogogogo #' ]
const newList = list.map(item => {
  const newItem = item.replace(/\s*#\d+\s*/, '').replace(/#/, '');
  const [key, value] = newItem.split(',');
  return {
    key,
    value
  }
});
/**
 * [
  { key: 'aaa', value: 'go ' },
  { key: 'bbb', value: 'gogo ' },
  { key: 'ddd', value: 'gogogogo ' }
]
*/
console.log(newList)
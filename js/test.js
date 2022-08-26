let domTreeArray = [];

// domElement是查询到的元素
function mapElement(domElement) {
  let domArray = [];
  let childs = domElement.children;
  let length = childs.length;
  for (var i = 0 ; i < length ; i++ ){
    domArray.push({html:childs[i],id:childs[i].id});
  }
  domTreeArray = [...domTreeArray,domArray];
console.log('domTreeArray ', domTreeArray)
}
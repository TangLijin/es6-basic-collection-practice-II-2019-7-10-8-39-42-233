'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

  //collectionA.forEach(element -> );
  let bKeys = objectB.value;
  // let AkeyList = [];
  // //bKeys.forEach(element => )
  // //console.log(bKeys.map(i => objectB.values.includes(i) ? i - 1 : i));
  // collectionA.forEach(i => {
  //   AkeyList.push(i.key)
  // });
  //
  //
  //
  // return  bKeys.map(i => objectB.values.includes(i) ? i - 1 : i);


  // bKeys.filter(i => objectB.values.includes(i));
  // return '实现练习要求，并改写该行代码。';
  var result = [];
  var temp = {};
  collectionA.forEach(i => {
    if(bKeys.includes(i.key)){
      temp.key = i.key;
      temp.count = i.count - 1;
    }else {
      temp.key = i.key;
      temp.count = i.count;
    }
    result.push(temp);
    temp = {};
  })
  return result;
}

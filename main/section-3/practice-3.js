'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let element = { };
  let collectionACount = [];

  let firstIndex = 0;
  let lastIndex = 0;
  let current = collectionA[0];
  while(lastIndex < collectionA.length - 1){
      firstIndex = collectionA.indexOf(current);
      lastIndex = collectionA.lastIndexOf(current);
      element.key = current;
      element.count = lastIndex - firstIndex + 1;
      collectionACount.push(element);
      element = {};
  }


  let bKeys = objectB.value;
  let A = collectionACount.map(i => {
    // bKeys.includes(i.key) ? i.count -= i.count / 3 : i.count = i .count;
    let temp = {};
    temp.key = i.key;
    if(bKeys.includes(i.key)){
      temp.count = i.count - Math.floor(i.count / 3);
    }else {
      temp.count = i.count;
    }
    return temp;
  });
  return A;
}

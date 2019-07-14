'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collectionAChanged = [];
  collectionA.forEach(i => {
    if(i.length > 1){
      for(let j = 0; j < i.split('-')[1]; j++){
        collectionAChanged.push(i.split('-')[0]);
      }
    }
    else {
      collectionAChanged.push(i);
    }
  })

  let element = { };
  let collectionACount = [];

  let firstIndex = 0;
  let lastIndex = 0;
  let current = collectionAChanged[0];
  while(lastIndex < collectionAChanged.length - 1){
    firstIndex = collectionAChanged.indexOf(current);
    lastIndex = collectionAChanged.lastIndexOf(current);
    element.key = current;
    element.count = lastIndex - firstIndex + 1;
    collectionACount.push(element);
    current = collectionAChanged[lastIndex + 1];
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

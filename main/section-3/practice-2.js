'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

  let bKeys = objectB.value;
  let A = collectionA.map(i => {
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

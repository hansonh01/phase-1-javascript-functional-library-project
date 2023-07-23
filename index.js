function myEach(collection,callback){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            callback(collection[i]);
        }
    }else if(typeof collection === 'object' && collection !== null){
        const theArray = Object.values(collection);
        for(let i = 0; i < theArray.length; i++){
            callback(theArray[i]);
        }
    }
    return collection;
};

function myMap(collection,callback){
    if(Array.isArray(collection)){
        const myMapArray = [];
        for(let i = 0; i < collection.length; i++){
            myMapArray.push(callback(collection[i]));
        }
        return myMapArray;
    }else if(typeof collection === 'object' && collection !== null){
        const theValue = Object.values(collection);
        const theKey = Object.values(collection);
        const myMapArray = [];
        for(let i = 0; i < theValue.length; i++){
            myMapArray.push(callback(theValue[i],theKey[i]));
        };
        return myMapArray;
    };
    return [];
};

function myReduce(collection, callback, acc){
    if(Array.isArray(collection)){
        let startIndex = 0;
        if(acc === undefined){
            acc = collection[0];
            startIndex = 1;
        };
        for(let i = startIndex; i < collection.length; i++){
            acc = callback(acc, collection[i], collection);
        }
    }else if(typeof collection === 'object' && collection !== null){
        const theValue = Object.values(collection);
        const theKey = Object.keys(collection);
        let startIndex = 0;
        if(acc === undefined){
            acc = collection[theKey[0]];
            startIndex = 1;
        };
        for(let i = startIndex; i < theKey.length; i++){
            acc = callback(acc,collection[theKey[i]],collection);
        };
    };
    return acc;
};

function myFind(collection, predicate){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i])){
                return collection[i];
            };
        };
    }else if(typeof collection === 'object' && collection !== null){
        const theKey = Object.keys(collection);
        for(let i = 0; i < theKey.length; i++){
            if(predicate(collection[i])){
                return collection[i];
            };
        };
    };
    return undefined;
};

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      const filteredArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          filteredArray.push(collection[i]);
        }
      }
      return filteredArray;
    } else if (typeof collection === 'object' && collection !== null) {
      const keysArray = Object.keys(collection);
      const filteredArray = [];
      for (let i = 0; i < keysArray.length; i++) {
        const key = keysArray[i];
        if (predicate(collection[key])) {
          filteredArray.push(collection[key]);
        };
      };
      return filteredArray;
    };
    return [];
};

function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length;
    }else if(typeof collection === 'object' && collection !== null){
        return Object.keys(collection).length;
    };
    return 0;
};

function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    };
};

function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    };
};

function myKeys(object){
    const keyArray = [];
    for(const key in object){
        if(key in object){
            keyArray.push(key)
        };
    };
    return keyArray;
};

function myValues(object){
    const valuesArray = [];
    for(const key in object){
        if(key in object){
            valuesArray.push(object[key]);
        };
    };
    return valuesArray;
};
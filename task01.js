// 12.3 Task 1
const protoObj = {
  firstKey: 'firstValue',
  secondKey: 'secondValue'
};

const someObj = Object.create(protoObj);

someObj.thirdKey = 'thirdValue';

function foo(someObj){
  for (let key in someObj) {
    if (someObj.hasOwnProperty(key)) {
      console.log(key, someObj[key])
    }
  }
};

foo(someObj);

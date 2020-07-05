// 12.3 Task 2
const protoObj = {
  firstKey: 'firstValue',
  secondKey: 'secondValue'
};

const someObj = Object.create(protoObj);
const someString = 'firstKey';

someObj.thirdKey = 'thirdValue';

function foo(someString, someObj) {
	console.log(someString in someObj);
};

foo(someString, someObj);

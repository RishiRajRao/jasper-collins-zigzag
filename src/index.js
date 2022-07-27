// var arr1 = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// res= 5,9,3,7,1,6,2,8,4,10

const zigZagPrint = (arr1, arr2) => {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  const tempArr = [];
  while (i >= 0 && j >= 0) {
    if (arr1[i] % 2 !== 0) {
      tempArr.push(arr1[i]);
    }
    if (arr2[j] % 2 !== 0) {
      tempArr.push(arr2[j]);
    }
    i--, j--;
  }
  (i = 0), (j = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] % 2 == 0) {
      tempArr.push(arr1[i]);
    }
    if (arr2[j] % 2 == 0) {
      tempArr.push(arr2[j]);
    }
    i++, j++;
  }
  console.log(tempArr);
};

zigZagPrint([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

/* eslint-disable no-unused-vars */
export const arrayLenght = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};

export const arrayPush = (array, e) => {
  array[array.length] = e;
  return array;
};

export const arrayPush2 = (array, e) => {
  const lengthy = arrayLenght(array);
  array[lengthy] = e;
  const newLength = arrayLenght(array);
  return newLength;
};

export const arrayPop = (array) => {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
};

export const arrayShift = (arr) => {
  const firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;

  return firstElement;
};

// De acabar
/* const arrayJoin = (array, e) => {
  if ((e = '')) {
    const string = array + e;
    return string;
  }
};
 */

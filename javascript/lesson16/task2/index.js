var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    // console.log(i);
    return i;
  };
}

export { arr };
console.log(arr[5]());

function rgb(r, g, b) {
  let a = [r, g, b];
  let hexArr = a.map((item) => {
    if (item < 0) {
      item = 0;
    }
    if (item > 255) {
      item = 255;
    }
    let e = item.toString(16);
    if (e.length % 2 > 0) {
      e = '0' + e;
    }
    return e;
  });
  let str = '';
  for (hex of hexArr) {
    str = str + hex;
  }
  return str.trim().toUpperCase();
}

console.log(rgb(255, 0, 255));

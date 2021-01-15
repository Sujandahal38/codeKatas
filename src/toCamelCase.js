/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case) */

function toCamelCase(str) {
  let chars = '';
  let capitalize = false;
  for (let i = 0; i < str.length; i++) {
    let a = str[i];
    if (capitalize) {
      a = a.toUpperCase();
      capitalize = false;
    }
    if (str[i] === '_' || str[i] === '-') {
      capitalize = true;
      continue;
    }

    chars = chars + a;
  }
  return chars;
}

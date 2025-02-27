function reverse(str) {
  if (!str || str.length < 2) {
    return str;
  } else {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr = revStr + str[i];
    }
    return revStr;
  }
}

// C  e  s  a  r
// 0  1  2  3  4

const str = "Cesar is learning to code";
console.log(reverse(str));

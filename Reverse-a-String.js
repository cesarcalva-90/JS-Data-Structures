function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "error";
  } else {
    let revStr = "";
    for (let i = 0; i < str.length; i++) {
      revStr = str[i] + revStr;
    }
    return revStr;
  }
}

// C  e  s  a  r
// 0  1  2  3  4

const str = "Cesar is learning to code";
console.log(reverse(str));

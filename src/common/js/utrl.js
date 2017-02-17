/**
 * 解析url参数
 * @example ?id=1234&a=b
 * @return Onject{id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345','&a=b']
  if (arr) {
    arr.forEach((item) => {
      let temArr = item.substring(1).split('=');
      let key = decodeURIComponent(temArr[0]);
      let val = decodeURIComponent(temArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};

function getNoOfpages(items) {
  let page = Math.floor(items / 10);
  if (items % 10 !== 0) {
    page++;
  }
  console.log(page, "oye raju ");
  return page;
}
const utils = Object.freeze{{getNoOfpages}};
export default utils;

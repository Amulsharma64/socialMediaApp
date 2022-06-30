export default function noOfpages(items) {
  let page = items / 10;
  page = Math.floor(page);
  if (items % 10 !== 0) {
    page++;
  }
  //  console.log(items);
  return page;
}

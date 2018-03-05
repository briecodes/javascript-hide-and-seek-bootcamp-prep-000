function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  // Option 1, using element ID (useful if need to target specific area):
  // const listEd = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  //Option 2, using only class name (useful if general filter is OK):
  const listEd = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < listEd.length; i++) {
    listEd[i].innerHTML = (parseInt(listEd[i].innerHTML) + n).toString();
  }
}

function deepestChild(){
  // var inTooDeep = [];
  var inTooDeep = document.getElementById('grand-node').querySelectorAll("div");
  return inTooDeep[0].innerHTML;
  // return document.querySelector('#grand-node div div div div');
  // let current = inTooDeep;
  // let next = [];
  // let isitaString = n => (typeof n === 'string');
  
  // for (let i = 0; i < inTooDeep.length; i++){
  //   if (typeof inTooDeep[i] === 'string'){
  //     return inTooDeep[i];
  //   }
  // }
  // while (current) {
  //   if (isitaString(current)) {
  //     return current;
  //   }
  //   if (Array.isArray(current)) {
  //     for (let i = 0; i < current.length; i++) {
  //       next.push(current[i])
  //     }
  //   }
  // }
}
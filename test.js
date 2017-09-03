function haozi_changshou(action){
  ret = `
    你能不能别${action}了，对身体不好
    耗子，你知道....长寿的秘诀吗？
    因为他们不${action}
    错！因为他们不管闲事`
  console.log(ret)
}
haozi_changshou('吃冰棍')
haozi_changshou('喝可乐')
haozi_changshou('熬夜')








function combineItemAndList(target, list){
  console.log(target)
  return list.map(item=>{
  // return list.map(item=>{
    let arr = Array.isArray(target)?target:[target]
    return arr.concat(item)
  })
}

function combineTwoList(listA, listB){
  // console.log(listA,listB)
  return listA.reduce((ret, item)=>ret.concat(combineItemAndList(item,listB)), [])
}

function combineList(...listOfList){
  return listOfList.reduce(combineTwoList)
}
// ['好看','很丑']
// let result = combineList(['红色','绿色'],['足球','篮球'],['好看','很丑'])
// console.log(result)
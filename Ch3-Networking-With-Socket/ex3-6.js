const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.pop()
theList.shift()
theList.splice(4,0,"hello world")
//console.log(theList)
theList[3] = "Middle"
//console.log(theList)
theList.push("LAST")

theList.unshift("FIRST")

theList.splice(2,2)
theList.splice(4,2)
console.log(theList)
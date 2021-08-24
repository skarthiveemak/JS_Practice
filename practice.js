let numbersarray = [
    {number: 5441, name: 'siva'}, 
    {number :920215,name: 'karthi'},
    {number:27,name: 'keyan'} 
   ]


function comparefunction (a,b) {
  debugger
  if(a.name < b.name){
    return -1
  }
  else if(a.name > b.name){
    return 1
  }
  return 0
}

numbersarray.sort(comparefunction);

console.log(numbersarray);





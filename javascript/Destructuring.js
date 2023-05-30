const arr = [1, 2, 3, 4, 5];

const [first, ...middle] = arr;

let sum = 0;
for (let i of middle) {
  sum += i;
}
console.log(sum);
console.log(first);


const profile = {
  username: 'ram',
  age : 34,
  level : 99,
  rank : 'SS',
}

const makeplayer= (username,age,level,rank)=>{
  return {
  username,
  age,
  level,
  rank,
  };
}
const dev= makeplayer("king",12,107,"sss")
console.log(dev)




const [Hyouka,MYTEEN] = ["Oreki","Hachigaya"];
console.log(Hyouka,MYTEEN)

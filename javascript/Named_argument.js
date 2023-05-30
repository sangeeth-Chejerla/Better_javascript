const makeprofile = (username, type, mana,ranking) => {
  return {
    username: username + " " + ranking,
    type,
    mana,
  }
}

const humanoid = makeprofile("Bluff","elf",390, "SS")

console.log(humanoid)

//named arguments

const person = (firstname,lastname)=>{
  return {
    fullname : firstname + " " + lastname
  };
}

const full = person("Eren","Yeager")
console.log(full)

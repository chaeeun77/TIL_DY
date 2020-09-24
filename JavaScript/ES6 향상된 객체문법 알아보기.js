const address = "Seoul";
const members = {};
const addFamily = function(age, name, role){
    this.members[role] = {age, name};
}

const getHeadcount = function(){
    return Object.keys(this.members).length;
}

const family = {address, members, addFamily, getHeadcount} //이 때 {변수명} 으로 정의한 객체는 {변수명 : 변수값} 으로 정의된 것과 동일하다. 이것은 문자열, 객체, 함수등 자료형에 관계없이 가능!!



family.addFamily(30,"chloe", "aunt")
family.addFamily(3,"lynn", "niece")
family.addFamily(10,"dangdangi", "dog")

console.log(family)
console.log(family.getHeadcount())
console.log(family.address)
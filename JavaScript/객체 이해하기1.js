const family = {   //family.addFamily = function(age, name, role) { ~~~}

    "address" : "Seoul",
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {   // this.members = {} family.members기 때문에. this.members[role] = { role : {age : age, name : name} }
            age : age,
            name : name
        };
    },
    getHeadcount : function() {
        return Object.keys(this.members).length; //Object.keys => 객체안에 있는 keys를 반환하는것.
    }
};


console.log(family.addFamily(27,"용현","남동생"));
console.log(family.addFamily(25,"채은","여동생"));
console.log(family.addFamily(29,"대훈","형오"));//추가
console.log(family.getHeadcount())
console.log(family.members)
console.log(Object.keys(family.members))

const printMembers = function () {
    const members = family.members;
    for (role in members){ //index는 값을 뽑아낸다.
        console.log("role => " + role + ", name => " + members[role].name + ", age => " + members[role].age);
    }
}

printMembers();
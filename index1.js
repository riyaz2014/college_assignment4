let student = {
    name1 : "riyaz", 
    rollNo: 34 , 
    class1: "D15A", 
    college: "vesit",
    print : function(){
        console.log(`name : ${this.name1}`)
        console.log(`roll No : ${this.rollNo}`)
        console.log(`class ${this.class1}`)
        console.log(`college : ${this.college}`)
    }

}

student.print()

console.log("")
console.log("print by constructor")

function student1(name1 , rollNo , class1 ,college){
    this.name1 = name1
    this.rollNo = rollNo
    this.class1 = class1
    this.college = college

    this.print = ()=>{
        console.log(`name : ${this.name1}`)
        console.log(`roll No : ${this.rollNo}`)
        console.log(`class ${this.class1}`)
        console.log(`college : ${this.college}`)
    }

}

let student2 = new student1("riyaz" , 34 , "D15A" , "vesit")
student2.print()


function takeInput(){
    let roll = document.getElementById('rollNo').value
    if(roll == 0){
        alert('roll Number cant be zero')
    }
    else{
        student.rollNo = roll;
        console.log("")
        console.log("printing after changing roll no")
        console.log(student.print())
    }
}

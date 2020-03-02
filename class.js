class Student{
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.school = "primary school"
    }
    
}

const std1 = new Student(1, "mr");
const std2 = new Student(2, "ms");
console.log(std1.name, std2.name);
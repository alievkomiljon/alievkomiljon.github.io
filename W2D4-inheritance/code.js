String.prototype.filter = function(string_arr){
    let temp_arr = this.split(' ');
    return temp_arr.filter(a => !string_arr.includes(a)).join(' ');
};

// Sending output to console
console.log("I am not feeling good today, I don't like food in Argiro".filter(["don't", "not"]));

Array.prototype.bubbleSort = function(){
    let len = this.length;
    let temp;
    for(let j=0; j<len-1; j++){
        for(let i = 0; i < len-1; i++){
            if(this[i] > this[i+1]){
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
            };
        }
    }
    return this;
}
// Sending output to console
console.log([4,9,13,1,-5,10].bubbleSort());

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){}
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}


// Sending output to console
let teacher = new Teacher();
teacher.initialize("Patrick", 40)
console.log(teacher.teach("Math"));
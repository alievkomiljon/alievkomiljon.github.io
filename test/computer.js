function Computer(inRam, inCpu, inStorage){
    this.ram = inRam;
    this.cpu = inCpu;
    this.storage = inStorage;
    }
Computer.prototype.runProgram = function(inProgram){
    console.log('running:' + inProgram);
}
    

 function Laptop(inBattery){
     this.battery = inBattery;
     
 }
 Laptop.prototype = Object.create(Computer.prototype);
 Laptop.prototype.carryAround = function(){
    console.log("carrying laptop:  cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery)
 }
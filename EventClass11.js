const EventEmitter=require('events');
const fs = require("fs");
class EventClass11 extends EventEmitter{
    constructor(){
        super();
        this.onFileName();
    }
onFileName(){
    this.on('FileName',(data)=>{
        fs.writeFile(data,"hii matan",()=>{})
    })
}
emitFileName(data){
    this.emit('FileName',data)
}
}
module.exports= new EventClass11();
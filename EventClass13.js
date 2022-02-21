const EventEmitter=require('events');
const fs = require("fs");
class EventClass13 extends EventEmitter{
    constructor(){
        super();
        this.onPrintNames();
    }

    onPrintNames(data){
        this.on('PrintNames',(data)=>{
            fs.writeFile('./mynames.txt',data.toString(),()=>{})
        })
    }
    emitPrintNames(data){
        this.emit('PrintNames',data)

    }
}
module.exports=new EventClass13();
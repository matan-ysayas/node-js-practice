const EventEmitter=require('events');
const fs = require("fs");
class EventClass14 extends EventEmitter{
    constructor(){
        super();
        this.onPrintNum();
    }

    onPrintNum(){
        this.on('PrintNum',(data)=>{
            fs.writeFile('./numArray.txt',data.toString(),()=>{})

        })
    }
    emitPrintNum(data){
        this.emit('PrintNum',data.filter((item)=>item>18))
    }
}
module.exports=new EventClass14();
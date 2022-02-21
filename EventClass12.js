const EventEmitter=require('events');
const fs = require("fs");
class EventClass12 extends EventEmitter{
    constructor(){
        super();
        this.onCreate();
    }

onCreate(){
    this.on('create',(name,cont)=>{
        fs.writeFile(name,cont,()=>{})

    })
    
}
emitCreate(name,cont){
    this.emit('create',name,cont)
}



}
module.exports=new EventClass12 ();
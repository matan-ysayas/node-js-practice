const EventEmitter=require('events');

class myEventClass2 extends EventEmitter{
    constructor(){
        super();
        this.onListening();
    }
    onListening(){
        this.on('Listening',(data)=>{
            console.log("im Listening",data);
        })
    }
    emitListening(data){
        this.emit('Listening',data)
    }
}
module.exports=new myEventClass2();
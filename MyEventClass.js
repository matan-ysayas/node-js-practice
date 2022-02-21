const EventEmitter=require('events');

class MyEventClass extends EventEmitter {
    constructor(){
        super();
        this.onPrintNow();
        this.onDoNow();
      this.onPrintNames();
    }
    
    onPrintNow(){
        this.on('PrintNow',(dataItem)=>{
            console.log("print now event",dataItem);
        })
    }
    emitPrintNow(data){
        this.emit('PrintNow',data)
    }

    onDoNow(){
        this.on('doNow',(dataItem)=>{
            console.log("matan");
        })
    }
    emitDoNow(data){
        this.emit('doNow',data)
    }
    onPrintNames(){
        this.on('PrintNames',(dataItem)=>{
       for(let i=0;i<dataItem;i++){
           console.log("heellow there");
       }
           
        })
    }
    emitPrintNames(data){
         this.emit('PrintNames',data )
    }
}

module.exports=new MyEventClass();




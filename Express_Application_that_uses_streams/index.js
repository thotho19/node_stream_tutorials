var stream = require('stream'),
    util = require('util'),
    express = require('express'),
    app = express();
    util.inherits(stateStream , stream.Readable);

    function stateStream(limit){
        stream.Readable.call(this);
        this.limit = limit;
    }
    stateStream.prototype._read = function(size){
        if(this.limit === 0){
            this.push(); //done
        }else{
            console.log(util.inspect(process.memoryUsage()));
            this.push(util.inspect(process.memoryUsage()));
            this.push('n');
            this.limit--;
        }
    };

app.get('/' , (req , res)=>{
    var StateStream = new stateStream(10);
    StateStream.pipe(res);
});
app.listen(3000 , ()=> console.log('server start working ....'));
var log ={
    kbToMb: function(bytes){
        const i = Math.round(bytes/1024);
        console.log('10000 kb in megabyte is ' + i);
    }
}
module.exports = log
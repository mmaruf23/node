var fs = require('fs');
fs.open('new.txt','w',function(err,file){
    if (err) throw err;
    console.log('Done!');
});
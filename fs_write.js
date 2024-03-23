var fs = require('fs');
fs.writeFile('newwrite.txt','Isi lagi',function(err){
    if (err) throw err;
    console.log('Done!');
});
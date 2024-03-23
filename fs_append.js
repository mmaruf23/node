const fs = require('fs');

fs.appendFile('appendded.txt','cuma test',function(err){
    if (err) throw err;
    console.log('Tersimpan')
});
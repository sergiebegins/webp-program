const webp=require('webp-converter');

const imagesFolder = './images/';
const fs = require('fs');

fs.readdir(imagesFolder, (err, files) => {
    files.forEach(file => {
       let dosya =  file.split('.');
        let result='';
        if(dosya[1] == 'gif'){
             result = webp.gwebp("./images/"+file,"output/"+dosya[0]+".webp","-q 80");
        }else{
             result = webp.cwebp("./images/"+file,"output/"+dosya[0]+".webp","-q 80");
        }
        result.then((response) => {
            console.log(response);
        });
    });
});



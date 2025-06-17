/**
 * this function allows to convert text files to json to adapt the main
 */
export function getTextFile(filename, lang, topic) {
    
    let fs = require("fs");

    // fetch text file which stored in local envrionment
    fs.readFile(`@/public/text/${filename}.text`, "utf-8");

    // split words between the 

    switch(lang){
        case "en":
            return 
    }
};
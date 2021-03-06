const fs = require('fs');

module.exports = {
    writeToFile: (res, dir, fileName, data) => {
        fs.writeFile(`${dir}/${fileName}`, data, (err) => {
            if (err) console.log(err);
        });
    },
    deleteFile: (path) => {
        fs.unlink(path, err => {
            if (err) console.log(err);
        });
    }
}
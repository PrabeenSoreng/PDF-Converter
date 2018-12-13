const word2pdf = require('word2pdf');
const fs = require('fs');

const helper = require('../helper/helper');

exports.WordToPdf = (req, res) => {
    try {
        const base64file = req.body.file.split(';base64,').pop();
        console.log(base64file);
        fs.writeFile(`./uploads/${req.body.name}`, base64file, 'base64', async(err) => {
            if (err) console.log(err);
            const data = await word2pdf(`./uploads/${req.body.name}`);
            const fileName = req.body.name.split('.')[0];
            await helper.writeToFile(res, './converted', `${fileName}.pdf`, data);
            return res.status(200).json({ message: 'File converted successfully' });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
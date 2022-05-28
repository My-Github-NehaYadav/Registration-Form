const fs = require('fs');
module.exports = (req, res, next) => {
    if (typeof (req.file) === 'undefined' || typeof (req.body) === 'undefined') {
        return res.status(404).json({
            result : "Proble with sending data!"
        })
    };
    let Image = req.file.path;
    console.log(req.file)
    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
        fs.unlinkSync(Image)
        return res.status(404).json({
            result : "This file not support!"
        });
    };
    if (req.file.size >= 1024 * 5) {
        fs.unlinkSync(Image)
        return res.status(404).json({
            result : "File too large!"
        });
    };
    next();
};


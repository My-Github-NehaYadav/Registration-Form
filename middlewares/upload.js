const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, res, cd){
        cd(null, './public/');
    },
    filename: function(req, file, cd){
        cd(null, file.originalname);
    }
})

const fileFilter = (req, file, cd ) =>{
    cd(null, true);
};

let upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload.single('profile');


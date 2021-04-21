var multer  = require('multer')
var path = require('path')

module.exports = { 
    dest: path.resolve( __dirname, "..", "Public", "Uploads" ),
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve( __dirname, "..", "Public", "Uploads" ))
        },
        filename: function (req, file, cb) {
            cb(null,  Date.now()+'-'+file.originalname)
        },
        // fileFilter: function (req, file, cb) {
        //     var filer = [
        //         'image/jpeg',
        //         'image/png',
        //     ]

        //     if(filter.includes(file.mimetype)){
        //         cb(null, true)
        //     }else{
        //         cb('erro', false)
        //     }
        // }
    }),
}
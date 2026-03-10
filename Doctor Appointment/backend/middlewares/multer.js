import multer from 'multer'
// handle file uploads
// diskStorage --> tells multer to save files on disk
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
    callback(null, 'uploads/')   // folder where files will be saved
  },
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload
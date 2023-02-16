const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')
const {loginUserController, signUpUserController, getUser, getUserController, getUsersWhoBookedEvent, signUpAdminController, editUserController} = require('../controllers/userController');
const authUser = require('../middlewares/authUser');
const { forgetPassController } = require('../controllers/forgetPassControllers');

router.post('/loginUser', loginUserController);
router.post('/signUpUser', signUpUserController);
router.post('/signUpAdmin', signUpAdminController);
router.get('/getUser', authUser, getUserController);
router.get('/getUsersWhoBookedEvent/:eid', authUser, getUsersWhoBookedEvent);
router.put('/edit', authUser, editUserController);
router.put("/forgetPassword", forgetPassController);



var storage = multer.diskStorage({

    destination: "./public/profilepics",
    filename: function(req, file, cb) {
        let extention = path.extname(file.originalname);
        cb(null, req.params.name + extention );
    }
})

var upload = multer({ storage: storage }).single('file');


router.post('/profilepic/:name', function(req, res) {

    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        console.log(req.file);
        return res.status(200).send(req.file)

    })

});


module.exports = router;
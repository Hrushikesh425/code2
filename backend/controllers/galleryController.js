const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename:async (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
        await Image.create({
            url: `/images/${Date.now() + ext}`
        });

        
    }
});


const Image = require('../models/Image');

// GET /api/images
router.get('/', (req, res) => {
    Image.find()
        .then(images => {
            res.json({ images,success:true });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// DELETE /api/images/:id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Image.findByIdAndDelete(id)
        .then(image => {
            fs.unlinkSync(`public${image.url}`);
            res.json({ message: 'Image deleted successfully',success:true });
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

// POST /api/images

var upload = multer({ storage: storage }).single('file');

router.post('/', function(req, res){
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        console.log(req.file)
        return res.status(200).json({
            success:true
        })
    })
})

module.exports = router;
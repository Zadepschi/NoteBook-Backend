
const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const routes = require('./NoteRoutes.js');
const cors = require('cors');
const multer = require('multer');




require('dotenv').config();

mongoose.set("strictQuery", false);


const PORT = 4444 || process.env.port;

app.use(express.json());
app.use(cors());


app.use('/uploads', express.static('uploads'))

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO')).
catch((err) => console.log(err))

app.use(routes);

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads')
        }
        cb(null, 'uploads')
    },
    filename:  (_, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({storage});
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});



app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`);
})

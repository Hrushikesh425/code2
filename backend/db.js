const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectToMongo = () => {
    mongoose.connect("mongodb+srv://blogtrex:RYeHNWHRZCOGBCmk@cluster0.p1cqlha.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;       
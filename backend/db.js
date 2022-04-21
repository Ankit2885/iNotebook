const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb+srv://Ankit2885:officialankit@cluster0.mlx1d.mongodb.net/Inotebook?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect to mongoose successfully");
    })
}
module.exports = connectToMongo;
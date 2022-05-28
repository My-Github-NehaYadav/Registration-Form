require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    family: 4
}).then(() => {
    console.log("database connection successfully!");
}).catch((err) => {
    console.log(err);
})
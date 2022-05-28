// const db = require('./connection/db_connection');
// const routes = require('./routes/users.routes');
// const fileUpload = require('express-fileupload');
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(fileUpload());
// app.use('/', routes);


// app.listen(process.env.PORT, function (err) {
//     if (err) {
//         console.log(err);
//     };
//     console.log(`server is running on port no ${process.env.PORT}`);
// });

const db = require('./connection/db_connection');
const routes = require('./routes/users.routes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(process.env.PORT, function (err) {
    if (err) {
        console.log(err);
    };
    console.log(`server is running on port no ${process.env.PORT}`);
});
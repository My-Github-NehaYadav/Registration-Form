const users = require('../model/user.model');
const nodemailer = require("nodemailer");
const signupSchema = require('../schemas/signup.schema').Schema;
const uploadFileSchema = require('../schemas/uploadfile.schema').Schema;


const sign_up = async function (req, res) {
    let isValid = signupSchema.validate(req.body);
    if (isValid.error) {
        return res.status(404).send({ result: isValid.error.message });
    };

    try {
        let result1 = users.create(req.body);
        return res.status(200).send({ result: 'Registration successfully.' });
        // let transporter = await nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASSWORD,
        //     }
        // });

        // let mailOptions = {
        //     from: process.env.MAIL_USER,
        //     to: req.body.email,
        //     subject: process.env.SUBJECT,
        //     text: process.env.TEXT
        // };
        // await transporter.sendMail(mailOptions, async function (err, data) {
        //     if (err) {
        //         console.log(err);
        //         return res.status(404).send({
        //             result: err,
        //             message: "May be your passwprd is wrong!"
        //         });
        //     } else {
        //         try {
        //             const result = await users.findOne({ 'email': req.body.email })
        //             if (result !== null) {
        //                 return res.status(409).send({ message: "This Email Already Exists !" });
        //             } else {
        //                 let result1 = users.create(req.body);
        //                 return res.status(200).send({ result: 'Registration successfully.' });
        //             }
        //         } catch (err) {
        //             console.log(err)
        //             return res.status(500).send({ result: err });
        //         }
        //     }
        // })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ result: err });
    }
};

const uploadFile = async function (req, res) {
    let payload = {
        profile: req.file.path,
    };

    let isValid = uploadFileSchema.validate(payload);
    if (isValid.error) {
        return res.status(404).send({ result: isValid.error.message });
    }

    try {
        let result = await users.find({});
        // console.log(result)
        try {
            let result1 = await users.findByIdAndUpdate(req.params.id, payload);
            return res.status(200).send({ result: 'fileuploaded successfully.' });
        }
        catch (err) {
            console.log(err)
            return res.status(500).send({ result: err });
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ result: err });
    }
}


module.exports = { sign_up, uploadFile };

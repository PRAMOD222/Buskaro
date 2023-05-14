import User from "../../models/User"
import connectDb from "../../middlware/mongoos"
let CryptoJS = require("crypto-js");
let jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        let user = await  User.findOne({"email": req.body.email})
        const bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
        let decryptedPass =bytes.toString(CryptoJS.enc.Utf8);
        if(user){
            if (req.body.email == user.email && req.body.password == decryptedPass){
                let token = jwt.sign({ email:user.email, name:user.name}, 'jwtsecret');
                res.status(200).json({success: true , token})
            }
            else{
                res.status(200).json({success: false ,error : "Invalid Credential"})
            }
        }
        else{
            res.status(200).json({success: false ,error : "No User found"})
        }
    }
    else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);
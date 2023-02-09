const UserSchema = require("../models/User.Schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.forgetPassController = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // find user
        const user = await UserSchema.findOne({ email });

        if (!user) {
            console.log("----------- forgetPassController.js: forgetPassController: user is null---------");
            res.json({
                success: false,
                message: "User not found"
            })

        }

        // update password
        const salt = await bcrypt.genSalt(10);
        const secretPassword = await bcrypt.hash(newPassword, salt);

        user.password = secretPassword;

        // save user
        const updatedUser = await user.save();

        if (!updatedUser) {
            console.log("----------- forgetPassController.js: forgetPassController: updatedUser is null---------");
            res.json({
                success: false,
                message: "Password not updated"
            })

        }

        res.status(200).json({
            success: true,
            message: "Password updated successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

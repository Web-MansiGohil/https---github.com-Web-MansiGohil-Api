import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Model/User.js";

export const register = async (req, res) => {
    const { Name, Email, Password } = req.body;

    if (Name == "" || Email == "" || Password == "") {
        return res.json({
            mess: "All filed are require"
        })
    }

    let user_data = await User.findOne({ Email })
    if (user_data)
        return res.json({
            mess: "User is already exist...",
            success: false
        });

    const hashPassword = await bcrypt.hash(Password, 10);

    user_data = await User.create({
        Name,
        Email,
        Password: hashPassword
    });

    res.json({
        mess: "User created susseccfully",
        success: true,
        user_data
    });
};

export const login = async (req, res) => {
    const { Email, Password } = req.body;

    if (Email == "" || Password == "") {
        return res.json({
            mess: "All filed are require"
        })
    }

    let user_data = await User.findOne({ Email })
    if (!user_data)
        return res.json({
            mess: "User is not  exist...",
            success: false
        });

    //bcrypt password
    const validPassword = await bcrypt.compare(Password, user_data.Password);
    if (!validPassword)
        return res.json({
            mess: "Invalid Password", success: false
        })

    //token
    const token = jwt.sign({ user: user_data._id }, process.env.JWT);

    res.json({
        mess: `Welcom ${user_data.Name}`,
        token,
        success: true
    })
};
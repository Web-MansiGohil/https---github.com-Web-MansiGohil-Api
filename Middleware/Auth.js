import jwt from "jsonwebtoken";
import { UserModule } from "../Model/User";

export const isAuth = async (req, res, next) => {
    const token = req.header("Auth");

    if (!token)
        return res.json({
            message: "Log in first"
        });

    const decode = jwt.verify(token, process.env.JWT);
    const id = decode.userId;

    const user = await UserModule.findById(id);

    if (!id)
        return res.json({
            message: "User not exist",
            success: false
        });

    req.user = user;

    next();
}
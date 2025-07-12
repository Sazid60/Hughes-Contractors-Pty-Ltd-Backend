import AppError from "../../errorHelpers/AppError";
import { User } from "./user.model";
import httpStatus from 'http-status-codes';
import bcrypt from "bcryptjs";
import { IUser } from "./user.interface";

const createUser = async (payload: Partial<IUser>) => {

    const { email, password, ...rest } = payload

    const isUserExist = await User.findOne({ email })

    if (isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User Already Exists")
    }

    const hashedPassword = await bcrypt.hash(password as string, 10)

    const user = await User.create({
        email,
        password: hashedPassword,
        ...rest
    })

    return user
}


export const userServices = {
    createUser,
}
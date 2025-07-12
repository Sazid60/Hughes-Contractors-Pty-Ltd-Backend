/* eslint-disable no-console */
import { envVars } from "../config/env"
import { IUser, Role } from "../modules/user/user.interface"
import { User } from "../modules/user/user.model"
import bcrypt from 'bcryptjs';

export const seedAdmin = async () => {
    try {
        const isSuperAdminExist = await User.findOne({ email: envVars.ADMIN_EMAIL })
        if (isSuperAdminExist) {
            // console.log("Super Admin Already Exists!")
            return
        }
        console.log("Trying To Create Super Admin")
        const hashedPassword = await bcrypt.hash(envVars.ADMIN_PASSWORD, Number(envVars.BCRYPT_SALT_ROUND))

        const payload: IUser = {
            name: "Admin",
            role: Role.ADMIN,
            email: envVars.ADMIN_EMAIL,
            password: hashedPassword,

        }

        await User.create(payload)

    } catch (error) {
        console.log(error)
    }
}
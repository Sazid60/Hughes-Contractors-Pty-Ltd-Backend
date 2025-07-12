import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { contactRoute } from "../modules/email/email.route";
import { projectRoutes } from "../modules/project/project.route";
import { labourRoutes } from "../modules/labour/labour.route";
import { equipmentRoutes } from "../modules/equipment/equipment.route";

export const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path: "/contact",
        route: contactRoute
    },
    {
        path: "/projects",
        route: projectRoutes
    },
    {
        path: "/labours",
        route: labourRoutes
    },
    {
        path: "/equipments",
        route: equipmentRoutes
    },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})


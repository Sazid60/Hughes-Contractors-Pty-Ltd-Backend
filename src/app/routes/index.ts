import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { contactRoute } from "../modules/email/email.route";
import { projectRoutes } from "../modules/project/project.route";
import { labourRoutes } from "../modules/labour/labour.route";
import { equipmentRoutes } from "../modules/equipment/equipment.route";
import { termRoutes } from "../modules/terms/term.route";
import { certificationRoutes } from "../modules/certifications/certification.route";
import { reviewRoutes } from "../modules/review/review.routes";


export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/contact",
    route: contactRoute,
  },
  {
    path: "/projects",
    route: projectRoutes,
  },
  {
    path: "/labours",
    route: labourRoutes,
  },
  {
    path: "/equipments",
    route: equipmentRoutes,
  },
  {
    path: "/terms", 
    route: termRoutes,
  },
  {
    path: "/certifications", 
    route: certificationRoutes,
  },
  {
    path: "/reviews", 
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

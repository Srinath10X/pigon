import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller";

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.post("/signout", signOut);

export default router;

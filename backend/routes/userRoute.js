import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSidebar} from "../controllers/user.controller.js";
import res from "express/lib/response.js";

const router = express.Router();


router.get("/",protectRoute, getUsersForSidebar)
router.get("/", ()=>{
    res.status(200).json({message : "User Path Test"})
})
export default router;
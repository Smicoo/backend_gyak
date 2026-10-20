import { Router } from "express";
import { getAllBicycles } from "./controller.js";
import { getAllBicycleById } from "./controller.js";
import { createBicycle } from "./controller.js";
import { updateBicycle } from "./controller.js";
import { deleteBicycle } from "./controller.js";

const router = Router()

router.get("/api/bicycle", getAllBicycles)
router.get("/api/bicycle/:id", getAllBicycleById)
router.post("/api/bicycle", createBicycle)
router.put("/api/bicycle/:id", updateBicycle)
router.delete("/api/bicycle/:id", deleteBicycle)

export default router
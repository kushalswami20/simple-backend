import express from "express";
import Product from "../models/user.model.js";

import {getAllProducts, getSingleProduct,updateProducts,deleteProduct,createProduct} from "../controller/user.controller.js"

const router = express.Router();
router.get("/",getAllProducts);
router.get("/:id",getSingleProduct);
router.put("/:id",updateProducts);
router.post("/",createProduct);
router.delete("/:id",deleteProduct);

export default router;
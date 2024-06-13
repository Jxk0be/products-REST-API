const express = require("express")
const router = express.Router()
const { deleteProducts, getProducts, getProductsByID, postProducts, updateProducts } = require("../controllers/product.controller")

router.get("/", getProducts)
router.get("/:id", getProductsByID)
router.post("/", postProducts)
router.put("/:id", updateProducts)
router.delete("/:id", deleteProducts)

module.exports = router
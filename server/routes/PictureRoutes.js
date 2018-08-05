const express = require("express");
const router = express.Router();

const { list,show } = require( "../controllers/PictureController");



router.get("/pictures", list);
router.get("/picture/:id", show);
// router.post("/foo", create);
// router.put("/foo/:id", update);
// router.delete("/foo/:id", remove);

module.exports = router;
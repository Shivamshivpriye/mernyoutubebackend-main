const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/usersController")
const upload = require("../multerConfing/storageConfig")

router.post("/user/register",controllers.userpost);
router.get("/user/details",controllers.userget);
router.get("/user/:id",controllers.singleuserget);
router.put("/user/edit/:id",upload.single("user_profile"),controllers.useredit);
router.delete("/user/delete/:id",controllers.userdelete);
router.put("/user/status/:id",controllers.userstatus);
router.get("/userexport",controllers.userExport);
module.exports = router
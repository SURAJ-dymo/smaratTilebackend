const express=require('express');
const {isAuthenticatedUser} =require("../Middelwares/auth");
const{addImage,allImages,deletingImage,gettingImage,updatingImage}=require('../Controllers/imageController')
const router=express.Router();

router.route("/add_image").post(isAuthenticatedUser,addImage);
router.route("/all_images").get(allImages);
router.route("/delete_image/:id").delete(deletingImage);
router.route("/image/:id").get(gettingImage);
 router.route("/image/:id").put(updatingImage);
// router.route("/login").post(loginUser);
// router.route("/me").get(isAuthenticatedUser,getUserDetails);

module.exports=router;

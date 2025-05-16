
import express from "express";
import UserController from "../../controllers/user.controller.js";
import { ValidateUserId } from "../../middlewares/user.validate.js";
import { authenticateJWT } from "../../middlewares/authenticateJWT.js";
const router = express.Router();

router.route("/").get(authenticateJWT,UserController.GetAll).post(UserController.Create);

router
  .route("/:id")
  .get(authenticateJWT, UserController.GetById)
  .put(authenticateJWT, UserController.Update)
  .delete(authenticateJWT, UserController.Delete);
  

router.route("/email").post(UserController.SendEmail);
router.route("/forgot-pasword").post(UserController.ForgotPassword)
router.route("/reset-pass").post(UserController.ResetPassword);

router.route("/register").post(UserController.Register);
router.route("/login").post(UserController.Login);

export default router;


// import express from 'express'
// import UserController from '../../controllers/user.controller.js'
// import { ValidateUserId } from '../../middlewares/user.validate.js'
// const router = express.Router()

// router.route('/')
//     .get( UserController.GetAll )
//     .post( UserController.Create )

// router.route('/:id')
//     .get( ValidateUserId, UserController.GetById )
//     .put( ValidateUserId, UserController.Update )
//     .delete( ValidateUserId, UserController.Delete )


// export default router
// // import express from 'express';
// // import userController from '../../controllers/user.controller.js';
// // import { ValidateUserId, ValidateUserBody } from '../../middlewares/user.validate.js';

// // const router = express.Router();

// // router.route('/')
// //     .get(userController.GetByField)
// //     .post(ValidateUserBody, userController.Create);

// // router.route('/:id')
// //     .get(ValidateUserId, userController.GetById)
// //     .put(ValidateUserId, ValidateUserBody, userController.Update)
// //     .delete(ValidateUserId, userController.Delete);

// // export default router;

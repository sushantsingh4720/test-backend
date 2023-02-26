import { Router } from "express";
const router = Router();
import {
  followUser,
  getAllUser,
  getFollowFollowers,
  getUserDetails,
  Logout,
  Profile,
  removeFollower,
  searchUser,
  unFollowUser,
} from "../controllers/userController.js";
router.route("/user").get(getAllUser);
router.route("/user/logout").get(Logout);
router.route("/user/me").get(Profile);
router.route("/user/follow/:id").post(followUser);
router.route("/user/unfollow/:id").put(unFollowUser);
router.route("/user/followfollowers").get(getFollowFollowers);
router.route("/user/details/:id").get(getUserDetails);
router.route("/user/search").get(searchUser);
router.route("/user/removefollower/:id").post(removeFollower);

export default router;

const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const tracksController = require("../controllers/tracks-controller");
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/tracks/all", tracksController.getAllTracks);
router.get("/tracks/summer", tracksController.getSummerTracks);
router.get("/tracks/new", tracksController.getNewTracks);
router.get("/tracks/trand", tracksController.getTrandTracks);
router.get("/tracks/popular", tracksController.getPopularTracks);
router.get("/tracks/eternal", tracksController.getEternalTracks);
router.get("/tracks/exclusive", tracksController.getExclusiveTracks);

module.exports = router;

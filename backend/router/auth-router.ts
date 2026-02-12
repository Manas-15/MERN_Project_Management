import express from 'express';
const router = express.Router()
const authControllers = require("../controllers/auth-controller");


router.post("/signup",authControllers.signup);
router.post('/signin',authControllers.signin);
router.post('/refresh-token',authControllers.refreshtoken);

module.exports = router;

const express = require("express")
const router = express.Router()

// @desc       ogin/landing page
// @route      GET /
router.get("/", (req, res) => {
	res.send("Login")
})

// @desc       ogin/landing page
// @route      GET / dashboard
router.get("/dashboard", (req, res) => {
	res.send("Dashboard")
})

module.exports = router

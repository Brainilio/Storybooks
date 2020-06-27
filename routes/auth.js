const express = require("express")
const passport = require("passport")
const router = express.Router()

// @desc       AUTH WITH GOOGLE
// @route      GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

// @desc       GOOGLE AUTH CALLBACK
// @route      GET / auth / google / callback
router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect("/dashboard")
	}
)

module.exports = router

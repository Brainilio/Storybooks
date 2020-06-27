const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
const passport = require("passport")
const session = require("express-session")
const connectDB = require("./config/db")

// Load config file
dotenv.config({ path: "./config/config.env" })

//passport config
require("./config/passport")(passport)

// connect db
connectDB()

// Running on port
const app = express()

// shows dev in console
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"))
}

// Handlebars
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs")

//Sessions
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
	})
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/index"))

// Run in server, use npm start
const PORT = process.env.PORT || 5000
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

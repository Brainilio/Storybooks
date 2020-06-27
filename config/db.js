const mongoose = require("mongoose")

// work with promises so async to connect with DB
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		console.log(`MongoDB connected: ${conn.connection.host}`)
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectDB

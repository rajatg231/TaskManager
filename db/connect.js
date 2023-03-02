const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    authSource: "admin",
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

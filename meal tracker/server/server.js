const express = require("express")
const cors = require ("cors")
const app = express();
require('dotenv').config()
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:3000",credentials:true
}));

require("./config/mongoose.config")

require("./routes/user.route")(app)

require("./routes/meal.route")(app)

app.listen(8000, () => console.log("Listening on Port 8000"))
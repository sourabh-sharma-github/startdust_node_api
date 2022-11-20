const app = require("./app")
const http = require("http")
const server = http.createServer(app)
const mongoose = require('mongoose')
const { database, port } = process.evv

mongoose
    .connect(database, {
        useNewUrlParser: true,
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => {
        console.info("Connected to database 📃")

    })
    .catch((err) => {
        console.error('Unable to connect to the database 🚫', err)
    });


try {
    server.listen(port, () => {
        console.info(`Server is listing on port:: ${port} ✨🎉`);
    })
} catch (err) {
    console.error("Error while establishing connection with server 🚫" + err);
}
const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("client/public"));
}

// API and view routes
app.use(routes);

app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});

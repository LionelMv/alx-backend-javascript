const express = require("express");
const mapRoutes = require("./routes");

const app = express();
const port = 1245;

mapRoutes(app);

app.listen(port, () => {});

export default app;

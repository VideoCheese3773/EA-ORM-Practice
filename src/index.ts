
import * as express from "express"
const router = require("../src/routes/taskRoutes");

const port = process.env.PORT ?? 3000;
// create and setup express app
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use('/api', router);

// start express server
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto:' + port);
});
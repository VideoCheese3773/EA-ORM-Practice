
import * as express from "express"
const taskRouter = require("../src/routes/taskRouter");
const userRouter = require("../src/routes/userRouter");

const port = process.env.PORT ?? 3000;
// create and setup express app
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use('/api', taskRouter);
app.use('/api', userRouter);

// start express server
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto:' + port);
});
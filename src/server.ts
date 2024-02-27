import Express from "express";
import userController from "./user/user.controller";

const PORT = 3333
const app = Express();

app.use(Express.json())
app.use(userController.router);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
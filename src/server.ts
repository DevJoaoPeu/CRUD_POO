import Express from "express";
import userController from "./user/user.controller";

const PORT = 3333
const app = Express();

// rota get --- http://localhost:3333/26bc72a4-2d22-4006-b3db-0fdc358c6d8e
// rota post ---- http://localhost:3333/create
// rota put ---- http://localhost:3333/update/26bc72a4-2d22-4006-b3db-0fdc358c6d8e
// rota delete ---- http://localhost:3333/delete/26bc72a4-2d22-4006-b3db-0fdc358c6d8e

app.use(Express.json())

app.post('/create', userController.create);
app.get("/:userId", userController.getUserById)
app.put("/update/:userId", userController.update);
app.delete("/delete/:userId", userController.deleteUser);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
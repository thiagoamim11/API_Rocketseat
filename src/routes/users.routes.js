const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();
const usersController = new UsersController();

/*
function myMiddleware(request, response, next) {
    console.log("Voce passou pelo Midddleware");
    
    if (!request.body.isAdmin) {
        return response.json({ message: "user unauthorized"});
    }
    next();
}

*/


usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

 module.exports = usersRoutes;
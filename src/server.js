require("express-async-errors");



const express = require("express");
const migrationsRun = require("./database/sqlite/migrations");
const routes = require("./routes");

migrationsRun();

const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());



app.use(routes);



app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return  response.status(500).jason({
        status: "error",
        message: "Internal server error",
    })
});

const PORT = 3333; //I create a variable for this port
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
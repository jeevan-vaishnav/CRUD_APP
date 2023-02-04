const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

//default root
/**
 * @description Root route
 * @method GET/
 */
route.get("/", services.homeRoutes);

//add user
/**
 * @description Add User
 * @method GET/
 */
route.get("/add-user", services.add_user);

//update user
/**
 * @description Update User
 * @method GET/
 */
route.get("/update-user", services.update_user);

//API
route.post("/api/users", controller.create);
route.get("/api/users/", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;

class UserRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.post("/", this.controller.findOrCreateByEmail);
    router.put("/", this.controller.editUser);
    router.post("/add", this.controller.addUser);

    return router;
  };
}

module.exports = UserRouter;

class UserPropertyRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.post("/", this.controller.getAllByUserId);
    router.post("/add", this.controller.addNewUserProperty);
    router.delete("/:id", this.controller.deleteUserProperty);

    return router;
  };
}

module.exports = UserPropertyRouter;

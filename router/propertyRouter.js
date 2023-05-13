class PropertyRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.post("/", this.controller.add);

    return router;
  };
}

module.exports = PropertyRouter;

class LinkPropertyRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.post("/", this.controller.add);
    router.delete("/:id", this.controller.delete);
    router.put("/:id", this.controller.update);

    return router;
  };
}

module.exports = LinkPropertyRouter;

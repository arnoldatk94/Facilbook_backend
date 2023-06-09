class FeedbackRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.put("/:id", this.controller.update);
    router.post("/", this.controller.add);
    router.delete("/:id", this.controller.delete);

    return router;
  };
}

module.exports = FeedbackRouter;

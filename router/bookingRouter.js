class BookingRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.post("/", this.controller.create);
    router.delete("/:id", this.controller.delete);

    return router;
  };
}

module.exports = BookingRouter;

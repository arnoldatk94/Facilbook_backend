class FacilityRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  route = () => {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);
    router.put("/:id", this.controller.edit);

    return router;
  };
}

module.exports = FacilityRouter;

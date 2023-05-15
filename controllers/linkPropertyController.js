class LinkPropertyController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
  add = async (req, res) => {
    try {
      console.log("req received");
      const { property_id, user_id, unit_no } = req.body;

      // Check if the link property already exists
      const existingLinkProperty = await this.model.findOne({
        where: {
          property_id,
          user_id,
          unit_no,
        },
      });

      console.log(existingLinkProperty);
      if (existingLinkProperty) {
        console.log("identical request");

        const allLinkProperties = await this.model.findAll();
        return res.json(allLinkProperties);
      }
      const linkProperty = await this.model.create({
        property_id,
        user_id,
        unit_no,
      });
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      console.log("error");
      return res.status(400).json({ error: true, msg: err });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const linkProperty = await this.model.findByPk(id);
      if (!linkProperty) {
        return res
          .status(404)
          .json({ error: true, msg: "Link property not found" });
      }
      await linkProperty.destroy();
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const { request_status } = req.body;

      // Find the link property by id
      const linkProperty = await this.model.findByPk(id);
      if (!linkProperty) {
        return res
          .status(404)
          .json({ error: true, msg: "Link property not found" });
      }

      // Update the request_status field
      linkProperty.request_status = request_status;
      await linkProperty.save();

      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = LinkPropertyController;

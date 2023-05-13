const { Op } = require("sequelize");

class PropertyController {
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
    const { name, address, photoUrl, color } = req.body;
    const existingProperty = await this.model.findOne({
      where: {
        [Op.or]: [{ name }, { address }],
      },
    });
    if (existingProperty) {
      const allProperties = await this.model.findAll();
      return res.json(allProperties);
    }
    try {
      const newProperty = await this.model.create({
        name,
        address,
        photoUrl,
        color,
      });
      const allProperties = await this.model.findAll();
      return res.json(allProperties);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = PropertyController;

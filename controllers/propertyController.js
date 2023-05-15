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

  update = async (req, res) => {
    const { id } = req.params;
    const { name, address, photoUrl, color } = req.body;

    try {
      const existingProperty = await this.model.findOne({
        where: {
          id,
        },
      });
      if (!existingProperty) {
        return res.status(404).json({ error: true, msg: "Property not found" });
      }

      const updatedName = name.trim() === "" ? existingProperty.name : name;
      const updatedAddress =
        address.trim() === "" ? existingProperty.address : address;
      const updatedPhotoUrl =
        photoUrl.trim() === "" ? existingProperty.photoUrl : photoUrl;
      const updatedColor = color.trim() === "" ? existingProperty.color : color;

      await this.model.update(
        {
          name: updatedName,
          address: updatedAddress,
          photoUrl: updatedPhotoUrl,
          color: updatedColor,
        },
        {
          where: { id },
        }
      );

      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = PropertyController;

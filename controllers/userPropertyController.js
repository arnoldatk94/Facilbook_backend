class UserPropertyController {
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

  getAllByUserId = async (req, res) => {
    const { userId } = req.body;

    try {
      const output = await this.model.findAll({
        where: { user_id: userId },
      });
      if (output.length === 0) {
        // Return null if no properties are found for the user ID
        console.log(userId, " has no entries");
        return res.json(null);
      } else {
        return res.json(output);
      }
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addNewUserProperty = async (req, res) => {
    const { property_id, user_id, unit_no, is_management } = req.body;

    try {
      // Check if a row already exists with the same user_id, property_id, and unit_no
      const existingUserProperty = await this.model.findOne({
        where: { property_id, user_id, unit_no },
      });

      if (existingUserProperty) {
        const allUserProperties = await this.model.findAll();
        return res.json(allUserProperties);
      }
      const newUserProperty = await this.model.create({
        property_id: property_id,
        user_id: user_id,
        unit_no: unit_no,
        is_management: is_management,
      });

      const allUserProperties = await this.model.findAll();
      return res.json(allUserProperties);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserPropertyController;

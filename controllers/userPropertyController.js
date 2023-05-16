class UserPropertyController {
  constructor(model, feedbacks, bookings) {
    this.model = model;
    this.feedbacks = feedbacks;
    this.bookings = bookings;
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

  deleteUserProperty = async (req, res) => {
    const { id } = req.params;

    try {
      // First, delete all associated rows in the bookings table
      await this.bookings.destroy({
        where: { user_property_id: id },
      });

      // Next, delete all associated rows in the feedbacks table
      await this.feedbacks.destroy({
        where: { user_property_id: id },
      });

      // Finally, delete the row in the user_properties table
      await this.model.destroy({
        where: { id },
      });

      const allUserProperties = await this.model.findAll();
      return res.json(allUserProperties);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserPropertyController;

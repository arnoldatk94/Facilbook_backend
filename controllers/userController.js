class UserController {
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

  findOrCreateByEmail = async (req, res) => {
    const { email } = req.body;

    try {
      let user = await this.model.findOne({ where: { email } });

      if (!user) {
        user = await this.model.create({ email });
      }

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  editUser = async (req, res) => {
    const { id, phone } = req.body;

    try {
      let user = await this.model.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: true, msg: "User not found" });
      }

      user.phone = phone || user.phone;

      await user.save();

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserController;

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
    const { email, first_name, last_name } = req.body;

    try {
      let user = await this.model.findOne({ where: { email } });

      if (!user) {
        user = await this.model.create({
          email,
          first_name,
          last_name,
          phone: parseInt("00000000", 10), // Set the phone number to a default value
        });
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

  editManagementUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, phone } = req.body;

    try {
      let user = await this.model.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: true, msg: "User not found" });
      }

      user.first_name = first_name || user.first_name;
      user.last_name = last_name || user.last_name;
      user.phone = phone !== "" ? parseInt(phone, 10) : user.phone;

      await user.save();

      const allUsers = await this.model.findAll();

      return res.json(allUsers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  addUser = async (req, res) => {
    const { first_name, last_name, phone, email } = req.body;

    try {
      await this.model.create({
        first_name,
        last_name,
        phone,
        email,
      });

      const allUsers = await this.model.findAll();

      return res.json(allUsers);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserController;

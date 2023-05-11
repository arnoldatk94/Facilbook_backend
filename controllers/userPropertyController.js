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

  // getAllByUserId = async (req, res) => {
  //   const { userId } = req.body;
  //   console.log(userId);
  //   try {
  //     const output = await this.model.findAll({
  //       where: { user_id: userId },
  //     });
  //     return res.json(output);
  //   } catch (err) {
  //     return res.status(400).json({ error: true, msg: err });
  //   }
  // };

  getAllByUserId = async (req, res) => {
    const { userId } = req.body;

    try {
      const output = await this.model.findAll({
        where: { user_id: userId },
      });
      return res.json(output);
    } catch (err) {
      if (err.name === "SequelizeEmptyResultError") {
        // Return an empty array if no properties are found for the user ID
        console.log(userId, " has no entries");
        return res.json([]);
      }
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserPropertyController;

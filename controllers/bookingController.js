class BookingController {
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

  create = async (req, res) => {
    try {
      const {
        start_time,
        end_time,
        user_id,
        user_property_id,
        property_id,
        facility_id,
      } = req.body;

      await this.model.create(
        {
          start_time,
          end_time,
          user_id,
          user_property_id,
          property_id,
          facility_id,
        },
        {
          fields: [
            "start_time",
            "end_time",
            "user_id",
            "user_property_id",
            "property_id",
            "facility_id",
          ],
        }
      );

      const allBookings = await this.model.findAll();
      console.log(allBookings);

      // return res.status(201).json({ allBookings });
      return res.json(allBookings);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  delete = async (req, res) => {
    try {
      const id = req.params.id;

      await this.model.destroy({ where: { id } });

      const allBookings = await this.model.findAll();

      // return res.status(200).json({ allBookings });
      return res.json(allBookings);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = BookingController;

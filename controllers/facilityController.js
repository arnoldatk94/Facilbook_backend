class FacilityController {
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

  edit = async (req, res) => {
    try {
      const { id } = req.params; // get the facility ID from the request parameters
      const {
        start_time,
        end_time,
        booking_limit,
        max_capacity,
        closed_for_maintenance,
      } = req.body; // get the updated properties from the request body

      // find the facility to update
      const facility = await this.model.findByPk(id);

      // update the facility's properties
      facility.start_time =
        start_time === ""
          ? facility.start_time
          : start_time || facility.start_time;
      facility.end_time =
        end_time === "" ? facility.end_time : end_time || facility.end_time;
      facility.booking_limit =
        booking_limit === ""
          ? facility.booking_limit
          : booking_limit || facility.booking_limit;
      facility.max_capacity =
        max_capacity === ""
          ? facility.max_capacity
          : max_capacity || facility.max_capacity;
      facility.closed_for_maintenance =
        closed_for_maintenance === undefined
          ? facility.closed_for_maintenance
          : closed_for_maintenance;

      // save the updated facility
      await facility.save();

      // return all facilities, including the updated one
      const facilities = await this.model.findAll();
      return res.json(facilities);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = FacilityController;

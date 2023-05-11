const moment = require("moment");

class FeedbackController {
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
      const { facility_id, user_property_id, user_id, property_id, comment } =
        req.body;
      await this.model.create({
        facility_id,
        user_property_id,
        user_id,
        property_id,
        comment,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      });
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  update = async (req, res) => {
    try {
      const feedbackId = req.params.id;
      const { reply, completed } = req.body;
      const feedback = await this.model.findByPk(feedbackId);
      if (!feedback) {
        return res.status(404).json({ error: true, msg: "Feedback not found" });
      }
      await feedback.update({
        reply,
        completed,
        updatedAt: moment().format(),
      });
      const allFeedback = await this.model.findAll();
      return res.json(allFeedback);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = FeedbackController;

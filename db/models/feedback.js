"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      this.belongsTo(models.facilities, { foreignKey: "facility_id" });
      this.belongsTo(models.users_properties, {
        foreignKey: "user_property_id",
      });
      this.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  Feedback.init(
    {
      facility_id: DataTypes.INTEGER,
      user_property_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.STRING,
      reply: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "feedbacks",
      underscored: true,
    }
  );
  return Feedback;
};

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      this.belongsTo(models.facilities, { foreignKey: "facility_id" });
      this.belongsTo(models.users_properties, {
        foreignKey: "user_property_id",
      });
      this.belongsTo(models.users, { foreignKey: "user_id" });
    }
  }
  Booking.init(
    {
      facility_id: DataTypes.INTEGER,
      user_property_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "bookings",
      underscored: true,
    }
  );
  return Booking;
};

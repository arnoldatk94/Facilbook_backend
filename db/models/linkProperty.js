const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class LinkProperty extends Model {
    static associate(models) {
      // Define associations here, if any
      this.belongsTo(models.users, { foreignKey: "user_id" });
      this.belongsTo(models.properties, { foreignKey: "property_id" });
    }
  }
  LinkProperty.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      property_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "properties",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      unit_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      request_status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "link_properties",
      timestamps: false,
    }
  );
  return LinkProperty;
};

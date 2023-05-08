const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      this.hasMany(models.facilities, {
        foreignKey: "property_id",
      });
      this.hasMany(models.users_properties, {
        foreignKey: "property_id",
        as: "property_id",
      });
      this.belongsToMany(models.users, {
        through: "users_properties",
        foreignKey: "property_id",
      });
    }
  }
  Property.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "properties",
      timestamps: false,
    }
  );
  return Property;
};

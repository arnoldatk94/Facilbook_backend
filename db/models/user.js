const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.users_properties, {
        foreignKey: "user_id",
        as: "user_id",
      });
      // this.hasMany(models.link_properties, {
      //   foreignKey: "user_id",
      //   as: "user_id",
      // });
      this.belongsToMany(models.properties, {
        through: "users_properties",
        foreignKey: "user_id",
      });
      this.belongsToMany(models.facilities, {
        through: "bookings",
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
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
      modelName: "users",
      timestamps: false,
    }
  );
  return User;
};

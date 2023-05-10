"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      facility_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "facilities",
          key: "id",
        },
        allowNull: false,
      },
      user_property_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users_properties",
          key: "id",
        },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      property_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "properties",
          key: "id",
        },
        allowNull: false,
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });

    await queryInterface.createTable("feedbacks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      facility_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "facilities",
          key: "id",
        },
        allowNull: false,
      },
      user_property_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users_properties",
          key: "id",
        },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      property_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "properties",
          key: "id",
        },
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      reply: {
        type: Sequelize.STRING,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bookings");
    await queryInterface.dropTable("feedbacks");
  },
};

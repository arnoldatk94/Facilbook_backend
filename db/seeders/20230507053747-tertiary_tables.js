"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users_properties", [
      {
        property_id: 1,
        user_id: 1,
        unit_no: "Management Office",
        is_management: true,
      },
      {
        property_id: 2,
        user_id: 1,
        unit_no: "Management Office",
        is_management: true,
      },
      {
        property_id: 3,
        user_id: 1,
        unit_no: "Management Office",
        is_management: true,
      },
      {
        property_id: 4,
        user_id: 1,
        unit_no: "Management Office",
        is_management: true,
      },
      {
        property_id: 1,
        user_id: 2,
        unit_no: "#01-23",
        is_management: false,
      },
      {
        property_id: 2,
        user_id: 2,
        unit_no: "#13-37",
        is_management: false,
      },
      {
        property_id: 2,
        user_id: 2,
        unit_no: "#08-08",
        is_management: false,
      },
      {
        property_id: 3,
        user_id: 3,
        unit_no: "#01-23",
        is_management: false,
      },
      {
        property_id: 4,
        user_id: 4,
        unit_no: "#01-23",
        is_management: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("users_properties", null, {});
  },
};

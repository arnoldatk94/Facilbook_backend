"use strict";

function getTimeValue(timeStr) {
  const [hours, minutes] = timeStr.split(":");
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:00`;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("facilities", [
      {
        property_id: 1,
        name: "BBQ Pit",
        photoUrl: "",
        max_capacity: 8,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Function Room",
        photoUrl: "",
        max_capacity: 20,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Tennis Court",
        photoUrl: "",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Swimming Pool",
        photoUrl: "",
        max_capacity: 20,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 2,
        name: "Function Room",
        photoUrl: "",
        max_capacity: 50,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 2,
        name: "Swimming Pool",
        photoUrl: "",
        max_capacity: 20,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
    ]);

    // Condo 3
    await queryInterface.bulkInsert("facilities", [
      {
        property_id: 3,
        name: "Tennis Court",
        photoUrl: "",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 3,
        name: "Gym",
        photoUrl: "",
        max_capacity: 10,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
    ]);

    // Condo 4
    await queryInterface.bulkInsert("facilities", [
      {
        property_id: 4,
        name: "Jacuzzi",
        photoUrl: "",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 4,
        name: "Function Room",
        photoUrl: "",
        max_capacity: 40,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("facilities", null, {});
  },
};

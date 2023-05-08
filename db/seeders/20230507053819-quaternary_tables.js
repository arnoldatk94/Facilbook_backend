"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bookings", [
      {
        facility_id: 1,
        user_property_id: 5,
        user_id: 2,
        start_time: new Date("2023-05-13T13:00:00.000Z"),
        end_time: new Date("2023-05-13T17:00:00.000Z"),
      },
      {
        facility_id: 2,
        user_property_id: 5,
        user_id: 2,
        start_time: new Date("2023-05-13T13:00:00.000Z"),
        end_time: new Date("2023-05-13T17:00:00.000Z"),
      },
      {
        facility_id: 3,
        user_property_id: 5,
        user_id: 2,
        start_time: new Date("2023-05-13T13:00:00.000Z"),
        end_time: new Date("2023-05-13T17:00:00.000Z"),
      },
      {
        facility_id: 4,
        user_property_id: 5,
        user_id: 2,
        start_time: new Date("2023-05-13T13:00:00.000Z"),
        end_time: new Date("2023-05-13T17:00:00.000Z"),
      },
      {
        facility_id: 5,
        user_property_id: 2,
        user_id: 1,
        start_time: new Date("2023-05-14T10:00:00.000Z"),
        end_time: new Date("2023-05-14T14:00:00.000Z"),
      },
      {
        facility_id: 5,
        user_property_id: 6,
        user_id: 2,
        start_time: new Date("2023-05-14T15:00:00.000Z"),
        end_time: new Date("2023-05-14T19:00:00.000Z"),
      },
      {
        facility_id: 5,
        user_property_id: 7,
        user_id: 2,
        start_time: new Date("2023-05-14T20:00:00.000Z"),
        end_time: new Date("2023-05-14T21:00:00.000Z"),
      },
      {
        facility_id: 7,
        user_property_id: 8,
        user_id: 3,
        start_time: new Date("2023-05-15T12:00:00.000Z"),
        end_time: new Date("2023-05-15T16:00:00.000Z"),
      },
      {
        facility_id: 8,
        user_property_id: 8,
        user_id: 3,
        start_time: new Date("2023-05-15T17:00:00.000Z"),
        end_time: new Date("2023-05-15T21:00:00.000Z"),
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        start_time: new Date("2023-05-16T10:00:00.000Z"),
        end_time: new Date("2023-05-16T12:00:00.000Z"),
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        start_time: new Date("2023-05-17T10:00:00.000Z"),
        end_time: new Date("2023-05-17T12:00:00.000Z"),
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        start_time: new Date("2023-05-18T10:00:00.000Z"),
        end_time: new Date("2023-05-18T12:00:00.000Z"),
      },
    ]);

    await queryInterface.bulkInsert("feedbacks", [
      {
        facility_id: 1,
        user_property_id: 5,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 2,
        user_property_id: 5,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 3,
        user_property_id: 5,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 4,
        user_property_id: 5,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 5,
        user_property_id: 2,
        user_id: 1,
        comment: "test",
      },
      {
        facility_id: 5,
        user_property_id: 6,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 5,
        user_property_id: 7,
        user_id: 2,
        comment: "test",
      },
      {
        facility_id: 7,
        user_property_id: 8,
        user_id: 3,
        comment: "test",
      },
      {
        facility_id: 8,
        user_property_id: 8,
        user_id: 3,
        comment: "test",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        comment: "test",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        comment: "test",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        comment: "test",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bookings", null, {});
    await queryInterface.bulkDelete("feedbacks", null, {});
  },
};

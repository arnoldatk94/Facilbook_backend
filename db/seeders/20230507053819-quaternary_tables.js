"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bookings", [
      {
        facility_id: 1,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        start_time: new Date(2023, 4, 13, 13, 0),
        end_time: new Date(2023, 4, 13, 17, 0),
      },
      {
        facility_id: 2,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        start_time: new Date(2023, 4, 13, 13, 0),
        end_time: new Date(2023, 4, 13, 17, 0),
      },
      {
        facility_id: 3,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        start_time: new Date(2023, 4, 13, 13, 0),
        end_time: new Date(2023, 4, 13, 17, 0),
      },
      {
        facility_id: 4,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        start_time: new Date(2023, 4, 13, 13, 0),
        end_time: new Date(2023, 4, 13, 17, 0),
      },
      {
        facility_id: 5,
        user_property_id: 2,
        user_id: 1,
        property_id: 2,
        start_time: new Date(2023, 4, 14, 10, 0),
        end_time: new Date(2023, 4, 14, 14, 0),
      },
      {
        facility_id: 5,
        user_property_id: 6,
        user_id: 2,
        property_id: 2,
        start_time: new Date(2023, 4, 14, 15, 0),
        end_time: new Date(2023, 4, 14, 19, 0),
      },
      {
        facility_id: 5,
        user_property_id: 7,
        user_id: 2,
        property_id: 2,
        start_time: new Date(2023, 4, 14, 20, 0),
        end_time: new Date(2023, 4, 14, 21, 0),
      },
      {
        facility_id: 7,
        user_property_id: 8,
        user_id: 3,
        property_id: 3,
        start_time: new Date(2023, 4, 15, 12, 0),
        end_time: new Date(2023, 4, 15, 16, 0),
      },
      {
        facility_id: 8,
        user_property_id: 8,
        user_id: 3,
        property_id: 3,
        start_time: new Date(2023, 4, 15, 17, 0),
        end_time: new Date(2023, 4, 15, 21, 0),
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        property_id: 4,
        start_time: new Date(2023, 4, 16, 10, 0),
        end_time: new Date(2023, 4, 16, 12, 0),
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        property_id: 4,
        start_time: new Date(2023, 4, 17, 10, 0),
        end_time: new Date(2023, 4, 17, 12, 0),
      },
    ]);

    await queryInterface.bulkInsert("feedbacks", [
      {
        facility_id: 1,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        comment: "Not clean, chairs broken",
      },
      {
        facility_id: 2,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        comment: "Aircon too cold, tv not working",
      },
      {
        facility_id: 3,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        comment: "Net sagging, holes in nets",
      },
      {
        facility_id: 4,
        user_property_id: 5,
        user_id: 2,
        property_id: 1,
        comment: "Lots of leaves in the pool",
      },
      {
        facility_id: 5,
        user_property_id: 2,
        user_id: 1,
        property_id: 2,
        comment: "Aircon is repaired now, thanks!",
      },
      {
        facility_id: 5,
        user_property_id: 6,
        user_id: 2,
        property_id: 2,
        comment: "Add a bookshelf for book sharing?",
      },
      {
        facility_id: 5,
        user_property_id: 7,
        user_id: 2,
        property_id: 2,
        comment: "Lots of bookings on weekends, difficult to book slots",
      },
      {
        facility_id: 7,
        user_property_id: 8,
        user_id: 3,
        property_id: 3,
        comment: "A lot of balls left behind on the court",
      },
      {
        facility_id: 8,
        user_property_id: 8,
        user_id: 3,
        property_id: 3,
        comment: "Smelly and stuffy, aircon not ventilating properly",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        property_id: 4,
        comment: "Think a kid left a poo in here",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        property_id: 4,
        comment: "Bubble stream weak, no feeling",
      },
      {
        facility_id: 9,
        user_property_id: 9,
        user_id: 4,
        property_id: 4,
        comment: "Lots of leaves in the pool",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bookings", null, {});
    await queryInterface.bulkDelete("feedbacks", null, {});
  },
};

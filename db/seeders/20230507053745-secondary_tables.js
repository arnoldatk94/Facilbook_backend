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
        photoUrl:
          "https://images.unsplash.com/photo-1495749388945-9d6e4e5b67b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        max_capacity: 8,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Function Room",
        photoUrl:
          "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        max_capacity: 20,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Tennis Court",
        photoUrl:
          "https://syntheticsportsgroup.com.au/wp-content/uploads/2021/11/ssg-byron-bay-tennis-court-1-scaled.jpg",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 1,
        name: "Swimming Pool",
        photoUrl:
          "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        max_capacity: 20,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 2,
        name: "Function Room",
        photoUrl:
          "https://t4.ftcdn.net/jpg/00/80/91/11/360_F_80911186_RoBCsyLrNTrG7Y1EOyCsaCJO5DyHgTox.jpg",
        max_capacity: 50,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 2,
        name: "Swimming Pool",
        photoUrl:
          "https://images.unsplash.com/photo-1558617320-e695f0d420de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
        photoUrl:
          "https://web-assets.playfinder.com/wp-content/uploads/2017/12/27164007/Grass-Court-synthetic-tennis_2-624x416.jpg",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 3,
        name: "Gym",
        photoUrl:
          "https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000",
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
        photoUrl:
          "https://media.istockphoto.com/id/545334824/photo/awesome-water-view-with-hot-tub-in-summer-evening.jpg?s=612x612&w=0&k=20&c=JwhNyjXUYtC6Kin0UZ3qykXdoJ56W0C2J464H4rzMNk=",
        max_capacity: 4,
        start_time: "10:00:00",
        end_time: "22:00:00",
        booking_limit: 4,
      },
      {
        property_id: 4,
        name: "Function Room",
        photoUrl:
          "https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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

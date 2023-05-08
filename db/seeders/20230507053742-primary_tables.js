"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Management",
          last_name: "Management",
          phone: 98765432,
          email: "management@management.com",
          password: "test12345!",
        },
        {
          first_name: "John",
          last_name: "Doe",
          phone: 12345678,
          email: "johndoe@gmail.com",
          password: "password123",
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          phone: 87654321,
          email: "janedoe@gmail.com",
          password: "password123",
        },
        {
          first_name: "Peter",
          last_name: "Tan",
          phone: 11112222,
          email: "petertan@gmail.com",
          password: "password123",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "properties",
      [
        {
          name: "The Shore Residences",
          address: "81 Amber Road, Singapore 439893",
          photoUrl:
            "https://images.unsplash.com/photo-1621781753671-27ff5af295e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
          color: "#F9D5E5",
        },
        {
          name: "Skyline Condominium",
          address: "1 Bukit Batok West Ave 6, Singapore 658064",
          photoUrl:
            "https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
          color: "#A7E9AF",
        },
        {
          name: "Oceanfront Suites",
          address: "273 East Coast Road, Singapore 428955",
          photoUrl:
            "https://images.unsplash.com/photo-1629224834618-1cf72b367162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          color: "#FDE5A7",
        },
        {
          name: "Serenity Residences",
          address: "38 Tanjong Rhu Road, Singapore 436953",
          photoUrl:
            "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          color: "#F9D5E5",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users");
    await queryInterface.bulkDelete("properties");
  },
};

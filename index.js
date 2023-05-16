const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database
const db = require("./db/models/index");
const {
  users,
  properties,
  facilities,
  bookings,
  feedbacks,
  users_properties,
  link_properties,
} = db;

// controllers
const UserController = require("./controllers/userController");
const PropertyController = require("./controllers/propertyController");
const UserPropertyController = require("./controllers/userPropertyController");
const LinkPropertyController = require("./controllers/linkPropertyController");
const FacilityController = require("./controllers/facilityController");
const BookingController = require("./controllers/bookingController");
const FeedbackController = require("./controllers/feedbackController");

// router
const UserRouter = require("./router/userRouter");
const PropertyRouter = require("./router/propertyRouter");
const UserPropertyRouter = require("./router/userPropertyRouter");
const LinkPropertyRouter = require("./router/linkPropertyRouter");
const FacilityRouter = require("./router/facilityRouter");
const BookingRouter = require("./router/bookingRouter");
const FeedbackRouter = require("./router/feedbackRouter");

// Initializing controllers
const userController = new UserController(users);
const propertyController = new PropertyController(properties);
const userPropertyController = new UserPropertyController(
  users_properties,
  feedbacks,
  bookings
);

const linkPropertyController = new LinkPropertyController(link_properties);
const facilityController = new FacilityController(facilities);
const bookingController = new BookingController(bookings);
const feedbackController = new FeedbackController(feedbacks);

// Initializing Routers
const userRouter = new UserRouter(userController, express).route();
const propertyRouter = new PropertyRouter(propertyController, express).route();
const userPropertyRouter = new UserPropertyRouter(
  userPropertyController,
  express
).route();
const linkPropertyRouter = new LinkPropertyRouter(
  linkPropertyController,
  express
).route();
const facilityRouter = new FacilityRouter(facilityController, express).route();
const bookingRouter = new BookingRouter(bookingController, express).route();
const feedbackRouter = new FeedbackRouter(feedbackController, express).route();

// enable and use routers
app.use("/users", userRouter);
app.use("/properties", propertyRouter);
app.use("/users_properties", userPropertyRouter);
app.use("/link_properties", linkPropertyRouter);
app.use("/facilities", facilityRouter);
app.use("/bookings", bookingRouter);
app.use("/feedbacks", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

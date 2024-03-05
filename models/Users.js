const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  excersisesImage: [
    {
      data: {
        type: Buffer,
        required: false,
      },
      exerciseName: {
        type: String,
        required: false,
      },
      contentType: {
        type: String,
        required: false,
      },
    },
  ],
});

// const UsersSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   profilePicture: {
//     data: {
//       type: Buffer,
//       required: true,
//     },
//     contentType: {
//       type: String,
//       required: true,
//     },
//   },
//   excersisesImage: [
//     {
//       data: {
//         type: Buffer,
//         required: false,
//       },
//       exerciseName: {
//         type: String,
//         required: false,
//       },
//       contentType: {
//         type: String,
//         required: false,
//       },
//     },
//   ],
// });

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;

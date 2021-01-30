const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatarImg: {
      type: String, // href link to hosted image? could be stored in mongo ??
    },
  },
  {
    timestamps: true,
  }
);

// CREATE MODEL
const User = mongoose.model('User', userSchema);

// EXPORT AND MAKE AVAILABLE IN INDEX MODEL
module.exports = User;

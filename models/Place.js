const mongoose = require('mongoose');

// - report cards [refs]
// display name
// - potty score
// - change table W
// - change table M
// - freshness score
// - num num score
// - coffee score
// - masked up score
// geo location
const placeSchema = new mongoose.Schema(
  {
    location: {
      name: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
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

const mongoose = require('mongoose');

const reportCardSchema = new mongoose.Schema(
  {
    authorUserId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    place: {
      type: mongoose.Types.ObjectId,
      ref: 'Place',
    },
    // hasPotty: { type: Boolean },
    hasChangingTableW: { type: Boolean },
    hasChangingTableM: { type: Boolean },
    // isClean: { type: Boolean },
    // hasSnacks: { type: Boolean },
    // hasCoffee: { type: Boolean },
    // kidsCanRunAround: { type: Boolean },
    // everyoneMasked: { type: Boolean },
    // comment: String,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Reportcard', reportCardSchema);

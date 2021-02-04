const mongoose = require('mongoose');

const reportcardSchema = new mongoose.Schema(
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
    // comment: String,l
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Reportcard', reportcardSchema);

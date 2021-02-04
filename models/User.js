const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatarImg: {
      type: String, // href link to hosted image? could be stored in mongo ??
    },
    googleId: {
      type: String,
    },
    authoredPlaces: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Place',
      },
    ],
    authoredReportcards: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Reportcard',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Compile schema into model (imported in index)
const User = mongoose.model('User', userSchema);

module.exports = User;

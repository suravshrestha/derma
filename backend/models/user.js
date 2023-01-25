const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  skinResults: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SkinResult",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

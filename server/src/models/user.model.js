import mongoose from "mongoose";

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  createdDate: { type: Date, required: false },
  fullName: { type: String, required: true, min: 3 },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { type: String, required: true, min: 3 },
  real_estates: { type: Array, required: false },
});

const UserModel = mongoose.model("real_estates_users", userSchema);

export { UserModel };

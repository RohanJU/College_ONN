import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v.toString());
      },
      message: (props) => `${props.value} is not a valid 10-digit mobile number`,
    },
  },
  studying_In: {
    type: String,
    required: [true, "Study field is required"],
    trim: true,
  },
  City_In: {
    type: String,
    required: [true, "City is required"],
    trim: true,
  },
}, { timestamps: true });


export default mongoose.models.User || mongoose.model("User", UserSchema);

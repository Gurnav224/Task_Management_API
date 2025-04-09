import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email already register"],
    },
    password: {
      type: String,
      required: true,
      min: [6, "Must be at least 6, got {VALUE}"],
    },
  },
  { timestamps: true }
);


userSchema.pre("save", async function () {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword
  } catch (error) {
    next(error);
  }
});



userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

export  const User = mongoose.model("User", userSchema);

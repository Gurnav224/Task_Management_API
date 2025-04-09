import { User } from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const isExist = await User.findOne({ email });

    if (isExist) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const user = new User({ username, password, email });

    await user.save();
    
    const token = generateToken(user);

    res.status(201).json({ message: "user register successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to signup" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = generateToken(user)

    res.status(200).json({ message: "login successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to login" });
  }
};






export const getUserDetails =  async (req, res) => {
    try {
        const user = await User.findOne({_id:req.user._id}).select("username  email createdAt updatedAt");
        if (!user) {
          return res.status(404).json({ error: "user not found" });
        }
       res.status(200).json({message:'welcome to profile', user})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'failed  to get profile'})
        
    }
}
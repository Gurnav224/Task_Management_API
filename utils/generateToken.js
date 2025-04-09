
import jwt from "jsonwebtoken";


function generateToken(user) {
  const payload = { _id: user._id};

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
}


export default generateToken
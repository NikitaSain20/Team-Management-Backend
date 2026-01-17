import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const Secret = "nikita!23@";
export const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split("")[1];
    }
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to acess the route",
      });
    }
    try {
      const decoded = jwt.verify(token, Secret);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        meassge: "Not Authorized ,token failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error in authnetication",
    });
  }
};

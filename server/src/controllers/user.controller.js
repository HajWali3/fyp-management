import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  let { fullname, regNumber, email, password } = req.body;

  if (
    [fullname, regNumber, email, password].some((field) => {
      field.trim() === "";
    })
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ $or: [{ regNumber }, { email }] });

  if (existedUser) {
    throw new ApiError(
      409,
      " User with same registration number or email already exist"
    );
  }

  const user = await User.create({
    fullname,
    regNumber: regNumber.toLowercase(),
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    " -password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered succesfully"));
});

export { registerUser };

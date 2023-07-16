"use strict;";

const { regisUser, verifyOtp } = require("../services/user.service");

var that = (module.exports = {
  verifyOtp: async (req, res, next) => {
    try {
      const { email, otp } = req.body;

      const { code, elements, message } = await verifyOtp({ email, otp });

      return res.status(code).json({ code, message, elements });
    } catch (error) {
      next(error);
    }
  },
});


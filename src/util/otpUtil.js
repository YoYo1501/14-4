import { GetCurrentDate } from './dateUtil.js';

export const RandomOTP = () => {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const GetExpiredOtp = () => {
  // Get the time expiration for the OTP (5 minutes)
  const now = GetCurrentDate();
  return new Date(now.getTime() + 5 * 60000); // 5 minutes in milliseconds
};

export const IsOtpExpired = (otpExpire) => {
  const now = GetCurrentDate();
  return now > new Date(otpExpire);
};
export const ENDPOINTS = {
  // Patient Auth
  PATIENT: {
    SEND_OTP: '/patient/send-otp',
    VALIDATE_OTP: '/patient/validate-otp',
    GET_PROFILE: '/patient/profile',
  },

  // Candidate Auth
  CANDIDATE: {
    SEND_OTP: '/candidate/send-otp',
    VALIDATE_OTP: '/candidate/validate-otp',
    GET_PROFILE: '/candidate/profile',
  },
} as const;

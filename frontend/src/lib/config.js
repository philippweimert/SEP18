export const APP_CONFIG = {
  LOGIN_PORTAL_URL:
    process.env.REACT_APP_LOGIN_PORTAL_URL ||
    'https://www.smartcloudservices.de/acencia/login/login.do',
  BOOKING_URL:
    process.env.REACT_APP_BOOKING_URL ||
    'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/',
};

export default APP_CONFIG;

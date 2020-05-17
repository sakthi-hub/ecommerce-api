export class AppConstants {
  static TOKEN_EXPIRY_TIME = 86400;
  static OTP_EXPIRE = 100 * 60 * 60;
  static DEFAULT_DATE_FORMAT: string = "YYYY-MM-DD";
  static DEFAULT_DATE_FORMAT_DB: string = "YYYY-MM-DD HH:MM:SS";
  static DEFAULT_DATE_TIME_FORMAT: string = "YYYY-MM-DD HH:MM:SS";
  static RESPONSE_CODES: any = {
    OK: "OK",
    FAIL: "FAIL",
    NOT_FOUND: "NOT_FOUND"
  };

}

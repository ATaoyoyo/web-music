const PRO_BASE_URL = "";
const DEV_BASE_URL = "http://localhost:3000";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEV_BASE_URL : PRO_BASE_URL;

export const TIMEOUT = 5000;

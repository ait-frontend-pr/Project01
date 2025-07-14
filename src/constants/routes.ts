export const ROUTES = {
  HOME: "/",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  GENDER_PREDICTOR: "/gender-predictor",
  AGE_PREDICTOR: "/age-predictor",
  COUNTER: "/counter",
  PONY: "/pony",
  PONY_MY_PONY: "/pony/my-pony", //
  PONY_BUY_PONY: "/pony/buy-pony",//
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCTS:"/products",
  PRODUCTS_ID:"/products/:id",
  ADD_PRODUCT:"/add-product",
  USERS:"/users",
  USERS_ID:"/users/:id",
  ACCOUNT:"/account",
  ACCOUNT_SETTINGS:"/account/settings",
  ACCOUNT_INFO:"/account/info",
  NOT_FOUND: "*",
} as const;

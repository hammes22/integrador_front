import { ERROR_PAGE, SIGNIN_PAGE } from "../constants/routeConstants";

export function goToHomePage(navigate) {
  navigate(SIGNIN_PAGE);
}

export function goToErrorPage(navigate) {
  navigate(ERROR_PAGE);
}

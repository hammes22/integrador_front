import {
  COMMENTS_PAGE,
  ERROR_PAGE,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
} from "../constants/routeConstants";

export function goToHomePage(navigate) {
  navigate(SIGNIN_PAGE);
}

export function goToErrorPage(navigate) {
  navigate(ERROR_PAGE);
}

export function goToSignupPage(navigate) {
  navigate(SIGNUP_PAGE);
}

export function goToSigninPage(navigate) {
  navigate(SIGNIN_PAGE);
}

export function goToComments(navigate, id) {
  navigate(`${COMMENTS_PAGE}/${id}`);
}

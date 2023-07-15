import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  COMMENTS_PAGE,
  ERROR_PAGE,
  SIGNIN_PAGE,
  SIGNUP_PAGE,
} from "../constants/routeConstants";
import SigninPage from "../pages/signin/SigninPage";
import ErrorPage from "../pages/error/ErrorPage";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import HomePage from "../pages/home/HomePage";
import SignupPage from "../pages/signup/SignupPage";
import Comments from "../pages/comments/Comments";

export default function Router() {
  const { auth } = useContext(GlobalContext);
  const { signed } = auth;

  const Private = ({ Item }) => {
    return signed ? <Item /> : <SigninPage />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Private Item={HomePage} />} />
        <Route path={SIGNIN_PAGE} element={<Private Item={HomePage} />} />
        <Route path={SIGNUP_PAGE} element={<SignupPage />} />
        <Route path={`${COMMENTS_PAGE}/:id`} element={<Private Item={Comments} />} />
        <Route path={ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

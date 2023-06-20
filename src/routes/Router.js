import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ERROR_PAGE, SIGNIN_PAGE } from "../constants/routeConstants";
import SigninPage from "../pages/signin/SigninPage";
import ErrorPage from "../pages/error/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SigninPage />} />
        <Route path={SIGNIN_PAGE} element={<SigninPage />} />
        <Route path={ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import { lazy } from "react";
import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import { Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";
import Home from "../pages/Home/Home";
import ContactUsPage from "../pages/ContactUs/ContactUs";

const OmossPage = lazy(() => import("../pages/omoss/omoss"));
const LoginPage = lazy(() => import("../pages/Login/Login.jsx"));
const ScoreBoardPage = lazy(() => import("../pages/ScoreBoard/ScoreBoard"));
const MedlemmarPage = lazy(() => import("../pages/Medlemmar/Medlemmar"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/omoss",
        element: (
          <Suspense fallback={<Spinner />}>
            <OmossPage />
          </Suspense>
        ),
      },
      {
        path: "/loggain",
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/scoreboard",
        element: (
          <Suspense fallback={<Spinner />}>
            <ScoreBoardPage />
          </Suspense>
        ),
      },
      {
        path: "/kontakt",
        element: (
          <Suspense fallback={<Spinner />}>
            <ContactUsPage />
          </Suspense>
        ),
      },
      {
        path: "/medlemmar",
        element: (
          <Suspense fallback={<Spinner />}>
            <MedlemmarPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

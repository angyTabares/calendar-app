import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import LoadingPage from "../calendar/pages/LoadingPage";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  //const authStatus = 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return (
      <LoadingPage message="Cargando" subtext="Por favor, espera un momento" />
    );
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

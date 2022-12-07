import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { onSessionRestore } from "@inrupt/solid-client-authn-browser";
import useAuthenticated from "../hooks/queries/useAuthenticated";
import Login from "../pages/Login";
import Spinner from "../components/Spinner";

const Authentication = ({ children }) => {
  const navigate = useNavigate();
  const { data: authenticated, isLoading } = useAuthenticated();

  onSessionRestore((url) => {
    const path = url.split("http://localhost:3001")[1];
    navigate(path);
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner whiteText />
      </div>
    );
  }

  if (authenticated === false) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return <div>{children}</div>;
};

export default Authentication;

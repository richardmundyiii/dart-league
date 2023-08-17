import { Route, Routes } from "react-router-dom";
import AdminPage from "../AdminPage/AdminPage";

export default function ProtectedPages({ user }) {
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      ) : null}
    </>
  );
}

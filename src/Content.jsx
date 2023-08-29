import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

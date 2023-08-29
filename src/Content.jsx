import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

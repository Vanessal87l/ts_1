import { Routes, Route } from "react-router-dom";
import Normativ from "@/normativ";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Normativ />} />
      <Route
        path="*"
        element={
          <div className="text-2xl p-4 text-red-500">404 - Page Not Found</div>
        }
      />
    </Routes>
  );
}

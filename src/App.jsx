import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Create from "./pages/Create";
import Event from "./pages/Event";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

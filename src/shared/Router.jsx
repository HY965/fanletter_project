import Home from "pages/Home";
import Detail01 from "pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail01 />} />
      </Routes>
    </BrowserRouter>
  );
}

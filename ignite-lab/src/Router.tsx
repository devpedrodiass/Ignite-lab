import { Route, Routes } from "react-router-dom";
import Event from "./pages/Event";
import Login from "./pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/event" element={<Event></Event>}></Route>
      <Route path="/event/lesson/:slug" element={<Event></Event>}></Route>
    </Routes>
  );
}

export default Router;

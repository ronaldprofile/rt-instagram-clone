import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/Layouts/DefaultLayout";
import { Direct } from "./pages/Direct";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/direct/inbox" element={<Direct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InProgress } from "../views/progress/InProgress";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InProgress />} />
      </Routes>
    </BrowserRouter>
  );
};

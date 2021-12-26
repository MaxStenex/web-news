import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegistrationPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

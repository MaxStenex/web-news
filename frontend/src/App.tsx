import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatePostPage, HomePage, LoginPage, RegistrationPage } from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { PrivateRoute } from "./router";

import { Toaster } from "react-hot-toast";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/create-post"
            element={<PrivateRoute component={<CreatePostPage />} />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

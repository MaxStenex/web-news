import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CreatePostPage,
  HomePage,
  LoginPage,
  NewsPage,
  PostPage,
  RegistrationPage,
} from "./pages";
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
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<PostPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

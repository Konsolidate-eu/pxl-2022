import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authentication from "./auth/Authentication";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Authentication>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Authentication>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
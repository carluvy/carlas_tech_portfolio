// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import ProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectsDetail";
import HomePage from "./pages/Home";
import Chat from "./pages/Chat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data is considered "fresh" for 30 seconds
      staleTime: 30000, 
      // If a query fails, retry it 3 times by default
      retry: 3, 
      // How long to wait between retries (Exponential Backoff)
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      // Automatically refetch when the user comes back to the tab
      refetchOnWindowFocus: true,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Nested routes rendered in <Outlet> */}
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} /> */}
          <Route path="projects" element={<ProjectsPage />} />
          // <Route path="projects/:slug" element={<ProjectDetailPage />} />
        </Route>
        {/* <Route path="chat" element={<Chat />} /> */}
      </Routes>

      {/* Global Chat Box */}
        
          <Chat />
      
    </BrowserRouter>
    </QueryClientProvider>
  );
}


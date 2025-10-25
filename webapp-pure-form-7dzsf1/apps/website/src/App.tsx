import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

const Preloader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#181818]">
    <div className="spinner">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumDelay = 1500;
    const startTime = performance.now();
    let timeoutId: number | undefined;

    const concludeLoading = () => {
      window.removeEventListener("load", concludeLoading);
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(minimumDelay - elapsed, 0);
      timeoutId = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      concludeLoading();
    } else {
      window.addEventListener("load", concludeLoading);
    }

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      window.removeEventListener("load", concludeLoading);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ThemeSwitcher />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

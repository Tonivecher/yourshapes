import { useEffect, useState, lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Footer = lazy(() => import("@/components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const routerBasename =
  import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "/"
    ? import.meta.env.BASE_URL.replace(/\/$/, "")
    : "/";

const Preloader = () => (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#080808] via-[#0f0f0f] to-[#181818]"
    data-oid="eer43zd"
  >
    <div className="spinner" data-oid="_z.9stm">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} data-oid="2l0a.hn"></div>
      ))}
    </div>
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      window.removeEventListener("load", handleLoad);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <TooltipProvider data-oid="rxrwrb:">
      {isLoading ? (
        <Preloader data-oid="emwir-n" />
      ) : (
        <SmoothScroll>
          <BrowserRouter basename={routerBasename} data-oid="m5jx87.">
            <Suspense fallback={null} data-oid="9jpwlz_">
              <Routes data-oid="0n9-e.j">
                <Route
                  path="/"
                  element={
                    <>
                      <Home data-oid="40ovcfe" />
                      <Footer data-oid="vej_oor" />
                    </>
                  }
                  data-oid="nya6bf3"
                />

                <Route
                  path="*"
                  element={<ErrorPage data-oid="49s.j6m" />}
                  data-oid="w9h:ql2"
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SmoothScroll>
      )}
    </TooltipProvider>
  );
};

export default App;

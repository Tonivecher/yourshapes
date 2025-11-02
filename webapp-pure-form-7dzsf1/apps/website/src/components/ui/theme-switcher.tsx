import { useState, useEffect } from "react";
import { Moon, Sun, Palette, ChevronLeft, ChevronRight } from "lucide-react";

interface Theme {
  id: string;
  name: string;
  description: string;
  preview: string[];
  order: number;
}

const DEFAULT_THEME = "engineering-graphite";

const themes: Theme[] = [
  {
    id: "default",
    name: "Warm Orange",
    description: "Bright and energetic",
    preview: ["hsl(25, 95%, 53%)", "hsl(33, 100%, 94%)", "hsl(35, 100%, 98%)"],
    order: 1,
  },
  {
    id: "ocean",
    name: "Ocean Blue",
    description: "Cool and refreshing",
    preview: [
      "hsl(200, 98%, 45%)",
      "hsl(195, 100%, 92%)",
      "hsl(195, 100%, 98%)",
    ],

    order: 2,
  },
  {
    id: "forest",
    name: "Forest Green",
    description: "Natural and calming",
    preview: ["hsl(140, 77%, 42%)", "hsl(140, 40%, 92%)", "hsl(140, 40%, 98%)"],
    order: 3,
  },
  {
    id: "sunset",
    name: "Sunset Pink",
    description: "Warm and vibrant",
    preview: [
      "hsl(320, 87%, 68%)",
      "hsl(340, 100%, 92%)",
      "hsl(340, 100%, 98%)",
    ],

    order: 4,
  },
  {
    id: "vintage",
    name: "Vintage Sepia",
    description: "Classic and elegant",
    preview: ["hsl(35, 45%, 55%)", "hsl(45, 25%, 85%)", "hsl(45, 40%, 96%)"],
    order: 5,
  },
  {
    id: "engineering-graphite",
    name: "Инженерный Графит",
    description: "Строгий и минималистичный",
    preview: ["hsl(210, 15%, 45%)", "hsl(190, 15%, 48%)", "hsl(230, 15%, 42%)"],
    order: 0,
  },
].sort((a, b) => a.order - b.order);

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to DEFAULT_THEME
    const savedTheme = localStorage.getItem("theme") || DEFAULT_THEME;
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedVisible = localStorage.getItem("themeSwitcherVisible");

    setCurrentTheme(savedTheme);
    setIsDark(savedDarkMode);
    // Show by default (only hide if explicitly set to 'false')
    setIsVisible(savedVisible !== "false");

    applyTheme(savedTheme, savedDarkMode);
  }, []);

  const applyTheme = (theme: string, dark: boolean) => {
    const root = document.documentElement;

    // Remove existing theme classes
    root.removeAttribute("data-theme");

    // Apply new theme
    root.setAttribute("data-theme", theme);

    // Apply dark mode
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save preferences
    localStorage.setItem("theme", theme);
    localStorage.setItem("darkMode", dark.toString());
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme, isDark);
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyTheme(currentTheme, newDarkMode);
  };

  const toggleVisibility = () => {
    const newVisible = !isVisible;
    setIsVisible(newVisible);
    setIsOpen(false); // Close theme panel when hiding
    localStorage.setItem("themeSwitcherVisible", newVisible.toString());
  };

  return (
    <div className="fixed bottom-6 left-2 z-[9999]" data-oid="0kockw4">
      {/* Main theme switcher - compact vertical buttons */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-full opacity-0 pointer-events-none"
        }`}
        data-oid="aouzv1v"
      >
        <div className="flex flex-col gap-2" data-oid="74m7o:z">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="group p-3 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:bg-card"
            aria-label="Toggle dark mode"
            data-oid="s_xzz04"
          >
            {isDark ? (
              <Sun
                className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12"
                data-oid="irzm241"
              />
            ) : (
              <Moon
                className="w-5 h-5 text-primary transition-transform duration-300 group-hover:-rotate-12"
                data-oid="7:qrvc2"
              />
            )}
          </button>

          {/* Theme selector toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group p-3 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:bg-card"
            aria-label="Change theme"
            data-oid="0mxjht5"
          >
            <Palette
              className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12"
              data-oid="ri_bd5-"
            />
          </button>

          {/* Hide button */}
          <button
            onClick={toggleVisibility}
            className="group p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:bg-card"
            aria-label="Hide theme switcher"
            data-oid="xd-d1f7"
          >
            <ChevronLeft
              className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:-translate-x-0.5"
              data-oid="10g1e1e"
            />
          </button>
        </div>

        {/* Theme selector dropdown */}
        {isOpen && (
          <div
            className="absolute bottom-0 left-16 w-72 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-left-2 duration-300"
            data-oid="-f:hhja"
          >
            <h3
              className="text-sm font-medium text-foreground mb-3 flex items-center gap-2"
              data-oid="_iv1lg8"
            >
              <Palette className="w-4 h-4 text-primary" data-oid="1t__v-y" />
              Choose Theme
            </h3>

            <div
              className="grid gap-2 max-h-64 overflow-y-auto theme-dropdown"
              data-oid="ma:_j1i"
            >
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-muted/50 ${
                    currentTheme === theme.id
                      ? "bg-primary/10 border border-primary/30 shadow-sm"
                      : "bg-transparent border border-transparent hover:border-border/30"
                  }`}
                  data-oid="j66dp2l"
                >
                  {/* Color preview */}
                  <div className="flex gap-1.5" data-oid="18j27yf">
                    {theme.preview.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: color }}
                        data-oid="qy-mgdj"
                      />
                    ))}
                  </div>

                  {/* Theme info */}
                  <div className="flex-1 text-left" data-oid="04vdu3o">
                    <div
                      className="text-sm font-medium text-foreground"
                      data-oid="h.rd:n0"
                    >
                      {theme.name}
                    </div>
                    <div
                      className="text-xs text-muted-foreground"
                      data-oid="m_ueyxp"
                    >
                      {theme.description}
                    </div>
                  </div>

                  {/* Selected indicator */}
                  {currentTheme === theme.id && (
                    <div
                      className="w-2 h-2 rounded-full bg-primary animate-pulse"
                      data-oid="_1.6o.r"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Backdrop for theme dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[-1]"
            onClick={() => setIsOpen(false)}
            data-oid="d5__wgw"
          />
        )}
      </div>

      {/* Show button (vertical text tab) */}
      <div
        className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
          !isVisible
            ? "transform translate-x-0 opacity-100"
            : "transform -translate-x-full opacity-0 pointer-events-none"
        }`}
        data-oid="hj.zf39"
      >
        <button
          onClick={toggleVisibility}
          className="group bg-card/90 backdrop-blur-md border border-border/50 border-l-0 rounded-r-xl shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:bg-card flex items-center justify-center py-6 px-3"
          aria-label="Show theme switcher"
          data-oid="a2yphv2"
        >
          <div className="flex flex-col items-center gap-2" data-oid="f:bj-wj">
            <ChevronRight
              className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
              data-oid="ol6lgn_"
            />

            <div
              className="text-xs font-medium text-muted-foreground tracking-wider"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
              data-oid="mqifx:4"
            >
              THEMES
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

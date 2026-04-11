import { Link } from "react-router-dom";
import { MessageSquare, Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 ">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group ">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform bg-blue-900">
            <MessageSquare size={18}  />
          </div>
          <span className="font-semibold text-lg tracking-tight">BotForge</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground hover:[&>a]:text-foreground transition-colors">
            <a href="/features">Features</a>
            <a href="#themes">Themes</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/build"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium bg-blue-900 hover:bg-primary-hover transition-colors"
            >
              Start Building
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

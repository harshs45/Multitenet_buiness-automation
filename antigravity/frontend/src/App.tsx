import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Landing from "./pages/Landing";
import Builder from "./pages/Builder";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="botforge-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/build" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

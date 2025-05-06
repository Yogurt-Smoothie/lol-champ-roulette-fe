import { ThemeProvider } from "@/shared/components/theme-provider";
import Home from "@/app/Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

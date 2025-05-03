import { ThemeProvider } from "@/shared/components/theme-provider";
import { Button } from "@/shared/components/ui/button";
import { ModeToggle } from "@/shared/components/mode-toggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

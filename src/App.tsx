import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/shared/components/theme-provider";
import Home from "@/app/Home";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

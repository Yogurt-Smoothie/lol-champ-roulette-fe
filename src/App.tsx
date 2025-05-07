import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/shared/components/theme-provider";
import Home from "@/app/Home";
import { useGetPatchVersion } from "./shared/hooks/usePatchVersion";

function AppContent() {
  useGetPatchVersion();

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;

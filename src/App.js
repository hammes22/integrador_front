import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStateProvider } from "./context/globalState";

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStateProvider>
          <Router />
        </GlobalStateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

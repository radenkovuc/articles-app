import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StateProvider } from "@/state";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </QueryClientProvider>
  );
};

export default App;

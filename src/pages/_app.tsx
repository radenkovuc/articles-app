import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
};

export default App;

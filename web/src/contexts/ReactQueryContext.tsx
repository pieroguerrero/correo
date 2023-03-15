import { QueryClient, QueryClientProvider } from "react-query";

interface IReactQueryProvider {
  children: JSX.Element;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

/**
 * Provides to its children the context to work with the React Query functionalities.
 * @returns
 */
export default function ReactQueryProvider({ children }: IReactQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

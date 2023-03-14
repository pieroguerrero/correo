import { QueryClient, QueryClientProvider } from "react-query";

interface IReactQueryProvider {
  children: JSX.Element;
}

const queryClient = new QueryClient();

/**
 * Provides to its children the context to work with the React Query functionalities.
 * @returns
 */
export default function ReactQueryProvider({ children }: IReactQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

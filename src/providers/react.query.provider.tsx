"use client";

import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 1000 * 60 * 60 * 1, // 1 hours
      },
    },
  });

  const sessionStoragePersister = createSyncStoragePersister({
    storage: typeof window !== "undefined" ? window.sessionStorage : undefined,
  });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: sessionStoragePersister,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            // Decide which queries to persist (return true to persist)
            return query.queryKey[0] !== "secret-data"; // example: don't persist queries with this key
          },
        },
      }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default ReactQueryProvider;

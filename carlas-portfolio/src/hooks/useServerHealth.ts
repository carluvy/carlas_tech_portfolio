import { useQuery } from '@tanstack/react-query';

const fetchHealth = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/health');
  if (!response.ok) {
    throw new Error('Server is down');
  }
  return response.json();
};

export function useServerHealth() {
  return useQuery({
    queryKey: ['serverHealth'],
    queryFn: fetchHealth,
    // --- Initial Initialization & Polling ---
    refetchInterval: 5000, // Check every 5 seconds while healthy
    
    // --- Retry Logic for Failures ---
    retry: true, // Retry indefinitely if server is down
    retryDelay: (attempt) => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000), // Exponential backoff maxing at 30s
    
    // Ensure it keeps checking even if the user switches tabs
    refetchIntervalInBackground: true,
  });
}
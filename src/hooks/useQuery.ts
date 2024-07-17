import axiosInstance from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export type UseQueryGetParams = {
  apiEndpointUrl: string;
  queryKey: string;
};

export default function useQueryGet({
  apiEndpointUrl,
  queryKey,
}: UseQueryGetParams) {
  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.get(apiEndpointUrl),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    // refetchInterval: 60000, // Refetch every 60 seconds
  });

  return getQuery;
}

import axiosInstance from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export type UseQueryGetParams = {
  apiEndpointUrl: string;
  searchQuery: string | null;
  queryKey: string;
};

export default function useQueryBySearchQuery({
  apiEndpointUrl,
  searchQuery,
  queryKey,
}: UseQueryGetParams) {
  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.get(`${apiEndpointUrl}/${searchQuery}`),
    enabled: !!searchQuery,
  });

  return getQuery;
}

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
  });

  return getQuery;
}

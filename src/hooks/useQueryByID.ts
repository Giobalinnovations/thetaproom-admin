import axiosInstance from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export type UseQueryGetParams = {
  apiEndpointUrl: string;
  formId: string | null;
  queryKey: string;
};

export default function useQueryGetByID({
  apiEndpointUrl,
  formId,
  queryKey,
}: UseQueryGetParams) {
  const getQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosInstance.get(`${apiEndpointUrl}/${formId}`),
    enabled: !!formId,
  });

  return getQuery;
}

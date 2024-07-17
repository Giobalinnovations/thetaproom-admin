import axiosInstance from '@/services/api';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

type UseUpdateProps = {
  apiEndpointUrl: string;
  updateId: string;
  queryKey?: string[];
  successMessage?: string;
  routeUrl?: string;
};

export default function useUpdate({
  apiEndpointUrl,
  updateId,
  queryKey,
  successMessage,
  routeUrl,
}: UseUpdateProps) {
  const { toast } = useToast();
  // const [queryClient] = useState(() => new QueryClient());
  const queryClient = useQueryClient();
  const router = useRouter();
  const updateMutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.put(`${apiEndpointUrl}/${updateId}`, formData);
    },
    onSuccess: data => {
      // console.log(data);
      toast({
        title: successMessage ?? 'form submitted successfully',
        variant: 'success',
      });
      // console.log(variable);
      // queryClient.invalidateQueries({ queryKey: queryKey });
      queryClient.invalidateQueries();

      // queryClient.invalidateQueries({ queryKey: [queryKey] });
      // queryClient.setQueryData(['indiaVisaApplication', { variable }], data);

      router.refresh();

      if (routeUrl) {
        router.push(`${routeUrl}`);
      }
    },
    onError: (error: any) => {
      toast({
        title:
          'An error occurred while processing your request. Please try again later.',
        variant: 'error',
      });
    },
  });

  return updateMutation;
}

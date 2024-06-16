import axiosInstance from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast, useToast } from '@/components/ui/use-toast';

type UsePostProps = {
  apiEndpointUrl: string;
  routeUrl?: string | boolean;
  queryKey: string;
  successMessage?: string;
};

export default function usePost({
  apiEndpointUrl,
  routeUrl,
  queryKey,
  successMessage,
}: UsePostProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.post(apiEndpointUrl, formData);
    },
    onSuccess: data => {
      console.log(data);

      toast({
        title: successMessage ?? 'form submitted successfully',
        variant: 'success',
      });

      queryClient.invalidateQueries({ queryKey: [queryKey] });
      if (routeUrl) {
        router.push(`${routeUrl}`);
      }
    },
    onError: (error: any) => {
      console.error(error.message);

      toast({
        title:
          'An error occurred while processing your request. Please try again later.',
        variant: 'error',
      });
    },
  });

  return mutation;
}

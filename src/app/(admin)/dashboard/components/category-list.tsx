import { SelectItem } from '@/components/ui/select';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';

type CategoryType = {
  _id: string;
  name: string;
};

export default function CategoryList({
  notAvailableMessage,
}: {
  notAvailableMessage: string;
}) {
  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: apiEndpoint.CATEGORY,
    queryKey: 'getAllCategory',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const category = data?.data?.data ?? [];
    console.log(category);
    return (
      <>
        {category?.length > 0 ? (
          category.map((category: CategoryType) => (
            <SelectItem
              key={category.name}
              value={category._id}
              className="capitalize"
            >
              {category.name}
            </SelectItem>
          ))
        ) : (
          <SelectItem value="">
            <p className="text-sm text-gray-500">
              {notAvailableMessage ?? ''} not available
            </p>
          </SelectItem>
        )}
      </>
    );
  }
}

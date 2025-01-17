import { SelectItem } from '@/components/ui/select';
import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import Link from 'next/link';

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
          <Link
            href="/dashboard/category/add"
            className="text-sm text-gray-500"
          >
            {notAvailableMessage ?? ''}
          </Link>
        )}
      </>
    );
  }
}

'use client';

import useQueryGet from '@/hooks/useQuery';
import apiEndpoint from '@/services/apiEndpoint';
import { ListItem } from './navigation';

export type CategoryProps = { name: string; _id: string };

export default function NavigationListCategory() {
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
        {category.length > 0
          ? category.map((item: CategoryProps) => (
              <ListItem
                key={item._id}
                title={item.name}
                href={`/collections/${item.name}`}
                className="capitalize"
              ></ListItem>
            ))
          : null}
      </>
    );
  }
}

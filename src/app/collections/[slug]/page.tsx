'use client';

import CollectionsBanner from './collections-banner';
import CollectionCard from './collectionscard';
import { notFound } from 'next/navigation';
import apiEndpoint from '@/services/apiEndpoint';
import useQueryGet from '@/hooks/useQuery';

export type ProductProps = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  imageCover: string;
  images: string[];
};

export type CategoryProps = {
  _id: string;
  name: string;
  product: ProductProps[];
};

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: `${apiEndpoint.CATEGORY}/${params.slug}`,
    queryKey: 'getAllCategoryById',
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return notFound();
  }
  if (isSuccess) {
    const category = data?.data?.data ?? [];

    // const breadcrumbData = product.summary
    //   ? [
    //       {
    //         name: product?.summary ?? '',
    //         href: `/${product?.slug ?? '/'}`,
    //       },
    //     ]
    //   : [];

    return (
      <>
        <CollectionsBanner slug={params.slug} />
        <div className="container py-8 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {category?.products?.length > 0
            ? category.products.map((product: ProductProps) => (
                <CollectionCard
                  key={product._id ?? ''}
                  img={product?.imageCover ?? ''}
                  altimg={product.name ?? ''}
                  producttitle={product?.name ?? ''}
                  // discountedprice={product?.price ?? ''}
                  // price={category.price}
                  slug={`/collections/${params.slug}/products/${
                    product?.slug ?? '#'
                  }`}
                />
              ))
            : null}
        </div>
      </>
    );
  }
}

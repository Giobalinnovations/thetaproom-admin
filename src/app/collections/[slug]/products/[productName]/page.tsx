'use client';
import Link from 'next/link';
import ProductDescription from './product-description';
import CollectionCard from '../../collectionscard';
import { getPostBySlug, rootDirectoryPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import RelatedItem from './related-item';
import apiEndpoint from '@/services/apiEndpoint';
import useQueryGet from '@/hooks/useQuery';
import { ProductProps } from '../../page';

export default function Page({
  params,
}: {
  params: { productName: string; slug: string };
}) {
  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: `${apiEndpoint.PRODUCTS}/${params.productName}`,
    queryKey: 'getAllProductById',
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return notFound();
  }
  if (isSuccess) {
    const product: ProductProps = data?.data?.data ?? [];

    // const breadcrumbData = product.summary
    //   ? [
    //       {
    //         name: product?.summary ?? '',
    //         href: `/${product?.slug ?? '/'}`,
    //       },
    //     ]
    //   : [];
    console.log(product);
    console.log(params.productName);
    return (
      <>
        <div className="py-4 container ">
          <div>
            <Link href={'/'}>Home </Link>/ {params.slug} / {params.productName}
          </div>

          <div className="">
            <ProductDescription
              img={product?.imageCover ?? ''}
              producttitle={product?.name ?? ''}
              // discountedprice={989}
              // price={876}
              content={product?.description ?? ''}
              images={product?.images ?? []}
            />
          </div>
          {/* <div className="text-xl text-center max-sm:mt-[200px] font-bold pb-2">Related Link</div> */}
          {/* <RelatedItem /> */}
        </div>
      </>
    );
  }
}

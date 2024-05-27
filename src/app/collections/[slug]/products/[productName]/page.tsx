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

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug, rootDirectoryPosts);
  return { meta, content };
};

export default async function Page({
  params,
}: {
  params: { productName: string; slug: string };  
}) {
  const { meta, content }: any = await getPageContent(params.productName);
  if (!content) notFound();

  return (
    <>
      <div className="py-4 container ">
        <div>
          <Link href={'/'}>Home </Link>/ {params.slug} / {params.productName}
        </div>

        <div className="h-[100vh]">
          <ProductDescription
            img={meta.img ?? ''}
            producttitle={meta.productName ?? ''}
            discountedprice={989}
            price={876}
            content={content ?? ''}
            images={meta.images}
          />
        </div>
        <div className="text-xl text-center max-sm:mt-[200px] font-bold pb-2">Related Link</div>
        <RelatedItem />
      </div>
    </>
  );
}
